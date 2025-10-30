import ButtonPrimaryFilled from "@/components/common/Buttons/ButtonPrimaryFilled";
import ContainerDev from "@/components/common/ContainerDev";
import StickyHeader from "@/components/common/StickyHeader";
import RecordOfficeList from "@/components/RecordOffice/RecordOfficeList";
import { Plus } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const RecordOffice = () => {
  return (
    <>
      <StickyHeader className="flex justify-end">
        <NavLink to="/dashboard/record-offices/add">
          <ButtonPrimaryFilled
            icon={<Plus size={16} />}
            iconPosition="left"
            title="New Record Office"
          />
        </NavLink>
      </StickyHeader>
      <ContainerDev style="mt-[14px]">
        {/* <div className="flex justify-end">
        <ButtonPrimaryFilled
        title="New Record Office"
        icon={<Plus />}
        iconPosition="left"
        />
        </div> */}
        <RecordOfficeList />
      </ContainerDev>
    </>
  );
};

export default RecordOffice;
