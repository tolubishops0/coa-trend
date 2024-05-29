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

export const logo = logoimg;
export const menu = menuimg;
export const close = closeimg;
export const docNav = docNavimg;
export const settings = settingsimg;
export const more = moresimg;
export const moreshor = moreshorimg;
export const search = searchsimg;
export const rightIcon = rightIconimg;

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

export const peopleData = [
  {
    name: "John Smith",
    profile_picture: "https://fedskillstest.ct.digital/1.png",
    date_of_birth: "1998-05-15",
    phone_number: "(415) 555-0001",
    emergency_contact: "(415) 555-0002",
    insurance_type: "HealthGuard",
    sex: "male",
    diagnosis_history: [
      {
        month: "October",
        year: 2023,
        blood_pressure: {
          systolic: { value: 120, levels: "Normal" },
          diastolic: { value: 80, levels: "Normal" },
        },
        heart_rate: { value: 70, levels: "Normal" },
        respiratory_rate: { value: 18, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "November",
        year: 2023,
        blood_pressure: {
          systolic: { value: 130, levels: "Slightly High" },
          diastolic: { value: 85, levels: "Slightly High" },
        },
        heart_rate: { value: 72, levels: "Normal" },
        respiratory_rate: { value: 19, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "December",
        year: 2023,
        blood_pressure: {
          systolic: { value: 140, levels: "High" },
          diastolic: { value: 90, levels: "High" },
        },
        heart_rate: { value: 75, levels: "Normal" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "January",
        year: 2024,
        blood_pressure: {
          systolic: { value: 150, levels: "High" },
          diastolic: { value: 95, levels: "High" },
        },
        heart_rate: { value: 78, levels: "Normal" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "February",
        year: 2024,
        blood_pressure: {
          systolic: { value: 160, levels: "Higher than Average" },
          diastolic: { value: 78, levels: "Lower than Average" },
        },
        heart_rate: { value: 78, levels: "Lower than Average" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "March",
        year: 2024,
        blood_pressure: {
          systolic: { value: 160, levels: "Higher than Average" },
          diastolic: { value: 78, levels: "Lower than Average" },
        },
        heart_rate: { value: 78, levels: "Lower than Average" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
    ],
    diagnostic_list: [
      {
        name: "Asthma",
        description: "Chronic respiratory condition",
        status: "Under Control",
      },
    ],
    lab_results: ["Spirometry"],
  },
  {
    name: "Emma Johnson",
    profile_picture: "https://fedskillstest.ct.digital/2.png",
    date_of_birth: "1993-07-22",
    phone_number: "(415) 555-1235",
    emergency_contact: "(415) 555-5679",
    insurance_type: "BlueShield",
    sex: "male",

    diagnosis_history: [
      {
        month: "October",
        year: 2023,
        blood_pressure: {
          systolic: { value: 120, levels: "Normal" },
          diastolic: { value: 80, levels: "Normal" },
        },
        heart_rate: { value: 70, levels: "Normal" },
        respiratory_rate: { value: 18, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "November",
        year: 2023,
        blood_pressure: {
          systolic: { value: 130, levels: "Slightly High" },
          diastolic: { value: 85, levels: "Slightly High" },
        },
        heart_rate: { value: 72, levels: "Normal" },
        respiratory_rate: { value: 19, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "December",
        year: 2023,
        blood_pressure: {
          systolic: { value: 140, levels: "High" },
          diastolic: { value: 90, levels: "High" },
        },
        heart_rate: { value: 75, levels: "Normal" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "January",
        year: 2024,
        blood_pressure: {
          systolic: { value: 150, levels: "High" },
          diastolic: { value: 95, levels: "High" },
        },
        heart_rate: { value: 78, levels: "Normal" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "February",
        year: 2024,
        blood_pressure: {
          systolic: { value: 160, levels: "Higher than Average" },
          diastolic: { value: 78, levels: "Lower than Average" },
        },
        heart_rate: { value: 78, levels: "Lower than Average" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "March",
        year: 2024,
        blood_pressure: {
          systolic: { value: 160, levels: "Higher than Average" },
          diastolic: { value: 78, levels: "Lower than Average" },
        },
        heart_rate: { value: 78, levels: "Lower than Average" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
    ],
    diagnostic_list: [
      {
        name: "Diabetes Type 2",
        description: "Chronic condition affecting blood sugar",
        status: "Managed",
      },
    ],
    lab_results: ["HbA1c", "Glucose Tolerance Test"],
  },
  {
    name: "Michael Williams",
    profile_picture: "https://fedskillstest.ct.digital/3.png",
    date_of_birth: "1983-09-10",
    phone_number: "(415) 555-1236",
    emergency_contact: "(415) 555-5680",
    insurance_type: "MediCare",
    sex: "male",

    diagnosis_history: [
      {
        month: "October",
        year: 2023,
        blood_pressure: {
          systolic: { value: 120, levels: "Normal" },
          diastolic: { value: 80, levels: "Normal" },
        },
        heart_rate: { value: 70, levels: "Normal" },
        respiratory_rate: { value: 18, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "November",
        year: 2023,
        blood_pressure: {
          systolic: { value: 130, levels: "Slightly High" },
          diastolic: { value: 85, levels: "Slightly High" },
        },
        heart_rate: { value: 72, levels: "Normal" },
        respiratory_rate: { value: 19, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "December",
        year: 2023,
        blood_pressure: {
          systolic: { value: 140, levels: "High" },
          diastolic: { value: 90, levels: "High" },
        },
        heart_rate: { value: 75, levels: "Normal" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "January",
        year: 2024,
        blood_pressure: {
          systolic: { value: 150, levels: "High" },
          diastolic: { value: 95, levels: "High" },
        },
        heart_rate: { value: 78, levels: "Normal" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "February",
        year: 2024,
        blood_pressure: {
          systolic: { value: 160, levels: "Higher than Average" },
          diastolic: { value: 78, levels: "Lower than Average" },
        },
        heart_rate: { value: 78, levels: "Lower than Average" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "March",
        year: 2024,
        blood_pressure: {
          systolic: { value: 160, levels: "Higher than Average" },
          diastolic: { value: 78, levels: "Lower than Average" },
        },
        heart_rate: { value: 78, levels: "Lower than Average" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
    ],
    diagnostic_list: [
      {
        name: "Hypertension",
        description: "Chronic high blood pressure",
        status: "Under Medication",
      },
    ],
    lab_results: ["Blood Tests", "ECG"],
  },
  {
    name: "Jessica Taylor",
    profile_picture: "https://fedskillstest.ct.digital/4.png",
    date_of_birth: "1996-08-23",
    phone_number: "(415) 555-1234",
    emergency_contact: "(415) 555-5678",
    insurance_type: "Sunrise Health Assurance",
    sex: "male",

    diagnosis_history: [
      {
        month: "October",
        year: 2023,
        blood_pressure: {
          systolic: { value: 120, levels: "Normal" },
          diastolic: { value: 80, levels: "Normal" },
        },
        heart_rate: { value: 70, levels: "Normal" },
        respiratory_rate: { value: 18, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "November",
        year: 2023,
        blood_pressure: {
          systolic: { value: 130, levels: "Slightly High" },
          diastolic: { value: 85, levels: "Slightly High" },
        },
        heart_rate: { value: 72, levels: "Normal" },
        respiratory_rate: { value: 19, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "December",
        year: 2023,
        blood_pressure: {
          systolic: { value: 140, levels: "High" },
          diastolic: { value: 90, levels: "High" },
        },
        heart_rate: { value: 75, levels: "Normal" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "January",
        year: 2024,
        blood_pressure: {
          systolic: { value: 150, levels: "High" },
          diastolic: { value: 95, levels: "High" },
        },
        heart_rate: { value: 78, levels: "Normal" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "February",
        year: 2024,
        blood_pressure: {
          systolic: { value: 160, levels: "Higher than Average" },
          diastolic: { value: 78, levels: "Lower than Average" },
        },
        heart_rate: { value: 78, levels: "Lower than Average" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "March",
        year: 2024,
        blood_pressure: {
          systolic: { value: 160, levels: "Higher than Average" },
          diastolic: { value: 78, levels: "Lower than Average" },
        },
        heart_rate: { value: 78, levels: "Lower than Average" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
    ],
    diagnostic_list: [
      {
        name: "Hypertension",
        description: "Chronic high blood pressure",
        status: "Under Observation",
      },
    ],
    lab_results: ["Blood Tests", "CT Scans"],
  },
  {
    name: "David Jones",
    profile_picture: "https://fedskillstest.ct.digital/5.png",
    date_of_birth: "2001-01-15",
    phone_number: "(415) 555-1237",
    emergency_contact: "(415) 555-5681",
    insurance_type: "Sunrise Health Assurance",
    sex: "male",

    diagnosis_history: [
      {
        month: "October",
        year: 2023,
        blood_pressure: {
          systolic: { value: 120, levels: "Normal" },
          diastolic: { value: 80, levels: "Normal" },
        },
        heart_rate: { value: 70, levels: "Normal" },
        respiratory_rate: { value: 18, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "November",
        year: 2023,
        blood_pressure: {
          systolic: { value: 130, levels: "Slightly High" },
          diastolic: { value: 85, levels: "Slightly High" },
        },
        heart_rate: { value: 72, levels: "Normal" },
        respiratory_rate: { value: 19, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "December",
        year: 2023,
        blood_pressure: {
          systolic: { value: 140, levels: "High" },
          diastolic: { value: 90, levels: "High" },
        },
        heart_rate: { value: 75, levels: "Normal" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "January",
        year: 2024,
        blood_pressure: {
          systolic: { value: 150, levels: "High" },
          diastolic: { value: 95, levels: "High" },
        },
        heart_rate: { value: 78, levels: "Normal" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "February",
        year: 2024,
        blood_pressure: {
          systolic: { value: 160, levels: "Higher than Average" },
          diastolic: { value: 78, levels: "Lower than Average" },
        },
        heart_rate: { value: 78, levels: "Lower than Average" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "March",
        year: 2024,
        blood_pressure: {
          systolic: { value: 160, levels: "Higher than Average" },
          diastolic: { value: 78, levels: "Lower than Average" },
        },
        heart_rate: { value: 78, levels: "Lower than Average" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
    ],
    diagnostic_list: [
      {
        name: "Allergy",
        description: "Seasonal allergic rhinitis",
        status: "Under Treatment",
      },
    ],
    lab_results: ["Allergy Tests"],
  },
  {
    name: "John Smith",
    profile_picture: "https://fedskillstest.ct.digital/1.png",
    date_of_birth: "1998-05-15",
    phone_number: "(415) 555-0001",
    emergency_contact: "(415) 555-0002",
    insurance_type: "HealthGuard",
    sex: "male",

    diagnosis_history: [
      {
        month: "October",
        year: 2023,
        blood_pressure: {
          systolic: { value: 120, levels: "Normal" },
          diastolic: { value: 80, levels: "Normal" },
        },
        heart_rate: { value: 70, levels: "Normal" },
        respiratory_rate: { value: 18, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "November",
        year: 2023,
        blood_pressure: {
          systolic: { value: 130, levels: "Slightly High" },
          diastolic: { value: 85, levels: "Slightly High" },
        },
        heart_rate: { value: 72, levels: "Normal" },
        respiratory_rate: { value: 19, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "December",
        year: 2023,
        blood_pressure: {
          systolic: { value: 140, levels: "High" },
          diastolic: { value: 90, levels: "High" },
        },
        heart_rate: { value: 75, levels: "Normal" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "January",
        year: 2024,
        blood_pressure: {
          systolic: { value: 150, levels: "High" },
          diastolic: { value: 95, levels: "High" },
        },
        heart_rate: { value: 78, levels: "Normal" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "February",
        year: 2024,
        blood_pressure: {
          systolic: { value: 160, levels: "Higher than Average" },
          diastolic: { value: 78, levels: "Lower than Average" },
        },
        heart_rate: { value: 78, levels: "Lower than Average" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "March",
        year: 2024,
        blood_pressure: {
          systolic: { value: 160, levels: "Higher than Average" },
          diastolic: { value: 78, levels: "Lower than Average" },
        },
        heart_rate: { value: 78, levels: "Lower than Average" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
    ],
    diagnostic_list: [
      {
        name: "Asthma",
        description: "Chronic respiratory condition",
        status: "Under Control",
      },
    ],
    lab_results: ["Spirometry"],
  },
  {
    name: "John Smith",
    profile_picture: "https://fedskillstest.ct.digital/1.png",
    date_of_birth: "1998-05-15",
    phone_number: "(415) 555-0001",
    emergency_contact: "(415) 555-0002",
    insurance_type: "HealthGuard",
    sex: "male",

    diagnosis_history: [
      {
        month: "October",
        year: 2023,
        blood_pressure: {
          systolic: { value: 120, levels: "Normal" },
          diastolic: { value: 80, levels: "Normal" },
        },
        heart_rate: { value: 70, levels: "Normal" },
        respiratory_rate: { value: 18, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "November",
        year: 2023,
        blood_pressure: {
          systolic: { value: 130, levels: "Slightly High" },
          diastolic: { value: 85, levels: "Slightly High" },
        },
        heart_rate: { value: 72, levels: "Normal" },
        respiratory_rate: { value: 19, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "December",
        year: 2023,
        blood_pressure: {
          systolic: { value: 140, levels: "High" },
          diastolic: { value: 90, levels: "High" },
        },
        heart_rate: { value: 75, levels: "Normal" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "January",
        year: 2024,
        blood_pressure: {
          systolic: { value: 150, levels: "High" },
          diastolic: { value: 95, levels: "High" },
        },
        heart_rate: { value: 78, levels: "Normal" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "February",
        year: 2024,
        blood_pressure: {
          systolic: { value: 160, levels: "Higher than Average" },
          diastolic: { value: 78, levels: "Lower than Average" },
        },
        heart_rate: { value: 78, levels: "Lower than Average" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "March",
        year: 2024,
        blood_pressure: {
          systolic: { value: 160, levels: "Higher than Average" },
          diastolic: { value: 78, levels: "Lower than Average" },
        },
        heart_rate: { value: 78, levels: "Lower than Average" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
    ],
    diagnostic_list: [
      {
        name: "Asthma",
        description: "Chronic respiratory condition",
        status: "Under Control",
      },
    ],
    lab_results: ["Spirometry"],
  },
  {
    name: "John Smith",
    profile_picture: "https://fedskillstest.ct.digital/1.png",
    date_of_birth: "1998-05-15",
    phone_number: "(415) 555-0001",
    emergency_contact: "(415) 555-0002",
    insurance_type: "HealthGuard",
    sex: "male",

    diagnosis_history: [
      {
        month: "October",
        year: 2023,
        blood_pressure: {
          systolic: { value: 120, levels: "Normal" },
          diastolic: { value: 80, levels: "Normal" },
        },
        heart_rate: { value: 70, levels: "Normal" },
        respiratory_rate: { value: 18, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "November",
        year: 2023,
        blood_pressure: {
          systolic: { value: 130, levels: "Slightly High" },
          diastolic: { value: 85, levels: "Slightly High" },
        },
        heart_rate: { value: 72, levels: "Normal" },
        respiratory_rate: { value: 19, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "December",
        year: 2023,
        blood_pressure: {
          systolic: { value: 140, levels: "High" },
          diastolic: { value: 90, levels: "High" },
        },
        heart_rate: { value: 75, levels: "Normal" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "January",
        year: 2024,
        blood_pressure: {
          systolic: { value: 150, levels: "High" },
          diastolic: { value: 95, levels: "High" },
        },
        heart_rate: { value: 78, levels: "Normal" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "February",
        year: 2024,
        blood_pressure: {
          systolic: { value: 160, levels: "Higher than Average" },
          diastolic: { value: 78, levels: "Lower than Average" },
        },
        heart_rate: { value: 78, levels: "Lower than Average" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "March",
        year: 2024,
        blood_pressure: {
          systolic: { value: 160, levels: "Higher than Average" },
          diastolic: { value: 78, levels: "Lower than Average" },
        },
        heart_rate: { value: 78, levels: "Lower than Average" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
    ],
    diagnostic_list: [
      {
        name: "Asthma",
        description: "Chronic respiratory condition",
        status: "Under Control",
      },
    ],
    lab_results: ["Spirometry"],
  },
  {
    name: "John Smith",
    profile_picture: "https://fedskillstest.ct.digital/1.png",
    date_of_birth: "1998-05-15",
    phone_number: "(415) 555-0001",
    emergency_contact: "(415) 555-0002",
    insurance_type: "HealthGuard",
    sex: "male",

    diagnosis_history: [
      {
        month: "October",
        year: 2023,
        blood_pressure: {
          systolic: { value: 120, levels: "Normal" },
          diastolic: { value: 80, levels: "Normal" },
        },
        heart_rate: { value: 70, levels: "Normal" },
        respiratory_rate: { value: 18, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "November",
        year: 2023,
        blood_pressure: {
          systolic: { value: 130, levels: "Slightly High" },
          diastolic: { value: 85, levels: "Slightly High" },
        },
        heart_rate: { value: 72, levels: "Normal" },
        respiratory_rate: { value: 19, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "December",
        year: 2023,
        blood_pressure: {
          systolic: { value: 140, levels: "High" },
          diastolic: { value: 90, levels: "High" },
        },
        heart_rate: { value: 75, levels: "Normal" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "January",
        year: 2024,
        blood_pressure: {
          systolic: { value: 150, levels: "High" },
          diastolic: { value: 95, levels: "High" },
        },
        heart_rate: { value: 78, levels: "Normal" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "February",
        year: 2024,
        blood_pressure: {
          systolic: { value: 160, levels: "Higher than Average" },
          diastolic: { value: 78, levels: "Lower than Average" },
        },
        heart_rate: { value: 78, levels: "Lower than Average" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "March",
        year: 2024,
        blood_pressure: {
          systolic: { value: 160, levels: "Higher than Average" },
          diastolic: { value: 78, levels: "Lower than Average" },
        },
        heart_rate: { value: 78, levels: "Lower than Average" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
    ],
    diagnostic_list: [
      {
        name: "Asthma",
        description: "Chronic respiratory condition",
        status: "Under Control",
      },
    ],
    lab_results: ["Spirometry"],
  },
  {
    name: "John Smith",
    profile_picture: "https://fedskillstest.ct.digital/1.png",
    date_of_birth: "1998-05-15",
    phone_number: "(415) 555-0001",
    sex: "male",

    emergency_contact: "(415) 555-0002",
    insurance_type: "HealthGuard",
    diagnosis_history: [
      {
        month: "October",
        year: 2023,
        blood_pressure: {
          systolic: { value: 120, levels: "Normal" },
          diastolic: { value: 80, levels: "Normal" },
        },
        heart_rate: { value: 70, levels: "Normal" },
        respiratory_rate: { value: 18, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "November",
        year: 2023,
        blood_pressure: {
          systolic: { value: 130, levels: "Slightly High" },
          diastolic: { value: 85, levels: "Slightly High" },
        },
        heart_rate: { value: 72, levels: "Normal" },
        respiratory_rate: { value: 19, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "December",
        year: 2023,
        blood_pressure: {
          systolic: { value: 140, levels: "High" },
          diastolic: { value: 90, levels: "High" },
        },
        heart_rate: { value: 75, levels: "Normal" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "January",
        year: 2024,
        blood_pressure: {
          systolic: { value: 150, levels: "High" },
          diastolic: { value: 95, levels: "High" },
        },
        heart_rate: { value: 78, levels: "Normal" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "February",
        year: 2024,
        blood_pressure: {
          systolic: { value: 160, levels: "Higher than Average" },
          diastolic: { value: 78, levels: "Lower than Average" },
        },
        heart_rate: { value: 78, levels: "Lower than Average" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "March",
        year: 2024,
        blood_pressure: {
          systolic: { value: 160, levels: "Higher than Average" },
          diastolic: { value: 78, levels: "Lower than Average" },
        },
        heart_rate: { value: 78, levels: "Lower than Average" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
    ],
    diagnostic_list: [
      {
        name: "Asthma",
        description: "Chronic respiratory condition",
        status: "Under Control",
      },
    ],
    lab_results: ["Spirometry"],
  },
  {
    name: "John Smith",
    profile_picture: "https://fedskillstest.ct.digital/1.png",
    date_of_birth: "1998-05-15",
    phone_number: "(415) 555-0001",
    emergency_contact: "(415) 555-0002",
    sex: "male",

    insurance_type: "HealthGuard",
    diagnosis_history: [
      {
        month: "October",
        year: 2023,
        blood_pressure: {
          systolic: { value: 120, levels: "Normal" },
          diastolic: { value: 80, levels: "Normal" },
        },
        heart_rate: { value: 70, levels: "Normal" },
        respiratory_rate: { value: 18, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "November",
        year: 2023,
        blood_pressure: {
          systolic: { value: 130, levels: "Slightly High" },
          diastolic: { value: 85, levels: "Slightly High" },
        },
        heart_rate: { value: 72, levels: "Normal" },
        respiratory_rate: { value: 19, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "December",
        year: 2023,
        blood_pressure: {
          systolic: { value: 140, levels: "High" },
          diastolic: { value: 90, levels: "High" },
        },
        heart_rate: { value: 75, levels: "Normal" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "January",
        year: 2024,
        blood_pressure: {
          systolic: { value: 150, levels: "High" },
          diastolic: { value: 95, levels: "High" },
        },
        heart_rate: { value: 78, levels: "Normal" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "February",
        year: 2024,
        blood_pressure: {
          systolic: { value: 160, levels: "Higher than Average" },
          diastolic: { value: 78, levels: "Lower than Average" },
        },
        heart_rate: { value: 78, levels: "Lower than Average" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "March",
        year: 2024,
        blood_pressure: {
          systolic: { value: 160, levels: "Higher than Average" },
          diastolic: { value: 78, levels: "Lower than Average" },
        },
        heart_rate: { value: 78, levels: "Lower than Average" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
    ],
    diagnostic_list: [
      {
        name: "Asthma",
        description: "Chronic respiratory condition",
        status: "Under Control",
      },
    ],
    lab_results: ["Spirometry"],
  },
  {
    name: "John Smith",
    profile_picture: "https://fedskillstest.ct.digital/1.png",
    date_of_birth: "1998-05-15",
    phone_number: "(415) 555-0001",
    emergency_contact: "(415) 555-0002",
    sex: "male",

    insurance_type: "HealthGuard",
    diagnosis_history: [
      {
        month: "October",
        year: 2023,
        blood_pressure: {
          systolic: { value: 120, levels: "Normal" },
          diastolic: { value: 80, levels: "Normal" },
        },
        heart_rate: { value: 70, levels: "Normal" },
        respiratory_rate: { value: 18, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "November",
        year: 2023,
        blood_pressure: {
          systolic: { value: 130, levels: "Slightly High" },
          diastolic: { value: 85, levels: "Slightly High" },
        },
        heart_rate: { value: 72, levels: "Normal" },
        respiratory_rate: { value: 19, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "December",
        year: 2023,
        blood_pressure: {
          systolic: { value: 140, levels: "High" },
          diastolic: { value: 90, levels: "High" },
        },
        heart_rate: { value: 75, levels: "Normal" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "January",
        year: 2024,
        blood_pressure: {
          systolic: { value: 150, levels: "High" },
          diastolic: { value: 95, levels: "High" },
        },
        heart_rate: { value: 78, levels: "Normal" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "February",
        year: 2024,
        blood_pressure: {
          systolic: { value: 160, levels: "Higher than Average" },
          diastolic: { value: 78, levels: "Lower than Average" },
        },
        heart_rate: { value: 78, levels: "Lower than Average" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "March",
        year: 2024,
        blood_pressure: {
          systolic: { value: 160, levels: "Higher than Average" },
          diastolic: { value: 78, levels: "Lower than Average" },
        },
        heart_rate: { value: 78, levels: "Lower than Average" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
    ],
    diagnostic_list: [
      {
        name: "Asthma",
        description: "Chronic respiratory condition",
        status: "Under Control",
      },
    ],
    lab_results: ["Spirometry"],
  },
  {
    name: "John Smith",
    profile_picture: "https://fedskillstest.ct.digital/1.png",
    date_of_birth: "1998-05-15",
    phone_number: "(415) 555-0001",
    emergency_contact: "(415) 555-0002",
    insurance_type: "HealthGuard",
    sex: "male",

    diagnosis_history: [
      {
        month: "October",
        year: 2023,
        blood_pressure: {
          systolic: { value: 120, levels: "Normal" },
          diastolic: { value: 80, levels: "Normal" },
        },
        heart_rate: { value: 70, levels: "Normal" },
        respiratory_rate: { value: 18, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "November",
        year: 2023,
        blood_pressure: {
          systolic: { value: 130, levels: "Slightly High" },
          diastolic: { value: 85, levels: "Slightly High" },
        },
        heart_rate: { value: 72, levels: "Normal" },
        respiratory_rate: { value: 19, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "December",
        year: 2023,
        blood_pressure: {
          systolic: { value: 140, levels: "High" },
          diastolic: { value: 90, levels: "High" },
        },
        heart_rate: { value: 75, levels: "Normal" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "January",
        year: 2024,
        blood_pressure: {
          systolic: { value: 150, levels: "High" },
          diastolic: { value: 95, levels: "High" },
        },
        heart_rate: { value: 78, levels: "Normal" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "February",
        year: 2024,
        blood_pressure: {
          systolic: { value: 160, levels: "Higher than Average" },
          diastolic: { value: 78, levels: "Lower than Average" },
        },
        heart_rate: { value: 78, levels: "Lower than Average" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
      {
        month: "March",
        year: 2024,
        blood_pressure: {
          systolic: { value: 160, levels: "Higher than Average" },
          diastolic: { value: 78, levels: "Lower than Average" },
        },
        heart_rate: { value: 78, levels: "Lower than Average" },
        respiratory_rate: { value: 20, levels: "Normal" },
        temperature: { value: 98.6, levels: "Normal" },
      },
    ],
    diagnostic_list: [
      {
        name: "Asthma",
        description: "Chronic respiratory condition",
        status: "Under Control",
      },
    ],
    lab_results: ["Spirometry"],
  },
];
