// src/components/AllInputsForm.jsx
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// ---- Validation schema with Zod ----
const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];

const schema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Must include an uppercase letter")
    .regex(/[a-z]/, "Must include a lowercase letter")
    .regex(/\d/, "Must include a number"),
  age: z
    .number({ invalid_type_error: "Age must be a number" })
    .int("Age must be an integer")
    .min(13, "Minimum age is 13")
    .max(120, "Maximum age is 120"),
  role: z.enum(["user", "admin", "moderator"], {
    errorMap: () => ({ message: "Please select a role" }),
  }),
  interests: z
    .array(z.enum(["music", "sports", "tech", "art"]))
    .min(1, "Select at least one interest"),
  contactPreference: z.enum(["email", "phone"], {
    errorMap: () => ({ message: "Select a contact preference" }),
  }),
  website: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  bio: z.string().max(300, "Max 300 characters").optional(),
  dateOfBirth: z
    .string()
    .refine((v) => !!v, "Date of birth is required")
    .refine((v) => new Date(v) <= new Date(), "Date cannot be in the future"),
  preferredTime: z.string().refine((v) => !!v, "Preferred time is required"),
  favoriteColor: z.string().refine((v) => !!v, "Pick a color"),
  experience: z
    .number({ invalid_type_error: "Experience must be a number" })
    .min(0, "Cannot be negative")
    .max(30, "Keep it under 30"),
  agree: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms" }),
  }),
  avatar: z
    .any()
    .refine(
      (fileList) => fileList && fileList.length > 0,
      "Avatar image is required"
    )
    .refine(
      (fileList) => fileList && fileList[0]?.size <= MAX_FILE_SIZE,
      "Max file size is 2MB"
    )
    .refine(
      (fileList) => ACCEPTED_IMAGE_TYPES.includes(fileList[0]?.type),
      "Only .jpg, .png, .webp files are accepted"
    ),
});

// ---- Styles (Tailwind classes used, but you can swap for your CSS) ----
const labelCls = "block custom-text-14 font-medium custom-mb-4";
const inputCls =
  "w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500";
const errorCls = "custom-text-14 text-red-600 custom-custom-mt-20";
const sectionCls = "grid gap-2";

