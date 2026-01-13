interface TimeBadgeProps {
  time: string;
}

const TimeBadge = ({ time }: TimeBadgeProps) => {
  return (
    <div className="time-badge min-w-[60px] text-center">
      {time}
    </div>
  );
};

export default TimeBadge;
