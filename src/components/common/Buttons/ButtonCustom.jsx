import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const ButtonCustom = ({
  text,
  icon,
  onClick,
  toolTipText = "",
  tooltipSide = "top",
}) => {
  return (
    <>
      <Tooltip>
        <TooltipTrigger>
          <button
            onClick={onClick}
            className="bg-primary-brandBlue text-white rounded-[10px] cursor-pointer hover:bg-primary-darkest"
          >
            {icon} <span>{text}</span>
          </button>
        </TooltipTrigger>
        <TooltipContent
          side={tooltipSide}
          className="hidden sm:block bg-gray-100 text-gray-900"
        >
          <p>{toolTipText}</p>
        </TooltipContent>
      </Tooltip>
    </>
  );
};

export default ButtonCustom;
