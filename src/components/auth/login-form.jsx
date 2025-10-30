import { Info, Lock, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "@/utils/zodSchema/login-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import CustomForm from "../common/custom-form";
import InputField from "../common/common-input";
import { useAuth } from "@/hooks/useAuth";

export function LoginForm() {
  const navigate = useNavigate();
  const { auth, login, loading, error } = useAuth();
  console.log(auth, "auth of the login user");
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    setError,
    clearErrors,
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
  });

  const onSubmit = async (data) => {
    clearErrors("root");

    // console.log(data);
    // if (
    //   data.loginIdentifier.startsWith("09") ||
    //   data.loginIdentifier.startsWith("07") ||
    //   data.loginIdentifier.startsWith("251")
    // ) {
    //   data.loginIdentifier = parseInt(data.loginIdentifier);
    //   console.log("login with phone", data);
    // } else {
    //   console.log("emil");
    // }
    // return;

    try {
      const result = await login(data);
      console.log(result);
      if (result.meta.requestStatus === "fulfilled") {
        navigate("/dashboard");
      } else if (result.meta.requestStatus === "rejected") {
        console.log(result, "see the result");
        setError("root", {
          type: "server",
          message: result?.payload?.Message_en || "Login failed",
        });
      }
    } catch (err) {
      setError("root", {
        type: "server",
        message: err?.message || "Unexpected error",
      });
    }
  };
  useEffect(() => {
    if (auth?.token) {
      navigate("/dashboard");
    }
  }, [auth, navigate]);
  return (
    <div className="w-full flex items-center justify-center xxl:gap-[10px] rounded-[12px]">
      <div className="w-full max-w-[356px] min-w-auto xxl:space-y-[10px]">
        {errors?.root?.message && (
          <div className="custom-text-14 text-center max-w-[356px] h-[40px] flex items-center gap-2 py-2 px-4 text-neutral-900 bg-Destructive-50 rounded">
            <Info size={17} className="text-Destructive-500" />
            {errors?.root?.message}
          </div>
        )}

        <CustomForm
          onSubmit={onSubmit}
          handleSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          isValid={isValid}
          isPending={loading}
          isLogin={true}
          buttonName={"Login"}
        >
          <InputField
            id="loginIdentifier"
            label="Email/ Phone *"
            type="text"
            placeholder="abc@gmail.com or 09/07...."
            icon={Mail}
            register={register}
            error={errors?.email}
          />

          <InputField
            id="password"
            label="Password *"
            placeholder="Enter Your Password"
            icon={Lock}
            register={register}
            error={errors.password}
            showPasswordToggle
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
        </CustomForm>
      </div>
    </div>
  );
}
