import { useState } from "react";
import { motion } from "framer-motion";
import FloatingHearts from "@/components/FloatingHearts";
import CelebrationOverlay from "@/components/CelebrationOverlay";
import EscapingNoButton from "@/components/EscapingNoButton";

/* ───────────────────────── Editable Content ───────────────────────── */
const CONTENT = {
  recipientName: "Saida El Ati chouhirat OUDATON",
  headerTitle: "💖 For You",
  headerSubtitle: "I made this little page just for you.",
  sweetMessage:
    "You make my days brighter, my heart calmer, and my life happier.",
  teaserLine: "I have one important question…",
  questionText: "Will you be my Valentine? 🌸",
  successMessage: "You just made me the happiest person in the world.",
};
/* ───────────────────────────────────────────────────────────────────── */

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const Index = () => {
  const [showCelebration, setShowCelebration] = useState(false);
  const [cardShake, setCardShake] = useState(false);

  const handleNoEscape = () => {
    setCardShake(true);
  };

  return (
    <div className="min-h-screen gradient-valentine flex flex-col items-center justify-center px-4 py-10 relative overflow-hidden">
      <FloatingHearts />

      {/* Decorative blurred blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-accent/15 blur-3xl pointer-events-none" />
      <div className="absolute top-[30%] right-[-5%] w-[25vw] h-[25vw] rounded-full bg-[hsl(var(--valentine-rose-gold))]/10 blur-3xl pointer-events-none" />

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center mb-8 relative z-10"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight font-romantic">
          {CONTENT.headerTitle}
        </h1>
        {CONTENT.recipientName && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-primary/70 font-semibold mt-3 font-romantic"
          >
             {CONTENT.recipientName} 💗
          </motion.p>
        )}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-muted-foreground mt-2 text-base md:text-lg text-premium"
        >
          {CONTENT.headerSubtitle}
        </motion.p>
      </motion.header>

      {/* Main Card – glassmorphic style with shake animation */}
      <motion.div
        variants={staggerChildren}
        initial="hidden"
        animate="visible"
        className="valentine-card w-full max-w-md relative z-10"
        style={{
          animation: cardShake ? 'none' : 'card-breathe 4s ease-in-out infinite',
        }}
      >
        <motion.div
          animate={cardShake ? { 
            x: [0, -4, 4, -3, 3, -2, 2, 0],
            rotate: [0, -0.5, 0.5, -0.3, 0.3, 0]
          } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          onAnimationComplete={() => setCardShake(false)}
        >
          {/* Decorative heart */}
          <motion.div variants={fadeUp} className="flex justify-center mb-6">
            <motion.div
              animate={{ scale: [1, 1.12, 1], rotate: [0, 4, -4, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              className="text-6xl md:text-7xl drop-shadow-lg"
            >
              💝
            </motion.div>
          </motion.div>

          {/* Sweet message */}
          <motion.p
            variants={fadeUp}
            className="text-center text-foreground/90 text-lg md:text-xl leading-relaxed mb-3 font-semibold"
          >
            "{CONTENT.sweetMessage}"
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="text-center text-muted-foreground text-sm mb-8 italic"
          >
            {CONTENT.teaserLine}
          </motion.p>

          {/* Divider */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <span className="text-elegant text-primary/50">the question</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          </motion.div>

          {/* Question */}
          <motion.h2
            variants={fadeUp}
            className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-10 leading-snug font-romantic"
          >
            {CONTENT.questionText}
          </motion.h2>

          {/* Buttons area */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center gap-4 relative"
            style={{ minHeight: "80px" }}
          >
            <motion.button
              whileHover={{ scale: 1.06, boxShadow: "0 12px 40px hsl(340 75% 55% / 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowCelebration(true)}
              className="btn-valentine-yes text-xl px-14 py-4"
            >
              Yes! 💕
            </motion.button>

            <EscapingNoButton onEscape={handleNoEscape} />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mt-10 text-sm text-muted-foreground relative z-10 text-premium"
      >
        Made By HUSSEIN 💕 for {CONTENT.recipientName || "you"}
      </motion.p>

      {/* Celebration overlay */}
      <CelebrationOverlay
        show={showCelebration}
        successMessage={CONTENT.successMessage}
        recipientName={CONTENT.recipientName}
        onReplay={() => setShowCelebration(false)}
      />
    </div>
  );
};

export default Index;
