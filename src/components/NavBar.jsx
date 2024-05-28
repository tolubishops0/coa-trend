import React, { useState, useRef } from "react";
import { logo, menu, close, docNav, more, settings } from "../utils";
import { navItems } from "../utils";
import { useClickAway } from "react-use";

export const Navsm = ({ setActivetab, activeTab }) => {
  const [showNavItems, setshowNavItems] = useState(false);
  const ref = useRef(null);
  const menuToggleRequested = useRef(false);

  useClickAway(ref, () => {
    if (!menuToggleRequested.current) {
      setshowNavItems(false);
    }
    menuToggleRequested.current = false;
  });

  const handleToggleMenu = () => {
    menuToggleRequested.current = true;
    setshowNavItems(!showNavItems);
  };

  const handletabClick = (label) => {
    setActivetab(label);
    setshowNavItems(!showNavItems);
  };

  console.log(showNavItems, "showNavItems");
  return (
    <div>
      <nav>
        <div className="flex justify-between items-center h-[6rem]">
          <div className="w-[9rem]">
            <img src={logo} alt="logo-icon" />
          </div>
          <div
            onClick={handleToggleMenu}
            className="w-[3rem] z-20 cursor-pointer">
            <img
              src={showNavItems ? close : menu}
              alt="logo-icon"
              className="transition-all duration-500 ease-in"
            />
          </div>
        </div>

        <div
          ref={ref}
          className={`fixed w-[60%] top-0 bg-white transition-all duration-500 ease-in h-full ${
            showNavItems ? "right-[0]" : "right-[-60%]"
          }`}>
          <div className="mt-[8rem] w-[90%] flex flex-col gap-y-8">
            {navItems.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center justify-end duration-500"
                  onClick={() => handletabClick(item.label)}>
                  <div
                    className={`flex items-center gap-x-4  ${
                      item.label === activeTab &&
                      "pb-1 border-b border-b-[#01F0D0]"
                    }`}>
                    <img src={item.icon} alt="logo-icon" />
                    <p className="capitalize text-sm font-bold">{item.label}</p>
                  </div>
                </div>
              );
            })}
            <hr className="bg-bgColor z-20 w-[full]" />
            <div className="flex items-center gap-x-4 justify-end">
              <div className="w-[1.5rem]">
                <img src={docNav} alt="logo-icon" />
              </div>
              <div className="">
                <p className="capitalize text-text font-bold text-[#072635]">
                  Dr. Jose Simmons
                </p>
                <p className="capitalize text-text font-medium text-[#707070]">
                  General Pratictioner
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export const NavLg = ({ setActivetab, activeTab }) => {
  return (
    <div className="py-[1rem]">
      <div className="bg-white px-8 py-[1rem] flex rounded-[4.375rem] justify-between items-center">
        <div className="w-[9rem]">
          <img src={logo} alt="logo-icon" />
        </div>
        <div className="flex items-center justify-center cursor-pointer gap-x-5">
          {navItems.map((item, index) => {
            return (
              <div
                onClick={() => setActivetab(item.label)}
                key={index}
                className={`flex items-center justify-center gap-x-3  ${
                  item.label === activeTab &&
                  "bg-[#01F0D0] p-[0.8rem] rounded-[2.5625rem] transition duration-1000 ease-in-out"
                }`}>
                <img src={item.icon} alt="logo-icon" />
                <p className="capitalize text-text text-[#072635] font-bold">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-x-3">
          <div className="flex items-center justify-center gap-x-3">
            <div>
              <img src={docNav} alt="logo-icon" />
            </div>
            <div className="">
              <p className="capitalize text-text font-bold text-[#072635]">
                Dr. Jose Simmons
              </p>
              <p className="capitalize text-text font-medium text-[#707070]">
                General Pratictioner
              </p>
            </div>
          </div>
          <div className="bg-bgColor h-[3rem] w-[0.1rem]"></div>
          <div className="flex items-center justify-center gap-x-3">
            <img src={settings} alt="logo-icon" />
            <img src={more} alt="logo-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

const NavBar = () => {
  const [activeTab, setActivetab] = useState("patients");
  return (
    <div>
      <div className="xl:hidden">
        <Navsm activeTab={activeTab} setActivetab={setActivetab} />
      </div>
      <div className="hidden xl:block">
        <NavLg activeTab={activeTab} setActivetab={setActivetab} />
      </div>
    </div>
  );
};

export default NavBar;
