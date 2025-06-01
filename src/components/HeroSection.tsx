import { motion } from 'framer-motion';
import SaveTheDateCounter from './SaveTheDateCounter';

interface HeroSectionProps {
  bridesName: string;
  groomsName: string;
}

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const child = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const HeroSection: React.FC<HeroSectionProps> = ({ bridesName, groomsName }) => {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center bg-cover bg-center border-b border-gray-200"
      style={{ backgroundImage: "url('./images/wedding-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10">
        <p className="text-white font-serif text-md tracking-widest mb-4">
          THE WEDDING OF
        </p>

        <motion.h1
          className="text-7xl sm:text-8xl font-script text-white mb-2"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {bridesName.split('').map((char, i) => (
            <motion.span key={i} variants={child}>
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>

        <p className="font-script text-white text-2xl mb-2">&</p>

        <motion.h1
          className="text-7xl sm:text-8xl font-script text-white"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {groomsName.split('').map((char, i) => (
            <motion.span key={i} variants={child}>
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* <SaveTheDateCounter targetDate="2025-09-13T00:00:00" /> */}
      </div>
    </section>
  );
};

export default HeroSection;
