"use client";
import Navbar from "@/components/navbar";
import UseCaseHero from "@/components/UseCasesHero";
import Explore from "@/components/ExploreUsecase";
import ExploreRivo from "@/components/exploreRivo";
import Footer from "@/components/Footer";

export default function UseCasesPage() {
  return (
    <div>
      <Navbar />
      <UseCaseHero />
      <Explore />
      <ExploreRivo />
      <Footer />
    </div>
  );
}
