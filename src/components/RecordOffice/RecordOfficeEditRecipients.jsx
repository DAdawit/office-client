import React, { useState } from "react";
import ContainerDev from "../common/ContainerDev";
import { Search, ArrowDownUp, X, Check } from "lucide-react";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import DataPreview from "../common/DataPreview";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import ButtonPrimaryOutlined from "../common/Buttons/ButtonPrimaryOutlined";
import ButtonPrimaryFilled from "../common/Buttons/ButtonPrimaryFilled";
import ButtonPrimaryFlat from "../common/Buttons/ButtonPrimaryFlat";
import { useIsMobile } from "@/hooks/use-mobile";

// Sample users data
const usersData = [
  {
    id: 1,
    name: "Rahel Taye",
    position: "ም/ዋና ዳይሬክተር /የቤት ማስተላለፍና ግንባታ ፋይናንስ ዘርፍ ኃላፊ/",
    avatar: "https://github.com/evilrabbit.png",
    initials: "RT",
  },
  {
    id: 2,
    name: "John Smith",
    position: "Senior Project Manager / Construction Division/",
    avatar: "",
    initials: "JS",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    position: "Lead Architect / Design and Infrastructure Sector/",
    avatar: "",
    initials: "SJ",
  },
  {
    id: 4,
    name: "Michael Brown",
    position: "Finance Director / Corporate Service Division/",
    avatar: "",
    initials: "MB",
  },
  {
    id: 5,
    name: "Emily Davis",
    position: "Urban Planning Specialist / Land Development/",
    avatar: "",
    initials: "ED",
  },
  {
    id: 6,
    name: "David Wilson",
    position: "Technical Operations Manager / Engineering Support/",
    avatar: "",
    initials: "DW",
  },
];

const RecordOfficeEditRecipients = () => {
  const isMobile = useIsMobile();
  const [isExpanded, setIsExpanded] = useState(false);

  const [selectedUserIds, setSelectedUserIds] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // 'asc' or 'desc'

  // Sort users based on current sort order
  const sortedUsers = [...usersData].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  // Filter users based on search query
  const filteredUsers = sortedUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.position.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleOneUser = (id, checked) => {
    setSelectedUserIds((prev) => {
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
    filteredUsers.length > 0 &&
    filteredUsers.every((user) => selectedUserIds.has(user.id));

  const toggleAllUsers = (checked) => {
    if (checked) {
      const allUserIds = new Set(filteredUsers.map((user) => user.id));
      setSelectedUserIds(allUserIds);
    } else {
      setSelectedUserIds(new Set());
    }
  };

  const getSelectedUsers = () => {
    return usersData.filter((user) => selectedUserIds.has(user.id));
  };

  const sortList = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <ContainerDev style="custom-mt-20 w-full">
      <div className="flex w-full custom-gapx-20">
        {/* User selection section */}
        <div
          className={`flex w-full custom-gapx-20 ${
            isMobile && isExpanded ? "hidden" : ""
          }`}
        >
          <div className="grid custom-gapy-12 w-full">
            {/* Search Input */}
            <div className="flex justify-between custom-gapx-2 items-center">
              <div className="relative w-full">
                <Search
                  className="absolute top-2.5 left-3 text-neutral-400"
                  height={16}
                  width={16}
                />
                <Input
                  type="text"
                  placeholder="Search Recipients"
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

            <div className="flex gap-3.5">
              {/* Users List */}
              <div className="flex-1 bg-white outline-1 outline-[#E5E5E5] rounded-[10px]">
                <div className="grid w-full">
                  {/* Select All Header */}
                  <div className="flex items-center custom-gap-12 custom-py-12 custom-px-12 rounded-t-[10px] bg-base-lightBlue w-full">
                    <Checkbox
                      checked={isAllSelected}
                      onCheckedChange={(val) => toggleAllUsers(Boolean(val))}
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
                        onClick={() => toggleAllUsers(false)}
                      >
                        Unselect all
                      </button>
                    )}
                  </div>

                  {/* Users List */}
                  <div className="divide-y">
                    {filteredUsers.map((user) => {
                      const checked = selectedUserIds.has(user.id);
                      return (
                        <div
                          key={user.id}
                          className={`flex items-center custom-gap-12 custom-py-12 custom-px-12 ${
                            checked ? "bg-warning-50" : ""
                          }`}
                        >
                          <Checkbox
                            checked={checked}
                            onCheckedChange={(val) =>
                              toggleOneUser(user.id, Boolean(val))
                            }
                            className={
                              checked
                                ? "data-[state=checked]:bg-accent-logo"
                                : ""
                            }
                          />
                          <div className="flex custom-gapx-8 items-center flex-1">
                            <Avatar className="rounded-full w-10 h-10">
                              <AvatarImage src={user.avatar} alt={user.name} />
                              <AvatarFallback>{user.initials}</AvatarFallback>
                            </Avatar>
                            <div className="grid">
                              <h1 className="text-primary-darkest custom-text-12 font-medium">
                                {user.name}
                              </h1>
                              <h1 className="text-neutral-500 custom-text-12">
                                {user.position}
                              </h1>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    {filteredUsers.length === 0 && (
                      <div className="custom-py-40 text-center text-neutral-500 custom-text-12">
                        No users found.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Users Preview */}
        <DataPreview
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
          className="h-min pr-1"
        >
          {selectedUserIds.size > 0 ? (
            <div className="custom-mb-20">
              <div className="flex items-center gap-2 custom-mb-8">
                <span className="custom-text-14 font-semibold text-neutral-700">
                  {selectedUserIds.size} to add
                </span>
              </div>
              <div className="flex flex-col gap-2">
                {getSelectedUsers().map((user) => (
                  <div
                    key={user.id}
                    className="flex items-center gap-x-3 py-2 px-3 bg-white border border-neutral-200 rounded-md"
                  >
                    <Checkbox
                      checked={true}
                      onCheckedChange={() => toggleOneUser(user.id, false)}
                      className="data-[state=checked]:bg-accent-logo"
                    />
                    <div className="flex gap-x-2 items-center flex-1">
                      <Avatar className="rounded-full w-8 h-8">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>{user.initials}</AvatarFallback>
                      </Avatar>
                      <div className="grid">
                        <h1 className="text-primary-darkest custom-text-14 font-medium">
                          {user.name}
                        </h1>
                        <h1 className="text-neutral-500 custom-text-12">
                          {user.position}
                        </h1>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="py-8 text-center text-neutral-500 custom-text-14">
              No recipiant selected
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

export default RecordOfficeEditRecipients;
