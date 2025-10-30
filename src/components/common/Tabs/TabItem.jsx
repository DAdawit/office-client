import React from "react";

const TabItem = ({ label, isActive, onClick, isPerformAction }) => {
  const disabled = isPerformAction && !isActive;
  return (
    <div className="w-[120px] h-[40px] border-b border-b-[#D1D5DB] last:border-b-0 flex items-center justify-center">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`w-[120px] max-h-[30px] rounded-[4px] px-[10px] py-[4px] flex items-center justify-center gap-[4px]
    font-['Century_Gothic'] font-[400] text-[14px] leading-[22px] hover:bg-[#053B60] hover:text-neutral-50 cursor-pointer transition-all duration-200
    overflow-hidden text-ellipsis whitespace-nowrap
    ${
      isActive
        ? "bg-[#0A74B9] text-[#FAFAFA]"
        : disabled
        ? "bg-white text-[#D4D4D4]"
        : "bg-white text-[#262626]"
    }`}
      >
        <span className="truncate w-full text-center">{label}</span>
      </button>
    </div>
  );
};

export default TabItem;
