"use client";

import logo from "@/app/assets/copilot.png";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";

const data = [
  {
    name: "Winford Asher",
    topic: "Cafe A100 for commercial use",
    status: "New",
    createdOn: "4/02/2024 12:00 PM",
  },
  {
    name: "Josia Love",
    topic: "Upgrading service plan",
    status: "New",
    createdOn: "3/30/2024 7:45 AM",
  },
  {
    name: "Harrison Curtis",
    topic: "Issue with throughput on EspressoMaster",
    status: "New",
    createdOn: "3/28/2024 3:30 PM",
  },
  {
    name: "Jermaine Berrett",
    topic: "New roaster in distribution facility",
    status: "New",
    createdOn: "3/25/2024 11:05 AM",
  },
  {
    name: "Gerald Stephens",
    topic: "Concerns on current machines",
    status: "New",
    createdOn: "3/23/2024 4:50 PM",
  },
  {
    name: "Halle Griffiths",
    topic: "Expanding business",
    status: "New",
    createdOn: "3/21/2024 10:20 AM",
  },
  {
    name: "Rachel Michael",
    topic: "Addressing service concerns",
    status: "New",
    createdOn: "3/19/2024 1:15 PM",
  },
  {
    name: "Alex Baker",
    topic: "Premium coffee beans",
    status: "New",
    createdOn: "3/17/2024 8:00 AM",
  },
  {
    name: "Lilly Pyles",
    topic: "Cafe A100 bulk rate",
    status: "New",
    createdOn: "3/13/2024 2:45 PM",
  },
  {
    name: "Jane Reyes",
    topic: "Improving cost per cup",
    status: "New",
    createdOn: "3/10/2024 9:30 AM",
  },
  // Additional data
  {
    name: "Marcus Chen",
    topic: "Maintenance schedule inquiry",
    status: "Pending",
    createdOn: "3/08/2024 11:20 AM",
  },
  {
    name: "Sarah Williams",
    topic: "Bean grinding optimization",
    status: "In Progress",
    createdOn: "3/06/2024 2:15 PM",
  },
  {
    name: "David Thompson",
    topic: "Equipment upgrade request",
    status: "Resolved",
    createdOn: "3/04/2024 9:45 AM",
  },
  {
    name: "Emma Rodriguez",
    topic: "Training program scheduling",
    status: "Closed",
    createdOn: "3/02/2024 3:30 PM",
  },
  {
    name: "James Wilson",
    topic: "Quality control process",
    status: "New",
    createdOn: "2/29/2024 10:00 AM",
  },
  {
    name: "Lisa Anderson",
    topic: "Supply chain optimization",
    status: "In Progress",
    createdOn: "2/27/2024 1:40 PM",
  },
  {
    name: "Michael Brown",
    topic: "Customer feedback system",
    status: "Pending",
    createdOn: "2/25/2024 4:20 PM",
  },
  {
    name: "Sophie Taylor",
    topic: "Barista certification",
    status: "New",
    createdOn: "2/23/2024 8:50 AM",
  },
  {
    name: "Robert Martinez",
    topic: "Equipment maintenance",
    status: "Resolved",
    createdOn: "2/21/2024 12:35 PM",
  },
  {
    name: "Nina Patel",
    topic: "Inventory management",
    status: "Closed",
    createdOn: "2/19/2024 5:15 PM",
  },
];

const Table = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: "createdOn",
    direction: "desc",
  });
  const [selectedStatus, setSelectedStatus] = useState("All");

  const handleSort = (key) => {
    setSortConfig({
      key,
      direction:
        sortConfig.key === key && sortConfig.direction === "asc"
          ? "desc"
          : "asc",
    });
  };

  const filteredAndSortedData = useMemo(() => {
    let filtered = data.filter((item) => {
      const matchesSearch = Object.values(item).some((value) =>
        value.toLowerCase().includes(searchTerm.toLowerCase())
      );
      const matchesStatus =
        selectedStatus === "All" || item.status === selectedStatus;
      return matchesSearch && matchesStatus;
    });

    return filtered.sort((a, b) => {
      if (sortConfig.key === "createdOn") {
        const dateA = new Date(a[sortConfig.key]);
        const dateB = new Date(b[sortConfig.key]);
        return sortConfig.direction === "asc" ? dateA - dateB : dateB - dateA;
      }

      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    });
  }, [searchTerm, sortConfig, selectedStatus]);

  const statuses = [
    "All",
    "New",
    "Pending",
    "In Progress",
    "Resolved",
    "Closed",
  ];

  return (
    <div className="text-sm shadow">
      <div className="mb-4 flex gap-4">
        <div className="relative w-full max-w-96">
          <input
            type="text"
            placeholder="Sort, filter and search with Copilot"
            className="w-full pl-10 pr-4 py-2 border border-blue-500 rounded-md focus:outline-none focus:border-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Image
            src={logo.src}
            width={20}
            height={20}
            alt="Copilot Logo"
            className="absolute right-3 top-2.5 h-4 w-4 text-gray-400"
          />
        </div>
        {/* <select
          className="borer rounded-md px-4 py-2"
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          {statuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select> */}
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th className="w-8 px-4 py-2">
                <input type="checkbox" className="rounded" />
              </th>
              {["Name", "Topic", "Status reason", "Created on"].map(
                (header, index) => (
                  <th
                    key={header}
                    className="px-4 py-2 text-left cursor-pointer hover:bg-gray-100"
                    onClick={() =>
                      handleSort(
                        ["name", "topic", "status", "createdOn"][index]
                      )
                    }
                  >
                    <div className="flex items-center gap-2">
                      {header}
                      {sortConfig.key ===
                        ["name", "topic", "status", "createdOn"][index] &&
                        (sortConfig.direction === "asc" ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        ))}
                    </div>
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {filteredAndSortedData.map((row, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">
                  <input type="checkbox" className="rounded" />
                </td>
                <td className="px-4 py-2 text-blue-600">{row.name}</td>
                <td className="px-4 py-2">{row.topic}</td>
                <td className="px-4 py-2">{row.status}</td>
                <td className="px-4 py-2">{row.createdOn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
