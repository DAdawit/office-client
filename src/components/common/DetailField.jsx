// components/common/DetailField.jsx
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const DetailField = ({
  label,
  value,
  icon,
  avatar,
  className = "",
  labelClassName = "",
  valueClassName = "",
  children,
  // Avatar props
  avatarSize = "w-6 h-6",
  // Layout
  layout = "vertical", // "vertical" | "horizontal" | "with-avatar"
  ...props
}) => {
  const renderContent = () => {
    if (children) {
      return children;
    }

    if (avatar) {
      return (
        <div className="flex items-center gap-x-2">
          <Avatar className={avatarSize}>
            <AvatarImage src={avatar.src} alt={avatar.alt} />
            <AvatarFallback>{avatar.fallback}</AvatarFallback>
          </Avatar>
          <p
            className={`text-neutral-900 font-bold custom-pl-12 custom-text-14 ${valueClassName}`}
          >
            {value}
          </p>
        </div>
      );
    }

    return (
      <p
        className={`text-neutral-900 font-bold custom-pl-12 custom-text-14 ${valueClassName}`}
      >
        {value}
      </p>
    );
  };

  return (
    <div className={className} {...props}>
      <label
        className={`block custom-text-14 text-primary-brandBlue custom-mb-4 ${labelClassName}`}
      >
        {icon && (
          <span className="inline-flex items-center custom-gapx-4">
            {icon}
            {label}
          </span>
        )}
        {!icon && label}
      </label>
      {renderContent()}
    </div>
  );
};

export default DetailField;
