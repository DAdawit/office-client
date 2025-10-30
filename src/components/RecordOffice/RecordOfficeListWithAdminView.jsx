import React, { useState, useEffect } from "react";
import ContainerDev from "../common/ContainerDev";
import Title from "../common/Title";
import ButtonPrimaryOutlined from "../common/Buttons/ButtonPrimaryOutlined";
import ButtonPrimaryFilled from "../common/Buttons/ButtonPrimaryFilled";
import {
  Search,
  Plus,
  MoreVertical,
  Eye,
  Trash2,
  SquarePen,
  EllipsisVertical,
  Trash,
  Edit,
} from "lucide-react";
import { Input } from "../ui/input";
import VerticalTabComponent from "../common/Tabs/VerticalTabComponent";
import Active from "../common/Status/Active";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DataTable from "../common/Table/DataTable";
import ButtonIconOutlinedPrimary from "../common/Buttons/ButtonIconOutlinedPrimary";
import ButtonIconFilledPrimary from "../common/Buttons/ButtonIconFilledPrimary";
import RecordCount from "../common/RecordCount";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { MyDropdown } from "../DropDownMenu/MyDropdown";
import { NavLink } from "react-router-dom";

// Sample data structure matching your design
const organizationsData = [
  {
    id: 1,
    name: "Main Branch",
    recordOffices: [
      {
        id: 1,
        organization: "Main Branch",
        name: "Central Record Office",
        levels: 24,
        status: "Active",
      },
    ],
  },
  {
    id: 2,
    name: "North Branch",
    recordOffices: [
      {
        id: 2,
        organization: "North Branch",
        name: "North Regional Office",
        levels: 18,
        status: "Active",
      },
      {
        id: 3,
        organization: "North Branch",
        name: "North District Office",
        levels: 12,
        status: "Active",
      },
    ],
  },
  {
    id: 3,
    name: "East Branch",
    recordOffices: [
      {
        id: 4,
        organization: "East Branch",
        name: "East Regional Office",
        levels: 15,
        status: "Active",
      },
      {
        id: 5,
        organization: "East Branch",
        name: "East Regional Office",
        levels: 15,
        status: "inActive",
      },
    ],
  },
  {
    id: 4,
    name: "West Branch",
    recordOffices: [
      {
        id: 5,
        organization: "West Branch",
        name: "West Regional Office",
        levels: 20,
        status: "Active",
      },
    ],
  },
  {
    id: 5,
    name: "South Branch",
    recordOffices: [
      {
        id: 6,
        organization: "South Branch",
        name: "South Regional Office",
        levels: 10,
        status: "Active",
      },
    ],
  },
];

const OrganizationsManagement = () => {
  const [activeOrganizationId, setActiveOrganizationId] = useState(
    organizationsData[0]?.id
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [tableData, setTableData] = useState([]);

  const activeOrganization = organizationsData.find(
    (org) => org.id === activeOrganizationId
  );
  const navigate = useNavigate();
  // Update table data when organization changes or search query changes
  useEffect(() => {
    const filteredRecordOffices =
      activeOrganization?.recordOffices?.filter((office) =>
        office.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) || [];
    setTableData(filteredRecordOffices);
  }, [activeOrganization, searchQuery]);

  const headers = [
    {
      key: "name",
      label: "Name",
    },
    {
      key: "organization",
      label: "Organization",
    },
    // {
    //   key: "levels",
    //   label: "Total Levels",
    //   render: (item) => <span className="font-medium">{item.levels}</span>,
    // },
    {
      key: "status",
      label: "Status",
      render: (item) => {
        const getStatusColor = (status) => {
          switch (status) {
            case "Active":
              return "bg-success-50 text-success-900";
            case "inActive":
              return "bg-gray-100 text-gray-800";
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
          icon={<SquarePen height={20} width={20} />}
          onClick={(e) => {
            e.stopPropagation();
            handleMoreActions(item);
            navigate(`/dashboard/record-offices/edit/${item.id}`);
          }}
          className="text-gray-600 hover:text-gray-900"
        />
      ),
    },
    {
      render: (item) => (
        <MyDropdown
          items={[
            {
              label: "View Details",
              IconComponent: Eye,
              IconClassName: "text-[#0A74B9]",
              onClick: () => navigate(`/dashboard/record-offices/${item.id}`),
            },
            {
              separatorBefore: true,
              label: "Delete",
              className: "bg-[#FEF2F2]! text-[#7F1D1D]!",
              IconComponent: Trash,
              onClick: () => handleDelete(item),
            },
          ]}
          className="bg-primary-brandBlue rounded-[4px] text-white hover:bg-[#053B60] hover:text-neutral-50 cursor-pointer"
        />
      ),
    },
  ];

  const handleSelectOrganization = (id) => {
    setActiveOrganizationId(id);
    setSearchQuery(""); // Clear search when switching organizations
  };

  const handleCreateOrganization = () => {
    console.log("Create new organization");
  };

  const handleCreateLevel = () => {
    console.log("Create new level");
  };

  const handleViewDetails = (office) => {
    console.log("View details for office:", office);
  };

  const handleEdit = (office) => {
    console.log("Edit office:", office);
  };

  const handleDelete = (office) => {
    console.log("Delete office:", office);
  };

  const handleMoreActions = (office) => {
    console.log("More actions for office:", office);
  };

  const handleRowClick = (item) => {
    console.log("Row clicked:", item);
    handleViewDetails(item);
  };

  return (
    <div>
      <div className="flex justify-start items-center mb-6">
        {/* <Title title="Organizations" /> */}
        <RecordCount
          title="Total Record Offices"
          total={5}
          color="text-primary-darkest"
          bold="font-bold"
        />
      </div>

      <div className="flex gap-x-3">
        {/* Left: Organizations Vertical Tab */}
        <div className="w-max">
          <VerticalTabComponent
            title="Organizations"
            data={organizationsData}
            onCreate={handleCreateOrganization}
            createBtnName="Add Organization"
            onTabClicked={handleSelectOrganization}
            type="organization"
          />
        </div>

        {/* Right: Content Area */}
        <div className="w-full">
          {/* Search Header */}
          <div className="custom-mb-20">
            <div className="relative">
              <Search
                className="absolute top-2.5 left-3 text-neutral-400"
                height={16}
                width={16}
              />
              <Input
                type="text"
                placeholder="Search record offices..."
                className="px-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Table Section */}
          <div className="bg-white rounded-[10px] border border-[#E5E5E5]">
            <DataTable
              headers={headers}
              data={tableData}
              actions={actions}
              emptyMessage={
                searchQuery
                  ? `No record offices found matching "${searchQuery}" in ${activeOrganization?.name}`
                  : `No record offices found for ${activeOrganization?.name}`
              }
              onRowClick={handleRowClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationsManagement;
