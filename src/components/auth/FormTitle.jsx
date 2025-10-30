import React from "react";

const FormTitle = ({ title, subtitle }) => {
  return (
    <>
      <div className="w-[356px] max-h-[50px] text-center space-y-[8px] custom-mt-4 custom-my-20 dark:bg-background">
        <h1 className="text-[20px] font-bold text-primary-darkest dark:text-base-lightBlue">
          {title}
        </h1>
        {subtitle != "" && (
          <p className="text-neutral-500 text-[14px] text-center dark:text-neutral-400 custom-my-20">
            {subtitle}
          </p>
        )}
      </div>
    </>
  );
};

export default FormTitle;
