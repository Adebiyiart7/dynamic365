"use client";

import { FiEdit2 } from "react-icons/fi";
import { IoLogoLinkedin } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import { MdClose, MdOutlineEmail, MdPieChart, MdShield } from "react-icons/md";
import { LeadCardProps } from "./LeadsBoard";
import { useState } from "react";
import {
  CheckCircle,
  Target,
  ThumbsDown,
  ThumbsUp,
  Trophy,
} from "lucide-react";

interface Props {
  selectedItem: LeadCardProps | null;
  onClose: () => void;
}

const LeadDetail = ({ selectedItem: selectedItem, onClose }: Props) => {
  const [activeTab, setActiveTab] = useState("search");

  if (!selectedItem) return;

  return (
    <div className="p-2 pt-0 bg-white">
      <div className="flex items-center justify-between  mb-4">
        <h2 className="flex items-center gap-1 text-md font-semibold text-gray-700">
          <MdOutlineEmail className="text-purple-700" size={18} />
          <span>Engage with {selectedItem.name}</span>
        </h2>
        <button onClick={onClose}>
          <MdClose size={20} className="text-gray-700" />
        </button>
      </div>
      {/* Header */}
      <div className="flex items-center space-x-2 shadow rounded-2xl p-4">
        <img
          src="https://picsum.photos/100"
          alt={selectedItem.name}
          className="max-w-10 max-h-10 rounded-full"
        />
        <div>
          <h2 className="text-md font-semibold text-gray-700">
            {selectedItem.name}
          </h2>
          <p className="flex item-center text-sm text-gray-500">
            <IoLogoLinkedin className="text-purple-700" size={15} />
            <span className="text-xs">
              {selectedItem.title}, {selectedItem.company}
            </span>
          </p>
        </div>
      </div>

      {/* Lead Information */}
      <div className="flex items-center justify-between mt-4 bg-blue-50 p-3 rounded-xl">
        <p className="text-sm text-gray-700">
          {selectedItem.name.split(" ")[0]} may be interested in upgrading
          espresso machines for her in-store coffee shops.
        </p>
        <div className="mt-2 flex space-x-2">
          <button className="flex items-center px-2 py-1 text-xs border text-blue-600 bg-white rounded-md hover:bg-gray-50">
            <FiEdit2 className="mr-2" />
            Edit
          </button>
          <button className="flex items-center px-2 py-1 text-xs bg-purple-600 text-white rounded-md hover:bg-purple-700">
            <IoSend className="mr-2" />
            Approve and Send
          </button>
        </div>
      </div>

      {/* Why I Picked This Lead */}
      <div className="my-4 mx-auto">
        <div className="flex space-x-6 rounded-sm p-1 pb-0 shadow">
          <button
            onClick={() => setActiveTab("engage")}
            className={`flex items-center px-4 py-2 relative ${
              activeTab === "engage"
                ? "text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <span className="text-sm font-medium">Engage</span>
            {activeTab === "engage" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
            )}
          </button>

          <button
            onClick={() => setActiveTab("search")}
            className={`flex items-center space-x-1 px-4 py-2 relative ${
              activeTab === "search"
                ? "text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <span className="text-sm font-medium">Search</span>
            {activeTab === "search" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
            )}
          </button>
        </div>
      </div>

      <div className="shadow rounded-2xl p-4 py-1">
        {activeTab === "search" ? (
          <div>
            <div className="mt-3  bg-blue-50 p-4 rounded-lg">
              <h3 className="text-sm font-semibold text-blue-600">
                Why I picked this lead
              </h3>
              <ul className="mt-2 list-disc list-inside text-xs text-gray-600">
                <li>
                  {selectedItem.name.split(" ")[0]} is a{" "}
                  <span className="font-semibold">key decision maker</span> and
                  was browsing{" "}
                  <span className="font-semibold">‘espresso machines’</span> on
                  First Coffee’s website.
                </li>
                <li>
                  Multiple people at her company have reported{" "}
                  <span className="font-semibold">‘slowness’</span> during{" "}
                  <span className="font-semibold">service requests</span>.
                </li>
                <li>
                  Northwind Traders currently see{" "}
                  <span className="font-semibold">$200M in revenue</span> from
                  their in-store coffee shops.
                </li>
              </ul>

              {/* Metrics */}
              <div className="flex space-x-4 mt-4">
                <div className="flex items-center space-x-2 shadow bg-white px-4 py-3 rounded-xl w-full max-w-48">
                  <CheckCircle className="w-10 h-10 text-blue-600" />
                  <div>
                    <div className="text-xs font-medium text-gray-600">
                      Decision maker
                    </div>
                    <div className="font-semibold text-sm text-purple-600">
                      Yes
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 shadow bg-white px-4 py-3 rounded-xl w-full max-w-48">
                  <Trophy className="w-10 h-10 text-yellow-500" />
                  <div>
                    <div className="text-xs font-medium text-gray-600">
                      Potential deal value
                    </div>
                    <div className="font-semibold text-sm text-purple-600">
                      $1M
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 shadow bg-white px-4 py-3 rounded-xl w-full max-w-48">
                  <Target className="w-10 h-10 text-purple-500" />
                  <div>
                    <div className="text-xs font-medium text-gray-600">
                      Intent
                    </div>
                    <div className="font-semibold text-sm text-purple-600">
                      High
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-between items-center py-2 px-3rounded-lg">
              {/* Left side - Source info */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2">
                  {/* Profile icon */}
                  <div className="space-x-1 bg-gray-50 px-2 py-2 rounded-md border text-[10px]">
                    <MdShield className="text-yellow-600" />
                  </div>

                  {/* D365 Sales badge */}
                  <div className="flex items-center space-x-1 bg-gray-50 px-2 py-1 rounded-md border text-[10px]">
                    <span className="text-sm text-gray-500 border-r pr-1.5">
                      1
                    </span>
                    <MdPieChart className="text-blue-700 text-[16px]" />
                    <span className="text-gray-700">D365 Sales</span>
                  </div>

                  {/* Additional count */}
                  <div className="space-x-1 bg-gray-50 px-2 py-1 rounded-md border text-[10px]">
                    +2
                  </div>
                </div>
              </div>

              {/* Right side - AI notice and feedback */}
              <div className="flex items-center space-x-4">
                <span className="text-[10px] text-gray-600 bg-gray-50 p-1 rounded">
                  AI-generated content may be incorrect
                </span>

                {/* Feedback buttons */}
                <div className="flex space-x-2">
                  <button className="p-1 hover:bg-gray-200 rounded-full transition-colors">
                    <ThumbsUp className="w-4 h-4 text-gray-500" />
                  </button>
                  <button className="p-1 hover:bg-gray-200 rounded-full transition-colors">
                    <ThumbsDown className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="">
            <h3 className="text-sm font-semibold text-gray-800">Engage</h3>
            <div className="mt-6 invisible">
              <ul className="mt-2 list-disc list-inside text-sm text-gray-600">
                <li>
                  {selectedItem.name.split(" ")[0]} is a{" "}
                  <span className="font-medium">key decision maker</span> and
                  was browsing{" "}
                  <span className="italic">‘espresso machines’</span> on First
                  Coffee’s website.
                </li>
                <li>
                  Multiple people at her company have reported{" "}
                  <span className="font-medium">‘slowness’</span> during service
                  requests.
                </li>
                <li>
                  Northwind Traders currently see{" "}
                  <span className="font-medium">$200M</span> in revenue from
                  their in-store coffee shops.
                </li>
              </ul>

              {/* Metrics */}
              <div className="flex space-x-4 mb-4">
                <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="text-sm text-gray-600">Decision maker</div>
                    <div className="font-medium">Yes</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-lg">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  <div>
                    <div className="text-sm text-gray-600">
                      Potential deal value
                    </div>
                    <div className="font-medium text-blue-600">$1M</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-lg">
                  <Target className="w-5 h-5 text-purple-500" />
                  <div>
                    <div className="text-sm text-gray-600">Intent</div>
                    <div className="font-medium text-purple-600">High</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* About   */}
      <div className="mt-6 shadow rounded-2xl p-4">
        <h3 className="text-sm font-semibold text-gray-800">
          About {selectedItem.name.split(" ")[0]}
        </h3>
        <p className="mt-2 text-xs text-gray-600">
          {selectedItem.name}, the Chief Operating Officer of Northwind Traders,
          is a dynamic leader with a proven track record in optimizing
          operations and enhancing customer experiences. Under her guidance,
          Northwind Traders’ in-store coffee shops have flourished, becoming a
          hallmark of quality and innovation. {selectedItem.name.split(" ")[0]}
          ’s commitment to excellence makes her an ideal partner for First
          Coffee. She is always seeking top-tier equipment to elevate her coffee
          shops’ offerings, ensuring consistent, high-quality service.
        </p>
      </div>
    </div>
  );
};

export default LeadDetail;
