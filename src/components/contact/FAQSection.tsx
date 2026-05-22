import { FAQ_DATA } from "@/lib/constants";
import FAQAccordion from "@/components/ui/FAQAccordion";

export default function FAQSection() {
  return (
    <section className="section-padding">
      <div className="container-narrow max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="label-text mb-4">FAQ</p>
          <h2 className="heading-lg">Frequently Asked Questions</h2>
        </div>
        <FAQAccordion items={[...FAQ_DATA]} />
      </div>
    </section>
  );
}
