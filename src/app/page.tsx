import Navbar from "@/components/navbar";
import HeroSection from "@/components/heroSection";
import FeatureSection from "@/components/FeatureSection";
import VideoSection from "@/components/VideoSection";
import CardSection from "@/components/CardSection";
import TrackSection from "@/components/TrackSection";
import TankSection from "@/components/TankSection";
import PricingPlan from "@/components/PricingPlan";
import Accordion from "@/components/AccordianSection";
import ContactUS from "@/components/ContactUS";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
    <div>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <VideoSection />
      <CardSection />
      <TrackSection />
      <TankSection />
      <PricingPlan />
      <Accordion />
      <ContactUS />
      <Footer />
    </div>
    </>

  );
}
