import { User } from "lucide-react";

interface SpeakerCardProps {
  name: string;
  role: string;
}

const SpeakerCard = ({ name, role }: SpeakerCardProps) => {
  return (
    <div className="flex items-start gap-4 py-3">
      <div className="flex-shrink-0 w-12 h-12 border border-[#b8d4e8] rounded-md flex items-center justify-center bg-white">
        <User className="w-6 h-6 text-primary/50" />
      </div>
      <div className="flex-1 min-w-0 pt-0.5">
        <p className="font-bold text-[hsl(206,91%,25%)] text-[15px] leading-snug mb-1.5 small-caps tracking-wide">{name}</p>
        <p className="text-[13px] text-muted-foreground leading-relaxed">{role}</p>
      </div>
    </div>
  );
};

export default SpeakerCard;
