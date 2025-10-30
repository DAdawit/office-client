import LinkComponent from "./linkComponent";
import CustomButton from "./custom-button";

export default function CustomForm({
  onSubmit,
  isSubmitting,
  isValid,
  isPending,
  handleSubmit,
  isLogin,
  to,
  linkName,
  linkClassName,
  children,
  buttonName,
  formClassName,
}) {
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 xxl:space-y-[40px]"
    >
      {children}

      {isLogin && (
        <div className="flex justify-end">
          <LinkComponent
            to="/forget-password"
            name="forget Password?"
            className="custom-text-14 text-primary-brandBlue hover:text-primary-brightBlue transition-colors"
          />
        </div>
      )}
      <CustomButton
        name={buttonName}
        type="submit"
        isSubmitting={isSubmitting}
        isValid={isValid}
        isPending={isPending}
        className={`
         w-full rounded-[4px] px-[24px] py-[8px] transition-colors duration-300
          ${
            !isValid || isSubmitting
              ? "bg-neutral-300 text-neutral-600 cursor-not-allowed hover:bg-neutral-300 dark:bg-neutral-900"
              : "bg-primary-brandBlue text-neutral-50 hover:bg-primary-dark"
          }
        `}
      />
      {!isLogin && (
        <div className="text-center">
          <LinkComponent to={to} className={linkClassName} name={linkName} />
        </div>
      )}
    </form>
  );
}
