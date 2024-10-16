import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";



const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 4,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 5,
    name: "Electronics",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="relative z-40 duration-200 bg-white shadow-md dark:bg-gray-900 dark:text-white">
      <div className="py-2 bg-primary/45">
        {/*upper Navbar*/}
        <div className="container flex items-center justify-between ">
          <div>
            <a href="#" className="flex gap-2 text-2xl font-bold sm:text-3xl">
              <img src={Logo} alt="Logo" className="w-10 uppercase" />
              Shopsy
            </a>
          </div>
          {/* search bar */}

          <div className="flex items-center justify-between gap-4">
            <div className="relative hidden group sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] focus:outline-none focus:border-1 transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:border-primary text-gray-900"
              />
              <IoMdSearch className="absolute text-gray-500 -translate-y-1/2 group-hover:text-primary top-1/2 right-3 " />
            </div>
            {/* order buton */}

            <button
              onClick={() => handleOrderPopup()}
              className="flex items-center gap-3 px-4 py-1 text-white transition-all duration-200 rounded-full bg-gradient-to-r from-primary to-secondary group"
            >
              <span className="hidden transition-all duration-200 group-hover:block">
                Order
              </span>
              <FaCartShopping className="text-xl text-white cursor-pointer drop-shadow-sm" />
            </button>

            {/* Darkmode switch */}
            <DarkMode />
          </div>
        </div>
      </div>


      <div data-aos="zoom-in" className="flex justify-center">
        {/*lower Navbar*/}
        <ul className="items-center font-semibold hidden gap-2 sm:flex sm:text-[12px] lg:text-[15px]">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 duration-200 hover:text-primary"
              >
                {data.name}
              </a>
            </li>
          ))}
          <li className="relative cursor-pointer group ">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trendings Items
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full p-2 rounded-md hover:bg-primary/20 text-[12px]"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
     
    </div>
  );
};

export default Navbar;
