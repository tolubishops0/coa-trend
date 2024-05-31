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
import searchsimg from "../src/Assests/search_FILL0_wght300_GRAD0_opsz24.svg";
import moreshorimg from "../src/Assests/more_horiz_FILL0_wght300_GRAD0_opsz24.svg";
import rightIconimg from "../src/Assests/icons8-arrow-30.png";
import ArrowUpimg from "../src/Assests/ArrowUp.svg";
import ArrowDownimg from "../src/Assests/ArrowDown.svg";
import HeartBPMimg from "../src/Assests/HeartBPM.svg";
import respiratoryimg from "../src/Assests/respiratory rate.svg";
import temperatureimg from "../src/Assests/temperature.svg";
import InsuranceIconimg from "../src/Assests/InsuranceIcon.svg";
import BirthIconimg from "../src/Assests/BirthIcon.svg";
import PhoneIconimg from "../src/Assests/PhoneIcon.svg";
import FemaleIconimg from "../src/Assests/FemaleIcon.svg";
import downloadimg from "../src/Assests/download_FILL0_wght300_GRAD0_opsz24 (1).svg";

export const logo = logoimg;
export const menu = menuimg;
export const close = closeimg;
export const docNav = docNavimg;
export const settings = settingsimg;
export const more = moresimg;
export const moreshor = moreshorimg;
export const search = searchsimg;
export const rightIcon = rightIconimg;
export const ArrowUp = ArrowUpimg;
export const ArrowDown = ArrowDownimg;
export const HeartBPM = HeartBPMimg;
export const respiratory = respiratoryimg;
export const temperature = temperatureimg;
export const FemaleIcon = FemaleIconimg;
export const PhoneIcon = PhoneIconimg;
export const BirthIcon = BirthIconimg;
export const InsuranceIcon = InsuranceIconimg;
export const downloadIcon = downloadimg;

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
export const monthMapping = {
  January: "Jan",
  February: "Feb",
  March: "Mar",
  April: "Apr",
  May: "May",
  June: "Jun",
  July: "Jul",
  August: "Aug",
  September: "Sep",
  October: "Oct",
  November: "Nov",
  December: "Dec",
};

export const heartHistory = [
  {
    label: "Respiratory Rate",
    value: "20 bpm",
    comment: "Normal",
    img: respiratory,
    color: "#E0F3FA",
  },
  {
    label: "Temperature",
    value: "98.6",
    comment: "Normal",
    img: temperature,
    color: "#FFE6E9",
  },
  {
    label: "Heart Rate",
    value: "78 bpm",
    comment: "Lower than normal",
    img: HeartBPM,
    color: "#FFE6F1",
  },
];

export const digonistic = ["Problem/Diagnosis", "Description", "Status"];

export const profileData = [
  {
    label: "date of birth",
    value: "",
    icon: PhoneIcon,
  },
  {
    label: "gender",
    value: "",
    icon: FemaleIcon,
  },
  {
    label: "contact info",
    value: "",
    icon: PhoneIcon,
  },
  {
    label: "emergency contacts",
    value: "",
    icon: PhoneIcon,
  },
  {
    label: "insurance provider",
    value: "",
    icon: InsuranceIcon,
  },
];
