import React from "react";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <section className="bg-[#26262B] text-white px-6 py-24 pb-[30rem]">
      <div className="max-w-7xl mx-auto">

        <motion.div
          className="flex justify-between items-start mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            custom={1}
            variants={fadeUpVariant}
            className="text-[36px] leading-[51.84px] tracking-[1px] font-semibold"
            style={{ fontFamily: "Avenir Next" }}
          >
            What you get on Setapp.
          </motion.h2>

          <motion.p
            custom={2}
            variants={fadeUpVariant}
            className="text-[18px] leading-[32.04px] max-w-[545px] opacity-80"
            style={{ fontFamily: "Avenir Next" }}
          >
            With a single monthly subscription at $9.99, you get 240+ apps for your Mac.
          </motion.p>
        </motion.div>

        <motion.div
          className="bg-pink-300 rounded-[20px] h-[605px] w-full mb-4 p-[60px] flex justify-between"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="features-section/mac-clean-img.svg"
            alt=""
            className="w-full h-full object-cover rounded-[20px]"
          />
        </motion.div>

        <div className="grid grid-cols-2 gap-3 mb-[7rem]">
          {[
            { src: "features-section/code-img.svg", bg: "#F7F3EA" },
            { src: "features-section/meeting-img.svg", bg: "#33466B" },
          ].map((card, idx) => (
            <motion.div
              key={idx}
              className={`rounded-[20px] h-[632px] p-8 flex flex-col justify-between`}
              style={{ backgroundColor: card.bg }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={card.src}
                alt=""
                className="w-full h-full object-cover rounded-[20px]"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex justify-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <button
            className="flex items-center gap-2 text-[20px] leading-[30px] tracking-[1.6px] font-medium"
            style={{ fontFamily: "Avenir Next" }}
          >
            <img src="/features-section/arrow-right.svg" alt="arrow-right" />
            View all superpowers
          </button>
        </motion.div>

        <motion.div
          className="flex justify-between items-start border-b border-white/30 pt-10 pb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3
            className="text-[36px] leading-[51.84px] max-w-[400px]"
            style={{ fontFamily: "Avenir Next" }}
          >
            Your Setapp journey.
          </h3>

          <p
            className="text-[18px] leading-[32.04px] max-w-[545px] opacity-80"
            style={{ fontFamily: "Avenir Next" }}
          >
            Type in your task into Setapp search and get instant app recommendations.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturesSection;
