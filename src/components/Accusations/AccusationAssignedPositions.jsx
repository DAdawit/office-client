import React, { useState } from "react";
import ContainerDev from "../common/ContainerDev";
import {
  ArrowDownUp,
  ChevronDown,
  CirclePlus,
  Forward,
  Plus,
  Search,
  X,
} from "lucide-react";
import RecordCount from "../common/RecordCount";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ButtonPrimaryFlat from "../common/Buttons/ButtonPrimaryFlat";
import { DialogComponent } from "../common/Dlialogs/DialogComponent";
import AssignAccusation from "./AssignAccusation";
import Accordion from "../common/Accordion";
const AccusationAssignedPositions = () => {
  const [openRecipiant, setOpeRecipiant] = useState(true);
  const toggleRecipiantAccordion = () => setOpeRecipiant((prev) => !prev);

  return (
    <div className="mt-[14px]">
      <Accordion
        headerTitle=" User Positions"
        headerRightContent={
          <RecordCount
            title="Total Recipients"
            total={12}
            // bg="bg-primary-brandBlue"
            color="text-primary-darkest"
            bold="font-bold"
            // size="text-lg"
          />
        }
      >
        <div className="p-[14px] border border-gray-200 rounded-b-[14px] dark:border-gray-700 dark:bg-gray-900">
          <div className="shadow-sm rounded-[14px]">
            <div className="h-14 bg-base-lightBlue flex justify-between items-center  mt-[14px] px-[14px] rounded-t-[14px]">
              <h3 className="font-bold custom-text-14 text-neutral-700 gap-x-2">
                User Positions
              </h3>
              <h3 className="font-bold custom-text-14 text-neutral-700 flex items-center gap-x-2 pr-6">
                Actions
              </h3>
            </div>
            <div className="py-2 px-[14px]">
              {[1, 2].map((item) => (
                <div
                  className="flex gap-x-2 items-center justify-between border-b-1 last:border-b-0 py-2"
                  key={item}
                >
                  <div className="flex gap-x-2 items-center">
                    <div className=" text-primary-darkest">
                      <Avatar className="rounded-full">
                        <AvatarImage
                          src="https://github.com/evilrabbit.png"
                          alt="@evilrabbit"
                        />
                        <AvatarFallback>ER</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="grid ">
                      <h1 className="text-primary-darkest custom-text-14">
                        Rahel Taye
                      </h1>
                      <h1 className="text-neutral-500 custom-text-12">
                        ም/ዋና ዳይሬክተር /የቤት ማስተላለፍና ግንባታ ፋይናንስ ዘርፍ ኃላፊ/
                      </h1>
                    </div>
                  </div>
                  <div>
                    <button className="bg-Destructive-50 text-Destructive-900 flex gap-x-2 rounded-full px-3 py-1">
                      <X /> <span>Remove</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-[14xp] flex justify-end mt-3">
            <DialogComponent
              headerTitle="Assign more"
              actionBtnName={"confirm"}
              TriggerBtnName="Assign more"
              dialogButtonIcon={<CirclePlus />}
              dialogButtonVariant="primary"
              dialogButtonIconPosition="left"
              className="w-lg"
            >
              <AssignAccusation />
            </DialogComponent>
          </div>
        </div>
      </Accordion>
    </div>
  );
};

export default AccusationAssignedPositions;
