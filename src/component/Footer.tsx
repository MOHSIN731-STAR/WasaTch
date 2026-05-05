import React from "react";
// import { Linkedin } from "lucide-react"; // optional icon lib

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0f1c2e] to-[#13263b] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        
        {/* Logo Section */}
        <div className="flex flex-col items-start space-y-4">
          <img
            src="/logo.png" // replace with your logo path
            alt="Wasatch Health"
            className="w-36 object-contain"
          />
        </div>

        {/* Address */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Address</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            299 S Main Street, #2300 <br />
            Salt Lake City, UT 84111
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Contact</h3>
          <p className="text-sm text-gray-300 mb-4">
            contact@wasatch-health.com
          </p>

          {/* Social Icon */}
          {/* <div className="flex items-center space-x-3">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-white text-black rounded-sm hover:bg-gray-200 transition"
            >
              <Linkedin size={16} />
            </a>
          </div> */}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-600 mt-10 pt-4 text-center text-xs text-gray-400">
        Copyright © 2025 Wasatch Health, LLC | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;