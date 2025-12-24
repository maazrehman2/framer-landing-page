import React from "react";
import { motion } from "framer-motion";

const TestimonialCard = ({ text, name, handle, bg, icon }) => {
  return (
    <motion.div
      className="w-[380px] h-[422px] rounded-[15px] overflow-hidden bg-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className={`${bg} h-[300px] p-8 text-white`}>
        <p className="text-[26px] leading-[36.92px] font-medium">{text}</p>
      </div>

      <div className="h-[122px] px-6 py-4 flex items-center justify-between bg-[#F5F5F5]">
        <div>
          <p className="text-[18px] font-semibold leading-[32.04px] text-black">
            {name}
          </p>
          <p className="text-[14px] font-semibold leading-[24.92px] text-black/60">
            {handle}
          </p>
        </div>

        <div className="w-8 h-8 flex items-center justify-center">
          <img src={icon} alt={icon} />
        </div>
      </div>
    </motion.div>
  );
};

// const MusicSection = () => {
//   return (
//     <motion.div
//       className="bg-[#7B4D73] relative rounded-[20px] h-[720px] overflow-hidden flex items-center"
//       initial={{ opacity: 0, scale: 0.95 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.8 }}
//       viewport={{ once: true }}
//     >
//       <div className="z-10 max-w-[420px] ml-16 text-white">
//         <p className="text-[18px] leading-[32.04px] opacity-90">
//           Musicians like Jason use Setapp to push the limits of their
//           creativity, dancing through task for more time to play.
//         </p>
//         <p className="mt-4 text-sm opacity-70">Jason Stacz</p>
//       </div>
//       <div className="absolute right-3 top-10 flex justify-end">
//         <img src="/SetApp/right-arrow.svg" alt="left-arrow" />
//       </div>
//       <div className="absolute right-12 top-10 flex justify-end">
//         <img src="/SetApp/left-arrow.svg" alt="right-arrow" />
//       </div>

//       <div className="absolute right-0 bottom-0 h-full flex items-end pr-[90px]">
//         <img
//           src="/SetApp/man-image.svg"
//           alt="Jason"
//           className="h-[95%] object-contain"
//         />
//       </div>

//       <img
//         src="/SetApp/play-btn.svg"
//         alt="play-btn"
//         className="absolute left-10 bottom-20 w-12 h-12 bg-white rounded-full flex items-center justify-center z-10"
//       />
//     </motion.div>
//   );
// };


const MusicSection = () => {
  return (
    <motion.div
      className="
        bg-[#7B4D73]
        relative
        rounded-[20px]
        h-[720px]
        overflow-hidden
        flex
        items-center
        w-full
        max-w-[1335px]
        mx-auto
      "
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="z-10 max-w-[420px] ml-16 text-white">
        <p className="text-[18px] leading-[32.04px] opacity-90">
          Musicians like Jason use Setapp to push the limits of their
          creativity, dancing through task for more time to play.
        </p>
        <p className="mt-4 text-sm opacity-70">Jason Stacz</p>
      </div>

      <div className="absolute right-3 top-10">
        <img src="/SetApp/right-arrow.svg" alt="right-arrow" />
      </div>

      <div className="absolute right-12 top-10">
        <img src="/SetApp/left-arrow.svg" alt="left-arrow" />
      </div>

      <div className="absolute right-0 bottom-0 h-full flex items-end pr-[90px]">
        <img
          src="/SetApp/man-image.svg"
          alt="Jason"
          className="h-[95%] object-contain"
        />
      </div>

      <img
        src="/SetApp/play-btn.svg"
        alt="play-btn"
        className="absolute left-10 bottom-20 w-12 h-12 bg-white rounded-full z-10"
      />
    </motion.div>
  );
};

const PlanSection = () => {
  return (
    <motion.div
      className="mt-24 bg-[#F5F5F5] rounded-[20px] p-10 flex flex-col py-[7rem] items-start justify-between"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <img src="/SetApp/company-logo.svg" alt="firm-white-logo" />
      <div className="pr-[378px] my-[2rem]">
        <h3 className="text-[46px] font-semibold text-black tracking-[1.5px]">
          Superpowers starting $9.99/month.
        </h3>
        <p className="text-[46px] font-semibold text-black">Free for 7 days.</p>
      </div>

      <div className="flex gap-4">
        <button className="w-[193px] h-[50px] bg-black text-white rounded-[6px] px-[31px] py-[13px]">
          Get started now
        </button>

        <button className="w-[220px] h-[50px] border border-black rounded-[6px] px-[31px] py-[13px]">
          More about Setapp
        </button>
      </div>
    </motion.div>
  );
};

const SetappSection = () => {
  return (
    <section className="bg-white relative py-20 font-avenir pb-[15rem]">
      <div className="absolute top-[-25rem] left-1/2 -translate-x-1/2 w-[1335px] pb-[30rem]">
        <MusicSection />
      </div>

      <div className="max-w-[1355px] mx-auto px-6">
        <div className="mt-[20rem]">
          <div className="flex items-center justify-between px-[3.5rem]">
            <motion.h2
              className="text-black text-[36px] font-semibold leading-[47.88px] tracking-[1.3px]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Setapp in your words.
            </motion.h2>

            <div className="flex items-center gap-16">
              <motion.p
                className="text-black text-[18px] leading-[32.04px] max-w-[265px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                What you say about how Setapp powers you up.
              </motion.p>

              <div className="flex gap-3">
                {[
                  "/SetApp/fb-logo.svg",
                  "/SetApp/x-logo.svg",
                  "/SetApp/insta-logo.svg",
                  "/SetApp/yt-logo.svg",
                ].map((icon) => (
                  <motion.div
                    key={icon}
                    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center opacity-90"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <img src={icon} alt="icon" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-end px-12 gap-16 mt-8">
            <img src="/SetApp/left-arrow.svg" alt="right-arrow" />
            <img src="/SetApp/right-arrow.svg" alt="left-arrow" />
          </div>

          <div className="flex gap-6 mt-12 justify-center">
            <TestimonialCard
              text="Have been using Setapp for almost two years, and I have to say it's the best and the most cost-effective way of having apps on Mac."
              name="Arash Pourahibi"
              handle="@ArashPourahibi"
              bg="bg-[#6F7196]"
              icon="/SetApp/x-card-logo.svg"
            />

            <TestimonialCard
              text="My favorites ❤️ from @Setapp Ulysses, CleanMyMac X, Paste, MindNode, Swift Publisher."
              name="Mauricio Sanchez"
              handle="@m741s"
              bg="bg-[#D6B38A]"
              icon="/SetApp/insta-card-logo.svg"
            />

            <TestimonialCard
              text="For those of you that wonder where I discover/get all the awesome apps for my Mac that I use, a lot of them are from Setapp!"
              name="Meredith Sweet"
              handle="@meredith.sweet.silberstein"
              bg="bg-[#6B4E6B]"
              icon="/SetApp/fb-card-logo.svg"
            />
          </div>

          <img
            src="/SetApp/pagination.svg"
            alt="pagination"
            className="mt-8 mx-auto"
          />
        </div>

        <div className="absolute bottom-[-30rem] left-1/2 -translate-x-1/2 w-[1335px]">
          <PlanSection />
        </div>
      </div>
    </section>
  );
};

export default SetappSection;
