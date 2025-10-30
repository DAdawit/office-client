import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import ButtonPrimaryFilled from "../Buttons/ButtonPrimaryFilled";
import ButtonPrimaryOutlined from "../Buttons/ButtonPrimaryOutlined";
import ButtonPrimaryFlat from "../Buttons/ButtonPrimaryFlat";
import ButtonHistoryType from "../Buttons/ButtonHistoryType";
import ButtonReject from "../Buttons/ButtonReject";

export function DialogComponent({
  headerTitle,
  HeaderIcon,
  headerData,
  actionBtnName,
  TriggerBtnName,
  children,
  dialogButtonVariant = "default",
  dialogButtonIcon,
  dialogButtonIconPosition = "right",
  footerShowCloseButtonOnly = false,
  customeDialogFooterContent,
  className,
  // handleSubmit
}) {
  const [selectedForward, setSelectedForward] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      await onForward(data);
    } catch (error) {
      console.error("Error forwarding document:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Render the appropriate trigger button based on variant
  const renderTriggerButton = () => {
    switch (dialogButtonVariant) {
      case "primary":
      case "default":
        return (
          <ButtonPrimaryFilled
            title={TriggerBtnName}
            icon={dialogButtonIcon}
            iconPosition={dialogButtonIconPosition}
          />
        );
      case "outlined":
        return (
          <ButtonPrimaryOutlined
            title={TriggerBtnName}
            icon={dialogButtonIcon}
            iconPosition={dialogButtonIconPosition}
          />
        );
      case "flat":
        return (
          <ButtonPrimaryFlat
            title={TriggerBtnName}
            icon={dialogButtonIcon}
            iconPosition={dialogButtonIconPosition}
          />
        );
      case "reject":
        return (
          <ButtonReject
            title={TriggerBtnName}
            icon={dialogButtonIcon}
            iconPosition={dialogButtonIconPosition}
          />
        );
      case "history":
        return <ButtonHistoryType title={TriggerBtnName} />;
      default:
        return (
          <ButtonPrimaryFilled
            title={TriggerBtnName}
            icon={dialogButtonIcon}
            iconPosition={dialogButtonIconPosition}
          />
        );
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{renderTriggerButton()}</DialogTrigger>
      <DialogContent
        className={`flex flex-col rounded-[20px] shadow-lg bg-white gap-0 w-full overflow-x-hidden ${className}`}
      >
        <DialogHeader className="pt-6 px-6 pb-4">
          <div className={`flex justify-between items-center gap-2`}>
            {HeaderIcon}
            <p
              className={`font-[Century_Gothic] font-bold text-[20px] leading-[140%] tracking-[0.5%] capitalize ${
                dialogButtonVariant == "reject"
                  ? "text-Destructive-600"
                  : "text-primary-brandBlue"
              }`}
            >
              {headerTitle}
            </p>
          </div>
          <div>{headerData}</div>
        </DialogHeader>
        <div
          className="w-full flex overflow-x-hidden overflow-y-auto "
          style={{
            scrollbarWidth: "none" /* Firefox */,
            msOverflowStyle: "none" /* IE/Edge */,
          }}
        >
          {children}
        </div>
        <DialogFooter className="py-3.5 px-6 items-end border-t bg-white rounded-b-[20px] mt-auto flex-shrink-0">
          <DialogClose asChild>
            <Button
              className="w-[79px] h-[36px] border-[#0A74B9] text-[#0A74B9] hover:bg-[#f0f8ff] bg-transparent"
              variant="outline"
            >
              Cancel
            </Button>
          </DialogClose>
          {footerShowCloseButtonOnly === true ? null : (
            <Button
              className={`${
                dialogButtonVariant === "reject"
                  ? "bg-Destructive-50 text-Destructive-600 hover:bg-Destructive-100 hover:text-Destructive-700"
                  : "w-[84px] h-[36px] bg-[#0A74B9] hover:bg-[#053B60] text-white"
              }`}
              type="submit"
            >
              {actionBtnName}
            </Button>
          )}
          {customeDialogFooterContent}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
