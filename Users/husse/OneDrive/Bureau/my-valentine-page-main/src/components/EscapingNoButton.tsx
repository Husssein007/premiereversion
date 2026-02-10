import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DRAMATIC_MESSAGE = "BELEEEEEEEHIIIIIIIIII !!!!";

interface EscapingNoButtonProps {
  onEscape?: () => void;
}

const EscapingNoButton = ({ onEscape }: EscapingNoButtonProps) => {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const [showDramaticMessage, setShowDramaticMessage] = useState(false);
  const [messageKey, setMessageKey] = useState(0);
  const [escapeCount, setEscapeCount] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const escape = useCallback(() => {
    if (!buttonRef.current) return;

    const btn = buttonRef.current.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const pad = 20;
    const maxX = vw - btn.width - pad;
    const maxY = vh - btn.height - pad;

    // Ensure it moves at least 100px away from current position
    let newX: number, newY: number;
    let attempts = 0;
    do {
      newX = pad + Math.random() * (maxX - pad);
      newY = pad + Math.random() * (maxY - pad);
      attempts++;
    } while (
      attempts < 20 &&
      Math.abs(newX - btn.left) < 100 &&
      Math.abs(newY - btn.top) < 100
    );

    setPosition({ x: newX, y: newY });
    setEscapeCount((c) => c + 1);

    // Show dramatic message
    setShowDramaticMessage(true);
    setMessageKey((k) => k + 1);

    // Trigger card shake
    onEscape?.();
  }, [onEscape]);

  // Auto-hide dramatic message after 1 second
  useEffect(() => {
    if (showDramaticMessage) {
      const timer = setTimeout(() => {
        setShowDramaticMessage(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [showDramaticMessage, messageKey]);

  // Button shrinks slightly as escape count grows
  const scale = Math.max(0.7, 1 - escapeCount * 0.03);

  // Random rotation for message (-8 to 8 degrees)
  const messageRotation = (Math.random() - 0.5) * 16;

  return (
    <>
      <motion.button
        ref={buttonRef}
        onMouseEnter={escape}
        onTouchStart={(e) => {
          e.preventDefault();
          escape();
        }}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          // Never allow click - escape instead
          escape();
        }}
        className="btn-valentine-no"
        animate={
          position
            ? { x: position.x - (window.innerWidth / 2), y: position.y - (window.innerHeight / 2), scale }
            : { scale: 1 }
        }
        transition={{ type: "spring", damping: 15, stiffness: 300, mass: 0.8 }}
        style={position ? { position: "fixed", left: "50%", top: "50%", zIndex: 40 } : {}}
      >
        No 😅
      </motion.button>

      {/* Dramatic Message Overlay */}
      <AnimatePresence mode="wait">
        {showDramaticMessage && (
          <motion.div
            key={messageKey}
            initial={{ scale: 0, opacity: 0, rotate: -10 }}
            animate={{ 
              scale: [0, 1.1, 1], 
              opacity: 1, 
              rotate: messageRotation,
            }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ 
              duration: 0.3, 
              ease: [0.34, 1.56, 0.64, 1],
              exit: { duration: 0.2 }
            }}
            className="fixed inset-0 flex items-center justify-center pointer-events-none z-50"
          >
            <motion.span
              animate={{ 
                scale: [1, 1.05, 1],
                y: [0, -5, 0]
              }}
              transition={{ 
                duration: 0.4, 
                repeat: 1,
                ease: "easeInOut"
              }}
              className="dramatic-message text-4xl md:text-6xl lg:text-7xl font-extrabold text-center px-4"
              style={{
                color: 'hsl(340 75% 50%)',
                textShadow: '0 4px 20px hsl(340 75% 55% / 0.4), 0 2px 8px hsl(340 75% 55% / 0.3)',
                fontFamily: "'Playfair Display', serif",
              }}
            >
              {DRAMATIC_MESSAGE}
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EscapingNoButton;
