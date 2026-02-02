import { FC, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor: FC = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.getAttribute("role") === "button" ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsPointer(!!isClickable);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY]);

  // Hide on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) {
    return null;
  }

  return (
    <>
      {/* Main cursor - Terminal block style */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isHidden ? 0 : 1,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isClicking ? 0.8 : isPointer ? 1.2 : 1,
          }}
          transition={{ duration: 0.15 }}
        >
          {/* Terminal cursor block */}
          <motion.div
            className="flex items-center justify-center"
            animate={{
              rotate: isPointer ? 0 : 0,
            }}
          >
            {isPointer ? (
              // Pointer state - command prompt style
              <div className="flex items-center gap-0.5">
                <span className="text-neon-blue font-mono text-sm font-bold drop-shadow-[0_0_8px_#00d4ff]">
                  {">"}
                </span>
                <motion.span
                  className="w-2.5 h-5 bg-neon-blue drop-shadow-[0_0_8px_#00d4ff]"
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </div>
            ) : (
              // Default state - blinking terminal cursor
              <div className="flex items-center">
                <span className="text-neon-green font-mono text-xs font-bold drop-shadow-[0_0_8px_#00ff88]">
                  $
                </span>
                <motion.span
                  className="w-2 h-4 bg-neon-green ml-0.5 drop-shadow-[0_0_8px_#00ff88]"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Cursor trail ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isHidden ? 0 : 0.5,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            width: isPointer ? 50 : 40,
            height: isPointer ? 50 : 40,
            borderColor: isPointer ? "#00d4ff" : "#00ff88",
          }}
          transition={{ duration: 0.2 }}
          style={{
            border: "1px solid",
            borderRadius: "50%",
          }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
