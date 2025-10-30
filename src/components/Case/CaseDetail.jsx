import React, { useState } from "react";
import ContainerDev from "../common/ContainerDev";
import Title from "../common/Title";
import DetailField from "../common/DetailField";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Calendar,
  ChevronDown,
  ChevronLeft,
  CirclePlus,
  Clock,
  CornerUpLeft,
  CornerUpRight,
  ExternalLink,
  Eye,
  FileText,
  MessageSquare,
  Paperclip,
  Phone,
  ReplyAll,
  User,
  UserRound,
  X,
} from "lucide-react";
import { MediaItemCard } from "../common/MediaItemCard";
import SubTitle from "../common/SubTitle";
import RecordCount from "../common/RecordCount";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DataPreview from "../common/DataPreview";
import ButtonPrimaryFilled from "../common/Buttons/ButtonPrimaryFilled";
import StickyHeader from "../common/StickyHeader";
import { useNavigate } from "react-router-dom";
import { DialogComponent } from "../common/Dlialogs/DialogComponent";
import { useForm } from "react-hook-form";
import { CaseInternalReplay } from "./CaseInternalReplay";
import CaseRepliedHistory from "./CaseRepliedHistory";
import ForwardCase from "./ForwardCase";
import CaseForwardHistory from "./CaseForwardHistory";
import ButtonReject from "../common/Buttons/ButtonReject";
import RejectCase from "./RejectCase";
import ButtonPrimaryFlat from "../common/Buttons/ButtonPrimaryFlat";
import Accordion from "../common/Accordion";
import UserBadge from "../common/User/UserBadge";

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
const CaseDetail = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const formData = [
    {
      id: 1,
      question:
        "Health Condition: Are You Physically Impaired? If Yes, Please Provide Evidence Documentation.",
      answer: "Yes - Physical Injury",
      document: {
        name: "Evidence 1.pdf",
        size: "2.2 mb",
        hasFile: true,
      },
    },
    {
      id: 2,
      question:
        "House Request Documents: Select The Type Of Housing Request You Are Submitting.",
      answer: "Lottery Draw",
      document: {
        name: "lottery.pdf",
        size: "2.2 mb",
        hasFile: true,
      },
    },
    {
      id: 3,
      question:
        "Type Of Requested House: Choose The Type Of Accommodation That Best Suits Your Needs.",
      answer: "Studio",
      document: {
        hasFile: false,
      },
    },
  ];

  const customerData = {
    fullName: "Arega Tesfaye Abate",
    phoneNumber: "0911000000",
    gender: "male",
    subCity: "Main Branch",
    woreda: "AASTU",
    houseNumber: "Main Branch",
    documents: [
      {
        id: 1,
        fileName: "Kebele ID123.png",
        fileSize: "777 kb",
        fileUrl: "https://example.com/kebele-id.png",
      },
    ],
  };
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

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <StickyHeader className="flex justify-between items-center">
        <button
          className="flex justify-between gap-x-2 items-center text-neutral-700 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft />
          <span className="text-xl font-bold">Cases</span>
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
            className="w-lg overflow-x-hidden"
          >
            <ForwardCase
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
            className="w-lg overflow-x-hidden"
          >
            <CaseInternalReplay
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
            footerShowCloseButtonOnly={true}
            // dialogButtonIcon={<Clock4 />}
            // dialogButtonIconPosition="left"
            className="w-full max-w-[calc(100vw-320px)] overflow-x-hidden"
            customeDialogFooterContent={
              <ButtonPrimaryFilled
                icon={<Eye />}
                title="View Analytics"
                iconPosition="left"
              />
            }
          >
            <CaseForwardHistory />
          </DialogComponent>

          <DialogComponent
            HeaderIcon={<Clock className="w-6 h-6 text-[#0A74B9]" />}
            headerTitle="Reply history"
            actionBtnName={"confirm"}
            TriggerBtnName="Reply history"
            dialogButtonVariant="history"
            footerShowCloseButtonOnly={true}
            // dialogButtonIcon={<Clock4 />}
            // dialogButtonIconPosition="left"
            className="w-full max-w-[calc(100vw-320px)] overflow-x-hidden"
            customeDialogFooterContent={
              <ButtonPrimaryFilled
                icon={<Eye />}
                title="View Analytics"
                iconPosition="left"
              />
            }
          >
            <CaseRepliedHistory />
          </DialogComponent>
        </div>
      </StickyHeader>

      <ContainerDev style="py-[14px] px-[20px] mt-[14px]">
        <div className="flex flex-col justify-start gap-y-[14px] lg:flex-row lg:gap-y-0 lg:items-center lg:justify-between">
          {/* Case Number */}
          <div>
            <h1 className="custom-text-14 font-bold text-primary-darkest whitespace-nowrap">
              Case Number:{" "}
              <span className="text-white bg-primary-brandBlue custom-text-14 font-bold px-2 py-1 rounded-full">
                CSD000012
              </span>
            </h1>
          </div>

          {/* Action Buttons */}
          <div className="flex  gap-3">
            <ButtonPrimaryFilled
              icon={<Calendar size={16} />}
              title="Schedule"
              iconPosition="left"
            />
            <DialogComponent
              HeaderIcon={<X className="w-6 h-6 text-Destructive-600" />}
              headerTitle="Reject"
              actionBtnName={"Reject"}
              TriggerBtnName="Reject"
              dialogButtonVariant="reject"
              dialogButtonIcon={<CornerUpRight />}
              dialogButtonIconPosition="left"
              className="w-lg h-max top-40 overflow-hidden "
            >
              <RejectCase />
            </DialogComponent>
            <button className="flex items-center gap-x-2 px-2 py-1 bg-success-50 text-success-900 rounded-[4px]">
              <span>
                <ExternalLink height={16} width={16} />
              </span>
              <span>Respond</span>
            </button>
          </div>
        </div>
      </ContainerDev>
      <ContainerDev>
        <div className="flex items-center gap-2 mb-6">
          <SubTitle text="Case request Information" />
        </div>

        <div className="space-y-6">
          {/* Letter From */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <DetailField
              label="Structure"
              value="corporate service division"
              className="lg:col-span-3"
              valueClassName="text-primary-three"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <DetailField
              label="Case name"
              value="House Change Request Submission Form"
              className="lg:col-span-3"
              valueClassName="text-primary-three"
            />
          </div>

          <Accordion
            headerTitle="Customer Contact Information"
            headerLeftContent={
              <span className="text-primary-darkest custom-text-14 flex items-center gap-1 bg-neutral-50 px-2 py-1 rounded-[10px]">
                <X size={16} /> Not fayda verified
              </span>
            }
          >
            <div className="p-4 space-y-4">
              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <DetailField
                  label="Full Name"
                  value="Arega Tesfaye Abate"
                  icon={<User className="w-4 h-4" />}
                />
                <DetailField
                  label="Phone Number"
                  value="0911000000"
                  icon={<Phone className="w-4 h-4" />}
                />
                <DetailField label="Gender" value="Female" />
              </div>
              <hr />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <DetailField label="Sub City" value="Main Branch" />
                <DetailField label="Woreda" value="AASTU" />
                <DetailField label="House Number" value="12456" />
              </div>

              {/* Documents */}
              <div className="pt-2">
                <h3 className="custom-text-14 text-primary-brandBlue block custom-custom-custom-custom-custom-custom-custom-custom-mb-8">
                  Resident ID
                </h3>
                {customerData.documents.map((doc) => (
                  <MediaItemCard
                    key={doc.id}
                    item={doc.id}
                    fileUrl={doc.fileUrl}
                    fileName={doc.fileName}
                    fileSize={doc.fileSize}
                  />
                ))}
              </div>
            </div>
          </Accordion>
        </div>
      </ContainerDev>

      <ContainerDev style="custom-mt-20">
        <div className="flex justify-between gap-x-[14px] w-full">
          <div className={`w-full ${isMobile && isExpanded ? "hidden" : ""}`}>
            <div className="mb-">
              <SubTitle text="Submitted Form" />
            </div>

            {/* Form Questions */}
            <div className="space-y-[14px]">
              {formData.map((item, index) => (
                <div
                  key={item.id}
                  className="border-b border-neutral-200 pb-6 last:border-b-0 last:pb-0"
                >
                  {/* Question Number and Text */}
                  <div className="flex flex-col items-start custom-mb-12">
                    <RecordCount title="Question" total={index + 1} />
                    <DetailField label={item.question} value={item.answer} />
                  </div>

                  {/* Attached Document */}
                  <div>
                    <h3 className="custom-text-14 text-primary-brandBlue custom-mb-8 flex items-center gap-x-2">
                      <span className="text-primary-brandBlue">
                        <Paperclip height={18} width={18} />
                      </span>
                      Attached Document
                    </h3>
                    {item.document.hasFile ? (
                      <div className="flex items-center justify-between bg-neutral-100 px-4 py-3 rounded-[6px]">
                        <div className="flex items-center gap-3">
                          <FileText
                            className="text-primary-brandBlue"
                            size={20}
                          />
                          <div>
                            <p className="custom-text-14 font-medium text-primary-darkest">
                              {item.document.name}
                            </p>
                            <p className="custom-text-12 text-neutral-500">
                              {item.document.size}
                            </p>
                          </div>
                        </div>
                        <button className="flex items-center gap-1 text-primary-brandBlue hover:text-primary-darkest transition-colors">
                          <Eye size={16} />
                          <span className="custom-text-14">Preview</span>
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center bg-neutral-100 px-4 py-3 rounded-[6px]">
                        <div className="flex items-center gap-3">
                          <FileText className="text-neutral-400" size={20} />
                          <p className="custom-text-14 text-neutral-400 italic">
                            No document attached
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <DataPreview isExpanded={isExpanded} setIsExpanded={setIsExpanded}>
            <h1>question preview</h1>
          </DataPreview>
        </div>
      </ContainerDev>
      <ContainerDev style="mt-[14px]">
        <SubTitle text="Detail Information" />
        <div className="mt-[14px]">
          <h3 className="text-primary-brandBlue flex gap-x-2">
            <UserRound />
            <span>Registered by</span>
          </h3>
          <div className="custom-p-32 py-2">
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
            <span>Registered At</span>
          </h3>
          <h1 className="custom-p-32 text-neutral-800 font-bold">
            03 September 2025
          </h1>
        </div>
      </ContainerDev>
    </>
  );
};

export default CaseDetail;
