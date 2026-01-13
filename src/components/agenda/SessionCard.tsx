import TimeBadge from "./TimeBadge";
import SpeakerCard from "./SpeakerCard";

interface Speaker {
  name: string;
  role: string;
}

interface SessionCardProps {
  time: string;
  title: string;
  description?: string;
  axes?: string[];
  speakers?: Speaker[];
  moderator?: { name: string; role?: string };
  keynote?: { name: string; role: string };
  isBreak?: boolean;
}

const SessionCard = ({
  time,
  title,
  description,
  axes,
  speakers,
  moderator,
  keynote,
  isBreak = false,
}: SessionCardProps) => {
  if (isBreak) {
    return (
      <div className="flex items-start gap-4 relative">
        <div className="timeline-line" />
        <TimeBadge time={time} />
        <div className="flex-1 py-2">
          <h3 className="text-lg font-medium text-muted-foreground italic">
            {title}
          </h3>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-4 relative">
      <div className="timeline-line" />
      <TimeBadge time={time} />
      <div className="flex-1 session-card">
        <h3 className="text-lg font-bold text-foreground uppercase tracking-wide mb-3">
          {title}
        </h3>

        {description && (
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {description}
          </p>
        )}

        {axes && axes.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-primary mb-2">
              Axes de discussion :
            </h4>
            <ul className="list-disc list-inside space-y-1">
              {axes.map((axis, index) => (
                <li key={index} className="text-sm text-muted-foreground">
                  {axis}
                </li>
              ))}
            </ul>
          </div>
        )}

        {keynote && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-primary mb-2">
              Keynote Speaker :
            </h4>
            <SpeakerCard name={keynote.name} role={keynote.role} />
          </div>
        )}

        {speakers && speakers.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-primary mb-2">
              Panélistes :
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {speakers.map((speaker, index) => (
                <SpeakerCard
                  key={index}
                  name={speaker.name}
                  role={speaker.role}
                />
              ))}
            </div>
          </div>
        )}

        {moderator && (
          <div className="pt-3 border-t border-border">
            <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded mr-2">
              Modérateur
            </span>
            <span className="text-sm font-medium text-foreground">
              {moderator.name}
              {moderator.role && (
                <span className="text-muted-foreground"> — {moderator.role}</span>
              )}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SessionCard;
