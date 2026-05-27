import { FAQ_DATA } from "@/lib/constants";
import FAQAccordion from "@/components/ui/FAQAccordion";

export default function FAQSection() {
  return (
    <section
      style={{
        paddingTop: "clamp(4rem, 10vh, 7rem)",
        paddingBottom: "clamp(4rem, 10vh, 7rem)",
      }}
    >
      <div
        style={{
          maxWidth: "780px",
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        {/* Centered header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--primary-blue)",
              marginBottom: "1rem",
            }}
          >
            FAQ
          </p>
          <h2
            className="heading-lg"
            style={{ marginBottom: "0.75rem" }}
          >
            Frequently Asked Questions
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "var(--neutral-400)",
              maxWidth: "480px",
              margin: "0 auto",
            }}
          >
            Everything you need to know about Avyuct AI and getting started.
          </p>
        </div>

        <FAQAccordion items={[...FAQ_DATA]} />
      </div>
    </section>
  );
}
