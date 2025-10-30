import React, { useState, useMemo } from "react";
import ContainerDev from "../common/ContainerDev";
import { Check, Search, SquareMinus, X, ArrowDownUp } from "lucide-react";
import { Input } from "../ui/input";
import VerticalTabComponent from "../common/Tabs/VerticalTabComponent";
import { Checkbox } from "../ui/checkbox";
import DataPreview from "../common/DataPreview";
import organizationsData from "./data";
import ButtonIconOutlinedPrimary from "../common/Buttons/ButtonIconOutlinedPrimary";
import ButtonPrimaryOutlined from "../common/Buttons/ButtonPrimaryOutlined";
import ButtonPrimaryFilled from "../common/Buttons/ButtonPrimaryFilled";
import ButtonPrimaryFlat from "../common/Buttons/ButtonPrimaryFlat";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useIsMobile } from "@/hooks/use-mobile";
const RecordOfficeAddStructrue = () => {
  const isMobile = useIsMobile();
  const [isExpanded, setIsExpanded] = useState(false);
  const levelsData = organizationsData.structural_by_levels;
  const [activeLevelId, setActiveLevelId] = useState(levelsData[0]?.id);
  const [selectedStructureIds, setSelectedStructureIds] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // "asc" or "desc"

  const activeLevel = levelsData.find((lvl) => lvl.id === activeLevelId);

  // Filter and sort structures within the active level
  const filteredAndSortedStructures = useMemo(() => {
    if (!activeLevel?.structures) return [];

    let structures = activeLevel.structures;

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      structures = structures.filter(
        (structure) =>
          structure.name?.toLowerCase().includes(query) ||
          structure.headName?.toLowerCase().includes(query) ||
          structure.personName?.toLowerCase().includes(query)
      );
    }

    // Apply sorting
    structures = [...structures].sort((a, b) => {
      const nameA = a.name?.toLowerCase() || "";
      const nameB = b.name?.toLowerCase() || "";

      if (sortOrder === "asc") {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });

    return structures;
  }, [activeLevel?.structures, searchQuery, sortOrder]);

  const handleSelectLevel = (id) => {
    setActiveLevelId(id);
    // Clear search when changing levels to avoid empty results
    setSearchQuery("");
  };

  const toggleOneStructure = (id, checked) => {
    setSelectedStructureIds((prev) => {
      const next = new Set(prev);
      const structure = activeLevel?.structures?.find((s) => s.id === id);
      if (checked && structure) {
        next.add(structure);
      } else {
        // Remove by finding the structure with matching id
        const toRemove = Array.from(next).find((s) => s.id === id);
        if (toRemove) {
          next.delete(toRemove);
        }
      }
      return next;
    });
  };

  const isAllSelected =
    filteredAndSortedStructures.length > 0 &&
    filteredAndSortedStructures.every((s) =>
      Array.from(selectedStructureIds).some((selected) => selected.id === s.id)
    );

  const toggleAllForActiveLevel = (checked) => {
    if (!filteredAndSortedStructures.length) return;
    setSelectedStructureIds((prev) => {
      const next = new Set(prev);
      if (checked) {
        // Add all filtered and sorted structures
        filteredAndSortedStructures.forEach((s) => next.add(s));
      } else {
        // Remove all filtered and sorted structures
        filteredAndSortedStructures.forEach((s) => {
          const toRemove = Array.from(next).find(
            (selected) => selected.id === s.id
          );
          if (toRemove) {
            next.delete(toRemove);
          }
        });
      }
      return next;
    });
  };

  const toggleSortOrder = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const handleCreate = () => {
    console.log("Create new structure or organization");
  };

  return (
    <ContainerDev style="mt-5">
      <div className="flex w-full gap-x-5">
        {/* structure selection */}
        <div
          className={`flex w-full gap-x-5  ${
            isMobile && isExpanded ? "hidden" : ""
          }`}
        >
          <div className="grid gap-y-3 w-full ">
            <div className="flex flex-col w-full">
              <h3 className="text-primary-darkest">Add Structure</h3>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose Structure/s to add" />
                </SelectTrigger>
                <SelectContent className="w-full">
                  <SelectGroup>
                    <SelectLabel>John Smith</SelectLabel>
                    <SelectItem value="apple">Rahel Taye</SelectItem>
                    <SelectItem value="banana">Sarah Johnson</SelectItem>
                    <SelectItem value="blueberry">Michael Brown</SelectItem>
                    <SelectItem value="grapes">Emily Davis</SelectItem>
                    <SelectItem value="pineapple">David Wilson</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            {/* Search and Sort Header */}
            <div className="flex justify-between gap-x-2 items-center">
              <div className="relative w-full">
                <Search
                  className="absolute top-2.5 left-3 text-neutral-400"
                  height={16}
                  width={16}
                />
                <Input
                  type="text"
                  placeholder="Search Structures to add"
                  className="px-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute top-2.5 right-3 text-neutral-400 hover:text-neutral-600"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
              <ButtonPrimaryFlat
                onClick={toggleSortOrder}
                icon={<ArrowDownUp />}
                iconPosition="left"
                title="sort"
              />
            </div>

            {/* Search results info */}
            {searchQuery && (
              <div className="custom-text-12 text-neutral-500 px-2">
                Found {filteredAndSortedStructures.length} structure
                {filteredAndSortedStructures.length !== 1 ? "s" : ""} matching "
                {searchQuery}"
                {filteredAndSortedStructures.length > 0 &&
                  ` (sorted ${sortOrder === "asc" ? "A-Z" : "Z-A"})`}
              </div>
            )}

            {/* Sort info when no search but sorted */}
            {!searchQuery && filteredAndSortedStructures.length > 0 && (
              <div className="custom-text-12 text-neutral-500 px-2">
                Sorted {sortOrder === "asc" ? "A-Z" : "Z-A"}
              </div>
            )}

            <div className="flex  gap-3.5">
              {/* Left: Structure Levels */}
              <VerticalTabComponent
                title="Structures"
                data={levelsData}
                onCreate={handleCreate}
                createBtnName="Add Structure"
                onTabClicked={handleSelectLevel}
                type="structure-level"
              />

              {/* Right: Structures under selected level with selection controls */}
              <div className="flex-1 bg-white outline-1 outline-[#E5E5E5] rounded-[10px]">
                <div className="grid w-full">
                  <div className="flex items-center gap-3 py-3 px-3 rounded-t-[10px] bg-base-lightBlue w-full">
                    <div>
                      {isAllSelected ? (
                        <>
                          <button
                            className="ml-auto custom-text-12 flex gap-x-2 items-center"
                            onClick={() => toggleAllForActiveLevel(false)}
                          >
                            <span className="bg-accent-logo text-white">
                              <SquareMinus width={20} height={20} />
                            </span>
                            <span>Unselect all</span>
                          </button>
                        </>
                      ) : (
                        <>
                          <Checkbox
                            checked={isAllSelected}
                            onCheckedChange={(val) =>
                              toggleAllForActiveLevel(Boolean(val))
                            }
                            className={
                              isAllSelected
                                ? "data-[state=checked]:bg-accent-logo"
                                : ""
                            }
                          />{" "}
                          <span>Select all</span>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="divide-y">
                    {filteredAndSortedStructures.map((item) => {
                      const checked = Array.from(selectedStructureIds).some(
                        (selected) => selected.id === item.id
                      );
                      return (
                        <div
                          key={item.id}
                          className={`flex items-center gap-3 py-3 px-3 ${
                            checked ? "bg-warning-50" : ""
                          }`}
                        >
                          <Checkbox
                            checked={checked}
                            onCheckedChange={(val) =>
                              toggleOneStructure(item.id, Boolean(val))
                            }
                            className={
                              checked
                                ? "data-[state=checked]:bg-accent-logo"
                                : ""
                            }
                          />
                          <span
                            className={`custom-text-14 text-primary-darkest ${
                              checked ? "px-2 py-1 rounded bg-warning-50" : ""
                            }`}
                          >
                            {item.name}
                          </span>
                        </div>
                      );
                    })}
                    {filteredAndSortedStructures.length === 0 && (
                      <div className="py-10 text-center text-neutral-500 custom-text-14">
                        {searchQuery
                          ? `No structures found matching "${searchQuery}" in ${activeLevel?.name}`
                          : "No structures found for this level."}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DataPreview
          className="h-min pr-1"
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
        >
          {selectedStructureIds.size > 0 ? (
            <div className="custom-mb-20">
              <div className="flex items-center gap-2 custom-mb-8">
                <span className="custom-text-14 font-semibold text-neutral-700">
                  {selectedStructureIds.size} to add
                </span>
              </div>
              <div className="flex flex-col gap-x-2">
                {Array.from(selectedStructureIds).map((structure) => (
                  <div
                    key={structure.id}
                    className="flex items-center gap-x-3 py-2 px-3 bg-white border border-neutral-200 rounded-md"
                  >
                    <Checkbox
                      checked={true}
                      onCheckedChange={() =>
                        toggleOneStructure(structure.id, false)
                      }
                      className="data-[state=checked]:bg-accent-logo"
                    />
                    <span className="custom-text-14 text-primary-darkest flex-1">
                      {structure.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="py-8 text-center text-neutral-500 custom-text-14">
              No structures selected
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

export default RecordOfficeAddStructrue;
