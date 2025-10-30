import React from "react";
import ContainerDev from "../common/ContainerDev";
import { useNavigate } from "react-router-dom";
import StickyHeader from "../common/StickyHeader";
import { ChevronLeft } from "lucide-react";

const RegisterAccusation = () => {
  const navigate = useNavigate();
  return (
    <>
      <StickyHeader className="flex justify-between items-center">
        <button
          className="flex justify-between gap-x-2 items-center text-neutral-700 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft />
          <span className="text-xl font-bold">Accusations</span>
        </button>
        <div className="flex gap-x-2 items-center "></div>
      </StickyHeader>
      <ContainerDev style="min-h-screen mt-[14px]">
        <h1>Register accusation</h1>
      </ContainerDev>
    </>
  );
};

export default RegisterAccusation;
