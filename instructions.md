# Avyuct AI Labs Web - Development Instructions

Welcome to the **Avyuct AI Labs Web** repository! To maintain premium aesthetics, high performance, and bug-free animations, always adhere to the fundamental rules and architectures below.

---

## 1. Next.js App Router Architecture (The "Anti-Slop" Principle)
To achieve extreme performance and optimal SEO, follow the Server-first architecture:
*   **Default to Server Components**: Keep routes (like `app/page.tsx`) as **Server Components**. Let the server fetch data, compile static content, and stream the skeleton.
*   **Granular Client Components**: Only mark a file with `"use client";` at the very top if it strictly requires:
    *   Interactive events (`onClick`, `onHover`, `onScroll`).
    *   State hooks (`useState`, `useReducer`).
    *   Lifecycle hooks and refs (`useEffect`, `useLayoutEffect`, `useRef`).
    *   Animations using GSAP or other browser-specific runtimes.
*   **Composition Pattern**: Pass static text and heavy media as standard React children or props from Server Components into Client Components. Avoid converting layout wrappers into client components.

---

## 2. Animation Rules (GSAP & ScrollTrigger)
To keep animations ultra-smooth and resource-friendly:
*   **Always use the `useGSAP()` Hook**: Never use standard React `useEffect` or `useLayoutEffect` for GSAP animations. Import `useGSAP` from `@gsap/react`. This ensures that animations are cleaned up automatically when components unmount, avoiding strict-mode double-rendering memory leaks.
*   **Animation Scope**: Always scope your selectors using refs to prevent animations from accidentally targeting elements in other components.
    ```tsx
    const container = useRef(null);
    useGSAP(() => {
      // GSAP is scoped to target only elements inside the 'container' ref
      gsap.from(".anim-target", { y: 50, opacity: 0 });
    }, { scope: container });
    ```
*   **ScrollTrigger Pinning & Scrubbing**:
    *   Always register `ScrollTrigger` safely on the client side:
        ```typescript
        if (typeof window !== "undefined") {
          gsap.registerPlugin(ScrollTrigger);
        }
        ```
    *   Use `scrub: 1` or `scrub: true` for smooth scroll-tied transformations.
    *   Provide explicit `start` and `end` triggers to maintain responsive positioning.
*   **Premium Easing**: Never use standard linear easings unless creating a continuous carousel. Always use high-end custom eases for a premium cinematic feel:
    *   *Entrance Reveal*: `ease: "power4.out"` (rapid start, extremely gradual slow down).
    *   *Heavy Transitions*: `ease: "expo.out"`.
    *   *Staggers*: Add stagger durations of `0.05` to `0.15` seconds to elements for organic transitions.

---

## 3. Smooth Scroll (Lenis) Guidelines
*   **Wrap via Root Layout**: All page-level smooth scrolling is managed by the client-side `SmoothScrollProvider.tsx`. Let the entire body children flow through this provider.
*   **React 19 Typings Compatibility**: If you see a TypeScript error stating that `React.ReactNode` cannot be assigned to Lenis's `ReactNode` (due to React 18/19 mismatch in legacy packages), simply cast the child nodes as any:
    ```tsx
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
      {children as any}
    </ReactLenis>
    ```

---

## 4. Design & Styling (Premium & Dark Mode Preferential)
To ensure the site looks modern, polished, and expensive at first glance:
*   **Dark Mode Defaults**: Use deep rich dark backgrounds (`bg-neutral-950` or custom HSL gradients) and clean neutral text (`text-neutral-50` or `text-neutral-200`). Avoid using absolute pure black (`#000000`) or pure white (`#ffffff`) for body elements to avoid eye strain; opt for rich near-blacks.
*   **Large Typography**: Make headers bold, prominent, and expressive. Use responsive sizes:
    *   *Main Hero Titles*: `text-[4rem] md:text-[8rem] font-black tracking-tighter` with tight line heights (`leading-none` or `leading-tight`).
*   **Fluid Transitions**: Every hover effect, slide-out, or dynamic element should have micro-interactions (e.g., `transition-all duration-300 ease-out`).
*   **Image Assets**: Always use premium high-quality mockups or immersive photos (e.g., curated Unsplash sources or custom generated renders).

---

## 5. Integrating Online React Components
When copying components found online:
1.  Verify if they use React Hooks (requires `"use client";`).
2.  Install any needed external libraries via `npm install --legacy-peer-deps` (if they have React version conflicts).
3.  Add them inside the `src/components/` directory (categorized under logical subfolders like `ui/`, `landing/`, or `providers/`) to keep the project clean.
