import React from "react";
import { useForm } from "react-hook-form";
import ContainerDev from "../common/ContainerDev";
import { useNavigate } from "react-router-dom";
import StickyHeader from "../common/StickyHeader";
import { Check, ChevronLeft, Upload, X } from "lucide-react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ButtonPrimaryOutlined from "../common/Buttons/ButtonPrimaryOutlined";
import ButtonPrimaryFilled from "../common/Buttons/ButtonPrimaryFilled";

const RegisterIncommingLetter = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
    control,
  } = useForm({
    defaultValues: {
      letterFrom: "",
      nimera: "",
      noAttachment: "",
      subject: "",
      organization: "",
      category: "",
      file: null,
    },
  });

  const onSubmit = async (data) => {
    try {
      console.log("Form submitted:", data);
      // Handle form submission logic here
      // await submitLetter(data);
      // navigate("/success-page");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const onCancel = () => {
    navigate(-1);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setValue("file", file);
    }
  };

  return (
    <>
      <div className="w-full mx-auto ">
        <StickyHeader
          className="flex justify-between items-center"
          mergenleft="0"
        >
          <button
            className="flex justify-between gap-x-2 items-center text-neutral-700 cursor-pointer"
            onClick={onCancel}
            type="button"
          >
            <ChevronLeft />
            <span className="custom-text-14 font-bold">
              Register Incoming Letters
            </span>
          </button>
          {/* <div className="flex gap-x-2 items-center "></div> */}
        </StickyHeader>

        <ContainerDev style="min-h-screen custom-mt-14">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="custom-text-14 font-bold">General Information</h1>

            {/* Letter From */}
            <div className="w-full custom-mt-14">
              <div className="flex flex-col bg-neutral-100 custom-px-14 custom-py-14 rounded-[10px] custom-gapy-14 custom-text-14">
                <label
                  htmlFor="letterFrom"
                  className="text-primary-darkest  custom-text-14"
                >
                  Letter From *
                </label>
                <Input
                  type="text"
                  id="letterFrom"
                  placeholder=""
                  {...register("letterFrom", {
                    required: "Letter from is required",
                  })}
                  className={`text-neutral-900 ${
                    errors.letterFrom ? "border-red-500" : ""
                  }`}
                />
                {errors.letterFrom && (
                  <p className="text-red-500 custom-text-12">
                    {errors.letterFrom.message}
                  </p>
                )}
              </div>
            </div>

            {/* Nimera and No of Attachment */}
            <div className="flex custom-gapx-14 w-full custom-mt-14 items-center">
              <div className="flex flex-col custom-p-14  rounded-[10px] custom-gapy-14 custom-text-14 w-full">
                <label
                  htmlFor="nimera"
                  className="text-primary-darkest custom-text-14"
                >
                  Nimera *
                </label>
                <Input
                  type="text"
                  id="nimera"
                  {...register("nimera", {
                    required: "Nimera is required",
                  })}
                  className={`text-neutral-900 ${
                    errors.letterFrom ? "border-red-500" : ""
                  }`}
                />
                {errors.nimera && (
                  <p className="text-red-500 custom-text-12">
                    {errors.nimera.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col p-[14px] rounded-[10px] gap-y-[14px] custom-text-14 w-full">
                <label
                  htmlFor="noAttachment"
                  className="text-primary-darkest  custom-text-14"
                >
                  No of attachment *
                </label>
                <Input
                  type="number"
                  id="noAttachment"
                  {...register("noAttachment", {
                    required: "Number of attachments is required",
                    min: { value: 0, message: "Must be a positive number" },
                  })}
                  className={`text-neutral-900 ${
                    errors.letterFrom ? "border-red-500" : ""
                  }`}
                />
                {errors.noAttachment && (
                  <p className="text-red-500 custom-text-12">
                    {errors.noAttachment.message}
                  </p>
                )}
              </div>
            </div>

            {/* Subject */}
            <div className="w-full">
              <div className="flex flex-col bg-neutral-100 custom-px-14 custom-py-14 rounded-[10px] custom-gapy-14 custom-text-14">
                <label
                  htmlFor="subject"
                  className="text-primary-darkest custom-text-14"
                >
                  Subject *
                </label>
                <Input
                  type="text"
                  id="subject"
                  placeholder=""
                  {...register("subject", {
                    required: "Subject is required",
                  })}
                  className={`text-neutral-900 ${
                    errors.letterFrom ? "border-red-500" : ""
                  }`}
                />
                {errors.subject && (
                  <p className="text-red-500 custom-text-12">
                    {errors.subject.message}
                  </p>
                )}
              </div>
            </div>

            {/* Organization and Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[14px] w-full">
              <div className="flex flex-col p-[14px] rounded-[10px] gap-y-[14px] custom-text-14 w-full">
                <label
                  htmlFor="organization"
                  className="text-primary-darkest custom-text-14"
                >
                  Organization *
                </label>
                <Select
                  onValueChange={(value) => setValue("organization", value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose Organization" />
                  </SelectTrigger>
                  <SelectContent
                    className="w-full text-neutral-950"
                    id="organization"
                  >
                    <SelectGroup>
                      <SelectLabel>Organizations</SelectLabel>
                      <SelectItem value="rahel-taye">Rahel Taye</SelectItem>
                      <SelectItem value="sarah-johnson">
                        Sarah Johnson
                      </SelectItem>
                      <SelectItem value="michael-brown">
                        Michael Brown
                      </SelectItem>
                      <SelectItem value="emily-davis">Emily Davis</SelectItem>
                      <SelectItem value="david-wilson">David Wilson</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {errors.organization && (
                  <p className="text-red-500 custom-text-12">
                    {errors.organization.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col p-[14px] rounded-[10px] gap-y-[14px] custom-text-14 w-full">
                <label
                  htmlFor="category"
                  className="text-primary-darkest custom-text-14"
                >
                  Category *
                </label>
                <Select onValueChange={(value) => setValue("category", value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose category" />
                  </SelectTrigger>
                  <SelectContent
                    className="w-full text-neutral-950"
                    id="category"
                  >
                    <SelectGroup>
                      <SelectLabel>Categories</SelectLabel>
                      <SelectItem value="urgent">Urgent</SelectItem>
                      <SelectItem value="normal">Normal</SelectItem>
                      <SelectItem value="confidential">Confidential</SelectItem>
                      <SelectItem value="routine">Routine</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {errors.category && (
                  <p className="text-red-500 custom-text-12">
                    {errors.category.message}
                  </p>
                )}
              </div>
            </div>

            {/* File Upload */}
            <div className="w-full">
              <div className="bg-neutral-50 rounded-[10px] custom-py-20 custom-mt-20 w-full">
                <div className="flex flex-col items-center w-full justify-center">
                  <Upload />
                  <h3 className="custom-text-14 text-primary-darkest">
                    Upload New File
                  </h3>
                </div>
                <div className="custom-px-14 custom-mt-14p mx-auto max-w-4xl">
                  <Input
                    type="file"
                    className="px-10"
                    accept=".pdf"
                    onChange={handleFileChange}
                  />
                  <h3 className="text-center custom-mt-14 custom- text-neutral-500">
                    Accepted formats: pdf
                  </h3>
                  {watch("file") && (
                    <p className="text-center custom-mt-10 custom-text-14 text-green-600">
                      File selected: {watch("file").name}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end custom-gapx-20 custom-mt-5">
              <ButtonPrimaryOutlined
                icon={<X />}
                title="Cancel"
                iconPosition="left"
                onClick={onCancel}
                type="button"
              />
              <ButtonPrimaryFilled
                icon={<Check />}
                title={isSubmitting ? "Submitting..." : "Confirm"}
                iconPosition="left"
                type="submit"
                disabled={isSubmitting}
              />
            </div>
          </form>
        </ContainerDev>
      </div>
    </>
  );
};

export default RegisterIncommingLetter;
