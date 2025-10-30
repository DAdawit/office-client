import { ChevronLeft } from "lucide-react";
import React, { useState } from "react";
import { IconButton } from "../ui/icon-button";

const DataPreview = ({ children, className, isExpanded, setIsExpanded }) => {
  return (
    <div
      className={`${
        isExpanded ? "w-full" : ""
      } bg-[#E1EEF7] py-2 rounded-[10px] ${className}`}
    >
      <div className="flex w-full h-full">
        <div
          className={`h-full bg-[#E1EEF7] rounded-[10px] px-3.5 py-8 w-min${
            isExpanded ? "border-r border-[#D4D4D4]" : ""
          }`}
        >
          <IconButton
            variant="primary"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-label="Toggle preview"
          >
            <ChevronLeft
              className={`text-white transition-transform ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </IconButton>
        </div>{" "}
        <div className="w-full h-max border-l-1 border-gray-400 custom-pl-4 ">
          {isExpanded && <>{children}</>}
        </div>
      </div>
    </div>
  );
};

export default DataPreview;
