import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const contentVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const floatVariants = {
    float: {
      y: [0, -10, 0],
      transition: { repeat: Infinity, duration: 4, ease: "easeInOut" },
    },
  };

  return (
    <section className="relative bg-[#26262B] text-white overflow-hidden min-h-[900px]">
      <motion.div
        className="relative z-10 flex flex-col items-center text-center pt-24 max-w-7xl mx-auto"
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.img
          src="hero-section/black-icon.svg"
          alt="Logo"
          className="w-[160px] h-[160px] opacity-100 mb-8"
          whileHover={{ scale: 1.05 }}
        />

        <h1
          className="font-bold text-[64px] leading-[67.84px] tracking-[1px] mb-8"
          style={{ fontFamily: "Avenir Next" }}
        >
          Dozens of apps.
          <br />
          One subscription.
          <br />
          $9.99
        </h1>

        <div className="flex items-center gap-4 mb-6">
          <motion.button
            className="h-[52px] px-[32px] py-[14px] rounded-[6px] border text-black bg-white"
            style={{ fontFamily: "Avenir Next" }}
            whileHover={{ scale: 1.05 }}
          >
            Try free for 7 days
          </motion.button>

          <motion.button
            className="h-[52px] w-[62px] flex items-center justify-center rounded-[6px] border bg-white"
            whileHover={{ scale: 1.05 }}
          >
            <img src="hero-section/apple-logo.svg" alt="Apple" />
          </motion.button>

          <motion.button
            className="h-[52px] w-[62px] flex items-center justify-center rounded-[6px] border bg-white"
            whileHover={{ scale: 1.05 }}
          >
            <img src="hero-section/google.svg" alt="Google" />
          </motion.button>
        </div>

        <p className="text-sm opacity-80 max-w-[250px]">
          Power up your workflow with Setapp, a smart way to get apps.
        </p>
      </motion.div>

      {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl pointer-events-none">
        {[
          { src: "hero-section/work.svg", top: 120, left: 60, w: 163, rotate: -12 },
          { src: "hero-section/macpaw.svg", top: 250, left: 70, w: 48 },
          { src: "hero-section/pdf.svg", top: 250, left: 140, w: 132, rotate: 18 },
          { src: "hero-section/teamwork.svg", top: 420, left: 80, w: 217, rotate: -8 },
          { src: "hero-section/secure.svg", top: 510, left: 60, w: 180, rotate: 12 },
        ].map((img, idx) => (
          <motion.img
            key={idx}
            src={img.src}
            className={`absolute top-[${img.top}px] left-[${img.left}px] w-[${img.w}px]`}
            style={{ rotate: img.rotate ? `${img.rotate}deg` : 0 }}
            variants={floatVariants}
            animate="float"
          />
        ))}
      </div> */}

      {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl pointer-events-none">
        {[
          { src: "hero-section/wifi.svg", top: 100, right: 70, w: 190, rotate: 1 },
          { src: "hero-section/plan.svg", top: 160, right: 170, w: 160, rotate: -12, z: 20 },
          { src: "hero-section/converter.svg", top: 280, right: 80, w: 145, z: 10 },
          { src: "hero-section/manage.svg", top: 380, right: 120, w: 220, rotate: 2 },
          { src: "hero-section/code.svg", top: 480, right: 140, w: 142, rotate: 1 },
        ].map((img, idx) => (
          <motion.img
            key={idx}
            src={img.src}
            className={`absolute top-[${img.top}px] right-[${img.right}px] w-[${img.w}px] z-[${img.z || 0}]`}
            style={{ rotate: img.rotate ? `${img.rotate}deg` : 0 }}
            variants={floatVariants}
            animate="float"
          />
        ))}
      </div> */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl pointer-events-none">
        {[
          {
            src: "hero-section/work.svg",
            top: 120,
            left: 60,
            w: 163,
            rotate: -12,
          },
          { src: "hero-section/macpaw.svg", top: 250, left: 70, w: 48 },
          {
            src: "hero-section/pdf.svg",
            top: 250,
            left: 140,
            w: 132,
            rotate: 18,
          },
          {
            src: "hero-section/teamwork.svg",
            top: 420,
            left: 80,
            w: 217,
            rotate: -8,
          },
          {
            src: "hero-section/secure.svg",
            top: 510,
            left: 60,
            w: 180,
            rotate: 12,
          },
        ].map((img, idx) => (
          <motion.img
            key={idx}
            src={img.src}
            className="absolute"
            style={{
              top: img.top,
              left: img.left,
              width: img.w,
              rotate: img.rotate || 0,
            }}
            variants={floatVariants}
            animate="float"
          />
        ))}
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl pointer-events-none">
        {[
          {
            src: "hero-section/wifi.svg",
            top: 100,
            right: 70,
            w: 190,
            rotate: 1,
          },
          {
            src: "hero-section/plan.svg",
            top: 160,
            right: 170,
            w: 160,
            rotate: -12,
            z: 20,
          },
          {
            src: "hero-section/converter.svg",
            top: 280,
            right: 80,
            w: 145,
            z: 10,
          },
          {
            src: "hero-section/manage.svg",
            top: 380,
            right: 120,
            w: 220,
            rotate: 2,
          },
          {
            src: "hero-section/code.svg",
            top: 480,
            right: 140,
            w: 142,
            rotate: 1,
          },
        ].map((img, idx) => (
          <motion.img
            key={idx}
            src={img.src}
            className="absolute"
            style={{
              top: img.top,
              right: img.right,
              width: img.w,
              zIndex: img.z || 0,
              rotate: img.rotate || 0,
            }}
            variants={floatVariants}
            animate="float"
          />
        ))}
      </div>

      <div className="mt-[13rem] h-px bg-white/30 mx-12" />
    </section>
  );
};

export default HeroSection;
