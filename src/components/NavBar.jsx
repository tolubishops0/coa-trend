import React, { useState } from "react";
import { logo, menu, close } from "../utils";
import { navItems } from "../utils";

export const Navsm = () => {
  const [showNavItems, setshowNavItems] = useState(false);

  return (
    <div>
      <nav>
        <div className="flex justify-between items-center h-[6rem]">
          <div className="w-[9rem]">
            <img src={logo} alt="logo-icon" />
          </div>
          <div
            onClick={() => setshowNavItems(!showNavItems)}
            className="w-[3rem] z-20 ">
            <img
              src={showNavItems ? close : menu}
              alt="logo-icon"
              className="transition-all duration-500 ease-in"
            />
          </div>
        </div>

        <div
          className={`fixed w-1/2 top-0 bg-white transition-all duration-500 ease-in h-full ${
            showNavItems ? "right-[0]" : "right-[-50%]"
          }`}>
          <div className="mt-[8rem] w-[90%] flex flex-col gap-y-8">
            {navItems.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center gap-x-4 justify-end duration-500">
                  <img src={item.icon} alt="logo-icon" />
                  <p className="capitalize text-sm font-bold">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
};

const NavBar = () => {
  return (
    <div>
      <Navsm />
    </div>
  );
};

export default NavBar;
