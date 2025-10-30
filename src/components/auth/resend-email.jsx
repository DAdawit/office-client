import React from "react";
import { Mail } from "lucide-react";
import CustomForm from "../common/custom-form";
import InputField from "../common/common-input";
const ResendEmail = ({
  onSubmit,
  handleSubmit,
  isSubmitting,
  isValid,
  isPending,
  register,
  errors,
  buttonName,
  error,
}) => {
  return (
    <div className="flex items-center justify-center gap-[10px] rounded-[12px] bg-base-white">
      <div className="space-y-[40px]">
        <div className="w-[356px] text-center space-y-[16px] ">
          <h1 className="text-[20px] font-bold text-primary-darkest">
            Reset Password
          </h1>
          <p className="text-neutral-500 text-[14px] text-center">
            Thanks! If haileyonas@gmail.com matches an email address we have on
            file, then we've sent you an email containing further instructions
            for resetting your password.
          </p>
          <div className="custom-text-14 text-neutral-500">
            <p>
              If you haven’t received an email in 5 minutes, check your spam,
              resend, or try a different email address.
            </p>
          </div>
        </div>

        <CustomForm
          onSubmit={onSubmit}
          handleSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          isValid={isValid}
          isPending={isPending}
          isLogin={false}
          to="/"
          linkClassName={"text-primary-brandBlue"}
          linkName={"Return to login"}
          buttonName={buttonName}
        >
          <InputField
            id="email"
            label="Email *"
            type="email"
            placeholder="Enter Your Email"
            icon={Mail}
            register={register}
            error={errors?.email}
          />
        </CustomForm>
      </div>
    </div>
  );
};

export default ResendEmail;
