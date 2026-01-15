import { User } from "lucide-react";

interface SpeakerCardProps {
  name: string;
  role: string;
}

const SpeakerCard = ({ name, role }: SpeakerCardProps) => {
  return (
    <div className="speaker-card">
      <div className="speaker-avatar-square">
        <User className="w-5 h-5" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-foreground text-sm">{name}</p>
        <p className="text-xs text-muted-foreground leading-tight">{role}</p>
      </div>
    </div>
  );
};

export default SpeakerCard;
