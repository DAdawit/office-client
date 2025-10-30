import React, { useState } from "react";
import ContainerDev from "../common/ContainerDev";
import StickyHeader from "../common/StickyHeader";
import ButtonPrimaryOutlined from "../common/Buttons/ButtonPrimaryOutlined";
import ButtonPrimaryFilled from "../common/Buttons/ButtonPrimaryFilled";
import { Textarea } from "@/components/ui/textarea";
import {
  Calendar,
  ChevronDown,
  ChevronLeft,
  Clock4,
  CornerUpLeft,
  CornerUpRight,
  Edit,
  Forward,
  Phone,
  ReplyAll,
  Search,
  SquarePen,
  Upload,
  User,
  UserRound,
  X,
} from "lucide-react";
import Pending from "../common/Status/Pending";
import SubTitle from "../common/SubTitle";
import DetailField from "../common/DetailField";
import { MediaItemCard } from "../common/MediaItemCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "../ui/input";
import RecordCount from "../common/RecordCount";
import { DialogComponent } from "../common/Dlialogs/DialogComponent";
import RecordOfficeAddRecipients from "../RecordOffice/RecordOfficeAddRecipients";
import { useNavigate } from "react-router-dom";
import RespondAccusation from "./RespondAccusation";
import AssignAccusation from "./AssignAccusation";
import AccusationAssignedPositions from "./AccusationAssignedPositions";

const AccusationDetail = () => {
  const navigate = useNavigate();
  // recipiant accordion
  const [openRecipiant, setOpeRecipiant] = useState(true);
  const toggleRecipiantAccordion = () => setOpeRecipiant((prev) => !prev);
  return (
    <>
      <StickyHeader className="flex justify-between items-center">
        <button
          className="flex justify-between gap-x-2 items-center text-neutral-700 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft />
          <span className="text-xl font-bold">Accusation detail</span>
        </button>
        <div className="flex gap-x-2 items-center ">
          <Pending text="pending" />
          <DialogComponent
            headerTitle="Assign User Positions"
            actionBtnName={"confirm"}
            TriggerBtnName="Assign"
            dialogButtonVariant="outlined"
            dialogButtonIconPosition="left"
            className="w-lg"
          >
            <AssignAccusation />
          </DialogComponent>
          <DialogComponent
            headerTitle="respond accusation"
            actionBtnName={"confirm"}
            TriggerBtnName="Respond"
            dialogButtonVariant="primary"
            dialogButtonIconPosition="left"
            className="w-lg"
          >
            <RespondAccusation />
          </DialogComponent>
          <DialogComponent
            headerTitle="Resolve accusation"
            actionBtnName={"confirm"}
            TriggerBtnName="Resolve"
            dialogButtonVariant="primary"
            dialogButtonIconPosition="left"
            className="w-lg"
          >
            <RespondAccusation />
          </DialogComponent>
        </div>
      </StickyHeader>
      <ContainerDev style="custom-my-32">
        <h1 className="custom_text_xl custom-my-32">Hello mother</h1>
      </ContainerDev>
      <ContainerDev style="custom-mt-4 w-full">
        <div className="grid lg:flex lg:justify-between lg:gap-x-[14px] px-[14px] w-full">
          <div className="w-full grid gap-y-[14px] lg:p-[14px]  lg:shadow-[2px_0_1px_rgba(0,0,0,0.1)]">
            <SubTitle text="Accusation Information" />
            <div>
              <DetailField
                label="Accusation submission date"
                value="01 September 2025"
                icon={<Calendar className="w-4 h-4" />}
              />
              <hr className="custom-mt-4" />
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
              <DetailField
                label="planned date"
                value="01 September 2025"
                icon={<Calendar className="w-4 h-4" />}
              />
              <DetailField label="planned location" value="Lemi kura" />
              <DetailField
                label="Special place name"
                value="Ayat condominium"
              />
            </div>
            <hr className="pt-2" />
            <div>
              <DetailField
                label="Subject"
                value="Request for Project Progress Report"
              />
            </div>
            <hr className="pt-2" />
            <div>
              <DetailField
                label="description"
                value="Request for Project Progress Report"
              />
              <hr className="my-[14px]" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <DetailField label="Organization" value="Main Branch" />
              <DetailField label="Century Gothic" value="Main Branch" />
              <DetailField label="woreda" value="AASTU" />
            </div>
          </div>
          <div className="w-full">
            <AccusationAssignedPositions />
          </div>
        </div>
      </ContainerDev>
      <ContainerDev style="mt-[14px]">
        <SubTitle text="Contact Information " />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <DetailField
            label="Accuser name"
            value="01 September 2025"
            icon={<User className="w-4 h-4" />}
          />
          <DetailField
            label="Phone Number"
            value="0911000000"
            icon={<Phone className="w-4 h-4" />}
          />
        </div>
      </ContainerDev>

      <ContainerDev style="mt-[14px]">
        <SubTitle text="Media attached" />
        <div className="grid gap-y-2">
          {[1, 2].map((item) => (
            <MediaItemCard
              key={item}
              item={1}
              fileUrl="https://example.com/image.png"
              fileName="My Photo.jpg"
            />
          ))}
        </div>
      </ContainerDev>

      <ContainerDev style="mt-[14px]">
        <SubTitle text="Detail Information" />
        <div className="mt-[14px]">
          <h3 className="text-primary-brandBlue flex gap-x-2">
            <UserRound />
            <span>Recived By</span>
          </h3>
          <div>
            <div className="flex gap-x-2 items-center border-b-1 custom-p-32 last:border-b-0 py-2">
              <div className="text-primary-darkest">
                <Avatar className="rounded-full">
                  <AvatarImage
                    src="https://github.com/evilrabbit.png"
                    alt="@evilrabbit"
                  />
                  <AvatarFallback>ER</AvatarFallback>
                </Avatar>
              </div>
              <div className="grid">
                <h1 className="text-primary-darkest custom-text-14">
                  Rahel Taye
                </h1>
                <h1 className="text-neutral-500 custom-text-12">
                  ም/ዋና ዳይሬክተር /የቤት ማስተላለፍና ግንባታ ፋይናንስ ዘርፍ ኃላፊ/
                </h1>
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div className="mt-[14px]">
          <h3 className="text-primary-brandBlue flex gap-x-2">
            <Calendar />
            <span>Recived At</span>
          </h3>
          <h1 className="custom-p-32 text-neutral-800 font-bold">
            03 September 2025
          </h1>
        </div>
      </ContainerDev>
    </>
  );
};

export default AccusationDetail;
