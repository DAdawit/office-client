import React, { useState } from "react";
import {
  Calendar,
  User,
  Building,
  Folder,
  CheckCircle,
  ChevronLeft,
  ReplyAll,
  CornerUpRight,
  CornerUpLeft,
  Clock4,
  ExternalLink,
  UserRound,
  Forward,
  Clock,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useForm } from "react-hook-form";

import ButtonPrimaryFilled from "../common/Buttons/ButtonPrimaryFilled";
import ButtonPrimaryOutlined from "../common/Buttons/ButtonPrimaryOutlined";
import AttachementPdf from "./AttachementPdf";
import Title from "../common/SubTitle";
import StickyHeader from "../common/StickyHeader";
import DetailField from "../common/DetailField";
import ButtonPrimaryFlat from "../common/Buttons/ButtonPrimaryFlat";
import ContainerDev from "../common/ContainerDev";
import SubTitle from "../common/SubTitle";
import { DialogComponent } from "../common/Dlialogs/DialogComponent";
import RecordOfficeAddRecipients from "../RecordOffice/RecordOfficeAddRecipients";
import ForwardHistory from "./ForwardHistory";
import { useNavigate } from "react-router-dom";
import ButtonHistoryType from "../common/Buttons/ButtonHistoryType";
import RepliedHistory from "./RepliedHistory";
import { ForwardIncomingLetter } from "./ForwardIncomingLetter";
import { IncommingInternalReplay } from "./IncommingInternalReplay";
import UserBadge from "../common/User/UserBadge";
import ButtonCustom from "../common/Buttons/ButtonCustom";

const forwardOptions = [
  {
    id: 1,
    name: "ስለሺ አጥናፌ ገ/ማሪያም",
    photoUrl: "https://github.com/shadcn.png",
    structure: "ኮርፖሬት ሰርቪስ ዘርፍ",
    orgName: "Technology Division",
    position: "ም/ዋና ዳይሬክተር",
  },
  {
    id: 2,
    name: "Rina Alvarez",
    photoUrl: "https://github.com/shadcn.png",
    structure: "RnA Cn Laboratories",
    orgName: "Research & Development",
    position: "ም/ዋና ዳይሬክተር",
  },
  {
    id: 3,
    name: "Ashton Irwin",
    photoUrl: "https://github.com/shadcn.png",
    structure: "Standard Protocol Ltd.",
    orgName: "Operations Unit",
    position: "ም/ዋና ዳይሬክተር",
  },
  {
    id: 4,
    name: "Samantha Reyes",
    photoUrl: "https://github.com/shadcn.png",
    structure: "Executive Summary Group",
    orgName: "Management Department",
    position: "ም/ዋና ዳይሬክተር",
  },
  {
    id: 5,
    name: "Felix Douglas",
    photoUrl: "https://github.com/shadcn.png",
    structure: "Documentation Bureau",
    orgName: "Corporate Archives",
    position: "ም/ዋና ዳይሬክተር",
  },
];

const senderInfo = {
  id: 1,
  name: "Kidist Woldegiorgis Woldekidan",
};

