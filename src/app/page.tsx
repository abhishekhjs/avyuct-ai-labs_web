import HeroSection from "@/components/home/HeroSection";
import ProblemSection from "@/components/home/ProblemSection";
import SolutionSection from "@/components/home/SolutionSection";
import ClinicalValidation from "@/components/home/ClinicalValidation";
import UseCasesSection from "@/components/home/UseCasesSection";
import WorkflowSection from "@/components/home/WorkflowSection";
import TrustSignals from "@/components/home/TrustSignals";
import CTABlock from "@/components/home/CTABlock";
import ScrollSequence from "@/components/ui/ScrollSequence";

export default function Home() {
  return (
    <main id="home-main" className="relative w-full">
      <ScrollSequence />
      <HeroSection />
      <div id="problem-section"><ProblemSection /></div>
      <div id="solution-section"><SolutionSection /></div>
      <div id="clinical-validation"><ClinicalValidation /></div>
      <div id="use-cases-section"><UseCasesSection /></div>
      <div id="workflow-section"><WorkflowSection /></div>
      <div id="trust-signals"><TrustSignals /></div>
      <div id="cta-block"><CTABlock /></div>
    </main>
  );
}
