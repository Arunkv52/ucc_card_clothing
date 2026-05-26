import { motion } from "motion/react";

const ShapeCards = () => {
  return (
    <div className="">
      

      {/* Star Shape Card */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="w-[50px] h-[50px] rounded-2xl  bg-transparent flex items-center justify-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          className="relative w-10 h-10"
        >
          {[...Array(8)].map((_, i) => (
            <span
              key={i}
              className="absolute left-1/2 top-1/2 w-[4px] h-10 bg-[#aecdc3] rounded-full origin-center"
              style={{
                transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ShapeCards;