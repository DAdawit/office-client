import { Eye, EyeOff, Info } from "lucide-react";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const InputField = ({
  id,
  label,
  type = "text",
  placeholder,
  icon: Icon,
  register,
  error,
  showPasswordToggle,
  showPassword,
  setShowPassword,
}) => {
  return (
    <div className="h-[68px] space-y-[12px]">
      <Label
        htmlFor={id}
        className="capitalize h-[20px] leading-[20px] text-[14px] text-primary-darkest dark:text-base-lightBlue "
      >
        {label}
      </Label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-icons-forground" />
        </div>
        <input
          id={id}
          type={
            showPasswordToggle ? (showPassword ? "text" : "password") : type
          }
          placeholder={placeholder}
          {...register(id)}
          className={cn(
            " w-full h-[44px] pl-10 pr-10 py-[12px] space-y-[12px] bg-neutral-100 border-[1px] border-base-lightBlue dark:border-neutral-600 rounded-sm custom-text-14 placeholder-neutral-400 not-placeholder-shown:bg-neutral-50 focus:outline-none focus:ring-[1px] focus:bg-neutral-50 focus:ring-primary-brandBlue transition-colors dark:bg-neutral-700",
            error &&
              "bg-Destructive-50 border-[1px] border-Destructive-500 focus:ring-1 focus:ring-Destructive-500 focus:border-none"
          )}
        />
        {error ? (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <Info size={17} className="text-Destructive-500" />
          </div>
        ) : (
          showPasswordToggle && (
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-neutral-400 hover:text-gray-600" />
              ) : (
                <Eye className="h-5 w-5 text-neutral-400 hover:text-gray-600" />
              )}
            </button>
          )
        )}
      </div>
    </div>
  );
};
export default InputField;
