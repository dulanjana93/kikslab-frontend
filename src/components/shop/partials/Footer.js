import React, { Fragment } from "react";
import moment from "moment";
import { Link } from "react-router-dom"; // ✅ Added import

const Footer = () => {
  return (
    <Fragment>
      <footer
        style={{ background: "#1a1a1a", color: "#d4d4d4" }}
        className="z-10 py-8 px-4 md:px-12 text-center"
      >
        {/* Footer Container */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Section 1: Logo and Description */}
          <div className="text-left">
            <h2 className="text-xl font-bold text-white">KICKS LAB</h2>
            <p className="mt-2 text-sm text-gray-400">
              Premium shoes for every style and occasion. Shop with confidence
              and comfort.
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div className="text-left">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-white">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 3: Newsletter Subscription */}
          <div className="text-left">
            <h3 className="text-lg font-semibold text-white">Stay in Touch</h3>
            <p className="mt-2 text-sm text-gray-400">
              Subscribe to get the latest deals and updates.
            </p>
            <form className="mt-4 flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-gray-900 rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-red-500 text-white px-6 rounded-r-md hover:bg-red-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-4">
          <div className="flex justify-center items-center text-sm text-center">
            {/* Copyright Section */}
            <p>
              &copy; {moment().format("YYYY")} KICKS LAB. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
