import React from "react";
import { useState } from "react";
import { Component, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = {
    "/": ["Movies","Reviews","About us","Support","Explore our services"],
  };


  const currentNavLinks = navItems[location.pathname] || [];

  return (
    <div className="bg-dark rounded-b-md shadow-md px-6 py-3 flex items-center justify-between " >

      <div className="flex bg-dark items-center space-x-2">
        <img src="./logo.jpeg" alt="Logo" className="h-8" />
        <span className="text-xl font-bold text-white">ZARCUTE</span>
      </div>


      <div className="hidden bg-dark md:flex items-center space-x-6 text-grey-700">
        {currentNavLinks.map((item, index) => (
          <Link key={index} to={`/${item.toLowerCase().replace(" ", "-")}`} style={{ textDecoration: "none"}} className=" bg-dark hover:text-black">
            {item}
          </Link>
        ))}
      </div>


      <div className="hidden md:flex items-center space-x-4">
        {location.pathname === "/profile" ? (
          <Button className="bg-red-500 text-white hover:bg-red-600">Logout</Button>
        ) : (
          <div className="bg-dark">
            <Link to="/login" style={{ textDecoration: "none"}} className="text-gray-700 bg-dark hover:text-black">Sign In</Link>
            <Button className="bg-dark text-white hover:bg-purple-700">Sign Up Now</Button>
          </div>
        )}
      </div>


      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <Menu className="w-6 h-6 text-gray-700" />
      </button>

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
              <Button style={{ textDecoration: "none"}} className="w-full bg-purple-600 text-white mt-2 hover:bg-purple-700">
                Sign Up Now
              </Button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
