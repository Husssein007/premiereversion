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
  hideSpeakersLabel = false
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
        <h3 className="text-lg font-bold tracking-wide mb-4 text-foreground">
          {title}
        </h3>

        {description && (
          <p className="text-muted-foreground mb-6 leading-relaxed text-[15px]">
            {description}
          </p>
        )}

        {speakers && speakers.length > 0 || moderator || keynote ? (
          <div className="mt-8 space-y-8">
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
                  <p className="text-[13px] text-muted-foreground leading-relaxed">
                    {keynote.role}
                  </p>
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
                  {[...speakers.filter(s => s.isKeynote), ...speakers.filter(s => !s.isKeynote)].map(
                    (speaker, index, arr) => {
                      // Si un seul panéliste, aligner à gauche
                      const isSingleSpeaker = arr.length === 1;
                      // Si nombre impair et dernier élément (sauf si un seul)
                      const isLastOdd =
                        arr.length % 2 !== 0 &&
                        index === arr.length - 1 &&
                        !isSingleSpeaker;

                      return (
                        <div
                          key={index}
                          className={isLastOdd ? "md:col-span-2 md:flex md:justify-center" : ""}
                        >
                          <div className={isLastOdd ? "md:w-1/2" : "w-full"}>
                            <SpeakerCard name={speaker.name} role={speaker.role} />
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            )}

            {/* Modérateur en bas - LEFT aligned (same as panelists) */}
{/* Modérateur en bas - LEFT aligned + same blue as section title */}
{moderator && (
  <div>
    {/* Title: same blue */}
    <h4 className="text-base font-bold text-[hsl(206,91%,25%)] mb-4 tracking-wide">
      Modérateur
    </h4>

    {/* Card */}
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
        {/* Icon */}
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

        {/* Text */}
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
