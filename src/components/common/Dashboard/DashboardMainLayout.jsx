import React from "react";
import Statistics from "./Statistics";
import HorizontalTab from "../Tabs/HorizontalTab";

const DashboardMainLayout = ({
  tabItems,
  activeTab,
  lang,
  setActiveTab,
  statsData,
}) => {
  return (
    <>
      <div className="bg-primary-brandBlue grid rounded-t-[10px]">
        <Statistics statsData={statsData} />
        <HorizontalTab
          tabItems={tabItems}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          language={lang} // Change to "en", "or", "ti", "so", "af" as needed
          firstLineVisible={true}
          bgVisible={true}
          unselectedWhite={true}
        />
      </div>
    </>
  );
};

export default DashboardMainLayout;
