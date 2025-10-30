import AuthMainLayout from "@/components/auth/AuthMainLayout";
import { ResetPasswordForm } from "@/components/auth/ResetPasswordForm";
import FormTitle from "@/components/auth/FormTitle";
import { ScrollArea } from "@/components/ui/scroll-area";

const ResetPasswordPage = () => {
  return (
    <>
      <AuthMainLayout>
        <FormTitle
          title="Create New Password"
          subtitle=" Restore Your Password"
        />
        <ResetPasswordForm />
      </AuthMainLayout>
    </>
  );
};

export default ResetPasswordPage;
