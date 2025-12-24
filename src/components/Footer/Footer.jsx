import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#2B2D32] text-white font-avenir mt-[15rem] pt-[15rem]">
      <div className="mx-auto px-12 pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-4">
            <div className="flex items-center gap-2 text-lg font-medium mb-[3rem]">
              <img src="/footer/footer-logo.svg" alt="footer-logo" />
              <span className="tracking-widest">SETAPP</span>
            </div>

            <p className="text-sm text-gray-300">
              Updates from our team, written with love 🧡
            </p>

            <div className="flex w-full max-w-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-[#3A3D44] text-sm text-white placeholder-gray-400 outline-none"
              />
              <button className="bg-white px-4 flex items-center justify-center">
                <span className="text-black text-lg">→</span>
              </button>
            </div>

            <div>
              <button className="mt-[10rem] bg-[#969799] font-semibold p-2 text-[11px]">DMCA</button>
              <button className="bg-[#404547] font-semibold p-2 text-[11px]">PROTECTED</button>
            </div>
          </div>

          <div className="flex gap-12 lg:col-span-8 justify-end">
            <ul className="space-y-1 text-[16px] leading-[32px] font-normal">
              <li>Home</li>
              <li>How It Works</li>
              <li>All Apps</li>
              <li>Pricing</li>
              <li>Setapp for Teams</li>
              <li>Blog</li>
              <li>Podcast</li>
              <li>Download</li>
            </ul>

            <ul className="space-y-1 text-[16px] leading-[32px] font-normal">
              <li>About</li>
              <li>Support</li>
              <li>Education Discount</li>
              <li>Family Plan</li>
              <li>For Developers</li>
              <li>Gift Cards</li>
              <li>Redeem Card or Code</li>
              <li>Setapp Reviews</li>
              <li>Affiliate Program</li>
              <li>Mac Developer Survey 2023</li>
            </ul>

            <ul className="space-y-1 text-[16px] leading-[32px] font-normal">
              <li>Getting started with Setapp</li>
              <li>Remote access to other Mac</li>
              <li>Fix macOS Ventura problems</li>
              <li>Best productivity apps</li>
              <li>Best YouTube downloaders</li>
              <li>Uninstall apps</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#E5E5E5] mt-16 pt-6 flex justify-between items-start">
          <div className="flex flex-col gap-4">
            <p className="text-[12px] leading-[21.36px] text-gray-400">
              © 2023 Setapp Limited, 9 Tallow Street, Youghal, Co. Cork,
              P36YE14, Ireland. Reg. 584165. VAT ID: IE3425001BH
            </p>

            <div className="flex gap-6 text-[12px] leading-[21.36px] text-gray-400">
              <span className="cursor-pointer">Terms of Use</span>
              <span className="cursor-pointer">Privacy Policy</span>
            </div>

          </div>
            <div className="flex gap-2">
              {[
                "/footer/fb-footer-logo.svg",
                "/footer/insta-footer-logo.svg",
                "/footer/x-footer-log.svg",
                "/footer/yt-footer-logo.svg",
              ].map((image) => (
                <img
                  key={image}
                  src={image}
                  alt={image}
                  className="w-6 h-6 object-contain"
                />
              ))}
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
