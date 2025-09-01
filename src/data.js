import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/python.png";
import Tools3 from "/assets/tools/c++.png";
import Tools4 from "/assets/tools/canva.png";
import Tools5 from "/assets/tools/figma.png";
import Tools6 from "/assets/tools/html.png";
import Tools7 from "/assets/tools/css.png";
import Tools8 from "/assets/tools/mysql.png";
import Tools9 from "/assets/tools/jupyter.png";
import Tools10 from "/assets/tools/js.png";
import Tools11 from "/assets/tools/github.png";
import Tools12 from "/assets/tools/R.png";

export const listTools = [
  { id: 1,  gambar: Tools2,  nama: "Python",        ket: "Language",        dad: "100"  },
  { id: 2,  gambar: Tools9,  nama: "Jupyter",       ket: "Notebook",         dad: "200"  },
  { id: 3,  gambar: Tools8,  nama: "MySQL",         ket: "Database",         dad: "300"  },
  { id: 4,  gambar: Tools12, nama: "R",             ket: "Language",         dad: "400"  },
  { id: 5,  gambar: Tools10, nama: "JavaScript",    ket: "Language",         dad: "500"  },
  { id: 6,  gambar: Tools6,  nama: "HTML",          ket: "Markup",           dad: "600"  },
  { id: 7,  gambar: Tools7,  nama: "CSS",           ket: "Stylesheet",       dad: "700"  },
  { id: 8,  gambar: Tools3,  nama: "C++",           ket: "Language",         dad: "800"  },
  { id: 9,  gambar: Tools11, nama: "GitHub",        ket: "Version Control",  dad: "900"  },
  { id:10,  gambar: Tools1,  nama: "VS Code",       ket: "Code Editor",      dad: "1000" },
  { id:11,  gambar: Tools5,  nama: "Figma",         ket: "Design",           dad: "1100" },
  { id:12,  gambar: Tools4,  nama: "Canva",         ket: "Design",           dad: "1200" },
];


// === Project images (you said you placed them in /public/assets/project/) ===
import Project1 from "/assets/project/project1.webp?url"; // HartaNext
import Project2 from "/assets/project/project2.webp?url"; // GreenModel
import Project3 from "/assets/project/project3.webp?url"; // WakeTrack
import Project4 from "/assets/project/project4.webp?url"; // Clothing Store IMS
import Project5 from "/assets/project/project5.webp?url"; // Grab Revenue & Growth Analysis
import Project6 from "/assets/project/project6.webp?url"; // Tax Defaulter Prediction (MBMB)

// (You can add Project5, Project6 later)

// === Projects list used by <ChromaGrid items={listProject} /> ===
export const listProject = [
  {
    id: 1,
    image: Project1,
    title: "HartaNext: KL Real Estate Price Prediction",
    subtitle: "Streamlit app forecasting Kuala Lumpur property prices.",
    fullDescription:
      "Built a Streamlit web app to forecast Kuala Lumpur residential prices using ML on scraped iProperty Malaysia data. Cleaned and standardized high-rise and landed transactions, merging multiple raw formats into a unified dataset for analysis and model training.",
    borderColor: "#e879f9", // fuchsia
    gradient: "linear-gradient(145deg, #e879f9, #000)",
    url: "https://github.com/izzulroslan", // replace with repo if you have it
    dad: "100",
  },
  {
    id: 2,
    image: Project2,
    title: "GreenModel: AI Carbon Emission Tracker",
    subtitle: "Real-time emissions tracking for ML training & chatbots.",
    fullDescription:
      "Streamlit + CodeCarbon + OpenAI API to measure carbon from model training (Iris, Wine, Breast Cancer) and chatbot interactions. Added a 'Green Mode' that reduces emissions by tuning model efficiency. Shipped interactive dashboards, global CO₂ visuals, and educational content on compute impact.",
    borderColor: "#67e8f9", // cyan
    gradient: "linear-gradient(180deg, #67e8f9, #000)",
    url: "https://github.com/izzulroslan", // replace with repo link
    dad: "200",
  },
  {
    id: 3,
    image: Project3,
    title: "WakeTrack: Drowsiness Detection (AI + Voice)",
    subtitle: "Real-time fatigue detection with EAR + GPT companion.",
    fullDescription:
      "Led a team of 4 to build a Python/OpenCV/Flask system using EAR + facial landmarks for real-time drowsiness alerts. Integrated a GPT-powered voice companion for weather, greetings, jokes, and navigation. Added a CNN-based emotion module with KMeans to recommend mood-based YouTube music.",
    borderColor: "#e879f9", // fuchsia
    gradient: "linear-gradient(145deg, #e879f9, #000)",
    url: "https://github.com/izzulroslan", // replace with repo link
    dad: "300",
  },
  {
    id: 4,
    image: Project4,
    title: "Clothing Store Inventory Management",
    subtitle: "Role-based C++ + MySQL system for retail operations.",
    fullDescription:
      "Role-based inventory system replacing manual records: secure login with Admin (reports & full control), Staff (inventory updates), and Customers (browse, cart, checkout, profile). Implemented CRUD for items/customers/staff/admin to ensure accurate stock and avoid duplication.",
    borderColor: "#67e8f9", // cyan
    gradient: "linear-gradient(180deg, #67e8f9, #000)",
    url: "https://github.com/izzulroslan", // replace with repo link
    dad: "400",
  },

  {
    id: 5,
    image: Project5,
    title: "Grab Revenue & Growth — Data Analysis",
    subtitle: "Excel-based analysis of quarterly revenue, growth, and regional trends.",
    fullDescription:
      "Built an Excel analytics workbook to explore Grab’s quarterly revenue and growth by geography. Created interactive tables and line charts to surface region-level performance, highlight growth pockets and slowdowns, and summarize key opportunities. Deliverables included a clean dashboard, explanatory notes, and a concise narrative of the findings.",
    borderColor: "#e879f9",                         // fuchsia
    gradient: "linear-gradient(145deg, #e879f9, #000)",
    url: "https://github.com/izzulroslan",          // replace with repo/notion/demo if available
    dad: "500",
  },
  {
    id: 6,
    image: Project6,
    title: "Tax Defaulter Prediction (MBMB Collaboration)",
    subtitle: "Property-tax default risk prediction UI with form inputs.",
    fullDescription:
      "Collaborated with MBMB to prototype a tax-defaulter prediction interface. Built a clean input form (property type, land/building area, tax rate, discount, remission) and a prediction view to assess default likelihood. Focused on clear UX for data entry, consistent validations, and a foundation for plugging in a classification model and risk banding. Designed to support municipal decision-making and early intervention.",
    borderColor: "#67e8f9",                         // cyan
    gradient: "linear-gradient(180deg, #67e8f9, #000)",
    url: "https://github.com/izzulroslan",          // replace with repo/demo
    dad: "600",
  },
];