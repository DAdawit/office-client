import React from "react";
import { User, UserRound, UsersRound } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const userPositions = [
  "Main Branch | Main Director",
  "East Branch | It Director",
];

const OrganizationWithPositionSelector = () => {
  return (
    <>
      <Select className="bg-white rounded-2xl">
        <SelectTrigger className="w-auto bg-white rounded-3xl shadow-none">
          {/* <img src="/icons/Vector.png" alt="" className="h-6 w-6" /> */}
          <UsersRound />
          <SelectValue placeholder={userPositions[0]} />
        </SelectTrigger>
        <SelectContent>
          {userPositions.map((position, i) => (
            <SelectItem value={position} key={i}>
              {position}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
};
export default OrganizationWithPositionSelector;
