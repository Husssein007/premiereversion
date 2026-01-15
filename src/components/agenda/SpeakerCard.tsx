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
      <div className="flex-1 min-w-0">
        <p className="font-bold text-foreground text-base leading-snug">{name}</p>
        <p className="text-sm text-muted-foreground leading-snug mt-1">{role}</p>
      </div>
    </div>
  );
};

export default SpeakerCard;
