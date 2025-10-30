import React, { useState } from "react";
import {
  Plus,
  SlidersHorizontal,
  Search,
  Edit,
  Trash,
  Eye,
  Container,
  SquarePen,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DateRangePicker } from "./DateRangePicker";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import StructuresTable from "./StructuresTable";
import DataTable from "../common/Table/DataTable";
import ButtonIconFilledPrimary from "../common/Buttons/ButtonIconFilledPrimary";
import ContainerDev from "../common/ContainerDev";
import ButtonPrimaryFlat from "../common/Buttons/ButtonPrimaryFlat";
import ButtonPrimaryFilled from "../common/Buttons/ButtonPrimaryFilled";
import { useNavigate } from "react-router-dom";
import { MyDropdown } from "../DropDownMenu/MyDropdown";
import ButtonIconOutlinedPrimary from "../common/Buttons/ButtonIconOutlinedPrimary";
import SearchFilterBar from "../common/SearchFilterBar";

const Replied = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [dateRange, setDateRange] = useState({
    from: new Date(), // Default to current date
    to: new Date(), // Default to current date
  });
  const tableData = [
    {
      id: 1,
      letterNumber: "000001/2018",
      nimera: 250,
      receivedFrom: "AASTU",
      subject: "የ2018 በጀትን መተመለከተ",
      receivedDate: "12/1/2018",
      status: "Registered",
      late: "No",
    },
    {
      id: 2,
      letterNumber: "000002/2018",
      nimera: 2,
      receivedFrom: "Moin Branch",
      subject: "የ2018 በጀትን መተመለከተ",
      receivedDate: "12/1/2018",
      status: "Registered",
      late: "No",
    },
    {
      id: 3,
      letterNumber: "000003/2018",
      nimera: 12,
      receivedFrom: "Moin Branch",
      subject: "የ2018 በጀትን መተመለከተ",
      receivedDate: "12/1/2018",
      status: "Forwarded",
      late: "No",
    },
    {
      id: 4,
      letterNumber: "000004/2018",
      nimera: 11,
      receivedFrom: "Moin Branch",
      subject: "የ2018 በጀትን መተመለከተ",
      receivedDate: "12/1/2018",
      status: "Registered",
      late: "Yes",
    },
    {
      id: 5,
      letterNumber: "000005/2018",
      nimera: 0,
      receivedFrom: "Moin Branch",
      subject: "የ2018 በጀትን መተመለከተ",
      receivedDate: "12/1/2018",
      status: "Forwarded",
      late: "No",
    },
  ];

  // Header configuration
  const headers = [
    {
      key: "letterNumber",
      label: "Letter Number",
    },
    {
      key: "nimera",
      label: "Nimera",
    },
    {
      key: "receivedFrom",
      label: "Received From",
    },
    {
      key: "subject",
      label: "Subject",
      render: (item) => (
        <span className="max-w-xs truncate">{item.subject}</span>
      ),
    },
    {
      key: "receivedDate",
      label: "Received Date",
    },
    {
      key: "status",
      label: "Status",
      render: (item) => {
        const getStatusColor = (status) => {
          switch (status) {
            case "Registered":
              return "bg-gray-100 text-primary-darkest";
            case "Forwarded":
              return "bg-success-50 text-success-900";
            default:
              return "bg-gray-100 text-gray-800";
          }
        };

        return (
          <span
            className={`inline-flex px-2 py-1 custom-text-12 font-semibold rounded-full ${getStatusColor(
              item.status
            )}`}
          >
            {item.status}
          </span>
        );
      },
    },
    {
      key: "late",
      label: "Late",
      render: (item) => {
        const getLateStyles = (late) => {
          if (late === "Yes") {
            return "bg-Destructive-50 text-Destructive-800";
          }
          return "bg-success-50 text-success-900";
        };

        return (
          <span
            className={`inline-flex px-3 py-1 custom-text-12 font-semibold rounded-full ${getLateStyles(
              item.late
            )}`}
          >
            {item.late}
          </span>
        );
      },
    },
  ];

  // Actions configuration
  const actions = [
    {
      render: (item) => (
        <ButtonIconOutlinedPrimary
          icon={<SquarePen height={18} width={18} />}
          onClick={(e) => {
            e.stopPropagation();
            console.log(item);
            navigate(`/dashboard/incoming-letters/edit/${item.id}`);

            // handleMoreActions(item);
          }}
          className="text-gray-600 hover:text-gray-900"
        />
      ),
    },
    {
      render: (item) => (
        <>
          <ButtonIconFilledPrimary
            icon={<Eye height={18} width={18} />}
            onClick={(e) => {
              e.stopPropagation();
              console.log(item);
              navigate(`/dashboard/incoming-letters/${item.id}`);

              // handleMoreActions(item);
            }}
            className="text-gray-600 hover:text-gray-900"
          />
        </>
      ),
    },
  ];

  return (
    <ContainerDev style="mt-[14px]">
      <div className="flex justify-between ">
        <h1 className="text-primary-three font-bold text-lg">
          Replied Incoming Letters
        </h1>
      </div>
      <SearchFilterBar
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        dateRange={dateRange}
        onDateRangeChange={setDateRange}
        onMoreFiltersClick={() => console.log("Open filters")}
      />

      <br />
      <DataTable
        headers={headers}
        data={tableData}
        actions={actions}
        emptyMessage="No letters found"
        onRowClick={(item) => console.log("Row clicked:", item)}
      />
    </ContainerDev>
  );
};

export default Replied;
