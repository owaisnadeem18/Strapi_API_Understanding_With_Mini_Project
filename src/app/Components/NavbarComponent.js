import Link from 'next/link';
import React from 'react';

const NavbarComponent = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl font-bold">
          <Link href="/" className="hover:underline">
            Blogs Website Using Strapi
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-lg font-medium">
          <li>
            <Link
              href="/"
              className="hover:text-gray-300 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-gray-300 transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="hover:text-gray-300 transition duration-300"
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarComponent;
