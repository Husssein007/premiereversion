import { User } from "lucide-react";

interface SpeakerCardProps {
  name: string;
  role: string;
}

const SpeakerCard = ({ name, role }: SpeakerCardProps) => {
  return (
    <div className="speaker-card">
      <div className="speaker-avatar-square">
        <User className="w-7 h-7" />
      </div>
      <div className="flex-1 min-w-0 pt-1">
        <p className="font-bold text-primary text-lg md:text-xl leading-tight mb-2.5">{name}</p>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{role}</p>
      </div>
    </div>
  );
};

export default SpeakerCard;
