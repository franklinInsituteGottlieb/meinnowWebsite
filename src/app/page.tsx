import HeroFixedBackground from "@/components/HeroFixedBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import BenefitsSection from "@/components/BenefitsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Fixer Hintergrund: bleibt stehen, nur Inhalt scrollt; blendet nach Hero+Kurse aus */}
        <HeroFixedBackground />
        {/* Inhalt scrollt darüber */}
        <div className="relative z-10">
          <HeroSection />
          <CoursesSection />
          <BenefitsSection />
        </div>
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
