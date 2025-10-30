import React from "react";

const DataTable = ({
  headers = [],
  data = [],
  actions = [],
  emptyMessage = "No data available",
  loading = false,
  className = "",
  onRowClick,
}) => {
  if (loading) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
        <div className="animate-pulse text-gray-500">Loading...</div>
      </div>
    );
  }

  if (!data.length) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-8 text-center text-gray-500">
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className="relative overflow-x-auto rounded-[10px]">
      <table
        className={`w-full divide-y divide-gray-200 bg-white rounded-lg ${className}`}
      >
        {/* Table Header */}
        <thead className="bg-base-lightBlue h-[56px]">
          <tr>
            {headers.map((header) => (
              <th
                key={header.key}
                className="custom-px-14 custom-py-20 text-left custom-text-12 text-primary-three whitespace-nowrap font-bold uppercase tracking-wider"
              >
                {header.label}
              </th>
            ))}
            {actions.length > 0 && (
              <th className="custom-px-14 custom-py-20 text-left custom-text-12 text-primary-three whitespace-nowrap font-bold uppercase tracking-wider">
                Actions
              </th>
            )}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item, index) => (
            <tr
              key={item.id || index}
              className={`hover:bg-gray-50 transition-colors ${
                onRowClick ? "cursor-pointer" : ""
              }`}
              onClick={() => onRowClick?.(item)}
            >
              {headers.map((header) => (
                <td
                  key={header.key}
                  className="px-6 py-4 whitespace-nowrap custom-text-14 text-primary-darkest"
                >
                  {header.render ? header.render(item) : item[header.key]}
                </td>
              ))}
              {actions.length > 0 && (
                <td className="custom-px-14 custom-py-8 whitespace-nowrap custom-text-14 font-medium">
                  <div className="flex items-center space-x-2">
                    {actions.map((action, actionIndex) => (
                      <div key={actionIndex}>
                        {action.render ? (
                          action.render(item)
                        ) : (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              action.onClick(item);
                            }}
                            className={`custom-p-4 rounded ${action.className}`}
                            title={action.title}
                          >
                            <action.icon className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
