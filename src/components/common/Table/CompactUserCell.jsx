// components/common/CompactUserCell.jsx - NEW COMPONENT
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const CompactUserCell = ({ user, className = "", name }) => {
  if (!user) return <span className="text-gray-400">-</span>;

  const getInitials = (name) => {
    return (
      name
        ?.split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2) || "U"
    );
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Avatar className="w-6 h-6">
        <AvatarImage src={user.avatar} alt={user.name} />
        <AvatarFallback className="custom-text-12 bg-gray-200">
          {getInitials(user.name)}
        </AvatarFallback>
      </Avatar>
      <div className="flex-1 min-w-0">
        <p className="custom-text-14 font-medium text-primary-darkest truncate">
          {user.name}
        </p>
        <p className="custom-text-12 text-gray-500 truncate">
          {user.email || user.position || ""}
        </p>
      </div>
    </div>
  );
};

export default CompactUserCell;
