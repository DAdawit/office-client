import React from "react";

const ContainerDev = ({ children, style }) => {
  return (
    <div
      className={`${style} w-full custom-p-20 bg-white rounded-[10px] overflow-auto mb-[14px]`}
    >
      {children}
    </div>
  );
};

export default ContainerDev;
