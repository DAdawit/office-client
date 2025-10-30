import React from "react";
import DataTable from "../common/Table/DataTable";
import {
  Plus,
  SlidersHorizontal,
  Search,
  Edit,
  Trash,
  Eye,
  EllipsisVertical,
  SquarePen,
} from "lucide-react";
import ButtonIconFilledPrimary from "../common/Buttons/ButtonIconFilledPrimary";
import RecordCount from "../common/RecordCount";
import ButtonIconOutlinedPrimary from "../common/Buttons/ButtonIconOutlinedPrimary";
import OrganizationsManagement from "./RecordOfficeListWithAdminView";

const RecordOfficeList = () => {
  const tableData = [
    {
      id: 1,
      name: "Central Records Office",
      organization: "Ministry of Finance",
      status: "Active",
    },
    {
      id: 2,
      name: "Legal Documents Division",
      organization: "Supreme Court",
      status: "Active",
    },
    {
      id: 3,
      name: "Archives Department",
      organization: "National Library",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Records Management Unit",
      organization: "Ethiopian Airlines",
      status: "Active",
    },
    {
      id: 5,
      name: "Document Control Center",
      organization: "Ethio Telecom",
      status: "Active",
    },
    {
      id: 6,
      name: "Corporate Records Office",
      organization: "Commercial Bank of Ethiopia",
      status: "Inactive",
    },
    {
      id: 7,
      name: "Administrative Records",
      organization: "Addis Ababa University",
      status: "Active",
    },
    {
      id: 8,
      name: "Legal Records Section",
      organization: "Ministry of Justice",
      status: "Active",
    },
    {
      id: 9,
      name: "HR Records Division",
      organization: "Ministry of Education",
      status: "Inactive",
    },
    {
      id: 10,
      name: "Financial Records Unit",
      organization: "Development Bank of Ethiopia",
      status: "Active",
    },
    {
      id: 9,
      name: "HR Records Division",
      organization: "Ministry of Education",
      status: "Inactive",
    },
    {
      id: 10,
      name: "Financial Records Unit",
      organization: "Development Bank of Ethiopia",
      status: "Active",
    },
  ];

  const headers = [
    {
      key: "name",
      label: "Name",
    },
    {
      key: "organization",
      label: "Organization",
    },
    {
      key: "status",
      label: "Status",
      render: (item) => {
        const getStatusColor = (status) => {
          switch (status) {
            case "Active":
              return "bg-success-50 text-success-900 border border-success-200";
            case "Inactive":
              return "bg-gray-100 text-gray-800 border border-gray-300";
            default:
              return "bg-gray-100 text-gray-800";
          }
        };

        return (
          <span
            className={`inline-flex px-3 py-1 custom-text-12 font-semibold rounded-full ${getStatusColor(
              item.status
            )}`}
          >
            {item.status}
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
          icon={<SquarePen />}
          onClick={(e) => {
            e.stopPropagation();
            console.log("View item:", item);
          }}
          className="text-green-600 hover:text-green-900"
        />
      ),
    },
    {
      render: (item) => (
        <ButtonIconFilledPrimary
          icon={<EllipsisVertical />}
          onClick={(e) => {
            e.stopPropagation();
            console.log("View item:", item);
          }}
          className="text-green-600 hover:text-green-900"
        />
      ),
    },
  ];
  return (
    <div>
      {/* <RecordCount title="Total Record Offices" total={40} />
      <DataTable
        headers={headers}
        data={tableData}
        actions={actions}
        emptyMessage="No letters found"
        onRowClick={(item) => console.log("Row clicked:", item)}
      /> */}
      <OrganizationsManagement />
    </div>
  );
};

export default RecordOfficeList;
