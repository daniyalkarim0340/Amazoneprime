import React, { useState } from "react";
import { FaAmazon, FaChevronDown, FaSearch } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import ReactCountryFlag from "react-country-flag";
import { HiOutlineShoppingCart } from "react-icons/hi";
import SUBheader from "./bottom";
import Bottom from "./hbottom";
import Heading from "../heading/index";
import Paragraph from "../para/index";
import NButton from "../button/index";

const countries = [
  { code: 'PK', name: 'Pakistan' },
  { code: 'US', name: 'United States' },
  { code: 'OM', name: 'Oman' },
];

const Header = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  return (
    <>
      <header className="w-full bg-cyan-950 text-white py-2 px-3 sm:px-4 md:px-6 lg:px-10 flex flex-wrap md:flex-nowrap items-center justify-between gap-2">

        
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 order-1 md:order-1">
          <div className="cursor-pointer hover:opacity-80 transition duration-150">
            <FaAmazon className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-1" />
          </div>

          <div className="hidden sm:flex items-center gap-1 px-2 py-1 border border-transparent hover:border-white cursor-pointer duration-150">
            <MdLocationOn className="text-xl md:text-2xl" />
            <div className="text-xs sm:text-sm leading-tight">
              <Paragraph className="font-light">Deliver to</Paragraph>
              <Paragraph className="font-semibold">{selectedCountry.name}</Paragraph>
            </div>
          </div>
        </div>

      
        <div className="flex flex-1 mx-2 sm:mx-3 md:mx-4 order-3 md:order-2 w-full md:w-auto">
          <div className="flex flex-1 items-center">
            <NButton className="hidden md:flex items-center px-3 bg-gray-200 rounded-l-full border border-gray-300 h-9 md:h-10 hover:bg-gray-300 transition">
              <Paragraph className="text-xs md:text-sm font-medium text-black">All</Paragraph>
              <FaChevronDown className="ml-1 text-black text-xs" />
            </NButton>

            <input
              type="text"
              placeholder="Search"
              className="flex-1 px-3 py-1.5 md:py-2 border border-gray-300 outline-none h-9 md:h-10 text-sm"
            />

            <NButton className="bg-orange-500 px-3 md:px-4 py-1.5 md:py-2 rounded-r-full hover:bg-orange-600 transition flex items-center justify-center h-9 md:h-10">
              <FaSearch className="text-white text-sm md:text-base" />
            </NButton>
          </div>
        </div>

       
        <div className="flex items-center gap-2 sm:gap-3 md:gap-6 order-2 md:order-3">

        
          <div className="hidden lg:flex items-center gap-1 px-2 py-2 border border-transparent hover:border-white cursor-pointer duration-150 relative">
            <ReactCountryFlag countryCode={selectedCountry.code} svg style={{ width: "24px", height: "16px" }} />
            <Paragraph className="text-xs">{selectedCountry.code}</Paragraph>
            <FaChevronDown className="text-xs" />
            <select
              value={selectedCountry.code}
              onChange={(e) => {
                const selected = countries.find((c) => c.code === e.target.value);
                setSelectedCountry(selected);
              }}
              className=" bg-black absolute opacity-0 top-0 left-0 w-full h-full cursor-pointer"
            >
              {countries.map((country) => (
                <option key={country.code} value={country.code}>{country.name}</option>
              ))}
            </select>
          </div>

          <div className="hidden lg:flex flex-col px-2 py-2 border border-transparent hover:border-white cursor-pointer duration-150">
            <Paragraph className="text-xs font-light">Hello, Sign in</Paragraph>
            <Paragraph className="text-xs font-bold flex items-center">
              Account <FaChevronDown className="ml-1 text-xs" />
            </Paragraph>
          </div>

       
          <div className="hidden lg:flex flex-col px-2 py-2 border border-transparent hover:border-white cursor-pointer duration-150">
            <Paragraph className="text-xs font-light">Returns</Paragraph>
            <Paragraph className="text-xs font-bold">& Orders</Paragraph>
          </div>

     
          <div className="flex items-center gap-1 sm:gap-2 px-1 sm:px-2 py-2 border border-transparent hover:border-white cursor-pointer duration-150">
            <HiOutlineShoppingCart className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" />
            <Paragraph className="text-xs sm:text-sm font-bold mt-2 hidden sm:block">Cart</Paragraph>
          </div>

        </div>
      </header>

      <SUBheader />
      <Bottom />
    </>
  );
};

export default Header;
