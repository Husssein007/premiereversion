import TimeBadge from "./TimeBadge";
import SpeakerCard from "./SpeakerCard";

interface Speaker {
  name: string;
  role: string;
  isKeynote?: boolean;
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
      <div className="flex items-start gap-6 relative">
        <div className="timeline-line" />
        <TimeBadge time={time} />
        <div className="flex-1 py-3">
          <h3 className="text-xl font-semibold text-muted-foreground italic">
            {title}
          </h3>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-6 relative">
      <div className="timeline-line" />
      <TimeBadge time={time} />
      <div className="flex-1 session-card">
        <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-wide mb-4 small-caps">
          {title}
        </h3>

        {description && (
          <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
            {description}
          </p>
        )}


        {keynote && (
          <div className="mb-6">
            <h4 className="text-base md:text-lg font-bold text-primary mb-3">
              Keynote Speaker
            </h4>
            <SpeakerCard name={keynote.name} role={keynote.role} />
          </div>
        )}

        {(speakers && speakers.length > 0) || moderator ? (
          <div className="mt-8">
            <div className="flex flex-col lg:flex-row lg:items-start gap-10">
              {/* Panélistes à gauche */}
              {speakers && speakers.length > 0 && (
                <div className="flex-1">
                  {/* Ouverture du Panel */}
                  {speakers.filter(s => s.isKeynote).length > 0 && (
                    <div className="mb-8">
                      <h4 className="text-lg md:text-xl font-bold text-primary mb-5 small-caps tracking-wide">
                        Ouverture du Panel
                      </h4>
                      <div className="grid grid-cols-1 gap-5">
                        {speakers.filter(s => s.isKeynote).map((speaker, index) => (
                          <SpeakerCard
                            key={index}
                            name={speaker.name}
                            role={speaker.role}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Panélistes */}
                  {speakers.filter(s => !s.isKeynote).length > 0 && (
                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-primary mb-5 small-caps tracking-wide">
                        Panélistes
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {speakers.filter(s => !s.isKeynote).map((speaker, index) => (
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
              )}

              {/* Modérateur à l'extrême droite, aligné en haut */}
              {moderator && (
                <div className="flex-shrink-0 lg:w-[280px]">
                  <div className="text-center">
                    <h4 className="text-lg md:text-xl font-bold text-secondary mb-5 small-caps tracking-wide">
                      Modérateur
                    </h4>
                    <div className="bg-gradient-to-br from-secondary/10 to-primary/10 border-3 border-secondary/40 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                      <span className="text-xl font-bold text-secondary block leading-tight">
                        {moderator.name}
                      </span>
                      {moderator.role && (
                        <p className="text-sm md:text-base text-muted-foreground mt-3 leading-relaxed">{moderator.role}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SessionCard;
