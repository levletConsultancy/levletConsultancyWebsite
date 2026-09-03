import TrustSection from "@/components/homepage/TrustSection";
import Hero from "@/components/homepage/Hero";
import Services from "@/components/homepage/Services";



export default function Page () {
  return (
    <main className="bg-paper">
      <Hero/>
      <TrustSection/>
      <Services/>
    </main>
  )
}