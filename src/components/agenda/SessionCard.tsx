import { User } from "lucide-react";
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
        <h3 className="text-lg font-bold text-foreground tracking-wide mb-3 small-caps">
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
          <div className="mt-6">
            {/* Modérateur en premier, centré avec bordure */}
            {moderator && (
              <div className="mb-8">
                <h4 className="text-base font-bold text-primary mb-4 small-caps tracking-wide">
                  Modérateur
                </h4>
                <div className="border border-[#b8d4e8] rounded-lg p-4 flex items-start gap-4 bg-[#f5f9fc] w-full">
                  <div className="flex-shrink-0 w-14 h-14 border border-[#b8d4e8] rounded flex items-center justify-center bg-white">
                    <User className="w-7 h-7 text-primary/50" />
                  </div>
                  <div className="flex-1 min-w-0 pt-1">
                    <p className="font-bold text-primary text-sm leading-tight mb-2 small-caps tracking-wide">
                      {moderator.name}
                    </p>
                    {moderator.role && (
                      <p className="text-sm text-muted-foreground leading-relaxed">{moderator.role}</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Panélistes */}
            {speakers && speakers.length > 0 && (
              <div>
                <h4 className="text-base font-bold text-primary mb-4 small-caps tracking-wide">
                  Panélistes
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Keynotes en premier, puis les autres */}
                  {[...speakers.filter(s => s.isKeynote), ...speakers.filter(s => !s.isKeynote)].map((speaker, index, arr) => (
                    <div 
                      key={index}
                      className={arr.length % 2 !== 0 && index === arr.length - 1 ? "md:col-span-2 md:flex md:justify-center" : ""}
                    >
                      <div className={arr.length % 2 !== 0 && index === arr.length - 1 ? "md:w-1/2" : "w-full"}>
                        <SpeakerCard
                          name={speaker.name}
                          role={speaker.role}
                        />
                      </div>
                    </div>
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
