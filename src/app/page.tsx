import HeroFixedBackground from "@/components/HeroFixedBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CourseFinderSection from "@/components/CourseFinderSection";
import CoursesSection from "@/components/CoursesSection";
import TrustSection from "@/components/TrustSection";
import BenefitsSection from "@/components/BenefitsSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        {/* Fixer, durchgehend weißer Hintergrund – Inhalt scrollt darüber */}
        <div className="fixed inset-0 z-0 bg-background" aria-hidden="true" />
        {/* Hero-Gradient liegt darüber, blendet beim Scrollen aus */}
        <HeroFixedBackground />
        {/* Inhalt scrollt darüber */}
        <div className="relative z-10">
          <HeroSection />
          <CourseFinderSection />
          <CoursesSection />
          <TrustSection />
          <BenefitsSection />
          <FaqSection />
        </div>
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
