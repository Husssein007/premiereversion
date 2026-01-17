import { User } from "lucide-react";

interface SpeakerCardProps {
  name: string;
  role: string;
}

const SpeakerCard = ({ name, role }: SpeakerCardProps) => {
  return (
    <div className="flex items-start gap-3 py-2">
      <div className="flex-shrink-0 w-10 h-10 border border-primary/30 rounded flex items-center justify-center bg-background">
        <User className="w-5 h-5 text-primary/60" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-bold text-primary text-sm leading-tight mb-1 uppercase tracking-wide">{name}</p>
        <p className="text-sm text-muted-foreground leading-relaxed">{role}</p>
      </div>
    </div>
  );
};

export default SpeakerCard;
