import React, { useState } from "react";
import DashboardMainLayout from "@/components/common/Dashboard/DashboardMainLayout";
// import Cc from "@/components/IncommingLetter/cc";
import Delegated from "@/components/IncommingLetter/Delegated";
import Forwarded from "@/components/IncommingLetter/Forwarded";
import Registered from "@/components/IncommingLetter/Registered";
import Replied from "@/components/IncommingLetter/Replied";
import Cc from "@/components/IncommingLetter/Cc";
import { BookOpenCheck } from "lucide-react";
import AssignedAccustions from "@/components/Accusations/AssignedAccustions";
import SubmittedAccustions from "@/components/Accusations/SubmittedAccustions";

const tabItems = [
  {
    _id: "1",
    name: {
      en: "Submitted",
      am: "ተገብቷል",
      or: "Ergafame",
      ti: "ተገብሮ ተሰጢኡ",
      so: "La gudbiyey",
      af: "Ingedien",
    },
  },
  {
    _id: "2",
    name: {
      en: "Assigned",
      am: "ተመድቧል",
      or: "Ramadame",
      ti: "ተመድቦ ኣሎ",
      so: "La qoondeeyay",
      af: "Toegeken",
    },
  },
];

const statsData = [
  {
    id: 1,
    title: "Total Pending",
    value: "200",
    growth: "1.2% than last month",
    icon: <BookOpenCheck className="w-6 h-6 text-white" />,
    borderColor: "border-l-blue-400",
    textColor: "text-blue-600",
    increase: "+200",
  },
  {
    id: 2,
    title: "Total Inreview",
    value: "250",
    growth: "0.5% than last month",
    icon: <BookOpenCheck className="w-6 h-6 text-white" />,
    borderColor: "border-l-green-400",
    textColor: "text-green-600",
    increase: "+70",
  },
  {
    id: 3,
    title: "Total Responded",
    value: "150",
    growth: "1.2% than last month",
    icon: <BookOpenCheck className="w-6 h-6 text-white" />,
    borderColor: "border-l-blue-400",
    textColor: "text-blue-600",
    increase: "+18",
  },
  {
    id: 4,
    title: "Total Resolved",
    value: "20",
    growth: "1.2% than last month",
    icon: <BookOpenCheck className="w-6 h-6 text-white" />,
    borderColor: "border-l-orange-400",
    textColor: "text-orange-600",
    increase: "+11",
  },
];

const Accusations = () => {
  const [lang, setLang] = useState("en");
  const [activeTab, setActiveTab] = useState(tabItems[0].name[lang]);

  // Function to handle tab change
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  // Function to render the active tab content
  const renderActiveTab = () => {
    switch (activeTab) {
      case "Submitted":
        return <SubmittedAccustions />;
      case "Assigned":
        return <AssignedAccustions />;
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

export default Accusations;
