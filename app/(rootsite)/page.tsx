import TrustSection from "@/components/homepage/TrustSection";
import Hero from "@/components/homepage/Hero";
import Services from "@/components/homepage/Services";
import AboutSection from "@/components/homepage/AboutSection";
import WhyChooseUs from "@/components/homepage/WhyChooseUs";
import FAQSection from "@/components/homepage/FAQSection";
import GlobalReach from "@/components/homepage/GlobalReach";
import ProcessSection from "@/components/homepage/ProcessSection";



export default function Page () {
  return (
    <main className="bg-paper">
      <Hero/>
      <TrustSection/>
      <Services/>
      <AboutSection/>
      <WhyChooseUs/>
      <ProcessSection/>
      <GlobalReach/>
      <FAQSection/>
    </main>
  )
}