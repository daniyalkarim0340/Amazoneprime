import { useState } from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import Heading from "../heading/index";
import NButton from "../button/index";

const Bottom = () => {
  const [openSearch, setOpenSearch] = useState(false);

  const navLinks = ["Home", "Movies", "TV Shows", "Sports"];

  return (
    <div className="w-full sticky top-0 z-30 bg-[#0F171E] shadow-md">
      <div className="bg-[#1c2a3a] text-white mx-4 md:mx-12 lg:mx-20 rounded-md">
        <div className="px-6 py-4 flex items-center justify-between">


          <Heading className="text-2xl font-bold text-white">
            Prime Video
          </Heading>


          <ul className="flex gap-6 text-sm">
            {navLinks.map((link, idx) => (
              <li
                key={idx}
                className="cursor-pointer text-lg px-3 py-2 hover:bg-blue-600 rounded-md transition-colors"
              >
                {link}
              </li>
            ))}
          </ul>


          <div className="flex items-center gap-4">
            <FaSearch
              className="cursor-pointer text-lg hover:text-blue-400 transition-colors"
              onClick={() => setOpenSearch(!openSearch)}
            />
            {openSearch && (
              <input
                type="text"
                placeholder="Search..."
                className="bg-[#0f1b27] text-white text-sm px-3 py-1 rounded-md outline-none w-40 transition-all"
                autoFocus
              />
            )}
            <FaUser className="cursor-pointer text-lg hover:text-blue-400 transition-colors" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Bottom;
