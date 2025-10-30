import React from "react";
import { Edit, Trash } from "lucide-react";
import DataTable from "../common/Table/DataTable";

const StructuresTable = () => {
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
        const getLateColor = (late) => {
          return late === "Yes"
            ? "bg-Destructive-50 text-Destructive-900"
            : "bg-success-50 text-success-900";
        };

        return (
          <span
            className={`inline-flex px-2 py-1 custom-text-12 font-semibold rounded-full ${getLateColor(
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
      icon: Edit,
      title: "Edit",
      className: "text-green-600 hover:text-green-900",
      onClick: (item) => console.log("Edit item:", item),
    },
    {
      icon: Trash,
      title: "Delete",
      className: "text-green-600 hover:text-green-900",
      onClick: (item) => console.log("delete item:", item),
    },
  ];

  return (
    <DataTable
      headers={headers}
      data={tableData}
      actions={actions}
      emptyMessage="No letters found"
      onRowClick={(item) => console.log("Row clicked:", item)}
    />
  );
};

export default StructuresTable;
