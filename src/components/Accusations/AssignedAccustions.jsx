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
import { NavLink, useNavigate } from "react-router-dom";

const AssignedAccustions = () => {
  const [dateRange, setDateRange] = useState({
    from: new Date(),
    to: new Date(),
  });
  const navigate = useNavigate();

  const tableData = [
    {
      id: "1",
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
      id: "2",
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
      id: "3",
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
      id: "4",
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
      id: "5",
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
            case "inreivew":
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
            console.log("View item:", item);
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
    <div className="container w-full mx-auto ">
      <ContainerDev style="custom-mt-20">
        <div className="flex justify-between items-center">
          <h1 className="text-primary-three font-bold text-lg">
            Assigned Accusations
          </h1>
          <NavLink to="accusations/register">
            <ButtonPrimaryFilled
              icon={<Plus />}
              iconPosition="left"
              title="Register Accusations"
            />
          </NavLink>
        </div>
        <div className="mt-5 flex justify-between items-center mx-auto gap-x-5">
          <div className="w-full max-w-xl">
            <div className="relative">
              <Search
                className="absolute top-2.5 left-3 text-neutral-400"
                height={16}
                width={16}
              />
              <Input
                type="email"
                placeholder="Search structrue name"
                className="px-10"
              />
            </div>
          </div>

          <div className="flex justify-end gap-x-2 w-full">
            <div>
              <DateRangePicker
                value={dateRange}
                onChange={setDateRange}
                placeholder="Select date range"
              />
              {/* {dateRange?.from && (
            <div className="rounded-lg border custom-p-8">
              <p className="custom-text-14 text-muted-foreground">Selected Range:</p>
              <p className="font-medium">
                {dateRange.from.toLocaleDateString()} -{" "}
                {dateRange.to?.toLocaleDateString() || "..."}
              </p>
            </div>
          )} */}
            </div>
            <div>
              <ButtonPrimaryFlat
                icon={<ArrowUpDown />}
                title="sort"
                iconPosition="left"
              />
            </div>
            <div>
              <button className="flex justify-between items-center px-5 py-1 gap-x-2 border-1 border-primary-brandBlue text-primary-brandBlue hover:neutral-100 rounded-[14px]">
                <SlidersHorizontal size={15} /> <span>More filters</span>
              </button>
              {/* <DropdownMenu>
              <DropdownMenuTrigger>
                <Button
                  variant="outline"
                  aria-label="Open menu"
                  size="icon-sm"
                  className="border-1 border-primary-brandBlue text-primary-brandBlue"
                >
                  <SlidersHorizontal /> <span>More filters</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>{" "} */}
              {/* <DropdownMenu>
              <DropdownMenuTrigger asChild className="shadow-none px-5 py-2">
                <Button
                  variant="outline"
                  aria-label="Open menu"
                  size="icon-sm"
                  className="border-1 border-primary-brandBlue text-primary-brandBlue"
                >
                  <SlidersHorizontal /> <span>More filters</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> */}
            </div>
          </div>
        </div>

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

export default AssignedAccustions;
