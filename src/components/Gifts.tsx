import { motion } from "framer-motion";
import { Gift, Wallet } from "lucide-react"; // Gift 🎁 and Wallet 💵

const Gifts = () => {
  return (
    <>
      {/* Wedding Theme & Attire */}
      <section className="flex flex-col items-center justify-center py-16 px-6 bg-white text-center border-b border-gray-100">
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-2xl text-gray-900 mb-4 flex items-center justify-center gap-2">
            <Wallet className="w-6 h-6 text-green-600" />
            Notes On Gifts
            <Gift className="w-6 h-6 text-pink-600" />
          </h2>
          <p className="font-serif text-sm text-gray-700 mb-6 leading-relaxed">
            If you were thinking of giving a gift to help us on our way, a gift of cash towards our house would really make our day. 
            However, if you prefer to purchase a gift, feel free to surprise us in your own special way.
          </p>
        </motion.div>
      </section>
    </>
  );
};

export default Gifts;
