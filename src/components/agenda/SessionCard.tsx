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
        <h3 className="text-lg font-bold text-foreground tracking-wide mb-3">
          {title}
        </h3>

        {description && (
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {description}
          </p>
        )}


        {keynote && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-primary mb-2">
              Keynote Speaker
            </h4>
            <SpeakerCard name={keynote.name} role={keynote.role} />
          </div>
        )}

        {(speakers && speakers.length > 0) || moderator ? (
          <div className="flex flex-col gap-6">
            {/* Modérateur centré et mis en valeur */}
            {moderator && (
              <div className="flex justify-center">
                <div className="text-center">
                  <h4 className="text-sm font-semibold text-secondary mb-2">
                    Modérateur
                  </h4>
                  <div className="bg-white border border-border p-4 rounded-xl shadow-sm min-w-[200px]">
                    <span className="text-base font-bold text-primary">
                      {moderator.name}
                    </span>
                    {moderator.role && (
                      <p className="text-sm text-muted-foreground mt-1">{moderator.role}</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Panélistes à gauche */}
            {speakers && speakers.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-primary mb-3">
                  Panélistes
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
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SessionCard;
