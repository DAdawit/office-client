import React from "react";
import TabItem from "./tabItem";
import EmptyVerticalTab from "./emptyTab";

const TabList = ({
  items = [],
  activeId,
  onTabChange,
  isPerformAction,
  emptyText = "None",
  onCreate,
  createBtnName,
}) => {
  return (
    <div className="max-w-[148px] flex flex-col items-center p-[14px]">
      {items.length > 0 ? (
        items.map((item) => (
          <TabItem
            key={item.id}
            label={item.name}
            isActive={item.id === activeId}
            onClick={() => onTabChange(item.id)}
            isPerformAction={isPerformAction}
          />
        ))
      ) : (
        <EmptyVerticalTab
          emptyText={emptyText}
          onCreate={onCreate}
          createBtnName={createBtnName}
        />
      )}
    </div>
  );
};

export default TabList;
