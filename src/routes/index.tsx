import { createFileRoute } from "@tanstack/react-router";
import { BentoSection } from "@/components/BentoSection";
import { DiagnosticSection } from "@/components/DiagnosticSection";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { CapitaLensInsightSection } from "@/components/CapitaLensInsightSection";
import { GlobalReachSection } from "@/components/GlobalReachSection";
import { EthosSection } from "@/components/EthosSection";
import { DedicatedPartnerSection } from "@/components/DedicatedPartnerSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { GlanceSection } from "@/components/GlanceSection";

import { MethodologySection } from "@/components/MethodologySection";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Helping the best be more than" },
      { name: "description", content: "Advisory services for HR leaders and business executives redefining growth." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background px-6 md:px-12 py-8 md:py-12 overflow-x-hidden">
      {/* Full Bleed Hero */}
      <div className="w-screen relative left-1/2 -translate-x-1/2">
        <DedicatedPartnerSection />
      </div>

      <div className="w-screen relative left-1/2 -translate-x-1/2">
        <BentoSection />
      </div>

      <div className="max-w-7xl mx-auto">

        <DiagnosticSection />

        <div className="w-screen relative left-1/2 -translate-x-1/2">
          <CapabilitiesSection />
        </div>

        <div className="w-screen relative left-1/2 -translate-x-1/2">
          <CapitaLensInsightSection />
        </div>

        <div className="w-screen relative left-1/2 -translate-x-1/2">
          <GlobalReachSection />
        </div>

        <div className="w-screen relative left-1/2 -translate-x-1/2">
          <GlanceSection />
        </div>



        <div className="w-screen relative left-1/2 -translate-x-1/2">
          <MethodologySection />
        </div>

        <div className="w-screen relative left-1/2 -translate-x-1/2">
          <EthosSection />
        </div>
      </div>

      {/* Full bleed sections */}
      <div className="w-screen relative left-1/2 -translate-x-1/2">
        <ContactSection />
      </div>

      <div className="w-screen relative left-1/2 -translate-x-1/2">
        <Footer />
      </div>
    </main>
  );
}
