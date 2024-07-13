import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-lg font-semibold">About Us</h2>
            <p className="mt-2 text-sm">
              We are committed to providing
            </p>
            <p>the best movie recommendations.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-lg font-semibold">Quick Links</h2>
            <ul className="mt-2 text-sm">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a className="hover:cursor-pointer">Movies</a></li>
              <li><a className="hover:cursor-pointer">TV Shows</a></li>
              <li><a className="hover:cursor-pointer">Contact Us</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="text-lg font-semibold">Follow Us</h2>
            <div className="mt-2 flex space-x-4">
              <a href="https://facebook.com" className="hover:underline">Facebook</a>
              <a href="https://twitter.com" className="hover:underline">Twitter</a>
              <a href="https://instagram.com" className="hover:underline">Instagram</a>
              <a href="www.linkedin.com/in/ravi-shankar-5293b12a3" className="hover:underline">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} MovieApp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
