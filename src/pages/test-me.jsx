import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export default function CaseApplicationStepper({ className }) {
  const steps = [
    { id: 1, label: "ID Verification", status: "completed" },
    { id: 2, label: "Service Selection", status: "current" },
    { id: 3, label: "Service Questionnaire", status: "pending" },
    { id: 4, label: "Payment", status: "pending" },
  ];

  const getStepStyles = (status) => {
    switch (status) {
      case "completed":
        return {
          circle: "bg-[#22c55e] border-[#22c55e] text-white",
          line: "bg-[#22c55e]",
        };
      case "current":
        return {
          circle: "bg-[#fcb043] border-[#fcb043] text-white",
          line: "bg-[#fcb043]",
        };
      default:
        return {
          circle: "bg-white border-[#525252] text-[#525252]",
          line: "bg-[#a3a3a3]",
        };
    }
  };

  return (
    <div className={cn("w-full max-w-4xl mx-auto", className)}>
      {/* Title */}
      <div className="text-center mt-5 mb-8">
        <h1 className="font-normal text-[20px] leading-[20px] tracking-normal text-center uppercase">
          case application
        </h1>
      </div>

      {/* Stepper */}
      <div className="">
        {/* Background line */}
        <div className="flex relative justify-between items-start px-3">
          {/* This is the fixed background line that spans only from first to last circle */}
          <div
            className="absolute top-3 h-1 bg-[#a3a3a3]"
            style={{
              left: "20rem",
              right: "20rem",
            }}
          ></div>

          {steps.map((step, index) => {
            const styles = getStepStyles(step.status);
            const isLast = index === steps.length - 1;
            const completedSteps = steps.filter(
              (s) => s.status === "completed"
            ).length;

            return (
              <div
                key={`circle-${step.id}`}
                className="w-full relative flex-1 flex items-start justify-center"
              >
                {/* Connector line */}
                {!isLast && (
                  <div
                    className={cn(
                      "absolute top-3 left-1/2 h-1 w-full",
                      index < completedSteps
                        ? "bg-[#22c55e]"
                        : index === completedSteps
                        ? "bg-[#fcb043]"
                        : "bg-[#a3a3a3]"
                    )}
                  />
                )}

                {/* Step Circle */}
                <div
                  className={cn(
                    "w-6 h-6 rounded-full border-2 flex items-center justify-center relative z-10 transition-colors",
                    styles.circle
                  )}
                >
                  <Check className="w-3 h-3" strokeWidth={3} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Labels */}
        <div
          className="flex justify-between mt-[14px]"
          style={{ paddingLeft: "6rem", paddingRight: "6rem" }}
        >
          {steps.map((step, index) => {
            const isFirst = index === 0;
            const isLast = index === steps.length - 1;

            return (
              <div
                key={`label-${step.id}`}
                className={cn(
                  "flex flex-col",
                  isFirst && "items-start",
                  isLast && "items-end",
                  !isFirst && !isLast && "items-center"
                )}
              >
                <div className="font-normal text-[10px] leading-[10px] tracking-normal uppercase text-[#737373] custom-custom-mb-20">
                  STEP {step.id}
                </div>
                <div className="font-normal italic text-[14px] leading-[14px] tracking-normal capitalize text-[#171717] whitespace-nowrap">
                  {step.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { SelectPreferredLanguage } from "../common/SelecetPreferedLanguage";
import PoweredBy from "../common/poweredBy";

const AuthMainLayout = ({ children }) => {
  return (
    <div className="min-h-screen xxl:h-screen max-w-screen flex flex-col lg:flex-row bg-base-white overflow-hidden">
      {/* left side */}
      <div className="w-full lg:w-[640px] flex flex-col">
        <div className="flex flex-col gap-4 lg:gap-0 justify-between">
          <div className="w-[80px] sm:w-[100px] mt-6 sm:custom-custom-mt-200 custom-ml-20 sm:ml-[40px]">
            <SelectPreferredLanguage />
          </div>

          <div className="w-full max-w-[420px] h-auto lg:h-[586px] mx-auto lg:ml-[111px] flex flex-col items-center gap-5 px-4 sm:px-0">
            <div className="w-full max-w-[336px] h-auto lg:h-[126px] flex flex-col items-center justify-center gap-3 sm:gap-[20px]">
              <img
                src="/logos/house-logo-1.png"
                alt="aahc logo"
                className="h-[60px] w-[140px] sm:h-[89px] sm:w-[189px]"
              />
              <h6 className="custom-text-14 sm:text-base text-center font-medium">
                Welcome Back To CSM & ADTM system
              </h6>
            </div>
            {children}
          </div>
        </div>
        <div className="mt-auto flex justify-center items-end py-4">
          <PoweredBy />
        </div>
      </div>

      {/* right side */}
      <div className="hidden h-auto lg:flex flex-1 relative m-2 lg:m-[16px] rounded-2xl">
        <div className="absolute inset-0 bg-[url('/loginImage.png')] bg-cover bg-top rounded-3xl blur-sm [mask-image:linear-gradient(white,white)] [mask-composite:intersect]"></div>
        <div className="absolute inset-0 rounded-2xl p-4">
          <div className="grid gap-8 lg:gap-[128px] mt-26 h-auto lg:h-[480px] w-full">
            <div className="flex justify-between items-center w-full gap-2 px-2 sm:px-5">
              <div className="w-[50px] lg:w-[70px] xl:w-[97px] flex items-center justify-center">
                <img
                  src="/logos/bureau-logo.png"
                  alt="AAHC Logo"
                  className="h-16 w-16 sm:h-28 sm:w-28 object-contain"
                />
              </div>

              <div className="flex-1 max-w-[520px]">
                <h4 className="text-center text-white text-lg sm:text-xl lg:text-[32px] uppercase px-2 sm:px-3 leading-snug">
                  <span>Addis Ababa Housing</span>
                  <span className="block xxl:whitespace-nowrap">
                    Development Corporation
                  </span>
                </h4>
                <h6 className="text-center custom-text-12 sm:custom-text-14 mt-2 text-accent-logo capitalize font-bold">
                  Welcome Back To CSM & ADTM system
                </h6>
              </div>

              <div className="w-[50px] lg:w-[70px] xl:w-[97px] flex items-center justify-center">
                <img
                  src="/logos/Group 2.png"
                  alt="aahc logo"
                  className="h-16 w-16 sm:h-28 sm:w-28 object-contain"
                />
              </div>
            </div>

            <div>
              <h4 className="text-white text-center text-lg sm:text-2xl lg:text-[32px] capitalize font-bold leading-snug">
                <span>Welcome To Addis Ababa Housing</span>
                <span> Development Corporation</span>
              </h4>
            </div>
            <div>
              <h4 className="text-white text-center text-xl sm:text-3xl lg:text-[40px] italic capitalize">
                Houses for all!
              </h4>
            </div>
          </div>

          <div className="flex justify-center items-center gap-3 sm:gap-5 mt-8 lg:mt-[189px]">
            <span className="custom-text-12 sm:custom-text-14text-14 lg:text-[16px] uppercase text-base-white">
              Help
            </span>
            <span className="custom-text-12 sm:custom-text-14 lg:text-[16px] uppercase text-base-white">
              .
            </span>
            <span className="custom-text-12 sm:custom-text-14 lg:text-[16px] uppercase text-base-white">
              User Manual
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
