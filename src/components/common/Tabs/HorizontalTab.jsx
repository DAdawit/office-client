import React from "react";
import { useNavigate } from "react-router-dom";

const HorizontalTab = ({
  tabItems = [],
  activeTab = "",
  onTabChange,
  firstLineVisible = true,
  bgVisible = true,
  unselectedWhite = true,
  language = "en",
  rounded = "rounded-t-[10px]",
  padding = "pb-0",
}) => {
  // If no tabItems provided, use default empty array
  const items = tabItems.length > 0 ? tabItems : [];
  const navigate = useNavigate();
  const handleClick = (itemName, link) => {
    if (onTabChange) {
      onTabChange(itemName);
      navigate(link);
    }
  };

  // If no activeTab provided and we have items, use first item as default
  const currentActiveTab = activeTab || items[0]?.name?.[language] || "";

  return (
    <div
      className={`${padding} ${rounded} ${
        bgVisible && "bg-primary-brandBlue"
      } w-full flex items-end overflow-x-auto`}
    >
      {firstLineVisible && (
        <div className="w-[35px] hidden sm:block border-b-2 box-border border-b-[#FCB043]" />
      )}

      {items.map((item, index) => {
        const itemName =
          item.name?.[language] || item.name?.en || `Tab ${index + 1}`;
        const link = item.link || "";
        const isActive = currentActiveTab === itemName;

        return (
          <div
            key={item._id || index}
            onClick={() => handleClick(itemName, link)}
            className={`w-fit h-[37px] rounded-t-sm flex items-center text-lg whitespace-nowrap px-4
          select-none transition-all duration-100 ease-in-out cursor-pointer
          ${
            isActive
              ? "border-2 border-b-0 bg-background text-[#FCB043] border-[#FCB043] font-bold text-[14px]"
              : `border-b-2 border-b-[#FCB043] text-[14px] hover:text-[#FCB043]/80 ${
                  unselectedWhite && "text-white"
                } hover:bg-background/10`
          }`}
          >
            <h1 className="text-md">{itemName}</h1>
          </div>
        );
      })}
      <div className="flex-1 border-b-2 border-b-[#FCB043]" />
    </div>
  );
};

export default HorizontalTab;