export default function AllInputsForm() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      age: 18,
      role: undefined,
      interests: [],
      contactPreference: undefined,
      website: "",
      bio: "",
      dateOfBirth: "",
      preferredTime: "",
      favoriteColor: "#0ea5e9",
      experience: 1,
      agree: false,
    },
  });

  // Example submit handler – adapt to your API/mutation
  const onSubmit = async (values) => {
    // Convert to FormData if you’re sending files
    const formData = new FormData();
    Object.entries(values).forEach(([key, val]) => {
      if (key === "avatar") {
        formData.append("avatar", val[0]); // single file
      } else if (Array.isArray(val)) {
        // append arrays (e.g., interests)
        val.forEach((v) => formData.append(`${key}[]`, v));
      } else {
        formData.append(key, val);
      }
    });

    // Example: POST with fetch (replace with your apiClient)
    // await apiClient.post("/your-endpoint", formData);

    // Simulate success
    await new Promise((r) => setTimeout(r, 700));
    alert("Submitted successfully! (Check console for payload)");
    console.log("Raw values:", values);
    console.log("FormData entries:", Array.from(formData.entries()));
  };

  return (
    <div className="max-w-2xl mx-auto custom-p-32 bg-white rounded-2xl shadow">
      <h1 className="text-2xl font-semibold custom-mb-20">All Inputs Form</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
        {/* Full Name */}
        <div className={sectionCls}>
          <label className={labelCls} htmlFor="fullName">
            Full Name
          </label>
          <input id="fullName" className={inputCls} {...register("fullName")} />
          {errors.fullName && (
            <p className={errorCls}>{errors.fullName.message}</p>
          )}
        </div>

        {/* Email */}
        <div className={sectionCls}>
          <label className={labelCls} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className={inputCls}
            {...register("email")}
          />
          {errors.email && <p className={errorCls}>{errors.email.message}</p>}
        </div>

        {/* Password */}
        <div className={sectionCls}>
          <label className={labelCls} htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            className={inputCls}
            placeholder="Min 8 chars, upper, lower, number"
            {...register("password")}
          />
          {errors.password && (
            <p className={errorCls}>{errors.password.message}</p>
          )}
        </div>

        {/* Age (number) */}
        <div className={sectionCls}>
          <label className={labelCls} htmlFor="age">
            Age
          </label>
          <input
            id="age"
            type="number"
            className={inputCls}
            {...register("age", { valueAsNumber: true })}
          />
          {errors.age && <p className={errorCls}>{errors.age.message}</p>}
        </div>

        {/* Role (select) */}
        <div className={sectionCls}>
          <label className={labelCls} htmlFor="role">
            Role
          </label>
          <select id="role" className={inputCls} {...register("role")}>
            <option value="">Select a role…</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="moderator">Moderator</option>
          </select>
          {errors.role && <p className={errorCls}>{errors.role.message}</p>}
        </div>

        {/* Interests (checkbox group / multi-select) */}
        <div className={sectionCls}>
          <span className={labelCls}>Interests</span>
          <div className="flex flex-wrap gap-4">
            {["music", "sports", "tech", "art"].map((key) => (
              <label key={key} className="flex items-center gap-2">
                <input type="checkbox" value={key} {...register("interests")} />
                <span className="capitalize">{key}</span>
              </label>
            ))}
          </div>
          {errors.interests && (
            <p className={errorCls}>{errors.interests.message}</p>
          )}
        </div>

        {/* Contact Preference (radio group) */}
        <div className={sectionCls}>
          <span className={labelCls}>Preferred Contact</span>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="email"
                {...register("contactPreference")}
              />
              Email
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="phone"
                {...register("contactPreference")}
              />
              Phone
            </label>
          </div>
          {errors.contactPreference && (
            <p className={errorCls}>{errors.contactPreference.message}</p>
          )}
        </div>

        {/* Website (URL) */}
        <div className={sectionCls}>
          <label className={labelCls} htmlFor="website">
            Website (optional)
          </label>
          <input
            id="website"
            type="url"
            className={inputCls}
            {...register("website")}
          />
          {errors.website && (
            <p className={errorCls}>{errors.website.message}</p>
          )}
        </div>

        {/* Bio (textarea) */}
        <div className={sectionCls}>
          <label className={labelCls} htmlFor="bio">
            Bio (optional, max 300 chars)
          </label>
          <textarea
            id="bio"
            className={inputCls}
            rows={4}
            {...register("bio")}
          />
          {errors.bio && <p className={errorCls}>{errors.bio.message}</p>}
        </div>

        {/* Date of birth */}
        <div className={sectionCls}>
          <label className={labelCls} htmlFor="dateOfBirth">
            Date of Birth
          </label>
          <input
            id="dateOfBirth"
            type="date"
            className={inputCls}
            {...register("dateOfBirth")}
          />
          {errors.dateOfBirth && (
            <p className={errorCls}>{errors.dateOfBirth.message}</p>
          )}
        </div>

        {/* Preferred time */}
        <div className={sectionCls}>
          <label className={labelCls} htmlFor="preferredTime">
            Preferred Time
          </label>
          <input
            id="preferredTime"
            type="time"
            className={inputCls}
            {...register("preferredTime")}
          />
          {errors.preferredTime && (
            <p className={errorCls}>{errors.preferredTime.message}</p>
          )}
        </div>

        {/* Favorite color */}
        <div className={sectionCls}>
          <label className={labelCls} htmlFor="favoriteColor">
            Favorite Color
          </label>
          <input
            id="favoriteColor"
            type="color"
            className="h-10 w-20 p-0 border rounded"
            {...register("favoriteColor")}
          />
          {errors.favoriteColor && (
            <p className={errorCls}>{errors.favoriteColor.message}</p>
          )}
        </div>

        {/* Experience (range) */}
        <div className={sectionCls}>
          <label className={labelCls} htmlFor="experience">
            Years of Experience:{" "}
            <RangeValue control={control} name="experience" />
          </label>
          <input
            id="experience"
            type="range"
            min={0}
            max={30}
            {...register("experience", { valueAsNumber: true })}
            className="w-full"
          />
          {errors.experience && (
            <p className={errorCls}>{errors.experience.message}</p>
          )}
        </div>

        {/* Avatar (file upload) */}
        <div className={sectionCls}>
          <label className={labelCls} htmlFor="avatar">
            Avatar (JPG/PNG/WebP, max 2MB)
          </label>
          <input
            id="avatar"
            type="file"
            accept={ACCEPTED_IMAGE_TYPES.join(",")}
            className="block"
            {...register("avatar")}
          />
          {errors.avatar && <p className={errorCls}>{errors.avatar.message}</p>}
        </div>

        {/* Terms */}
        <div className={sectionCls}>
          <label className="flex items-center gap-2">
            <input type="checkbox" {...register("agree")} />
            <span>I agree to the terms and conditions</span>
          </label>
          {errors.agree && <p className={errorCls}>{errors.agree.message}</p>}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            type="submit"
            className="rounded-lg bg-blue-600 text-white px-4 py-2 disabled:opacity-60"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
          <button
            type="button"
            className="rounded-lg border px-4 py-2"
            onClick={() => reset()}
            disabled={isSubmitting}
          >
            Reset
          </button>
          <button
            type="button"
            className="rounded-lg border px-4 py-2"
            onClick={() => {
              // Example: programmatic value set
              setValue("fullName", "John Doe", {
                shouldValidate: true,
                shouldDirty: true,
              });
            }}
            disabled={isSubmitting}
          >
            Fill Example
          </button>
        </div>

        {isSubmitSuccessful && (
          <p className="text-green-600">Form submitted successfully!</p>
        )}
      </form>
    </div>
  );
}

// Small helper to show live range value
function RangeValue({ control, name }) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value } }) => (
        <span className="font-semibold">{value ?? 0}</span>
      )}
    />
  );
}
