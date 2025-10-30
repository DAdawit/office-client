import React, { useState } from "react";
import TabList from "./TabList";

const VerticalTabComponent = ({
  title,
  data = [],
  onCreate,
  onTabClicked,
  isPerformAction,
  createBtnName,
  emptyText,
}) => {
  const [activeTab, setActiveTab] = useState(data[0]?.id);
  console.log(data, "structure data");
  const handleTabChange = (id) => {
    setActiveTab(id);
    if (onTabClicked) {
      onTabClicked(id);
    }
  };

  return (
    <div className="w-full max-w-[148px] bg-white outline-1 outline-[#E5E5E5] rounded-[10px]">
      {/* Header */}
      <div className="text-[#021828] max-w-[148px] max-h-[32px] custom-p-20 bg-[#E1EEF7] rounded-t-[10px] flex items-center justify-center">
        <p className="font-[700] text-[14px] leading-[16px] tracking-[0px] font-['Century_Gothic']">
          {title}
        </p>
      </div>

      {/* Tabs */}
      <TabList
        items={data}
        activeId={activeTab}
        onTabChange={handleTabChange}
        onCreate={onCreate}
        isPerformAction={isPerformAction}
        createBtnName={createBtnName}
        emptyText={emptyText}
        title={title}
      />
    </div>
  );
};

export default VerticalTabComponent;
