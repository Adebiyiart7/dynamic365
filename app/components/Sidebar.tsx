"use client";

import { useState } from "react";
import { BsFileEarmarkMedical } from "react-icons/bs";
import { FiBox, FiFileText } from "react-icons/fi";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import {
  LuFileChartColumnIncreasing,
  LuFileStack,
  LuUserX,
} from "react-icons/lu";
import {
  MdAccessTime,
  MdMenu,
  MdOutlineCampaign,
  MdOutlineContentPaste,
  MdOutlineDashboard,
  MdOutlineFolderOpen,
  MdOutlineHome,
  MdOutlinePerson,
  MdOutlinePushPin,
  MdOutlineRocketLaunch,
  MdOutlineSettingsPhone,
} from "react-icons/md";
import { PiListStarFill } from "react-icons/pi";
import { useSidebar } from "../hooks/sidebarState";

// Navigation items
const navigationItems = [
  {
    id: 1,
    icon: MdMenu,
    label: "",
    section: "",
    onClick: () => useSidebar.getState().toggleSidebar(),
  },
  { id: 2, icon: MdOutlineHome, label: "Home", section: "", onClick: () => {} },
  {
    id: 3,
    icon: MdAccessTime,
    label: "Recent",
    section: "",
    onClick: () => {},
  },
  {
    id: 4,
    icon: MdOutlinePushPin,
    label: "Pinned",
    section: "",
    onClick: () => {},
  },
  //   My work
  {
    id: 5,
    icon: MdOutlineRocketLaunch,
    label: "Sales accelerators",
    section: "My work",
    onClick: () => {},
  },
  {
    id: 6,
    icon: MdOutlineDashboard,
    label: "Dashboard",
    section: "My work",
    onClick: () => {},
  },
  {
    id: 7,
    icon: MdOutlineContentPaste,
    label: "Activities ",
    section: "My work",
    onClick: () => {},
  },
  // Customers
  {
    id: 8,
    icon: MdOutlineFolderOpen,
    label: "Accounts",
    section: "Customers",
    onClick: () => {},
  },
  {
    id: 9,
    icon: MdOutlinePerson,
    label: "Contacts",
    section: "Customers",
    onClick: () => {},
  },
  // Sales
  {
    id: 10,
    icon: MdOutlineSettingsPhone,
    label: "Leads",
    section: "Sales",
    onClick: () => {},
  },
  {
    id: 11,
    icon: BsFileEarmarkMedical,
    label: "Oppotunities",
    section: "Sales",
    onClick: () => {},
  },
  {
    id: 12,
    icon: LuUserX,
    label: "Competitors",
    section: "Sales",
    onClick: () => {},
  },
  // Collateral
  {
    id: 13,
    icon: LuFileStack,
    label: "Quotes",
    section: "Collateral",
    onClick: () => {},
  },
  {
    id: 14,
    icon: FiFileText,
    label: "Orders",
    section: "Collateral",
    onClick: () => {},
  },
  {
    id: 15,
    icon: LiaFileInvoiceSolid,
    label: "Invoices",
    section: "Collateral",
    onClick: () => {},
  },
  {
    id: 16,
    icon: FiBox,
    label: "Products",
    section: "Collateral",
    onClick: () => {},
  },
  {
    id: 17,
    icon: LuFileChartColumnIncreasing,
    label: "Sales Literature",
    section: "Collateral",
    onClick: () => {},
  },
  // Marketing
  {
    id: 18,
    icon: PiListStarFill,
    label: "Marketing lists",
    section: "Marketing",
    onClick: () => {},
  },
  {
    id: 19,
    icon: MdOutlineCampaign,
    label: "Quick Campaigns",
    section: "Marketing",
    onClick: () => {},
  },
  // Perfomance
  //   {
  //     id: 20,
  //     icon: MdPerson,
  //     label: "Sale",
  //     section: "Performance",
  //     onClick: () => {},
  //   },
];

const Sidebar = () => {
  const showSidebar = useSidebar((state) => state.showSidebar);
  const toggleSidebar = useSidebar((state) => state.toggleSidebar);
  // const [showSidebarOnHover, setShowSidebarOnHover] = useState(toggleSidebar);

  return (
    <aside
      className={`fixed top-14 left-0 pb-20 h-screen bg-[rgb(240,240,240)] border-r border-gray-200 shadow-sm transform transition-transform duration-200 ease-in-out z-30  scrollbar-none overflow-y-auto
              ${
                showSidebar ? "translate-x-0 w-44" : ""
              } lg:translate-x-0 lg:z-0`}
    >
      {/* Navigation */}
      <nav className="bg-inherit">
        {/* Grouped Navigation Items */}
        {Object.entries(
          navigationItems.reduce((acc, item) => {
            if (!acc[item.section]) acc[item.section] = [];
            acc[item.section].push(item);
            return acc;
          }, {} as Record<string, typeof navigationItems>)
        ).map(([section, items]) => (
          <div key={section} className="mb-6">
            {showSidebar && (
              <h3 className="text-xs font-semibold text-gray-700 mb-2 px-2">
                {section}
              </h3>
            )}
            {items.map((item) => (
              <button
                key={item.label}
                onClick={item.onClick}
                className={`w-full flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-white transition-colors group`}
              >
                <span className="h-[18px] rounded-[1px] w-[3px] group-hover:bg-[rgb(57,92,196)] mx-[-10px]" />
                <item.icon className="text-gray-600 transition-all" />
                {showSidebar && (
                  <span className="text-xs text-gray-600 font-medium">
                    {item.label}
                  </span>
                )}
              </button>
            ))}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
