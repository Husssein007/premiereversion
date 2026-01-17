import { useState } from "react";
import HeroBanner from "@/components/agenda/HeroBanner";
import DateTabs from "@/components/agenda/DateTabs";
import Day1Agenda from "@/components/agenda/Day1Agenda";
import Day2Agenda from "@/components/agenda/Day2Agenda";

const Index = () => {
  const [activeDate, setActiveDate] = useState<"day1" | "day2">("day1");

  return (
    <div className="min-h-screen bg-background">
      <HeroBanner />
      
      <main className="container mx-auto px-4 py-10 md:py-16">
        <div className="mb-10 md:mb-14">
          <DateTabs activeDate={activeDate} onDateChange={setActiveDate} />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {activeDate === "day1" ? <Day1Agenda /> : <Day2Agenda />}
        </div>
      </main>
    </div>
  );
};

export default Index;
