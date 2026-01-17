import { cn } from "@/lib/utils";

interface DateTabsProps {
  activeDate: "day1" | "day2";
  onDateChange: (date: "day1" | "day2") => void;
}

const DateTabs = ({ activeDate, onDateChange }: DateTabsProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-3xl mx-auto">
      <button
        onClick={() => onDateChange("day1")}
        className={cn(
          "flex-1 py-5 px-8 text-base md:text-lg font-bold rounded-2xl transition-all duration-300 transform hover:scale-[1.02]",
          activeDate === "day1" ? "tab-active" : "tab-inactive"
        )}
      >
        Mardi 3 Février 2026
      </button>
      <button
        onClick={() => onDateChange("day2")}
        className={cn(
          "flex-1 py-5 px-8 text-base md:text-lg font-bold rounded-2xl transition-all duration-300 transform hover:scale-[1.02]",
          activeDate === "day2" ? "tab-active" : "tab-inactive"
        )}
      >
        Mercredi 4 Février 2026
      </button>
    </div>
  );
};

export default DateTabs;
