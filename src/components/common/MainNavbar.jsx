import React from "react";
import { PanelLeft, Bell } from "lucide-react";
import { SelectPreferredLanguage } from "./SelecetPreferedLanguage";
import OrganizationWithPositionSelector from "./OrganizationWithPositionSelector";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
const MainNavbar = ({ title }) => {
  return (
    <div className="bg-base-lightBlue h-16 w-screen  overflow-hidden  pt-1.5 pl-1 pr-5  fixed top-0 left-0  z-50">
      <div className="mx-[14px] flex justify-between items-end">
        <div className="flex gap-x-5">
          <div className="flex w-[288px]">
            <div className="flex justify-between w-full">
              <img
                src="/logos/logo-secondary.png"
                alt="Logo"
                className="h-[45px] w-[72px] self-end"
              />
              <Separator orientation="vertical" className="bg-accent-logo" />
              <div className="grid self-end">
                <h3 className="tracking-[0.70em] xxl:tracking-[0.80em] custom-text-12 xxl:text-[20px] font-semibold xxl:font-bold text-primary-three w-full">
                  AAHDC
                </h3>
                <h4 className="custom-text-12 xxl:text-md font-semibold xxl:font-bold text-primary-darkest">
                  CSM & ADTM system
                </h4>
              </div>
              <SidebarTrigger />
              {/* <PanelLeft
              className="text-primary-brandBlue self-center custom-text-12 font-thin custom-mr-8"
              width={24}
              height={24}
            /> */}
            </div>
          </div>
          <div className="self-end">
            {/* <p className="text-primary-darkest custom-text-14">
            List item &gt;{" "}
            <span className="text-primary-brandBlue"> List item</span>
          </p> */}
            <h2 className="text-primary-darkest capitalize font-bold text-[32px] xxl:text-2xl">
              {title}
            </h2>
          </div>
        </div>
        <div className="flex gap-x-4 pb-1">
          <Bell
            className="text-primary-darkest self-center"
            width={16}
            height={18}
          />
          <SelectPreferredLanguage
            bgWhite={false}
            rounded={true}
            border={true}
          />
          <OrganizationWithPositionSelector />
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
