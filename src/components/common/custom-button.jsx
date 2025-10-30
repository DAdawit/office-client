import React from "react";
import LoadingSpinner from "./loading-spinner";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const CustomButton = ({
  name,
  className,
  isValid,
  type = "button",
  isSubmitting,
  isPending,
  ...props
}) => {
  const isDisabled = !isValid || isSubmitting;

  return (
    <Button
      type={type}
      disabled={isDisabled}
      className={cn(className, "cursor-pointer")}
      {...props}
    >
      {isSubmitting || isPending ? <LoadingSpinner name="submitting" /> : name}
    </Button>
  );
};

export default CustomButton;
