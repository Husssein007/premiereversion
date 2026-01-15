import { User } from "lucide-react";

interface SpeakerCardProps {
  name: string;
  role: string;
}

const SpeakerCard = ({ name, role }: SpeakerCardProps) => {
  return (
    <div className="speaker-card">
      <div className="speaker-avatar-square">
        <User className="w-6 h-6" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-foreground text-base">{name}</p>
        <p className="text-sm text-muted-foreground leading-tight">{role}</p>
      </div>
    </div>
  );
};

export default SpeakerCard;
