import { motion } from "framer-motion";
import { FiLoader } from "react-icons/fi";

export default function Loader() {
  return (
    <div className="flex flex-grow absolute w-[100vw] h-[100vh] backdrop-blur-sm pt-24 bg-black/90 z-10">
      <div className="flex flex-row m-auto items-center content-center">
        <motion.div
          initial={{
            opacity: 0.25,
            scale: 0.9,
          }}
          animate={{
            opacity: 0.9,
            rotate: 360,
            scale: 1.1,
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1,
          }}
        >
          <FiLoader size={52} className="m-2 text-white" />
        </motion.div>
      </div>
    </div>
  );
}
