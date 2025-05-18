
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const bridesName = 'Claud';
const groomsName = 'Vince';

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
      <section
      className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-cover bg-center"
      style={{ backgroundImage: "url('./images/wedding-bg.jpg')" }}
    >

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 text-center">
      <p className='text-white font-serif font-bold mb-4'>THE WEDDING OF</p>
      <motion.h1
        className="text-8xl font-script text-white"
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

        <p className='font-script text-white mb-4'>AND</p>
        <motion.h1
        className="text-8xl font-script text-white"
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
      </div>
    </section>

    <section className="flex flex-col items-center justify-center py-10 sm:py-20 bg-white text-center">
      <p className="max-w-xl font-serif text-lg text-gray-800 mb-6 tracking-wide">
        Together with their families, Claudette and Vince joyfully invite you to join them in celebrating their love and commitment.
      </p>
      
      <p className="font-serif italic text-gray-700 text-md mb-1">
        Save the Date — September 13, 2025
      </p>
      
      <p className="font-serif italic text-gray-700 text-md mb-8">
        At the Antel Grand Village, General Trias, Cavite
      </p>
      
      <p className="font-serif text-gray-700 text-sm">
        We can’t wait to share this special day with you!
      </p>
    </section>
    
    <Footer />

    </>
  )
}

export default Home