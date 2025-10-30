import React, { useState } from "react";
import ContainerDev from "../common/ContainerDev";
import { Search, ArrowDownUp, X, Check } from "lucide-react";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import DataPreview from "../common/DataPreview";
import ButtonPrimaryOutlined from "../common/Buttons/ButtonPrimaryOutlined";
import ButtonPrimaryFilled from "../common/Buttons/ButtonPrimaryFilled";
import ButtonPrimaryFlat from "../common/Buttons/ButtonPrimaryFlat";
import { MediaItemCard } from "../common/MediaItemCard";
import { useIsMobile } from "@/hooks/use-mobile";

// Sample stamps data
const stampsData = [
  {
    id: 1,
    fileName: "Stamp 1.png",
    fileUrl: "https://example.com/stamp1.png",
    fileSize: "144 kb",
    date: "Mon Sep 22 2025",
    type: "image",
  },
  {
    id: 2,
    fileName: "Stamp 2.png",
    fileUrl: "https://example.com/stamp2.png",
    fileSize: "144 kb",
    date: "Mon Sep 22 2025",
    type: "image",
  },
  {
    id: 3,
    fileName: "Stamp 3.png",
    fileUrl: "https://example.com/stamp3.png",
    fileSize: "144 kb",
    date: "Mon Sep 22 2025",
    type: "image",
  },
  {
    id: 4,
    fileName: "Official Stamp.png",
    fileUrl: "https://example.com/official.png",
    fileSize: "156 kb",
    date: "Tue Sep 23 2025",
    type: "image",
  },
  {
    id: 5,
    fileName: "Signature Stamp.png",
    fileUrl: "https://example.com/signature.png",
    fileSize: "132 kb",
    date: "Wed Sep 24 2025",
    type: "image",
  },
];

