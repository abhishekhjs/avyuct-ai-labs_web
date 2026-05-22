const puppeteer = require('puppeteer');
const path = require('path');

const SCREENSHOTS_DIR = path.join(__dirname, 'test-screenshots');
const fs = require('fs');
if (!fs.existsSync(SCREENSHOTS_DIR)) fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });

const PAGES = [
  { name: 'home', url: 'http://localhost:3000' },
  { name: 'solutions', url: 'http://localhost:3000/solutions' },
  { name: 'about', url: 'http://localhost:3000/about' },
  { name: 'contact', url: 'http://localhost:3000/contact' },
];

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 375, height: 812 },
];

async function run() {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });

  for (const page of PAGES) {
    for (const vp of VIEWPORTS) {
      const tab = await browser.newPage();
      await tab.setViewport({ width: vp.width, height: vp.height });
      
      console.log(`Testing: ${page.name} @ ${vp.name} (${vp.width}x${vp.height})`);
      
      try {
        await tab.goto(page.url, { waitUntil: 'networkidle0', timeout: 15000 });
        // Wait for animations to init
        await new Promise(r => setTimeout(r, 2000));
        
        // Check for JS errors
        const errors = [];
        tab.on('pageerror', (err) => errors.push(err.message));
        
        // Take above-fold screenshot
        await tab.screenshot({
          path: path.join(SCREENSHOTS_DIR, `${page.name}_${vp.name}_above.png`),
          clip: { x: 0, y: 0, width: vp.width, height: vp.height }
        });
        
        // Take full page screenshot
        await tab.screenshot({
          path: path.join(SCREENSHOTS_DIR, `${page.name}_${vp.name}_full.png`),
          fullPage: true,
        });
        
        // Check content visibility
        const bodyText = await tab.evaluate(() => document.body.innerText.substring(0, 200));
        console.log(`  Content preview: ${bodyText.substring(0, 80).replace(/\n/g, ' ')}...`);
        
        // Check for layout overflow
        const hasHorizontalScroll = await tab.evaluate(() => {
          return document.documentElement.scrollWidth > document.documentElement.clientWidth;
        });
        if (hasHorizontalScroll) {
          console.log(`  ⚠️ HORIZONTAL SCROLL DETECTED at ${vp.name}`);
        } else {
          console.log(`  ✅ No horizontal overflow`);
        }
        
        // Check for elements extending beyond viewport
        const overflowingElements = await tab.evaluate((vpWidth) => {
          const all = document.querySelectorAll('*');
          const overflowing = [];
          for (const el of all) {
            const rect = el.getBoundingClientRect();
            if (rect.right > vpWidth + 5 && el.tagName !== 'HTML' && el.tagName !== 'BODY') {
              overflowing.push({
                tag: el.tagName,
                class: el.className?.substring?.(0, 60) || '',
                right: Math.round(rect.right),
                width: Math.round(rect.width),
              });
            }
          }
          return overflowing.slice(0, 5);
        }, vp.width);
        
        if (overflowingElements.length > 0) {
          console.log(`  ⚠️ Elements extending beyond viewport:`);
          overflowingElements.forEach(el => {
            console.log(`    ${el.tag}.${el.class.substring(0,40)} right:${el.right} width:${el.width}`);
          });
        }
        
        // Check accessibility - heading structure
        if (vp.name === 'desktop') {
          const headings = await tab.evaluate(() => {
            return [...document.querySelectorAll('h1, h2, h3')].map(h => ({
              tag: h.tagName,
              text: h.textContent.trim().substring(0, 50),
            }));
          });
          console.log(`  Heading structure: ${headings.length} headings found`);
          const h1Count = headings.filter(h => h.tag === 'H1').length;
          if (h1Count !== 1) {
            console.log(`  ⚠️ Found ${h1Count} H1 tags (expected 1)`);
          } else {
            console.log(`  ✅ Single H1: "${headings.find(h => h.tag === 'H1').text}"`);
          }
        }
        
        // Check for broken images/resources
        if (vp.name === 'desktop') {
          const brokenImages = await tab.evaluate(() => {
            return [...document.querySelectorAll('img')].filter(img => !img.complete || img.naturalWidth === 0).map(img => img.src);
          });
          if (brokenImages.length > 0) {
            console.log(`  ⚠️ Broken images: ${brokenImages.join(', ')}`);
          } else {
            console.log(`  ✅ No broken images`);
          }
        }
        
        if (errors.length > 0) {
          console.log(`  ⚠️ JS errors: ${errors.join('; ')}`);
        } else {
          console.log(`  ✅ No JS errors`);
        }
        
      } catch (err) {
        console.log(`  ❌ ERROR: ${err.message}`);
      }
      
      await tab.close();
    }
  }
  
  // Animation performance test on home page
  console.log('\n--- Animation Performance Test (Home) ---');
  const perfTab = await browser.newPage();
  await perfTab.setViewport({ width: 1440, height: 900 });
  
  // Enable performance metrics
  const client = await perfTab.createCDPSession();
  await client.send('Performance.enable');
  
  await perfTab.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 15000 });
  await new Promise(r => setTimeout(r, 1000));
  
  // Scroll through the page to trigger ScrollTrigger animations
  const pageHeight = await perfTab.evaluate(() => document.documentElement.scrollHeight);
  const scrollSteps = 10;
  const stepSize = pageHeight / scrollSteps;
  
  for (let i = 0; i < scrollSteps; i++) {
    await perfTab.evaluate((y) => window.scrollTo(0, y), stepSize * (i + 1));
    await new Promise(r => setTimeout(r, 300));
  }
  
  // Get performance metrics
  const metrics = await client.send('Performance.getMetrics');
  const relevantMetrics = metrics.metrics.filter(m => 
    ['JSHeapUsedSize', 'JSHeapTotalSize', 'LayoutCount', 'RecalcStyleCount', 'TaskDuration'].includes(m.name)
  );
  
  console.log('Performance metrics after full scroll:');
  for (const m of relevantMetrics) {
    let value = m.value;
    if (m.name.includes('Heap')) value = `${(value / 1024 / 1024).toFixed(1)}MB`;
    else if (m.name === 'TaskDuration') value = `${value.toFixed(2)}s`;
    else value = `${Math.round(value)}`;
    console.log(`  ${m.name}: ${value}`);
  }
  
  // Check for jank - long tasks
  const longTasks = await perfTab.evaluate(() => {
    return new Promise((resolve) => {
      const observer = new PerformanceObserver((list) => {
        resolve(list.getEntries().map(e => ({ duration: e.duration })));
      });
      try {
        observer.observe({ type: 'longtask', buffered: true });
        setTimeout(() => resolve([]), 1000);
      } catch {
        resolve([]);
      }
    });
  });
  
  if (longTasks.length > 0) {
    console.log(`  ⚠️ ${longTasks.length} long tasks detected (>50ms)`);
    longTasks.forEach((t, i) => console.log(`    Task ${i+1}: ${t.duration.toFixed(1)}ms`));
  } else {
    console.log('  ✅ No long tasks detected');
  }
  
  await perfTab.close();
  
  // Check navbar behavior
  console.log('\n--- Navbar Behavior Test ---');
  const navTab = await browser.newPage();
  await navTab.setViewport({ width: 1440, height: 900 });
  await navTab.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 15000 });
  await new Promise(r => setTimeout(r, 1000));
  
  // Check nav links count
  const navLinks = await navTab.evaluate(() => {
    const header = document.querySelector('header') || document.querySelector('nav');
    if (!header) return { found: false };
    const links = [...header.querySelectorAll('a')];
    return { found: true, count: links.length, texts: links.map(a => a.textContent.trim()) };
  });
  console.log(`  Nav found: ${navLinks.found}, Links: ${navLinks.count}`);
  console.log(`  Link texts: ${navLinks.texts?.join(' | ')}`);
  
  // Test navigation
  const navResult = await navTab.evaluate(() => {
    const solutionsLink = [...document.querySelectorAll('a')].find(a => a.href.includes('/solutions'));
    if (solutionsLink) {
      solutionsLink.click();
      return 'Clicked solutions link';
    }
    return 'Solutions link not found';
  });
  console.log(`  Nav click test: ${navResult}`);
  await new Promise(r => setTimeout(r, 2000));
  const afterNavUrl = navTab.url();
  console.log(`  After nav: ${afterNavUrl}`);
  console.log(`  ✅ Navigation works: ${afterNavUrl.includes('/solutions')}`);
  
  await navTab.close();

  // Mobile menu test
  console.log('\n--- Mobile Menu Test ---');
  const mobileTab = await browser.newPage();
  await mobileTab.setViewport({ width: 375, height: 812 });
  await mobileTab.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 15000 });
  await new Promise(r => setTimeout(r, 1000));
  
  const hamburger = await mobileTab.evaluate(() => {
    // Look for hamburger button
    const buttons = [...document.querySelectorAll('button')];
    const hamburgerBtn = buttons.find(b => b.getAttribute('aria-label')?.includes('menu') || b.className?.includes('hamburger') || b.querySelector('svg'));
    if (hamburgerBtn) {
      hamburgerBtn.click();
      return 'Hamburger clicked';
    }
    return 'Hamburger not found';
  });
  console.log(`  ${hamburger}`);
  await new Promise(r => setTimeout(r, 1000));
  
  // Check if mobile menu overlay is visible
  const menuVisible = await mobileTab.evaluate(() => {
    const overlay = document.querySelector('[class*="fixed"]');
    if (overlay) {
      const style = window.getComputedStyle(overlay);
      return `Overlay found, opacity: ${style.opacity}, visibility: ${style.visibility}`;
    }
    return 'No overlay found';
  });
  console.log(`  ${menuVisible}`);
  
  await mobileTab.close();
  
  await browser.close();
  
  console.log('\n--- Screenshot files saved ---');
  const files = fs.readdirSync(SCREENSHOTS_DIR);
  files.forEach(f => console.log(`  ${f} (${(fs.statSync(path.join(SCREENSHOTS_DIR, f)).size / 1024).toFixed(0)}KB)`));
  
  console.log('\n✅ All tests complete!');
}

run().catch(err => {
  console.error('Fatal error:', err.message);
  process.exit(1);
});
