import logoimg from "../src/Assests/TestLogo.svg";
import menuimg from "../src/Assests/menu.png";
import closeimg from "../src/Assests/close.png";
import home from "../src/Assests/home.svg";
import group from "../src/Assests/group.svg";
import calendar from "../src/Assests/calendar.svg";
import chat from "../src/Assests/chat.svg";
import credit from "../src/Assests/credit.svg";
import docNavimg from "../src/Assests/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png";
import settingsimg from "../src/Assests/settings_FILL0_wght300_GRAD0_opsz24.png";
import moresimg from "../src/Assests/more_vert_FILL0_wght300_GRAD0_opsz24.png";

export const logo = logoimg;
export const menu = menuimg;
export const close = closeimg;
export const docNav = docNavimg;
export const settings = settingsimg;
export const more = moresimg;

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
