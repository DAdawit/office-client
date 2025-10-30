import React, { useState } from "react";
import DataTable from "../common/Table/DataTable";
import {
  Plus,
  SlidersHorizontal,
  Search,
  Edit,
  Trash,
  Eye,
  ArrowUpDown,
} from "lucide-react";
import ButtonIconFilledPrimary from "../common/Buttons/ButtonIconFilledPrimary";
import { Input } from "@/components/ui/input";
import { DateRangePicker } from "../IncommingLetter/DateRangePicker";
import ContainerDev from "../common/ContainerDev";
import ButtonPrimaryFlat from "../common/Buttons/ButtonPrimaryFlat";
import StickyHeader from "../common/StickyHeader";
import ButtonPrimaryFilled from "../common/Buttons/ButtonPrimaryFilled";
import { useNavigate } from "react-router-dom";
import ButtonCustom from "../common/Buttons/ButtonCustom";
import SearchFilterBar from "../common/SearchFilterBar";

const SubmittedAccustions = () => {
  const [searchValue, setSearchValue] = useState("");
  const [dateRange, setDateRange] = useState({
    from: new Date(), // Default to current date
    to: new Date(), // Default to current date
  });
  const navigate = useNavigate();

  const tableData = [
    {
      id: 1,
      submissionDate: "01 September 2025",
      plannedDate: "01 September 2025",
      subject: "Payment Request",
      plannedLocation: "Bole Michael",
      organization: "Main Branch",
      subCity: "Bole",
      status: "pending",
      woreda: "03",
    },
    {
      id: 2,
      submissionDate: "01 September 2025",
      plannedDate: "01 September 2025",
      subject: "Payment Request",
      plannedLocation: "Bole Michael",
      organization: "Main Branch",
      subCity: "Bole",
      status: "pending",
      woreda: "03",
    },
    {
      id: 3,
      submissionDate: "01 September 2025",
      plannedDate: "01 September 2025",
      subject: "Payment Request",
      plannedLocation: "Bole Michael",
      organization: "Main Branch",
      subCity: "Bole",
      status: "inreivew",
      woreda: "03",
    },
    {
      id: 4,
      submissionDate: "01 September 2025",
      plannedDate: "01 September 2025",
      subject: "Payment Request",
      plannedLocation: "Bole Michael",
      organization: "Main Branch",
      subCity: "Bole",
      status: "responed",
      woreda: "03",
    },
    {
      id: 5,
      submissionDate: "01 September 2025",
      plannedDate: "01 September 2025",
      subject: "Payment Request",
      plannedLocation: "Bole Michael",
      organization: "Main Branch",
      subCity: "Bole",
      status: "resolved",
      woreda: "03",
    },
  ];

  // Header configuration
  const headers = [
    {
      key: "submissionDate",
      label: "Submission Date",
    },
    {
      key: "plannedDate",
      label: "planned Date",
    },
    {
      key: "subject",
      label: "Subject",
    },
    {
      key: "plannedLocation",
      label: "Planned Location",
    },
    {
      key: "organization",
      label: "Organization",
    },
    {
      key: "subCity",
      label: "Sub City",
    },
    {
      key: "status",
      label: "Status",
      render: (item) => {
        const getStatusColor = (status) => {
          switch (status) {
            case "pending":
              return "bg-gray-100 text-primary-darkest";
            case "inreview":
              return "bg-success-50 text-success-900";
            case "responed":
              return "bg-success-50 text-success-900";
            case "resolved":
              return "bg-success-50 text-success-900";
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
      key: "woreda",
      label: "Woreda",
    },
  ];

  // Actions configuration
  const actions = [
    {
      render: (item) => (
        <ButtonIconFilledPrimary
          icon={<Eye />}
          onClick={(e) => {
            e.stopPropagation();
            // console.log("View item:", item);
            const id = item.id.toString();
            console.log(id);
            navigate(`/dashboard/accusations/${id}}`);
          }}
          className="text-green-600 hover:text-green-900"
        />
      ),
    },
    // {
    //   icon: Trash,
    //   title: "Delete",
    //   className: "text-red-600 hover:text-red-900",
    //   onClick: (item) => console.log("Delete item:", item),
    // },
  ];
  return (
    <div className="w-full mx-auto ">
      {/* <ButtonCustom
        text="hello"
        toolTipText="hello mother fucker"
        tooltipSide="left"
      /> */}
      <ContainerDev style="custom-mt-20">
        <div className="flex justify-between items-center">
          <h1 className="text-primary-three font-bold text-">
            Submitted Accusations
          </h1>
          <a href="/dashboard/accusations/register">
            <ButtonPrimaryFilled
              icon={<Plus />}
              iconPosition="left"
              title="Register Accusations"
            />
          </a>
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
    </div>
  );
};

export default SubmittedAccustions;
