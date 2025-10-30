import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import React from "react";

const ButtonIconFilledPrimary = ({ icon, onClick }) => {
  return (
    <>
      <Button
        onClick={onClick}
        className="py-1 px-5 text-primary-brandBlue cursor-pointer"
      >
        {icon}
      </Button>
    </>
  );
};

export default ButtonIconFilledPrimary;
