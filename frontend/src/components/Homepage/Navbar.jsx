import React from "react";
import { useState } from "react";
import { Component, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = {
    "/": ["Home","Services","Support","About-us"],
    "/home": ["Home","Services","Support","About-us"],
    "/livestream": ["Home","Services","Support", "About-us"],
    "/media_production": ["Home", "Services", "Support", "About-us"],
    "/about-us": ["Home","Services","Support","About-us"],
    "/esports": ["Home","Services","Support","About-us"],
  };

  // Select current navbar items
  const currentNavLinks = navItems[location.pathname] || [];

  return (
    <div className="bg-white shadow-md px-6 py-3 flex items-center justify-between sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="./logo.jpeg" alt="Logo" className="h-8" />
        <span className="text-xl font-bold text-black">ZARCUIT</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6 text-black">
        {currentNavLinks.map((item, index) => (
          <Link key={index} to={`/${item.toLowerCase().replace(" ", "-")}`} className="!hover:text-purple-800 text-black !no-underline">
            {item}
          </Link>
        ))}
      </div>

      {/* Right Section (Sign In/Sign Out) */}
      <div className="hidden md:flex items-center space-x-4">
        {location.pathname === "/profile" ? (
          <Button className="bg-red-500 text-white hover:bg-red-600">Logout</Button>
        ) : (
          <>
            <Link to="/login" style={{ textDecoration: "none"}} className="!text-gray-700 hover:text-red-200">Sign In</Link>
            <Button className="bg-purple-600 !text-black hover:bg-purple-700">Sign Up Now</Button>
          </>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <Menu className="w-6 h-6 text-gray-700" />
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 right-6 bg-white shadow-lg rounded-lg py-2 w-48 flex flex-col items-start">
          {currentNavLinks.map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase().replace(" ", "-")}`}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 w-full"
            >
              {item}
            </Link>
          ))}
          {location.pathname === "/profile" ? (
            <Button style={{ textDecoration: "none"}} className="w-full bg-red-500 text-white mt-2 hover:bg-red-600">
              Logout
            </Button>
          ) : (
            <>
              <Link to="/login" style={{ textDecoration: "none"}} className="px-4 py-2 tet text-gray-700 hover:bg-gray-100 w-full">
                Sign In
              </Link>
              <Button style={{ textDecoration: "none"}} className="w-full bg-purple-600 !text-black mt-2 hover:bg-purple-700">
                Sign Up Now
              </Button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