const EditStamps = () => {
  const [selectedStampIds, setSelectedStampIds] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // 'asc' or 'desc'
  const isMobile = useIsMobile();

  // Sort stamps based on current sort order
  const sortedStamps = [...stampsData].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.fileName.localeCompare(b.fileName);
    } else {
      return b.fileName.localeCompare(a.fileName);
    }
  });

  // Filter stamps based on search query
  const filteredStamps = sortedStamps.filter((stamp) =>
    stamp.fileName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleOneStamp = (id, checked) => {
    setSelectedStampIds((prev) => {
      const next = new Set(prev);
      if (checked) {
        next.add(id);
      } else {
        next.delete(id);
      }
      return next;
    });
  };

  const isAllSelected =
    filteredStamps.length > 0 &&
    filteredStamps.every((stamp) => selectedStampIds.has(stamp.id));

  const toggleAllStamps = (checked) => {
    if (checked) {
      const allStampIds = new Set(filteredStamps.map((stamp) => stamp.id));
      setSelectedStampIds(allStampIds);
    } else {
      setSelectedStampIds(new Set());
    }
  };

  const getSelectedStamps = () => {
    return stampsData.filter((stamp) => selectedStampIds.has(stamp.id));
  };

  const sortList = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <ContainerDev style="custom-mt-20 w-full">
      <div className="flex w-full custom-gapx-20">
        {/* Stamps selection section */}
        <div
          className={`flex w-full custom-gapx-20 ${
            isMobile && isExpanded ? "hidden" : ""
          }`}
        >
          <div className="grid custom-gapy-12 w-full">
            {/* Search Input */}
            <div className="flex justify-between custom-gapx-8 items-center">
              <div className="relative w-full">
                <Search
                  className="absolute top-2.5 left-3 text-neutral-400"
                  height={16}
                  width={16}
                />
                <Input
                  type="text"
                  placeholder="Search Stamps"
                  className="px-10 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <ButtonPrimaryFlat
                onClick={sortList}
                icon={<ArrowDownUp />}
                iconPosition="left"
                title="sort"
              />
            </div>

            {/* Selected Count */}
            <div className="flex items-center gap-2 custom-mb-8 justify-center">
              <span className="custom-text-14 font-semibold text-neutral-700">
                Stamp list
              </span>
              <span className="inline-flex items-center justify-center h-5 min-w-5 custom-px-8 rounded-full bg-primary-brandBlue text-white custom-text-12 font-bold">
                {selectedStampIds.size}
              </span>
            </div>

            <div className="flex gap-3.5">
              {/* Stamps List */}
              <div className="flex-1 bg-white outline-1 outline-[#E5E5E5] rounded-[10px]">
                <div className="grid w-full">
                  {/* Select All Header */}
                  <div className="flex items-center custom-gap-12 custom-py-12 custom-px-12 rounded-t-[10px] bg-base-lightBlue w-full">
                    <Checkbox
                      checked={isAllSelected}
                      onCheckedChange={(val) => toggleAllStamps(Boolean(val))}
                      className={
                        isAllSelected
                          ? "data-[state=checked]:bg-accent-logo"
                          : ""
                      }
                    />
                    <span className="custom-text-14 font-semibold text-neutral-700">
                      Select all
                    </span>
                    {isAllSelected && (
                      <button
                        type="button"
                        className="ml-auto custom-text-12 text-primary-brandBlue underline"
                        onClick={() => toggleAllStamps(false)}
                      >
                        Unselect all
                      </button>
                    )}
                  </div>

                  {/* Stamps List */}
                  <div className="divide-y custom-px-14">
                    {filteredStamps.map((stamp) => {
                      const checked = selectedStampIds.has(stamp.id);
                      return (
                        <div
                          key={stamp.id}
                          className={`flex items-center custom-gap-12 custom-py-12 ${
                            checked
                              ? "bg-warning-50 rounded-lg custom-px-14"
                              : ""
                          }`}
                        >
                          <Checkbox
                            checked={checked}
                            onCheckedChange={(val) =>
                              toggleOneStamp(stamp.id, Boolean(val))
                            }
                            className={
                              checked
                                ? "data-[state=checked]:bg-accent-logo"
                                : ""
                            }
                          />
                          <div className="flex-1">
                            <MediaItemCard
                              item={stamp.id}
                              fileUrl={stamp.fileUrl}
                              fileName={stamp.fileName}
                              fileSize={stamp.fileSize}
                              date={stamp.date}
                            />
                          </div>
                        </div>
                      );
                    })}
                    {filteredStamps.length === 0 && (
                      <div className="custom-py-40 text-center text-neutral-500 custom-text-14">
                        {searchQuery
                          ? `No stamps found matching "${searchQuery}"`
                          : "No stamps found"}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Stamps Preview */}
        <DataPreview
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
          className="h-min pr-1"
        >
          {selectedStampIds.size > 0 ? (
            <div className="custom-mb-20">
              <div className="flex items-center gap-2 custom-mb-20">
                <span className="custom-text-14 font-semibold text-neutral-700">
                  Selected
                </span>
              </div>
              <div className="flex flex-col gap-y-0 custom-pl-8">
                {getSelectedStamps().map((stamp) => (
                  <div
                    key={stamp.id}
                    className="flex items-center gap-x-3 py-2"
                  >
                    <Checkbox
                      checked={true}
                      onCheckedChange={() => toggleOneStamp(stamp.id, false)}
                      className="data-[state=checked]:bg-accent-logo"
                    />
                    <div className="flex-1">
                      <MediaItemCard
                        item={stamp.id}
                        fileUrl={stamp.fileUrl}
                        fileName={stamp.fileName}
                        fileSize={stamp.fileSize}
                        date={stamp.date}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="py-8 text-center text-neutral-500 custom-text-14">
              No stamps selected
            </div>
          )}
        </DataPreview>
      </div>
      {/* <div className="flex justify-end w-full mt-5 gap-x-2">
        <ButtonPrimaryOutlined icon={<X />} title="Cancel" />
        <ButtonPrimaryFilled icon={<Check />} title="Confirm" />
      </div> */}
    </ContainerDev>
  );
};

export default EditStamps;
