import React, { useState } from "react";
import ContainerDev from "../common/ContainerDev";
import Title from "../common/Title";
import ButtonPrimaryOutlined from "../common/Buttons/ButtonPrimaryOutlined";
import { IconButton } from "../ui/icon-button";
import {
  SquarePen,
  ChevronsUpDown,
  ChevronDown,
  Search,
  Image,
  Forward,
  User,
  UserRound,
  Calendar,
  Container,
  Upload,
  SquareMinus,
  ChevronLeft,
  X,
  Check,
  CirclePlus,
  CornerUpLeft,
} from "lucide-react";
import SubTitle from "../common/SubTitle";
import Active from "../common/Status/Active";
import RecordCount from "../common/RecordCount";
import DetailField from "../common/DetailField";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Input } from "../ui/input";
import { MediaItemCard } from "../common/MediaItemCard";

import RecordOfficeAddStructrue from "./RecordOfficeAddStructrue";
import RecordOfficeAddRecipients from "./RecordOfficeAddRecipients";
import ButtonPrimaryFilled from "../common/Buttons/ButtonPrimaryFilled";
import StickyHeader from "../common/StickyHeader";
import { useNavigate } from "react-router-dom";
import AddStamp from "./AddStamp";
import { DialogComponent } from "../common/Dlialogs/DialogComponent";
import EditStamps from "./EditStamps";
import RecordOfficeEditRecipients from "./RecordOfficeEditRecipients";
import RecordOfficeEditStructrue from "./RecordOfficeEditStructrue";
import Accordion from "../common/Accordion";
import UserBadge from "../common/User/UserBadge";
const RecordOfficeDetail = () => {
  const navigate = useNavigate();
  return (
    <div>
      <StickyHeader className="flex justify-between items-center ">
        <button
          className="flex justify-between custom-gapx-8 items-center text-neutral-700 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft />
          <span className="text-xl font-bold">Record office Detail</span>
        </button>
        <div className="flex justify-center items-center custom-gapx-8 text-primary-darkest">
          <Active text="Active" />
          <ButtonPrimaryOutlined title="Edit" icon={<SquarePen />} />
        </div>
      </StickyHeader>
      <ContainerDev style="custom-mt-14">
        <h2 className="custom-text-14 font-bold text-neutral-700">
          General Information
        </h2>
        <div className="grid custom-mt-14 custom-gapy-14">
          <DetailField label="Name" value="Central Record Office" />
          <hr className="" />
          <DetailField label="Organization" value="Main Branch" />
        </div>

        {/* Record office Stamps */}
        {/* stamp */}
        <Accordion
          headerTitle="Stamp"
          headerRightContent={
            <RecordCount
              title="Total Stamps"
              total={2}
              // bg="bg-primary-brandBlue"
              color="text-primary-darkest"
              bold="font-bold"
              // size="text-lg"
            />
          }
          className="mt-[14px]"
        >
          <div className="custom-p-14 border border-gray-200 rounded-b-[14px] dark:border-gray-700 dark:bg-gray-900">
            <div className="relative">
              <Search
                className="absolute top-2.5 left-3 text-neutral-400"
                height={16}
                width={16}
              />
              <Input
                type="email"
                placeholder="Search Stamps"
                className="px-10"
              />
            </div>
            <div className="shadow-sm rounded-[14px]">
              <div className="h-14 bg-base-lightBlue flex items-center custom-mt-14 custom-pl-14 rounded-t-[14px]">
                <h1 className="custom-text-14 font-bold text-primary-darkest">
                  Stamp iist{" "}
                </h1>
              </div>
              <div className="grid custom-py-8 custom-px-14 custom-gapy-8">
                {[1, 2].map((k) => (
                  <MediaItemCard
                    key={k}
                    item={1}
                    fileUrl="https://example.com/image.png"
                    fileName="My Photo.jpg"
                  />
                ))}
              </div>
            </div>

            <div className="flex justify-end w-full custom-mt-20 custom-gapx-8">
              <DialogComponent
                headerTitle="Edit Stamps"
                headerData={<RecordCount title="Total Stamps" total={20} />}
                actionBtnName={"confirm"}
                TriggerBtnName="Edit Stamps"
                dialogButtonVariant="outlined"
                dialogButtonIcon={<SquarePen />}
                dialogButtonIconPosition="left"
                className="w-full lg:max-w-[calc(100vw-320px)] [&>button:last-child]:hidden"
              >
                <EditStamps />
              </DialogComponent>
              <DialogComponent
                headerTitle="Add Stamps"
                headerData={<RecordCount title="Total Stamps" total={20} />}
                actionBtnName={"confirm"}
                TriggerBtnName="Add Stamps"
                dialogButtonVariant="primary"
                dialogButtonIcon={<CirclePlus />}
                dialogButtonIconPosition="left"
                className="w-full lg:max-w-[calc(100vw-320px)] [&>button:last-child]:hidden h-min top-60"
              >
                <AddStamp />
              </DialogComponent>
            </div>
          </div>
        </Accordion>

        {/* Recipiants */}
        <Accordion
          headerTitle={
            <span className="font-bold custom-text-14 text-neutral-700 flex items-center gap-x-2">
              <Forward />
              Forward Recipients
            </span>
          }
          headerRightContent={
            <RecordCount
              title="Total Recipients"
              total={2}
              // bg="bg-primary-brandBlue"
              color="text-primary-darkest"
              bold="font-bold"
              // size="text-lg"
            />
          }
        >
          <div className="custom-p-20 border border-gray-200 rounded-b-[14px] dark:border-gray-700 dark:bg-gray-900">
            <div className="relative">
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
            <div className="shadow-sm rounded-[14px]">
              <div className="h-14 bg-base-lightBlue flex items-center custom-mt-14 custom-pl-14 rounded-t-[14px]">
                <h1 className="custom-text-12 font-bold text-primary-darkest">
                  Recipients list
                </h1>
              </div>
              <div className="custom-py-8 custom-px-14">
                {[1, 2].map(() => (
                  <>
                    <div className="custom-py-8 border-b-1 last:border-b-0">
                      <UserBadge
                        name="Rahel Taye"
                        avatarSrc="https://github.com/evilrabbit.png"
                        position="ም/ዋና ዳይሬክተር"
                        structure="የቤት ማስተላለፍና ግንባታ ፋይናንስ ዘርፍ ኃላፊ"
                      />
                    </div>
                  </>
                ))}
              </div>
            </div>
            <div className="flex justify-end w-full custom-mt-20 custom-gapx-8">
              <DialogComponent
                headerTitle="Edit Recipients"
                actionBtnName={"confirm"}
                TriggerBtnName="Edit Recipients"
                dialogButtonVariant="outlined"
                dialogButtonIcon={<SquarePen />}
                dialogButtonIconPosition="left"
                className="w-full lg:max-w-[calc(100vw-320px)] [&>button:last-child]:hidden overflow-x-hidden"
              >
                <RecordOfficeEditRecipients />
              </DialogComponent>
              <DialogComponent
                headerTitle="Add Recipients"
                actionBtnName={"confirm"}
                TriggerBtnName="Add Recipients"
                dialogButtonVariant="primary"
                dialogButtonIcon={<CirclePlus />}
                dialogButtonIconPosition="left"
                className="w-full lg:max-w-[calc(100vw-320px)] [&>button:last-child]:hidden overflow-x-hidden"
              >
                <RecordOfficeAddRecipients />
              </DialogComponent>
            </div>
          </div>
        </Accordion>

        {/* Assigned Structures */}
        <Accordion
          headerTitle="Assigned Structures list"
          headerRightContent={
            <RecordCount
              title="Total Assigned Structure/s"
              total={2}
              // bg="bg-primary-brandBlue"
              color="text-primary-darkest"
              bold="font-bold"
              // size="text-lg"
            />
          }
        >
          <div className="custom-p-20 border border-gray-200 rounded-b-[14px] dark:border-gray-700 dark:bg-gray-900">
            <div className="relative">
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
            <div className="py-4">
              <h1 className="bg-neutral-50 rounded-full px-3 py-2 w-max">
                1. Main director
              </h1>
            </div>
            <div className="shadow-sm rounded-[14px]">
              <div className="h-14 bg-base-lightBlue flex items-center mt-[14px] pl-[14px] rounded-t-[14px]">
                <span className="font-bold custom-text-14  text-primary-darkest">
                  Assigned Structures list
                </span>
              </div>
              <div className="text-primary-darkest grid ">
                {["Main director", "IT directorate", "Finance Directorate"].map(
                  (struct) => (
                    <h1 className="text-primary-darkest py-2 border-b-1 border-gray-100 px-[14px]  last:border-none">
                      {struct}
                    </h1>
                  )
                )}
              </div>
            </div>
            <div className="flex justify-end w-full mt-5 gap-x-2">
              <DialogComponent
                headerTitle="Edit Assigned Structures"
                actionBtnName={"confirm"}
                TriggerBtnName="Edit Assigned Structures"
                dialogButtonVariant="outlined"
                dialogButtonIcon={<SquarePen />}
                dialogButtonIconPosition="left"
                className="w-full lg:max-w-[calc(100vw-320px)] [&>button:last-child]:hidden"
              >
                <RecordOfficeEditStructrue />
              </DialogComponent>
              <DialogComponent
                headerTitle="Add Assigned Structures"
                actionBtnName={"confirm"}
                TriggerBtnName="Add Assigned Structures"
                dialogButtonVariant="primary"
                dialogButtonIcon={<CirclePlus />}
                dialogButtonIconPosition="left"
                className="w-full lg:max-w-[calc(100vw-320px)] [&>button:last-child]:hidden"
              >
                <RecordOfficeAddStructrue />
              </DialogComponent>
            </div>
          </div>
        </Accordion>
      </ContainerDev>
      <br />
      <ContainerDev style="mt-5">
        <SubTitle text="Detail Information" />
        <div className="mt-[14px]">
          <h3 className="text-primary-brandBlue flex gap-x-2">
            <UserRound />
            <span>Created By</span>
          </h3>
          <div className="py-2 custom-p-32">
            <UserBadge
              name="Rahel Taye"
              avatarSrc="https://github.com/evilrabbit.png"
              position="ም/ዋና ዳይሬክተር"
              structure="የቤት ማስተላለፍና ግንባታ ፋይናንስ ዘርፍ ኃላፊ"
            />
          </div>
          <hr />
        </div>
        <div className="mt-[14px]">
          <h3 className="text-primary-brandBlue flex gap-x-2">
            <Calendar />
            <span>Created At</span>
          </h3>
          <h1 className="custom-p-32 text-neutral-800 font-bold">
            03 September 2025
          </h1>
        </div>
      </ContainerDev>
    </div>
  );
};

export default RecordOfficeDetail;
