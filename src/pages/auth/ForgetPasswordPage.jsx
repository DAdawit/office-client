import AuthMainLayout from "@/components/auth/AuthMainLayout";
import { ForgetPasswordForm } from "@/components/auth/ForgetPasswordForm";
import FormTitle from "@/components/auth/FormTitle";
import React from "react";

const ForgetPasswordPage = () => {
  return (
    <>
      <AuthMainLayout>
        <ForgetPasswordForm />
      </AuthMainLayout>
    </>
  );
};

export default ForgetPasswordPage;
