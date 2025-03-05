import Navbar from "@/components/navbar";
import UseCaseHero from "@/components/UseCasesHero";
import Explore from "@/components/ExploreUsecase";
import WhyRivio from "@/components/WhyRivio";
import ExploreRivo from "@/components/exploreRivo";
import Footer from "@/components/Footer";

export default function UseCasesPage() {
  return (
    <div>
      <Navbar />
      <UseCaseHero />
      <Explore />
      <WhyRivio />
      <ExploreRivo />
      <Footer />
    </div>
  );
}
