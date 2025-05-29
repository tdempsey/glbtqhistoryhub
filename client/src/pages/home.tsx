import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import MissionSection from "@/components/mission-section";
import EventsSection from "@/components/events-section";
import ResourcesSection from "@/components/resources-section";
import ContactSection from "@/components/contact-section";
import DonateSection from "@/components/donate-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <MissionSection />
        <EventsSection />
        <ResourcesSection />
        <ContactSection />
        <DonateSection />
      </main>
      <Footer />
    </div>
  );
}
