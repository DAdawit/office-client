import { Edit, Eye, Download, Printer } from "lucide-react";
import DataTable from "../common/Table/DataTable";
import CompactUserCell from "../common/Table/CompactUserCell";
import { Plus, SlidersHorizontal, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

import { useState } from "react";
import { DateRangePicker } from "./DateRangePicker";
import ButtonPrimaryOutlined from "../common/Buttons/ButtonPrimaryOutlined";
import ButtonPrimaryFilled from "../common/Buttons/ButtonPrimaryFilled";
import RecordCount from "../common/RecordCount";

const RepliedHistory = () => {
  const [dateRange, setDateRange] = useState({
    from: new Date(),
    to: new Date(),
  });
  const tableData = [
    {
      id: 1,
      letterNumber: "000001/2018",
      from: {
        name: "AASTU",
        // email: "info@aastu.edu.et",
      },
      to: {
        name: "Halle Testaye",
        email: "mstfintades@gmd.com",
      },
      cc: "yes",
      forwardedDate: "12/1/2018",
      receivedDate: "12/1/2018",
      nimera: 250,
      subject: "የ2018 በጀትን መተመለከተ",
    },
    {
      id: 2,
      letterNumber: "000002/2018",
      from: {
        name: "Main Branch",
        // email: "headquarters@company.com",
      },
      to: {
        name: "Dowli Selassie",
        email: "mstfintades@gmd.com",
      },
      cc: "No",
      forwardedDate: "12/1/2018",
      receivedDate: "12/1/2018",
      nimera: 2,
      subject: "የ2018 በጀትን መተመለከተ",
    },
    {
      id: 3,
      letterNumber: "000003/2018",
      from: {
        name: "Main Branch",
        email: "headquarters@company.com",
      },
      to: {
        name: "Bereket Temesgen",
        email: "mstfintades@gmd.com",
      },
      cc: "yes",
      forwardedDate: "12/1/2018",
      receivedDate: "12/1/2018",
      nimera: 12,
      subject: "የ2018 በጀትን መተመለከተ",
    },
    {
      id: 4,
      letterNumber: "000004/2018",
      from: {
        name: "Main Branch",
        email: "headquarters@company.com",
      },
      to: {
        name: "Abdulrahman Ahmed",
        email: "mstfintades@gmd.com",
      },
      cc: "No",
      forwardedDate: "12/1/2018",
      receivedDate: "12/1/2018",
      nimera: 11,
      subject: "የ2018 በጀትን መተመለከተ",
    },
    {
      id: 5,
      letterNumber: "000005/2018",
      from: {
        name: "Main Branch",
        email: "headquarters@company.com",
      },
      to: {
        name: "Mesfin Tadesse",
        email: "mstfintades@gmd.com",
      },
      cc: "No",
      forwardedDate: "12/1/2018",
      receivedDate: "12/1/2018",
      nimera: 0,
      subject: "የ2018 በጀትን መተመለከተ",
    },
  ];

  const headers = [
    {
      key: "from",
      label: "From",
      render: (item) => <CompactUserCell user={item.from} />,
    },
    {
      key: "to",
      label: "To",
      render: (item) => <CompactUserCell user={item.to} />,
    },
    {
      key: "cc",
      label: "cc",
    },
    {
      key: "forwardedDate",
      label: "Forwarded Date",
    },
    {
      key: "receivedDate",
      label: "Received Date",
    },

    // {
    //   key: "late",
    //   label: "Late",
    //   render: (item) => {
    //     const getLateStyles = (late) => {
    //       if (late === "Yes") {
    //         return "bg-red-100 text-red-800 border border-red-200";
    //       }
    //       return "bg-green-100 text-green-800 border border-green-200";
    //     };

    //     return (
    //       <span
    //         className={`inline-flex px-3 py-1 custom-text-12 font-semibold rounded-full ${getLateStyles(
    //           item.late
    //         )}`}
    //       >
    //         {item.late}
    //       </span>
    //     );
    //   },
    // },
  ];

  const actions = [
    {
      icon: Printer,
      title: "Print",
      className: "text-blue-600 hover:text-blue-900 hover:bg-blue-50",
      onClick: (item) => console.log("View item:", item),
    },
    // {
    //   icon: Edit,
    //   title: "Edit",
    //   className: "text-green-600 hover:text-green-900 hover:bg-green-50",
    //   onClick: (item) => console.log("Edit item:", item),
    // },
    // {
    //   icon: Download,
    //   title: "Download",
    //   className: "text-purple-600 hover:text-purple-900 hover:bg-purple-50",
    //   onClick: (item) => console.log("Download item:", item),
    // },
  ];

  return (
    <div className="custom-p-32 bg-gray-50 min-h-screen rounded-[10px] w-full">
      <RecordCount title="Total Forwarded" total={tableData.length} />

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
              className="px-10 bg-white"
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
            <div className="rounded-lg border custom-p-20">
              <p className="custom-text-14 text-muted-foreground">Selected Range:</p>
              <p className="font-medium">
                {dateRange.from.toLocaleDateString()} -{" "}
                {dateRange.to?.toLocaleDateString() || "..."}
              </p>
            </div>
          )} */}
          </div>
          <div>
            <ButtonPrimaryOutlined title="Print" icon={<Printer />} />
          </div>
        </div>
      </div>
      <div className="mt-[14px]">
        <DataTable
          headers={headers}
          data={tableData}
          actions={actions}
          emptyMessage="No forwarded letters found"
          onRowClick={(item) => console.log("Row clicked:", item)}
        />
      </div>
      <div className="flex justify-between items-center mt-[14px]">
        <div className="custom-mt-20 custom-text-14 text-gray-500">
          Showing {tableData.length} of {tableData.length} forwarded letters
        </div>
        <ButtonPrimaryFilled
          title="View analytics"
          icon={<Eye />}
          iconPosition="left"
        />
      </div>
    </div>
  );
};

export default RepliedHistory;
