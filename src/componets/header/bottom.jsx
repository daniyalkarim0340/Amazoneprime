import React, { useEffect, useRef, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { FaTimes, FaChevronDown, FaGlobeAsia } from "react-icons/fa";
import ReactCountryFlag from "react-country-flag";

const SUBheader = () => {
  
  const [sidebar, setSidebar] = useState(false);
  const [viewall, setViewall] = useState(false);

  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setSidebar(false);
      }
    };

    if (sidebar) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebar]);

  return (
    <div className="w-full bg-slate-900 text-white py-2 px-3 sm:px-4 md:px-6 lg:px-10 flex items-center justify-between gap-2 relative">
   
      <ul className="flex gap-2 sm:gap-4 md:gap-8 text-xs sm:text-sm items-center ml-0 md:ml-5 tracking-wide flex-wrap md:flex-nowrap">
        <li
          onClick={() => setSidebar(true)}
          className="border border-transparent hover:border-white cursor-pointer duration-100 flex items-center gap-1 py-1"
        >
          <HiOutlineMenu className="text-2xl md:text-3xl" />
          <span className="hidden sm:inline mt-0.5">All</span>
        </li>
        <li className="border border-transparent hover:border-white cursor-pointer duration-100 hidden sm:block py-1">Deals</li>
        <li className="border border-transparent hover:border-white cursor-pointer duration-100 hidden md:block py-1">Prime Video</li>
        <li className="border border-transparent hover:border-white cursor-pointer duration-100 hidden md:block py-1">Lists</li>
        <li className="border border-transparent hover:border-white cursor-pointer duration-100 hidden lg:block py-1">Gift Cards</li>
        <li className="border border-transparent hover:border-white cursor-pointer duration-100 hidden lg:block py-1">Customer Services</li>
        <li className="border border-transparent hover:border-white cursor-pointer duration-100 hidden lg:block py-1">Sell</li>
      </ul>

      
      {sidebar && <div className="fixed inset-0 bg-black/40 z-40"></div>}

      
      {sidebar && (
        <div
          ref={sidebarRef}
          className="fixed top-0 left-0 w-64 sm:w-72 h-screen bg-white text-black shadow-lg z-50 flex flex-col overflow-hidden"
        >
          <div className="bg-blue-950 flex items-center justify-between p-3 sm:p-4">
            <h1 className="text-base sm:text-lg font-bold text-white">Hello, login</h1>
            <FaTimes
              className="text-white text-xl sm:text-2xl cursor-pointer"
              onClick={() => setSidebar(false)}
            />
          </div>
          <div className="flex-1 overflow-y-auto">
            <ul className="flex flex-col p-3 sm:p-4 gap-3 sm:gap-4">
              <h1 className="font-black text-lg sm:text-2xl">Digital content & devices</h1>
              <li className="hover:bg-gray-200 p-2 rounded flex justify-between items-center">Prime Video <FaChevronDown /></li>
              <li className="hover:bg-gray-200 p-2 rounded flex justify-between items-center">Amazon Music <FaChevronDown /></li>
              <li className="hover:bg-gray-200 p-2 rounded flex justify-between items-center">Kindle e-Reader <FaChevronDown /></li>
              <li className="hover:bg-gray-200 p-2 rounded flex justify-between items-center">Amazon Appstore <FaChevronDown /></li>
            </ul>

            <div className="border-b border-gray-300 my-2"></div>

            <ul className="flex flex-col p-3 sm:p-4 gap-3 sm:gap-4">
              <h1 className="font-black text-lg sm:text-2xl">Shop by Department</h1>
              <li className="hover:bg-gray-200 p-2 rounded flex justify-between items-center">Electronics <FaChevronDown /></li>
              <li className="hover:bg-gray-200 p-2 rounded flex justify-between items-center">Computers <FaChevronDown /></li>
              <li className="hover:bg-gray-200 p-2 rounded flex justify-between items-center">Smart Home <FaChevronDown /></li>
              <li className="hover:bg-gray-200 p-2 rounded flex justify-between items-center">Arts & Crafts <FaChevronDown /></li>

              {viewall && (
                <li className="hover:bg-gray-200 p-2 rounded border-b border-gray-300">Amazon Second Chance</li>
              )}

              <li
                onClick={() => setViewall(!viewall)}
                className="hover:bg-gray-200 p-2 rounded flex justify-between items-center border-b border-gray-300 cursor-pointer"
              >
                <span>{viewall ? "Show Less" : "View All"}</span>
                <FaChevronDown className={`${viewall ? "rotate-180" : ""} transition-transform`} />
              </li>
            </ul>

            <div className="border-b border-gray-300 my-2"></div>

            <ul className="flex flex-col p-3 sm:p-4 gap-3 sm:gap-4">
              <h1 className="font-black text-lg sm:text-2xl">Help & Settings</h1>
              <li className="hover:bg-gray-200 p-2 rounded font-bold">Your account</li>
              <li className="hover:bg-gray-200 p-2 gap-3 rounded flex"><FaGlobeAsia className="mt-1.5" /> Spanish</li>
              <li className="hover:bg-gray-200 p-2 gap-3 rounded flex">
                <ReactCountryFlag countryCode="PK" svg className="w-6 h-6 mt-1" /> Pakistan
              </li>
              <li className="hover:bg-gray-200 p-2 rounded">Customer Services</li>
              <li className="hover:bg-gray-200 p-2 rounded">Log in</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SUBheader;