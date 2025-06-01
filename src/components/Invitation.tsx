import { motion } from "framer-motion";

const Invitation = () => {
  return (
    <>
      {/* RSVP Section */}
      <section className="flex flex-col items-center justify-center py-10 px-6 bg-white text-center border-b border-gray-100">
        <motion.div
          className="max-w-xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="./images/invi.jpg"
            alt="Invitation"
            className="rounded-xl shadow-lg w-full max-w-2xl"
          />
        </motion.div>
      </section>
    </>
  );
};

export default Invitation;
