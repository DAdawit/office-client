import { Lock, X, Check, Info } from "lucide-react";
import { useState, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useMutation } from "@tanstack/react-query";
import { resetPassword } from "@/services/auth/auth";
import CustomForm from "../common/custom-form";
import InputField from "../common/common-input";
import { PasswordChangeSucessDialog } from "../common/PasswordChangeSucessDialog";
const passwordSchema = z
  .object({
    newPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])/, {
        message:
          "Password must include at least one number and one special character",
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Your Passwords do not match",
    path: ["confirmPassword"],
  });

export function ResetPasswordForm() {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [searchParams] = useSearchParams();
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const id = searchParams.get("id");
  const token = searchParams.get("token");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: zodResolver(passwordSchema),
    mode: "onTouched",
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const newPassword = watch("newPassword");
  const confirmPassword = watch("confirmPassword");
  const requirements = useMemo(() => {
    return {
      minLength: newPassword.length >= 8,
      numberAndLetter: /^(?=.*[0-9])(?=.*[A-Za-z])/.test(newPassword),
      specialChar: /[!@#$%^&*]/.test(newPassword),
    };
  }, [newPassword]);

  const {
    mutate: resetPasswordRequest,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: resetPassword,
    onSuccess: () => {
      setShowSuccessDialog(true);
    },
    onError: (err) => {
      setError("root", {
        message:
          err?.response?.data?.Message_en ||
          "Sorry something went wrong! Tray again.",
      });
    },
  });

  const onSubmit = (data) => {
    resetPasswordRequest({ ...data, id, token });
  };
  return (
    <>
      <div className="w-full flex items-center justify-center rounded-[12px] pb-5 px-2 ">
        <div className="w-full max-w-[356px] min-w-auto space-y-[10px]">
          {error && (
            <div className="custom-text-14 text-center bg-Destructive-50 w-[356px] flex items-center gap-2 py-3 px-4 text-neutral-900 rounded">
              <Info size={17} className="text-Destructive-500" />
              {errors.root?.message || error?.message}
            </div>
          )}
          <CustomForm
            onSubmit={onSubmit}
            handleSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            isValid={isValid}
            isPending={isPending}
            isLogin={false}
            to="/"
            buttonName={"Reset Password "}
            linkClassName={"text-primary-brandBlue"}
            linkName={"Return to login"}
          >
            <InputField
              id="newPassword"
              label="new Password *"
              placeholder="Enter Your New Password"
              icon={Lock}
              register={register}
              error={errors.newPassword}
              showPasswordToggle
              showPassword={showNewPassword}
              setShowPassword={setShowNewPassword}
            />
            <InputField
              id="confirmPassword"
              label="confirm Password *"
              placeholder="Enter Your Confirm Password"
              icon={Lock}
              register={register}
              error={errors?.confirmPassword}
              showPasswordToggle
              showPassword={showConfirmPassword}
              setShowPassword={setShowConfirmPassword}
            />
            {errors?.confirmPassword && (
              <p className="text-Destructive-500 custom-p-4 text-[14px]">
                {errors?.confirmPassword?.message}
              </p>
            )}
            {newPassword && (
              <div className="w-[356px] space-y-[4px] p-[8px] bg-neutral-100 dark:dark:bg-background">
                <div className="flex items-center gap-2">
                  {requirements.minLength ? (
                    <Check className="text-success-900 dark:text-success-200 w-[24px] h-[24px]" />
                  ) : (
                    <X className="text-neutral-900 dark:text-warning-50 w-[24px] h-[24px]" />
                  )}
                  <p
                    className={`text-neutral-900 text-[12px] ${
                      requirements.minLength
                        ? "text-success-900 dark:text-success-200"
                        : "text-neutral-900 dark:text-warning-200"
                    }`}
                  >
                    Minimum 8 letters
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {requirements.numberAndLetter ? (
                    <Check className="text-success-900 dark:text-success-200 w-[24px] h-[24px]" />
                  ) : (
                    <X className="text-neutral-900 dark:text-warning-50 w-[24px] h-[24px]" />
                  )}
                  <p
                    className={`text-neutral-900 text-[12px] ${
                      requirements.numberAndLetter
                        ? "text-success-900 dark:text-success-200"
                        : "text-neutral-900 dark:text-warning-200"
                    }`}
                  >
                    Password must include at least one number and one letter.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {requirements.specialChar ? (
                    <Check className="text-success-900 dark:text-success-200 w-[24px] h-[24px]" />
                  ) : (
                    <X className="text-neutral-900 dark:text-warning-50 w-[24px] h-[24px]" />
                  )}
                  <p
                    className={`text-neutral-900 text-[12px] ${
                      requirements.specialChar
                        ? "text-success-900 dark:text-success-200"
                        : "text-neutral-900 dark:text-warning-200"
                    }`}
                  >
                    At least one special character (e.g., !, @, #, $).
                  </p>
                </div>
              </div>
            )}
          </CustomForm>
        </div>
      </div>
      <PasswordChangeSucessDialog show={showSuccessDialog} />
    </>
  );
}
