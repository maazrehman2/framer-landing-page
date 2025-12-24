import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const navItems = [
    "How it works",
    "All apps",
    "Pricing",
    "For Teams",
    "Blog",
    "Podcast",
  ];

  return (
    <header className="w-full bg-[#26262B]">
      <div className="mx-auto flex items-center justify-between px-12 py-10 h-14">
        
        <div className="flex items-center">
          <img
            src="/header/header-logo.svg"
            alt="Logo"
            className="w-[20px] h-[32px] opacity-100"
          />
        </div>

        <nav className="flex items-center gap-6">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href="#"
              className="text-white font-medium text-[14px] leading-[25.76px] tracking-[0.9px] align-middle"
              style={{ fontFamily: "Avenir Next" }}
              whileHover={{ scale: 1.1, opacity: 0.8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item}
            </motion.a>
          ))}

          <span className="h-6 w-px bg-white/30 mx-2" />

          <img src='/header/en-logo.svg' alt="eng-logo"/>

          <motion.a
            href="#"
            className="text-white font-medium text-[14px] leading-[25.76px] tracking-[0.9px]"
            style={{ fontFamily: "Avenir Next" }}
            whileHover={{ scale: 1.1, opacity: 0.8 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Sign In
          </motion.a>

          <motion.button
            className="ml-2 h-[32px] px-[23px] rounded-[6px] border border-white text-white text-[14px] font-medium leading-[25.76px]"
            style={{ fontFamily: "Avenir Next" }}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Try free
          </motion.button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
