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
  hideSpeakersLabel?: boolean;
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
  hideSpeakersLabel = false,
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
    <div className="flex items-start gap-6 relative group">
      <div className="timeline-line" />
      <TimeBadge time={time} />
      <div className="flex-1 session-card transition-all duration-300 hover:shadow-md hover:border-primary/40 hover:translate-x-1">
        <h3 className="text-xl font-bold text-[hsl(206,91%,25%)] tracking-wide mb-4 small-caps">
          {title}
        </h3>

        {description && (
          <p className="text-muted-foreground mb-6 leading-relaxed text-[15px]">
            {description}
          </p>
        )}

        {(speakers && speakers.length > 0) || moderator || keynote ? (
          <div className="mt-8 space-y-8">
            {/* Modérateur en premier */}
            {moderator && (
              <div>
                <h4 className="text-base font-bold text-[hsl(168,76%,36%)] mb-4 small-caps tracking-wide">
                  Modérateur
                </h4>
                <div className="border-2 border-[hsl(168,76%,36%)] rounded-lg p-5 flex items-start gap-5 bg-[hsl(168,76%,96%)] transition-all duration-300 hover:shadow-lg hover:shadow-[hsl(168,76%,36%)]/20 hover:scale-[1.02] hover:bg-[hsl(168,76%,92%)] cursor-pointer">
                  <div className="flex-shrink-0 w-14 h-14 border border-[hsl(168,76%,36%)] rounded-md flex items-center justify-center bg-white transition-transform duration-300 group-hover:rotate-3">
                    <User className="w-7 h-7 text-[hsl(168,76%,36%)]" />
                  </div>
                  <div className="flex-1 min-w-0 pt-1">
                    <p className="font-bold text-primary text-[15px] leading-snug mb-2 small-caps tracking-wide">
                      {moderator.name}
                    </p>
                    {moderator.role && (
                      <p className="text-[13px] text-muted-foreground leading-relaxed">{moderator.role}</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Keynote speaker - même style que les speakers */}
            {keynote && (
              <div className="flex items-start gap-4 py-3">
                <div className="flex-shrink-0 w-12 h-12 border border-[#b8d4e8] rounded-md flex items-center justify-center bg-white">
                  <User className="w-6 h-6 text-primary/50" />
                </div>
                <div className="flex-1 min-w-0 pt-0.5">
                  <p className="font-bold text-[hsl(206,91%,25%)] text-[15px] leading-snug mb-1.5 small-caps tracking-wide">
                    {keynote.name}
                  </p>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">{keynote.role}</p>
                </div>
              </div>
            )}

            {/* Panélistes */}
            {speakers && speakers.length > 0 && (
              <div>
                {!hideSpeakersLabel && (
                  <h4 className="text-base font-bold text-[hsl(331,52%,53%)] mb-5 small-caps tracking-wide underline">
                    Panélistes
                  </h4>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                  {/* Keynotes en premier, puis les autres */}
                  {[...speakers.filter(s => s.isKeynote), ...speakers.filter(s => !s.isKeynote)].map((speaker, index, arr) => {
                    // Si un seul panéliste, aligner à gauche
                    const isSingleSpeaker = arr.length === 1;
                    // Si nombre impair et dernier élément (sauf si un seul)
                    const isLastOdd = arr.length % 2 !== 0 && index === arr.length - 1 && !isSingleSpeaker;
                    
                    return (
                      <div 
                        key={index}
                        className={isLastOdd ? "md:col-span-2 md:flex md:justify-center" : ""}
                      >
                        <div className={isLastOdd ? "md:w-1/2" : "w-full"}>
                          <SpeakerCard
                            name={speaker.name}
                            role={speaker.role}
                          />
                        </div>
                      </div>
                    );
                  })}
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
