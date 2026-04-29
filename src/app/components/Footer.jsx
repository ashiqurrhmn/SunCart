import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-gray-300">
      <div className="w-9/12 mx-auto px-4 sm:px-8 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">SunCart</h2>
          <p className="text-sm">
            Your one-stop shop for all summer essentials. Stay cool, stay
            stylish.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-orange-400">
                T-Shirts
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                Caps
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                Half Pants
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                Tank Tops
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-orange-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Stay Updated</h3>
          <p className="text-sm mb-3">Get offers & updates in your inbox.</p>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} SunCart. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
