import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import React from "react";

const ButtonIconFilledPrimary = ({ icon, onClick }) => {
  return (
    <>
      <Button
        onClick={onClick}
        className="bg-primary-brandBlue text-white rounded-[10px] cursor-pointer hover:bg-primary-darkest"
      >
        {icon}
      </Button>
    </>
  );
};

export default ButtonIconFilledPrimary;
