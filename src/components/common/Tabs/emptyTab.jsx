import { Button } from "@/components/ui/button";
import React from "react";

const EmptyVerticalTab = ({ emptyText, onCreate, createBtnName }) => {
  return (
    <>
      <div className="w-[120px] h-[40px] flex items-center justify-center">
        <p className="w-full max-h-[30px] rounded-[4px] px-[10px] py-[4px] flex items-center justify-center text-center gap-[4px] capitalize font-['Century_Gothic'] font-[400] text-[14px] leading-[22px] bg-white text-[#7F1D1D]">
          {emptyText}
        </p>
      </div>
      <Button
        onClick={onCreate}
        className="w-full bg-[#053B60] cursor-pointer py-[4px] px-[14px] hover:bg-[#053B60] rounded-[4px] h-[30px]"
      >
        {createBtnName}
      </Button>
    </>
  );
};

export default EmptyVerticalTab;
