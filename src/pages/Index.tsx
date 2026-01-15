import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import ConfidentialBanner from "@/components/agenda/ConfidentialBanner";
import HeroBanner from "@/components/agenda/HeroBanner";
import DateTabs from "@/components/agenda/DateTabs";
import Day1Agenda from "@/components/agenda/Day1Agenda";
import Day2Agenda from "@/components/agenda/Day2Agenda";

const Index = () => {
  const [activeDate, setActiveDate] = useState<"day1" | "day2">("day1");
  const contentRef = useRef<HTMLDivElement>(null);

  const handleExportImage = async () => {
    if (!contentRef.current) return;

    const canvas = await html2canvas(contentRef.current, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
    });

    const link = document.createElement("a");
    link.download = `Agenda_Salma_Dialogue_${activeDate === "day1" ? "Jour1" : "Jour2"}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="min-h-screen bg-background">
      <ConfidentialBanner />
      <HeroBanner />
      
      <main className="container mx-auto px-4 py-10 md:py-16">
        <div className="flex justify-between items-center mb-10 md:mb-14">
          <DateTabs activeDate={activeDate} onDateChange={setActiveDate} />
          <Button onClick={handleExportImage} variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Télécharger Image
          </Button>
        </div>

        <div ref={contentRef} className="max-w-4xl mx-auto space-y-8 bg-background p-4">
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