const IncommingLetterDetail = () => {
  const navigate = useNavigate();
  const [selectedForward, setSelectedForward] = useState([]);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      from: senderInfo?.name,
      recipients: [],
    },
  });

  // const handleForward = () => {
  //   console.log("hello mother fucker");
  // };
  return (
    <>
      <div className="w-full mx-auto ">
        <StickyHeader className="flex justify-between items-center">
          <button
            className="flex justify-between gap-x-2 items-center text-neutral-700 cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft />
            <span className="text-xl font-bold">Letter Detail</span>
          </button>
          <div className="flex gap-x-2 items-center ">
            <div className="flex items-center gap-x-2 bg-success-50 text-bg-success-500 px-2 py-1 rounded-[14px]">
              <ReplyAll />
              <span>Responded</span>
            </div>
            <DialogComponent
              HeaderIcon={<CornerUpRight className="w-6 h-6 text-[#0A74B9]" />}
              headerTitle="Forward"
              actionBtnName={"confirm"}
              TriggerBtnName="Forward"
              dialogButtonVariant="primary"
              dialogButtonIcon={<CornerUpRight />}
              dialogButtonIconPosition="left"
              className="w-lg"
            >
              <ForwardIncomingLetter
                senderInfo={senderInfo}
                forwardOptions={forwardOptions}
                selectedForward={selectedForward}
                setSelectedForward={setSelectedForward}
                register={register}
                setValue={setValue}
                watch={watch}
              />
            </DialogComponent>
            <DialogComponent
              HeaderIcon={<CornerUpLeft className="w-6 h-6 text-[#0A74B9]" />}
              headerTitle="Internal Reply"
              actionBtnName={"confirm"}
              TriggerBtnName="Internal Reply"
              dialogButtonVariant="outlined"
              dialogButtonIcon={<CornerUpLeft />}
              dialogButtonIconPosition="left"
              className="w-lg"
            >
              <IncommingInternalReplay
                senderInfo={senderInfo}
                forwardOptions={forwardOptions}
                selectedForward={selectedForward}
                setSelectedForward={setSelectedForward}
                register={register}
                setValue={setValue}
                watch={watch}
              />
            </DialogComponent>

            <div className="border-1 border-gray-1 h-2"></div>

            <DialogComponent
              HeaderIcon={<Clock className="w-6 h-6 text-[#0A74B9]" />}
              headerTitle="Forward History"
              actionBtnName={"confirm"}
              TriggerBtnName="Forward history"
              dialogButtonVariant="history"
              // dialogButtonIcon={<Clock4 />}
              // dialogButtonIconPosition="left"
              className="w-full max-w-[calc(100vw-320px)]"
            >
              <ForwardHistory />
            </DialogComponent>

            <DialogComponent
              HeaderIcon={<Clock className="w-6 h-6 text-[#0A74B9]" />}
              headerTitle="Reply history"
              actionBtnName={"confirm"}
              TriggerBtnName="Reply history"
              dialogButtonVariant="history"
              // dialogButtonIcon={<Clock4 />}
              // dialogButtonIconPosition="left"
              className="w-full max-w-[calc(100vw-320px)]"
            >
              <RepliedHistory />
            </DialogComponent>
          </div>
        </StickyHeader>
        {/* <ButtonCustom text="hello" toolTipText="hello" tooltipSide="right" /> */}

        <ContainerDev style="custom-my-14 custom-px-14 custom-py-20">
          {/* Header */}
          <div className="flex items-center custom-mb-20">
            <Title text="Letter Information" />
          </div>

          <div className="grid custom-gapy-14">
            {/* Letter From */}
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <DetailField
                label="Letter From"
                value="Addis Ababa City Administration – Construction Bureau"
                className="lg:col-span-3"
                valueClassName="text-primary-three"
              />
            </div>
            <hr />
            {/* Letter Number & Details */}
            <div className="grid grid-cols-1 md:grid-cols-3">
              <DetailField label="Letter Number" value="000245/2018" />
              <DetailField label="Nimera" value="NIM/2025/103" />
              <DetailField label="No. of Attachments" value="2" />
            </div>
            <hr />
            {/* Subject */}
            <DetailField
              label="Subject"
              value="Request for Project Progress Report"
            />
            <hr />
            {/* Dates & Status */}
            <div className="grid grid-cols-1 md:grid-cols-4">
              <DetailField
                label="Sent Date"
                value="01 September 2025"
                icon={<Calendar className="w-4 h-4" />}
              />
              <DetailField
                label="Received Date"
                value="03 September 2025"
                icon={<Calendar className="w-4 h-4" />}
              />
              <DetailField
                label="Status"
                children={
                  <span className="inline-flex items-center custom-px-10 custom-py-2 rounded-full custom-text-14 font-medium bg-gray-100 text-gray-800">
                    Registered
                  </span>
                }
              />
              <DetailField
                label="Late"
                children={
                  <span className="inline-flex items-center custom-px-10 custom-py-2 rounded-full custom-text-14 font-medium bg-red-100 text-red-800">
                    yes
                  </span>
                }
              />
            </div>

            <div className="border-t custom-pt-14">
              <DetailField
                label="Response Provided"
                children={
                  <div className="flex items-center gap-3 custom-pl-14">
                    <span className="text-neutral-900 font-bold custom-text-14">
                      Yes, outgoing letter
                    </span>
                    <ButtonPrimaryOutlined
                      title="Check Response"
                      icon={<ExternalLink />}
                    />
                  </div>
                }
              />
            </div>
          </div>
        </ContainerDev>
      </div>
      <AttachementPdf />
      <ContainerDev style="custom-mt-14">
        <SubTitle text="Detail Information" />
        <div className="custom-my-14">
          <h3 className="text-primary-brandBlue flex custom-gapx-14">
            <UserRound />
            <span>Registered by</span>
          </h3>
          <div className="custom-py-14 custom-pl-14">
            <UserBadge
              name="Rahel Taye"
              avatarSrc="https://github.com/evilrabbit.png"
              position="ም/ዋና ዳይሬክተር"
              structure="የቤት ማስተላለፍና ግንባታ ፋይናንስ ዘርፍ ኃላፊ"
            />
          </div>

          <hr />
        </div>
        <div className="custom-my-14">
          <h3 className="text-primary-brandBlue flex gap-x-2">
            <Calendar />
            <span>Registered At</span>
          </h3>
          <h1 className="custom-pl-14 custom-mt-14 text-neutral-800 font-bold">
            03 September 2025
          </h1>
        </div>
      </ContainerDev>
      {/* <ForwardDocSample /> */}
    </>
  );
};

export default IncommingLetterDetail;
