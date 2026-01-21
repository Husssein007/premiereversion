import { cn } from "@/lib/utils";

interface DateTabsProps {
  activeDate: "day1" | "day2";
  onDateChange: (date: "day1" | "day2") => void;
}

const DateTabs = ({ activeDate, onDateChange }: DateTabsProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-2 w-full max-w-xl mx-auto">
      <button
        onClick={() => onDateChange("day1")}
        className={cn(
          "flex-1 py-2.5 px-5 text-xs md:text-sm font-medium rounded-full transition-all duration-300 ease-out",
          "hover:-translate-y-0.5 hover:shadow-sm",
          activeDate === "day1"
            ? "bg-[hsl(206,91%,25%)] text-white shadow-sm"
            : "bg-[hsl(206,91%,97%)] text-[hsl(206,91%,25%)] border border-[hsl(206,91%,85%)]"
        )}
      >
        Mardi 3 Février 2026
      </button>

      <button
        onClick={() => onDateChange("day2")}
        className={cn(
          "flex-1 py-2.5 px-5 text-xs md:text-sm font-medium rounded-full transition-all duration-300 ease-out",
          "hover:-translate-y-0.5 hover:shadow-sm",
          activeDate === "day2"
            ? "bg-[hsl(206,91%,25%)] text-white shadow-sm"
            : "bg-[hsl(206,91%,97%)] text-[hsl(206,91%,25%)] border border-[hsl(206,91%,85%)]"
        )}
      >
        Mercredi 4 Février 2026
      </button>
    </div>
  );
};

export default DateTabs;
