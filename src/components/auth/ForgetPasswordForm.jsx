import { Info, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormTitle from "./FormTitle";
import { useMutation } from "@tanstack/react-query";
import { forgetPassword } from "@/services/auth/auth";
import CustomForm from "../common/custom-form";
import InputField from "../common/common-input";
import ResendEmail from "./resend-email";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
const resetSchema = z.object({
  email: z.string().email("Please enter a valid email"),
});
export function ForgetPasswordForm() {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid, isSubmitSuccessful },
    clearErrors,
    setError,
    reset,
  } = useForm({
    resolver: zodResolver(resetSchema),
    mode: "onTouched",
  });
  const [isEmailSended, setIsEmailSended] = useState(false);
  const {
    mutate: requestPasswordReset,
    isPending,
    isError,
    error,
    isSuccess,
  } = useMutation({
    mutationFn: forgetPassword,
    onSuccess: () => {
      setIsEmailSended(true);
    },
    onError: (err) => {
      console.log(err);

      setError("root", {
        message: err?.response?.data?.Message_en || "Your email is incorrect.",
      });
      setIsEmailSended(false);
    },
  });

  const onSubmit = (data) => {
    clearErrors("root");
    requestPasswordReset(data);
  };

  // if user login go dashboard no need forget password
  useEffect(() => {
    if (auth?.token) {
      navigate("/dashboard", { replace: true });
    }
  }, [auth, navigate]);
  if (isEmailSended) {
    return (
      <ResendEmail
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        isValid={isValid}
        isPending={isPending}
        register={register}
        errors={errors}
        error={error}
        buttonName="Resend"
      />
    );
  }

  return (
    <div className="w-full xxl:w-[420px] flex items-center justify-center gap-[0px] rounded-[12px] xxl:p-[24px]">
      <div className="w-[356px] space-y-[40px]">
        {!isEmailSended && (
          <FormTitle
            title="Reset Password"
            subtitle="  Restore access to your account"
          />
        )}
        {errors?.root && (
          <div className="custom-text-14 text-center w-[356px] flex items-center gap-2 py-2 px-4 text-neutral-900 bg-Destructive-50 rounded">
            <Info size={17} className="text-Destructive-500" />
            {errors?.root?.message}
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
          linkClassName={"text-primary-brandBlue"}
          linkName={"Return to login"}
          buttonName={"Reset Password "}
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
}
