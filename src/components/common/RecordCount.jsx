import React from "react";

const RecordCount = ({
  title,
  total,
  bg = "bg-neutral-500",
  color = "text-gray-600",
  size = "custom-text-14",
  bold = "font-noraml",
}) => {
  return (
    <p className={`${color} ${bold} ${size} capitalize my-[14px]`}>
      {title}:{" "}
      <span className={`${bg} py-1 px-2 rounded-[100px] text-white`}>
        {total}
      </span>
    </p>
  );
};

export default RecordCount;
