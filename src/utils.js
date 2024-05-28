import logoimg from "../src/Assests/TestLogo.svg";
import menuimg from "../src/Assests/menu.png";
import closeimg from "../src/Assests/close.png";
import home from "../src/Assests/home.svg";
import group from "../src/Assests/group.svg";
import calendar from "../src/Assests/calendar.svg";
import chat from "../src/Assests/chat.svg";
import credit from "../src/Assests/credit.svg";

export const logo = logoimg;
export const menu = menuimg;
export const close = closeimg;

export const navItems = [
  {
    label: "overview",
    icon: home,
  },
  {
    label: "patients",
    icon: group,
  },
  {
    label: "schedule",
    icon: calendar,
  },
  {
    label: "message",
    icon: chat,
  },
  {
    label: "transactions",
    icon: credit,
  },
];
