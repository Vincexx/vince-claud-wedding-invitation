import { motion } from "framer-motion";

// TypeScript React component
const PrenupVideo = () => {
  return (
    <>
      {/* RSVP Section */}
      <section className="flex flex-col items-center justify-center py-10 px-6 bg-white text-center border-b border-gray-100">
        <motion.div
          className="w-full max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/1jvKxg3ePP0?autoplay=1&mute=1&start=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default PrenupVideo;
