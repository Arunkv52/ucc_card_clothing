import { motion } from "framer-motion";

export default function AnimatedShape() {
  return (
    <div className="relative w-full h-[57%] bg-[#209e51] overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 700"
        preserveAspectRatio="none"
      >
        {/* Top Line */}
        <motion.path
          d="M0 40 H500 C650 40 700 120 850 220 L1000 320"
          stroke="#ffffff"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          animate={{
            pathLength: [0.7, 1, 0.7],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            filter: "drop-shadow(0 0 8px rgba(31,122,115,.4))",
          }}
        />

        {/* Middle Line */}
        <motion.path
          d="M0 180 H450 C600 180 700 230 850 310 L1000 390"
          stroke="#ffffff"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          animate={{
            pathLength: [0.7, 1, 0.7],
            opacity: [0.15, 0.5, 0.15],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            filter: "drop-shadow(0 0 6px rgba(31,122,115,.3))",
          }}
        />

        {/* Bottom Line */}
        <motion.path
          d="M0 340 H500 C650 340 750 380 900 430 L1000 470"
          stroke="#ffffff"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          animate={{
            pathLength: [0.7, 1, 0.7],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            filter: "drop-shadow(0 0 6px rgba(31,122,115,.3))",
          }}
        />
      </svg>

     
    </div>
  );
}