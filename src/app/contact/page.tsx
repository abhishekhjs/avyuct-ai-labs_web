import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import FAQSection from "@/components/contact/FAQSection";
import AltContact from "@/components/contact/AltContact";
import GlobalMap from "@/components/contact/GlobalMap";
import Newsletter from "@/components/contact/Newsletter";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Request a demo, schedule a call, or learn how Avyuct AI can transform stroke care at your institution.",
};

export default function ContactPage() {
  return (
    <>
      <ContactForm />
      <FAQSection />
      <AltContact />
      <GlobalMap />
      <Newsletter />
    </>
  );
}
