import * as React from "react";
import { useState, useEffect } from "react";
import "@/App.css";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDown } from "lucide-react"; // Custom icon

const languageOptions = [
  { value: "en", label: "English" },
  { value: "am", label: "Amharic" },
  { value: "or", label: "Afaan Oromo" },
];

export function SelectPreferredLanguage({
  rounded = false,
  bgWhite = false,
  border = false,
}) {
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    try {
      return sessionStorage.getItem("preferredLanguage") || "en";
    } catch {
      return "en";
    }
  });

  useEffect(() => {
    try {
      sessionStorage.setItem("preferredLanguage", selectedLanguage);
    } catch (error) {
      console.error("Failed to save language preference:", error);
    }
  }, [selectedLanguage]);

  const handleLanguageChange = (value) => {
    setSelectedLanguage(value);
  };

  return (
    <Select
      value={selectedLanguage}
      onValueChange={handleLanguageChange}
      aria-label="Select preferred language"
      className=""
    >
      <SelectTrigger
        className={`w-max flex items-center gap-2 border-0 shadow-none dark:border-0 dark:shadow-none dark:bg-transparent [&_[data-radix-select-icon]]:hidden [&_svg:not(.custom-icon)]:hidden ${
          rounded ? "rounded-2xl" : ""
        } ${bgWhite ? "bg-white" : ""}
        ${border ? "border-2 border-neutral-500" : ""}
        `}
        style={{
          fontFamily: "Century Gothic, sans-serif",
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "22px",
          textAlign: "center",
        }}
      >
        <SelectValue placeholder={selectedLanguage} />
        <ChevronDown className="h-4 w-4 custom-icon  text-black dark:text-white" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Languages</SelectLabel>
          {languageOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
