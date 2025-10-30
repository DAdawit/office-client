import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import React from "react";

const ButtonIconOutlinedPrimary = ({ icon, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="border-2 border-primary-brandBlue text-primary-brandBlue py-1 px-1 rounded-[4px] cursor-pointer  hover:border-primary-dark hover:text-primary-dark hover:bg-base-lightBlue"
      >
        {icon}
      </button>
    </>
  );
};

export default ButtonIconOutlinedPrimary;
