// IncommingLetter.jsx
import React, { useState } from "react";
import DashboardMainLayout from "@/components/common/Dashboard/DashboardMainLayout";
// import Cc from "@/components/IncommingLetter/cc";
import Delegated from "@/components/IncommingLetter/Delegated";
import Forwarded from "@/components/IncommingLetter/Forwarded";
import Registered from "@/components/IncommingLetter/Registered";
import Replied from "@/components/IncommingLetter/Replied";
import Cc from "@/components/IncommingLetter/Cc";
import { BookOpenCheck } from "lucide-react";

const tabItems = [
  {
    _id: "1",
    name: {
      en: "Registered",
      am: "ተመዝግቧል",
      or: "Galmeeffame",
      ti: "ዝተመዝገበ",
      so: "Diiwaangashan",
      af: "Geregistreer",
    },
  },
  {
    _id: "2",
    name: {
      en: "Forwarded",
      am: "ተላልፏል",
      or: "Darbame",
      ti: "ዝተመሓላለፈ",
      so: "Gudbiyay",
      af: "Doorgestuur",
    },
  },
  {
    _id: "3",
    name: {
      en: "Replied",
      am: "ተመልሷል",
      or: "Deebise",
      ti: "ዝተመለሰ",
      so: "Jawaab celiyay",
      af: "Antwoord",
    },
  },
  {
    _id: "4",
    name: {
      en: "CC",
      am: "ሲሲ",
      or: "CC",
      ti: "ሲሲ",
      so: "CC",
      af: "CC",
    },
  },
  {
    _id: "5",
    name: {
      en: "Delegated",
      am: "ተላልፏል",
      or: "Dhimma darbame",
      ti: "ዝተሓላለኸ",
      so: "U qoondeeyay",
      af: "Gedelegeer",
    },
  },
];

const statsData = [
  {
    id: 1,
    title: "Total Registered",
    value: "200",
    growth: "1.2% than last month",
    icon: <BookOpenCheck className="w-6 h-6 text-white" />,
    borderColor: "border-l-blue-400",
    textColor: "text-blue-600",
    increase: "+200",
  },
  {
    id: 2,
    title: "Total Submitted",
    value: "250",
    growth: "0.5% than last month",
    icon: <BookOpenCheck className="w-6 h-6 text-white" />,
    borderColor: "border-l-green-400",
    textColor: "text-green-600",
    increase: "+70",
  },
  {
    id: 3,
    title: "Total Forwarded",
    value: "150",
    growth: "1.2% than last month",
    icon: <BookOpenCheck className="w-6 h-6 text-white" />,
    borderColor: "border-l-blue-400",
    textColor: "text-blue-600",
    increase: "+18",
  },
  {
    id: 4,
    title: "Total Late",
    value: "20",
    growth: "1.2% than last month",
    icon: <BookOpenCheck className="w-6 h-6 text-white" />,
    borderColor: "border-l-orange-400",
    textColor: "text-orange-600",
    increase: "+11",
  },
];

const IncommingLetter = () => {
  const [lang, setLang] = useState("en");
  const [activeTab, setActiveTab] = useState(tabItems[0].name[lang]);

  // Function to handle tab change
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  // Function to render the active tab content
  const renderActiveTab = () => {
    switch (activeTab) {
      case "Registered":
        return <Registered />;
      case "Forwarded":
        return <Forwarded />;
      case "Replied":
        return <Replied />;
      case "CC":
        return <Cc />;
      case "Delegated":
        return <Delegated />;
      default:
        return <Registered />;
    }
  };

  return (
    <div className="gap-y-[20px]">
      <DashboardMainLayout
        tabItems={tabItems}
        activeTab={activeTab}
        lang={lang}
        statsData={statsData}
        setActiveTab={handleTabChange}
      />
      <div className="">{renderActiveTab()}</div>
    </div>
  );
};

export default IncommingLetter;
