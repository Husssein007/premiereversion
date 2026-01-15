import { cn } from "@/lib/utils";

interface DateTabsProps {
  activeDate: "day1" | "day2";
  onDateChange: (date: "day1" | "day2") => void;
}

const DateTabs = ({ activeDate, onDateChange }: DateTabsProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 w-full max-w-2xl mx-auto">
      <button
        onClick={() => onDateChange("day1")}
        className={cn(
          "flex-1 py-3 px-6 text-sm md:text-base font-semibold rounded-full transition-all duration-200 small-caps",
          activeDate === "day1" ? "tab-active shadow-md" : "tab-inactive"
        )}
      >
        Mardi 3 Février 2026
      </button>
      <button
        onClick={() => onDateChange("day2")}
        className={cn(
          "flex-1 py-3 px-6 text-sm md:text-base font-semibold rounded-full transition-all duration-200 small-caps",
          activeDate === "day2" ? "tab-active shadow-md" : "tab-inactive"
        )}
      >
        Mercredi 4 Février 2026
      </button>
    </div>
  );
};

export default DateTabs;
