import { motion } from 'framer-motion';
import { useMemo } from 'react';

const images = [
  './images/1.jpg',
  './images/2.jpg',
  './images/3.jpg',
  './images/4.jpg',
  './images/5.jpg',
  './images/6.jpg',
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const WeddingGallery = () => {
  const isMobile = useMemo(() => {
    if (typeof window !== 'undefined') {
      return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        window.navigator.userAgent
      );
    }
    return false;
  }, []);

  const tapEffect = {
    scale: 0.95,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  };

  return (
    <section className="py-16 px-6 bg-white text-center border-b border-gray-100">
      <h2 className="font-serif text-2xl text-gray-900 mb-10">Our Prenup Moments</h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg cursor-pointer"
            variants={itemVariants}
            whileHover={!isMobile ? { scale: 1.05 } : undefined}
            whileTap={isMobile ? tapEffect : undefined}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <img
              src={src}
              alt={`Wedding moment ${index + 1}`}
              className="w-full h-64 object-cover"
              loading="lazy"
              tabIndex={0}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WeddingGallery;
