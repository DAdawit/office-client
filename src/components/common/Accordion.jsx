import { ChevronDown, X } from "lucide-react";
import React, { useState } from "react";

const Accordion = ({
  children,
  headerTitle,
  headerLeftContent,
  headerRightContent,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`border rounded-[10px] overflow-hidden custom-mb-20 ${className}`}
    >
      {/* Accordion Header */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full custom-p-14 bg-neutral-100 font-medium border-b h-[52px]"
      >
        <div className="flex items-center custom-gap-8">
          <span className="font-bold custom-text-14 text-neutral-700">
            {headerTitle}
          </span>
          {headerLeftContent && (
            <span className="text-primary-darkest custom-text-14 flex items-center custom-gap-1 bg-neutral-50 custom-px-2 custom-py-1 rounded-[10px]">
              {headerLeftContent}
            </span>
          )}
        </div>
        <div className="flex items-center custom-gapx-8">
          {headerRightContent}
          <ChevronDown
            className={`transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            size={20}
          />
        </div>
      </button>

      {/* Accordion Content */}
      {isOpen && <div className="">{children}</div>}
    </div>
  );
};

export default Accordion;
