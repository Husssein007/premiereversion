import { useState } from "react";
import ConfidentialBanner from "@/components/agenda/ConfidentialBanner";
import HeroBanner from "@/components/agenda/HeroBanner";
import DateTabs from "@/components/agenda/DateTabs";
import Day1Agenda from "@/components/agenda/Day1Agenda";
import Day2Agenda from "@/components/agenda/Day2Agenda";

const Index = () => {
  const [activeDate, setActiveDate] = useState<"day1" | "day2">("day1");

  return (
    <div className="min-h-screen bg-background">
      <ConfidentialBanner />
      <HeroBanner />
      
      <main className="container mx-auto px-4 py-10 md:py-16">
        <div className="mb-10 md:mb-14">
          <DateTabs activeDate={activeDate} onDateChange={setActiveDate} />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {activeDate === "day1" ? <Day1Agenda /> : <Day2Agenda />}
        </div>
      </main>

      <footer className="bg-secondary py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Salma Dialogue Business Forum – Tous droits réservés
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
