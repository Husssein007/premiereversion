import { User } from "lucide-react";
import TimeBadge from "./TimeBadge";
import SpeakerCard from "./SpeakerCard";

interface Speaker {
  name: string;
  role: string;
  isKeynote?: boolean;
  subtitle?: string;
}

interface SessionCardProps {
  time: string;
  title: string;
  description?: string;
  axes?: string[];
  speakers?: Speaker[];
  moderator?: {
    name: string;
    role?: string;
  };
  keynote?: {
    name: string;
    role: string;
  };
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
  // ✅ Safer boolean for rendering the whole speakers/moderator/keynote section
  const hasSpeakers = !!speakers && speakers.length > 0;
  const hasModerator = !!moderator;
  const hasKeynote = !!keynote;
  const shouldShowPeopleSection = hasSpeakers || hasModerator || hasKeynote;

  if (isBreak) {
    return (
      <div className="flex items-start gap-6 relative group">
        <div className="timeline-line" />
        <TimeBadge time={time} />

        <div className="flex-1 session-card transition-all duration-300 hover:shadow-md hover:border-primary/40 hover:translate-x-1">
          <h3 className="text-lg font-semibold italic tracking-wide text-[#6B6F73]">
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
        <h3 className="text-lg font-bold tracking-wide mb-4 text-foreground">
          {title}
        </h3>

        {description && (
          <p className="text-muted-foreground mb-6 leading-relaxed text-[15px]">
            {description}
          </p>
        )}

        {shouldShowPeopleSection ? (
          <div className="mt-8 space-y-8">
            {/* Keynote speaker - same style as speakers */}
            {keynote && (
              <div className="flex items-start gap-4 py-3">
                <div className="flex-shrink-0 w-12 h-12 border border-[#b8d4e8] rounded-md flex items-center justify-center bg-white">
                  <User className="w-6 h-6 text-primary/50" />
                </div>

                <div className="flex-1 min-w-0 pt-0.5">
                  <p className="font-bold text-[hsl(206,91%,25%)] text-[15px] leading-snug mb-1.5 small-caps tracking-wide">
                    {keynote.name}
                  </p>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">
                    {keynote.role}
                  </p>
                </div>
              </div>
            )}

            {/* Panelists */}
            {hasSpeakers && (
              <div>
                {!hideSpeakersLabel && (
                  <h4 className="text-base font-bold text-[hsl(331,52%,53%)] mb-5 small-caps tracking-wide underline">
                    Panélistes
                  </h4>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                  {[...speakers!.filter((s) => s.isKeynote), ...speakers!.filter((s) => !s.isKeynote)].map(
                    (speaker, index, arr) => {
                      const isSingleSpeaker = arr.length === 1;
                      const isLastOdd = arr.length % 2 !== 0 && index === arr.length - 1;
                      const shouldCenter = isSingleSpeaker || isLastOdd;

                      return (
                        <div
                          key={index}
                          className={shouldCenter ? "md:col-span-2 md:flex md:justify-center" : ""}
                        >
                          <div className={shouldCenter ? "w-full md:w-1/2" : "w-full"}>
                            <SpeakerCard
                              name={speaker.name}
                              role={speaker.role}
                              subtitle={speaker.subtitle}
                            />
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            )}

            {/* Moderator */}
            {moderator && (
              <div>
                <h4 className="text-base font-bold text-[hsl(206,91%,25%)] mb-4 tracking-wide">
                  Modérateur
                </h4>

                <div
                  className="
                    rounded-xl
                    bg-[hsl(206,91%,97%)]
                    border border-[hsl(206,91%,85%)]
                    p-4
                    shadow-sm
                    transition-all duration-300 ease-out
                    hover:shadow-md
                    hover:border-[hsl(206,91%,70%)]
                    hover:-translate-y-0.5
                  "
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="
                        flex-shrink-0 w-12 h-12
                        rounded-md
                        border border-[hsl(206,91%,80%)]
                        bg-white
                        flex items-center justify-center
                      "
                    >
                      <User className="w-6 h-6 text-[hsl(206,91%,35%)]" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-[15px] leading-snug mb-1.5 tracking-wide text-[hsl(206,91%,25%)] text-left">
                        {moderator.name}
                      </p>

                      {moderator.role && (
                        <p className="text-[13px] leading-relaxed text-[hsl(206,60%,35%)] text-left">
                          {moderator.role}
                        </p>
                      )}
                    </div>
                  </div>
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
