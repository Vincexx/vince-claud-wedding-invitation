import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import WeddingGallery from '../components/WeddingGallery';
import HeroSection from '../components/HeroSection';

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
      {/* Hero Section */}
      <HeroSection bridesName={bridesName} groomsName={groomsName} />

      {/* Invitation Details */}
      <section className="flex flex-col items-center justify-center py-16 px-6 text-center border-gray-100 bg-white">
        <motion.h2
          className="text-2xl sm:text-3xl font-serif text-gray-900 mb-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Save the Date
        </motion.h2>

        <motion.div
          className="bg-gray-100 rounded-full px-6 py-2 mb-6 shadow-sm"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-xl sm:text-2xl font-serif text-gray-800 tracking-wider">
            September 13, 2025
          </p>
        </motion.div>

        <motion.p
          className="max-w-xl font-serif text-lg text-gray-700 mb-6 tracking-wide"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Together with their families, Claudette and Vince joyfully invite you to join them in celebrating their love and commitment.
        </motion.p>

        <p className="font-serif text-gray-500 text-sm">
          We can’t wait to share this special day with you!
        </p>
      </section>


      {/* Roadmap: Ceremony & Reception */}
      <section className="flex flex-col items-center justify-center py-16 px-6 bg-gray-50 text-center border-y border-gray-200">
        <div className="relative border-l border-gray-300 max-w-xl mx-auto">

          {/* Ceremony */}
          <div className="mb-10 ml-6 relative">
            <span className="absolute -left-3 top-1 w-6 h-6 bg-white border-4 border-gray-100 rounded-full"></span>
            <h3 className="font-serif text-lg text-gray-800 mb-2">Ceremony</h3>
            <p className="font-serif text-sm text-gray-600 mb-2">
              <strong>St. Francis of Assisi Parish</strong><br />
              9:00 AM
            </p>
            <a
              href="https://maps.app.goo.gl/PN4YjZmKPT8EjqVn8"
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif text-sm underline text-gray-500 hover:text-gray-800"
            >
              View on Google Maps
            </a>
          </div>

          {/* Reception */}
          <div className="ml-6 relative">
            <span className="absolute -left-3 top-1 w-6 h-6 bg-white border-4 border-gray-100 rounded-full"></span>
            <h3 className="font-serif text-lg text-gray-800 mb-2">Reception</h3>
            <p className="font-serif text-sm text-gray-600 mb-2">
              <strong>Antel Grand Ballroom</strong><br />
              General Trias, Cavite — <strong>TBD</strong>
            </p>
            <a
              href="https://maps.app.goo.gl/QMaEeDXsvW9Jwtpq5"
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif text-sm underline text-gray-500 hover:text-gray-800"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </section>

      
      {/* Wedding Theme & Attire */}
      <section className="flex flex-col items-center justify-center py-16 px-6 bg-white text-center border-b border-gray-100">
        <div className="max-w-xl">
          <h2 className="font-serif text-2xl text-gray-900 mb-4">Wedding Theme & Attire</h2>
          <p className="font-serif text-sm text-gray-700 mb-6 leading-relaxed">
            Our wedding will be styled in a soft, timeless, and elegant aesthetic — a blend of whites, neutrals, and gentle gold accents.
            We kindly ask our beloved guests to dress in formal or semi-formal attire.
          </p>

          <p className="font-serif text-sm text-gray-700 mb-4 leading-relaxed">
            <span className="font-semibold">Color Motif:</span> Shades of Brown and Earth Tones.
            Guests are encouraged to wear tones that harmonize with the "Family of Brown" palette.
          </p>

          {/* Color Circles */}
          <div className="flex justify-center gap-3 mb-6">
            <span className="w-10 h-10 rounded-full bg-[#A9746E]" title="Rosewood"></span>
            <span className="w-10 h-10 rounded-full bg-[#C3A38A]" title="Desert Sand"></span>
            <span className="w-10 h-10 rounded-full bg-[#E6D3B3]" title="Ivory Beige"></span>
            <span className="w-10 h-10 rounded-full bg-[#8B5E3C]" title="Chestnut Brown"></span>
            <span className="w-10 h-10 rounded-full bg-[#5D4633]" title="Mocha"></span>
          </div>

          <p className="font-serif text-sm text-gray-500 italic">
            Let your elegance shine. Thank you for helping us bring our theme to life.
          </p>
        </div>
      </section>
            
      <WeddingGallery />

      {/* Guest Notice */}
      <section className="flex flex-col items-center justify-center py-10 px-6 bg-white text-center border-gray-100">
        <div className="border border-gray-200 rounded-xl px-6 py-5 shadow-sm max-w-xl bg-gray-50">
          <p className="font-serif text-gray-700 text-sm leading-relaxed">
            Kindly note that due to limited capacity, we can only accommodate guests who have confirmed their attendance through this website.
            We appreciate your understanding and look forward to celebrating with you!
          </p>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="flex flex-col items-center justify-center py-10 px-6 bg-white text-center border-b border-gray-100">
        <div className="max-w-xl text-center">
          <h2 className="font-serif text-2xl text-gray-900 mb-4">Kindly RSVP</h2>
          <p className="font-serif text-sm text-gray-700 mb-6">
            Please confirm your attendance by filling out the RSVP form.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf9hfXSt-Liafd88jPKWGt0GE6NlNQi20Bi3M8Tq1jRMw9qTw/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#5D4633] hover:bg-white hover:text-black text-white font-serif text-sm py-3 px-6 rounded-full transition duration-300 shadow-md"
          >
            Fill Out RSVP Form
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
