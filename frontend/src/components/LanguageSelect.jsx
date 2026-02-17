import { useState } from "react";
import Navbar from "./Navbar";
import { ImCross } from "react-icons/im";

const languages = [
  { name: "বাংলা", code: "bn" },
  { name: "English", code: "en" },
  { name: "हिन्दी", code: "hi" },
  { name: "ಕನ್ನಡ", code: "kn" },
  { name: "मराठी", code: "mr" },
  { name: "தமிழ்", code: "ta" },
  { name: "తెలుగు", code: "te" },
  { name: "اردو", code: "ur" },
];

export default function LanguageSelect() {
  const [selected, setSelected] = useState("en");

  return (
    <div className="min-h-screen bg-white font-sans  antialiased relative">
      {/* Close Button — top right, blue circle border */}
      <Navbar/>
      <div className="absolute top-8 right-50 py-20 ">
        <button
          onClick={() => console.log("closed")}
          className="w-18 h-18 rounded-full flex items-center justify-center hover:bg-gray-100 transition-all"
        >
          <ImCross size={20}/>
        </button>
      </div>

      {/* Main Content */}
      <div className="px-46 pt-30 ">
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-16">
          Select your preferred language
        </h1>

        {/* Language Grid — 4 columns, 2 rows */}
        <div className="grid grid-cols-4 gap-x-0 gap-y-10">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setSelected(lang.code)}
              className={`text-left text-xl transition-all hover:font-semibold ${
                selected === lang.code
                  ? "font-bold text-black"
                  : "font-normal text-black"
              } ${lang.code === "en" ? "font-semibold" : ""}`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
