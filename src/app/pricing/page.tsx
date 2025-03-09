"use client";
import Navbar from "@/components/navbar";
import PricingPlan from "@/components/PricingPlan";
import Footer from "@/components/Footer";
import PricingHero from "@/components/PricingHero";
export default function UseCasesPage() {
  return (
    <div>
          <Navbar />
          <PricingHero />
   <PricingPlan />
      <Footer />
    </div>
  );
}
