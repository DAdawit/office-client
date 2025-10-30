import { Button } from "@/components/ui/button";
import React from "react";

const ButtonPrimaryFlat = ({
  title,
  icon,
  iconPosition = "right",
  iconWidth = 16,
  iconHeight = 16,
  onClick,
}) => {
  // Clone the icon and apply size props
  const sizedIcon = icon
    ? React.cloneElement(icon, {
        width: iconWidth,
        height: iconHeight,
        className: `${icon.props.className || ""}`,
      })
    : null;

  return (
    <Button
      className="flex justify-between gap-x-2 items-center text-primary-brandBlue bg-transparent hover:text-primary-dark transition-colors duration-200 py-1 px-5 rounded-sm custom-text-14 cursor-pointer"
      onClick={onClick}
    >
      {iconPosition === "left" && sizedIcon}
      {title}
      {iconPosition === "right" && sizedIcon}
    </Button>
  );
};

export default ButtonPrimaryFlat;
