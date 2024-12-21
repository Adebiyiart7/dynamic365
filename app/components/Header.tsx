"use client";

import { BiChat } from "react-icons/bi";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaRegLightbulb } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { MdPerson, MdQuestionMark } from "react-icons/md";

const Header = () => {
  return (
    <nav
      className="h-14 bg-[#020f26] shadow-sm fixed top-0 right-0 left-0 z-40 text-[#c5cdda] p-2"
      aria-label="Main Navigation"
    >
      <div className="h-full px-2 flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <a
            href="/"
            className="flex items-center gap-5"
            aria-label="Navigate to Dynamics 365 home"
          >
            <BsFillGrid3X3GapFill size={18} aria-hidden="true" />
            <span className="text-md font-semibold">Dynamics 365</span>
          </a>
          <span
            className="text-sm border-l border-l-[#788396] pl-2 ml-[-10px] text-[#acb6c6]"
            aria-label="Sales Hub"
          >
            Sales hub
          </span>
        </div>

        {/* Right Side Actions */}
        <ul className="flex items-center space-x-4">
          {/* Action Buttons */}
          {[
            {
              Icon: FaRegLightbulb,
              label: "Insights",
              tooltip: "Insights",
            },
            {
              Icon: IoMdAdd,
              label: "Add",
              tooltip: "Add",
            },
            {
              Icon: IoSettingsOutline,
              label: "Settings",
              tooltip: "Settings",
            },
            {
              Icon: MdQuestionMark,
              label: "Help",
              tooltip: "Help",
            },
            {
              Icon: BiChat,
              label: "Chat",
              tooltip: "Chat",
            },
          ].map(({ Icon, label, tooltip }) => (
            <li key={label} className="relative group hidden sm:block">
              <button
                className="p-2 hover:bg-gray-100 hover:text-[#020f26] rounded-lg"
                aria-label={label}
              >
                <Icon aria-hidden="true" />
              </button>
              {/* Tooltip */}
              <div
                className="absolute left-1/2 transform -translate-x-1/2 mt-4 hidden group-hover:block text-xs font-medium text-white bg-gray-800 px-2 py-1 rounded"
                role="tooltip"
              >
                {tooltip}
              </div>
            </li>
          ))}

          {/* User Profile */}
          <li className="relative group">
            <button
              className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center"
              aria-label="Profile"
            >
              <MdPerson className="text-blue-600" aria-hidden="true" />
            </button>
            {/* Tooltip */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 mt-4 hidden group-hover:block text-xs font-medium text-white bg-gray-800 px-2 py-1 rounded"
              role="tooltip"
            >
              Profile
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
