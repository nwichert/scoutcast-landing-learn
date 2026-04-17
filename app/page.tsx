import Header from "@/components/header";
import HeroSection from "@/components/secondary-hero-2";
import LogoCloud from "@/components/logo-cloud";
import FeaturesSection from "@/components/features-2";
import ComparatorSection from "@/components/comparator-7";
import DownloadSection from "@/components/contact";
import FAQs from "@/components/faqs-1";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <LogoCloud />
      <FeaturesSection />
      <ComparatorSection />
      <DownloadSection />
      <FAQs />
      <Footer />
    </>
  );
}
