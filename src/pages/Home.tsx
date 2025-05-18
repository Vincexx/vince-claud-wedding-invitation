
import { motion } from 'framer-motion';

const text = 'Claudette and Vince';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const child = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-[#F9F5F0]">
        <motion.h1
        className="text-6xl font-script text-[#4A2C21] mb-4 flex flex-wrap"
        variants={container}
        initial="hidden"
        animate="visible"
        >
          {text.split('').map((char, i) => (
            <motion.span key={i} variants={child}>
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>
      </div>

    </>
  )
}

export default Home