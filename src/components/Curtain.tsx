import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "./CountUp";

interface CurtainProps {
  children: React.ReactNode;
}

export default function Curtain({ children }: CurtainProps) {
  const [isLoading, setIsLoading] = useState(true);

  const handleCounterEnd = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="w-full h-full">{children}</div>

      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="absolute inset-0 bg-[#1e1e1e] flex items-center justify-center z-[100]"
            initial={{ y: 0 }}
            exit={{
              y: "-100%",
              transition: {
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
          >
            <div className="text-[#e2e2d9] text-center">
              <CountUp
                from={0}
                to={100}
                duration={3}
                className="text-6xl font-bold"
                separator=","
                onEnd={handleCounterEnd}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
