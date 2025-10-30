import React from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { DateRangePicker } from "../IncommingLetter/DateRangePicker";

const SearchFilterBar = ({
  // Search props
  searchPlaceholder = "Search structure name",
  searchValue = "",
  onSearchChange,
  onSearchSubmit,

  // Date range props
  dateRange,
  onDateRangeChange,
  dateRangePlaceholder = "Select date range",
  defaultToCurrentDate = true,

  // Filter props
  showMoreFilters = true,
  onMoreFiltersClick,
  moreFiltersText = "More filters",

  // Layout props
  className = "",

  // Additional props
  children,
}) => {
  // Set default date range to current date if not provided
  const getDefaultDateRange = () => {
    if (!defaultToCurrentDate) return undefined;

    const today = new Date();
    return {
      from: today,
      to: today,
    };
  };

  const handleSearchChange = (e) => {
    onSearchChange?.(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    if (e.key === "Enter") {
      onSearchSubmit?.(e.target.value);
    }
  };

  // Use provided dateRange or default to current date
  const currentDateRange = dateRange || getDefaultDateRange();

  return (
    <div
      className={`mt-5 flex flex-wrap gap-y-2 md:gap-y-0 md:flex-nowrap justify-between items-center mx-auto gap-x-[14px] ${className}`}
    >
      {/* Search Input */}
      <div className="w-full">
        <div className="relative">
          <Search
            className="absolute top-2.5 left-3 text-neutral-400"
            height={16}
            width={16}
          />
          <Input
            type="text"
            placeholder={searchPlaceholder}
            className="px-10"
            value={searchValue}
            onChange={handleSearchChange}
            onKeyDown={handleSearchSubmit}
          />
        </div>
      </div>

      {/* Filters Section */}
      <div className="flex justify-start gap-2 w-max flex-wrap md:flex-nowrap">
        {/* Date Range Picker */}
        <div>
          <DateRangePicker
            value={currentDateRange}
            onChange={onDateRangeChange}
            placeholder={dateRangePlaceholder}
          />
        </div>

        {/* More Filters Button */}
        {showMoreFilters && (
          <div className="flex ">
            <button
              onClick={onMoreFiltersClick}
              className="flex justify-between flex-nowrap whitespace-nowrap items-center px-5 py-1 gap-x-2 border-1 border-primary-brandBlue text-primary-brandBlue hover:bg-neutral-100 rounded-md transition-colors"
            >
              <SlidersHorizontal size={15} />
              <span className="whitespace-nowrap">More filters</span>
            </button>
          </div>
        )}

        {/* Custom children content */}
        {children}
      </div>
    </div>
  );
};

export default SearchFilterBar;
