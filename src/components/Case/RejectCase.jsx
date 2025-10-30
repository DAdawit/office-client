import React from "react";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";

const RejectCase = ({ onSubmit, defaultValues }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm({
    defaultValues: {
      justification: defaultValues?.justification || "",
    },
  });

  const handleFormSubmit = (data) => {
    onSubmit?.(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="w-full p-[14px]">
      <label
        htmlFor="justification"
        className="custom-text-14 text-neutral-700 block custom-mb-8"
      >
        Justification
      </label>
      <Textarea
        id="justification"
        placeholder="Write your justification."
        className="w-[452px] custom-custom-mt-20 h-[76px]"
        {...register("justification", {
          required: "Justification is required",
          minLength: {
            value: 10,
            message: "Justification must be at least 10 characters long",
          },
          maxLength: {
            value: 500,
            message: "Justification must not exceed 500 characters",
          },
        })}
      />
      {errors.justification && (
        <p className="text-red-500 custom-text-12 custom-custom-mt-20">
          {errors.justification.message}
        </p>
      )}

      {/* Character count (optional) */}
      <div className="custom-text-12 text-neutral-500 custom-mt-4 text-right">
        {watch("justification")?.length || 0}/500 characters
      </div>
    </form>
  );
};

export default RejectCase;
