import TrustSection from "@/components/homepage/TrustSection";
import Hero from "@/components/homepage/Hero";
import Services from "@/components/homepage/Services";
import AboutSection from "@/components/homepage/AboutSection";
import WhyChooseUs from "@/components/homepage/WhyChooseUs";
import FAQSection from "@/components/homepage/FAQSection";



export default function Page () {
  return (
    <main className="bg-paper">
      <Hero/>
      <TrustSection/>
      <Services/>
      <AboutSection/>
      <WhyChooseUs/>
      <FAQSection/>
    </main>
  )
}