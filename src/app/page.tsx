import HeroSection from "@/components/home/HeroSection";
import ProblemSection from "@/components/home/ProblemSection";
import SolutionSection from "@/components/home/SolutionSection";
import NeurovascularSection from "@/components/home/NeurovascularSection";
import ClinicalValidation from "@/components/home/ClinicalValidation";
import Testimonials from "@/components/home/Testimonials";
import SolutionsCTA from "@/components/solutions/SolutionsCTA";

export default function Home() {
  return (
    <main id="home-main" className="relative w-full">
      <HeroSection />
      <div id="problem-section"><ProblemSection /></div>
      <div id="solution-section"><SolutionSection /></div>
      <div id="neurovascular-section"><NeurovascularSection /></div>
      {/* <div id="clinical-validation"><ClinicalValidation /></div> */}
      {/* <div id="testimonials"><Testimonials /></div> */}
      <div id="cta-block"><SolutionsCTA /></div>
    </main>
  );
}
