import { useEffect, useState } from "react";

interface Heart {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  emoji: string;
}

const HEART_EMOJIS = ["💕", "💗", "💖", "🩷", "🌸", "✨"];

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const initial: Heart[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 14 + Math.random() * 16,
      duration: 8 + Math.random() * 12,
      delay: Math.random() * 10,
      emoji: HEART_EMOJIS[Math.floor(Math.random() * HEART_EMOJIS.length)],
    }));
    setHearts(initial);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="absolute opacity-0"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animation: `float-heart ${heart.duration}s ease-in ${heart.delay}s infinite`,
          }}
        >
          {heart.emoji}
        </span>
      ))}
    </div>
  );
};

export default FloatingHearts;
