import type { Metadata } from "next";
import SolutionsHero from "@/components/solutions/SolutionsHero";
import WorkflowSection from "@/components/home/WorkflowSection";
import StrokeDetection from "@/components/solutions/StrokeDetection";
import WorldModel from "@/components/solutions/WorldModel";
import DeploymentArch from "@/components/solutions/DeploymentArch";
import ResearchPartners from "@/components/solutions/ResearchPartners";
import SolutionsCTA from "@/components/solutions/SolutionsCTA";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Precision AI across the vascular spectrum. From emergency stroke triage to predictive vascular intelligence.",
};

export default function SolutionsPage() {
  return (
    <>
      <SolutionsHero />
      <WorkflowSection />
      <StrokeDetection />
      <WorldModel />
      <DeploymentArch />
      <ResearchPartners />
      <SolutionsCTA />
    </>
  );
}
