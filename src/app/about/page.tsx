import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import ChallengeSection from "@/components/about/ChallengeSection";
import ApproachSection from "@/components/about/ApproachSection";
import LeadershipSection from "@/components/about/LeadershipSection";
import LocationsSection from "@/components/about/LocationsSection";
import PatentsSection from "@/components/about/PatentsSection";
import PressSection from "@/components/about/PressSection";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Avyuct AI Labs builds precision AI for vascular health. US-based innovation, UAE sovereign AI development.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <ChallengeSection />
      <ApproachSection />
      <LeadershipSection />
      <LocationsSection />
      <PatentsSection />
      <PressSection />
      <AboutCTA />
    </>
  );
}
