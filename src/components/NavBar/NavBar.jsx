import React, { useState, useRef } from "react";
import { logo, menu, close, docNav, more, settings } from "../../utils";
import { navItems } from "../../utils";
import { useClickAway } from "react-use";

export const Navsm = ({ setActivetab, activeTab }) => {
  const [showNavItems, setshowNavItems] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => {
    setshowNavItems(false);
  });

  const handleTabClick = (label) => {
    setActivetab(label);
    setshowNavItems(false);
  };

  return (
    <div>
      <nav>
        <div className="flex justify-between items-center h-[6rem]">
          <div className="w-[9rem] z-[110]">
            <img src={logo} alt="logo-icon" />
          </div>
          <button
            aria-label="Open menu"
            onClick={() => setshowNavItems(!showNavItems)}
            className="w-[3rem] cursor-pointer z-[110]">
            <img
              src={showNavItems ? close : menu}
              alt="menu-icon"
              className="transition-all duration-500 ease-in"
            />
          </button>
        </div>
        <div
          className={`z-[100] fixed w-[100%] top-0 bg-white transition-all duration-500 ease-in h-full ${
            showNavItems ? "left-[0]" : "left-[100%]"
          }`}>
          <div className="mt-[8rem] flex flex-col items-center justify-center gap-y-6">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="w-[100%] flex items-center justify-center duration-500">
                <button
                  onClick={() => handleTabClick(item.label)}
                  className={`flex items-center justify-center gap-x-4 py-4 ${
                    item.label === activeTab && "bg-[#01F0D0] w-[100%]"
                  }`}
                  aria-current={item.label === activeTab ? "page" : undefined}>
                  <p className="capitalize text-lg font-bold">{item.label}</p>
                  <img src={item.icon} alt={`${item.label}-icon`} />
                </button>
              </div>
            ))}
            <hr className="bg-bgColor z-20 w-full" />
            <div className="flex items-center gap-x-4 justify-center">
              <div className="w-[1.5rem]">
                <img src={docNav} alt="doctor-icon" className="w-[5rem]" />
              </div>
              <div>
                <p className="capitalize text-lg font-bold text-defaultColorText">
                  Dr. Jose Simmonst
                </p>
                <p className="capitalize text-defaultText font-medium text-subTextColor">
                  General Practitioner
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
    <div className="">
      <div className="bg-white px-8 py-[.5rem] flex rounded-[4.375rem] justify-between items-center">
        <div className="w-[9rem] cursor-pointer">
          <img src={logo} alt="logo-icon" />
        </div>

        <div className="flex items-center justify-center cursor-pointer gap-x-2">
          {navItems.map((item, index) => (
            <button
              onClick={() => setActivetab(item.label)}
              key={index}
              className={`flex items-center p-[0.5rem] justify-center gap-x-3 ${
                item.label === activeTab &&
                "bg-[#01F0D0] rounded-[2.5625rem] transition duration-1000 ease-in-out"
              }`}
              aria-current={item.label === activeTab ? "page" : undefined}>
              <img src={item.icon} alt={`${item.label}-icon`} />
              <p className="capitalize text-defaultText text-[#072635] font-bold">
                {item.label}
              </p>
            </button>
          ))}
        </div>

        <div className="flex items-center justify-center gap-x-3">
          <div className=" cursor-pointer flex items-center justify-center gap-x-3">
            <div>
              <img src={docNav} alt="doctor-icon" />
            </div>
            <div>
              <p className="capitalize text-defaultText font-bold text-defaultColorText">
                Dr. Jose Simmons
              </p>
              <p className="capitalize text-defaultText font-medium text-subTextColor">
                General Practitioner
              </p>
            </div>
          </div>
          <div className="bg-bgColor h-[3rem] w-[0.1rem]"></div>
          <div className="flex items-center justify-center gap-x-3">
            <img
              src={settings}
              alt="settings-icon"
              className="cursor-pointer"
            />
            <img src={more} alt="more-icon" className="cursor-pointer" />
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
