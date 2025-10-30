import React, { useState } from "react";
import ContainerDev from "../common/ContainerDev";
import { ArrowDownUp, ChevronDown, Forward, Search, X } from "lucide-react";
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
const AssignAccusation = () => {
  const [openRecipiant, setOpeRecipiant] = useState(true);
  const toggleRecipiantAccordion = () => setOpeRecipiant((prev) => !prev);
  const [sortOrder, setSortOrder] = useState("asc"); // 'asc' or 'desc'

  const sortList = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };
  return (
    <ContainerDev>
      <div
        id="accordion-collapse"
        data-accordion="collapse"
        className="w-full mx-auto bordered"
      >
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            onClick={toggleRecipiantAccordion}
            className={`flex items-center bg-neutral-100 justify-between w-full custom-p-20 font-medium border rounded-t-[10px] h-[52px]`}
            aria-expanded={openRecipiant}
            aria-controls="accordion-collapse-body-1"
          >
            <span className="font-bold custom-text-14 text-neutral-700 flex items-center gap-x-2">
              <Forward />
              Assigned Structure
            </span>

            <div className="flex justify-center items-center gap-x-2">
              <div className="flex items-center">
                <RecordCount
                  title="Total assigned Structure"
                  total={2}
                  // bg="bg-primary-brandBlue"
                  color="text-primary-darkest"
                  bold="font-bold"
                  // size="text-lg"
                />
              </div>
              <ChevronDown
                height={20}
                width={20}
                className={`transform transition-transform duration-300 text-neutral-700 ${
                  openRecipiant ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
          </button>
        </h2>

        <div
          id="accordion-collapse-body-1"
          className={`${openRecipiant ? "block" : "hidden"}`}
          aria-labelledby="accordion-collapse-heading-1"
        >
          <div className="custom-p-20 border border-gray-200 rounded-b-[14px] dark:border-gray-700 dark:bg-gray-900">
            <div className="flex flex-col gap-y-2">
              <div className="flex flex-col w-full">
                <h3 className="custom-text-14 text-primary-darkest">
                  Position
                </h3>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose position to assign" />
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    <SelectGroup>
                      <SelectLabel>John Smith</SelectLabel>
                      <SelectItem value="apple">Rahel Taye</SelectItem>
                      <SelectItem value="banana">Sarah Johnson</SelectItem>
                      <SelectItem value="blueberry">Michael Brown</SelectItem>
                      <SelectItem value="grapes">Emily Davis</SelectItem>
                      <SelectItem value="pineapple">David Wilson</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-x-2 w-full">
                <div className="relative w-full">
                  <Search
                    className="absolute top-2.5 left-3 text-neutral-400"
                    height={16}
                    width={16}
                  />
                  <Input
                    type="email"
                    placeholder="Search Assigned Structures"
                    className="px-10 "
                  />
                </div>
                <ButtonPrimaryFlat
                  onClick={sortList}
                  icon={<ArrowDownUp />}
                  iconPosition="left"
                  title="sort"
                />
              </div>
            </div>
            <div className="shadow-sm rounded-[14px]">
              <div className="h-14 bg-base-lightBlue flex items-center mt-[14px] pl-[14px] rounded-t-[14px]">
                <RecordCount
                  title="Total Recipients"
                  total={2}
                  // bg="bg-primary-brandBlue"
                  color="text-primary-darkest"
                  bold="font-bold"
                  // size="text-lg"
                />
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
          </div>
        </div>
      </div>
    </ContainerDev>
  );
};

export default AssignAccusation;
