import AuthMainLayout from "@/components/auth/AuthMainLayout";
import FormTitle from "@/components/auth/FormTitle";
import { LoginForm } from "@/components/auth/login-form";
import React from "react";

function LoginPage() {
  return (
    <>
      <AuthMainLayout>
        <FormTitle title="Welcome Back" subtitle="Login to your account" />
        <LoginForm />
      </AuthMainLayout>
    </>
  );
}

export default LoginPage;
