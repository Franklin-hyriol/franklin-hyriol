import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  from?: "left" | "right" | "bottom";
  initialOffset?: number;
  classParent?: string;
  classChild?: string;
}

function ScrollReveal({
  children,
  delay = 0.25,
  duration = 0.5,
  from = "bottom",
  initialOffset = 50,
 classParent,
 classChild
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const variants = {
    hidden: {
      opacity: 0,
      x: from === "left" ? -initialOffset : from === "right" ? initialOffset : 0,
      y: from === "bottom" ? initialOffset : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  return (
    <div className={classParent} ref={ref} style={{ position: "relative", overflow: "hidden" }}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration, delay }}
        className={classChild}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default ScrollReveal;
