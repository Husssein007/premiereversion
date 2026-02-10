import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  emoji: string;
  size: number;
  delay: number;
  duration: number;
}

const CELEBRATION_EMOJIS = ["💕", "💖", "🎉", "✨", "💗", "🌸", "🩷", "💐", "🥰", "💝", "🤍"];

interface CelebrationOverlayProps {
  show: boolean;
  successMessage: string;
  recipientName?: string;
  onReplay: () => void;
}

const CelebrationOverlay = ({ show, successMessage, recipientName, onReplay }: CelebrationOverlayProps) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (show) {
      const newParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        emoji: CELEBRATION_EMOJIS[Math.floor(Math.random() * CELEBRATION_EMOJIS.length)],
        size: 18 + Math.random() * 28,
        delay: Math.random() * 2,
        duration: 3.5 + Math.random() * 4,
      }));
      setParticles(newParticles);
    }
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 flex items-center justify-center gradient-valentine"
        >
          {/* Blurred blobs */}
          <div className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-primary/12 blur-3xl pointer-events-none" />
          <div className="absolute bottom-[5%] right-[5%] w-[35vw] h-[35vw] rounded-full bg-accent/18 blur-3xl pointer-events-none" />
          <div className="absolute top-[50%] left-[60%] w-[20vw] h-[20vw] rounded-full bg-[hsl(var(--valentine-rose-gold))]/15 blur-3xl pointer-events-none" />

          {/* Confetti particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {particles.map((p) => (
              <span
                key={p.id}
                className="absolute top-0"
                style={{
                  left: `${p.x}%`,
                  fontSize: `${p.size}px`,
                  animation: `confetti-fall ${p.duration}s ease-in ${p.delay}s infinite`,
                }}
              >
                {p.emoji}
              </span>
            ))}
          </div>

          <motion.div
            initial={{ scale: 0.5, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 18, stiffness: 180, delay: 0.15 }}
            className="valentine-card text-center max-w-md mx-4 relative z-10"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 8, -8, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="text-7xl md:text-8xl mb-6"
            >
              💕
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 font-romantic"
            >
              YAAAY!! 🎉
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-foreground/85 mb-3 leading-relaxed font-semibold"
            >
              {successMessage}
            </motion.p>

            {recipientName && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-primary/60 text-base mb-8 font-romantic"
              >
                Thank you, BEBE🥰
              </motion.p>
            )}

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onReplay}
              className="btn-valentine-yes mt-2"
            >
              Replay 🔄
            </motion.button>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="mt-10 text-muted-foreground text-sm text-premium"
            >
              💌 Love you forever
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CelebrationOverlay;
