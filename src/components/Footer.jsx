import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Wadau Music Group.</h2>
            <p className="text-gray-400">Follow us on social media:</p>
            <div className="flex space-x-4 mt-2">
              <a href="#b" className="text-gray-400 hover:text-white">
                <FaFacebookF size={24} />
              </a>
              <a href="#b" className="text-gray-400 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="#b" className="text-gray-400 hover:text-white">
                <FaInstagram size={24} />
              </a>
              <a href="#b" className="text-gray-400 hover:text-white">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
          <div>
            <p className="text-gray-400">&copy; 2024 Sammienator Inc. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
