"use client";

import logo from "@/app/assets/copilot.png";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaRegClock } from "react-icons/fa";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import LeadCard from "./LeadCard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import KeyActivities from "./KeyActivities";
import Modal from "react-modal";
import LeadDetail from "./LeadDetail";

export interface LeadCardProps {
  name: string;
  image: string;
  title: string;
  company: string;
  action: string;
  description: string;
  tags: string[];
}

const target = "$45 million";
const progress = 68; // percentage
const total = 111;

const LeadsBoard = () => {
  const carouselRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [seletedItem, setSelectedItem] = useState<LeadCardProps | null>(null);
  const [showFullCard, setShowFullCard] = useState(false);

  const handleClick = () => {
    setShowFullCard(!showFullCard);
  };

  const handleClickLead = (item: LeadCardProps) => {
    setIsOpen(true);
    setSelectedItem(item);
  };

  const renderArrowPrev = (clickHandler: () => void, hasPrev: boolean) => {
    if (!hasPrev) return;

    return (
      <button
        onClick={clickHandler}
        className="absolute top-[calc(50%-22px)] -translate-y-1/2 z-20 border rounded-full p-1 text-gray-700 bg-white shadow-md hover:bg-gray-50"
      >
        <ChevronLeft />
      </button>
    );
  };

  const renderArrowNext = (clickHandler: () => void, hasNext: boolean) => {
    if (!hasNext) return;

    return (
      <button
        onClick={clickHandler}
        className="absolute right-0 top-[calc(50%-22px)] -translate-y-1/2 z-10 border rounded-full p-1 text-gray-700 bg-white shadow-md hover:bg-gray-50"
      >
        <ChevronRight />
      </button>
    );
  };

  const renderModalArrowPrev = (clickHandler: () => void, hasPrev: boolean) => {
    if (!hasPrev) return;

    return (
      <button
        onClick={clickHandler}
        className="absolute top-[calc(50%-22px)] -translate-y-1/2 z-20 border rounded-full p-3 text-gray-700 bg-white shadow-md hover:bg-gray-50"
      >
        <ChevronLeft size={24} />
      </button>
    );
  };

  const renderModalArrowNext = (clickHandler: () => void, hasNext: boolean) => {
    if (!hasNext) return;

    return (
      <button
        onClick={clickHandler}
        className="absolute right-0 top-[calc(50%-22px)] -translate-y-1/2 z-10 border rounded-full p-3 text-gray-700 bg-white shadow-md hover:bg-gray-50"
      >
        <ChevronRight size={24} />
      </button>
    );
  };

  const renderIndicator = (
    clickHandler: () => void,
    isSelected: boolean,
    index: number
  ) => {
    return (
      <button
        key={index}
        onClick={clickHandler}
        className={`mx-0.5  transition-all duration-300 ${
          isSelected
            ? "bg-blue-600 w-6 h-1 rounded-lg"
            : "bg-gray-300 w-1 h-1 rounded-full"
        }`}
        aria-label={`Slide ${index + 1}`}
      ></button>
    );
  };

  return (
    <div className="w-full border-2 border-blue-400 rounded-xl bg-white shadow-lg hover:shadow-2xl transition-shadow">
      <div
        className="flex flex-col flex-wrap md:flex-nowrap md:flex-row justify-between w-full items-center gap-4 p-4 md:p-6 cursor-pointer"
        onClick={handleClick}
      >
        {/* First Section */}
        <div className="flex flex-1 items-center gap-2">
          <Image
            src={logo.src}
            width={20}
            height={20}
            alt="Copilot Logo"
            className="flex-shrink-0"
          />
          <h3 className="font-semibold text-gray-700 text-sm sm:text-base md:text-lg">
            Hi Mona, <span className="text-blue-600">{progress}%</span> of goal
            achieved and rest can be achieved by focusing on 20 top leads.
          </h3>
        </div>

        {/* Second Section */}
        <div className="flex-1">
          <div className="flex flex-1 justify-between items-center mt-4 md:mt-0">
            <ProgressTracker />

            <span className="flex items-center px-2 rounded-sm text-xl md:text-2xl">
              {showFullCard ? (
                <IoChevronDown className="w-6 h-6" />
              ) : (
                <IoChevronUp className="w-6 h-6" />
              )}
            </span>
          </div>
        </div>
      </div>

      {showFullCard && (
        <div className="flex items-start gap-4 p-4 flex-col md:flex-row">
          <div className="flex-1 md:w-2/3 border-r pr-4 mx-2 w-full">
            <p className="text-gray-600 text-sm mx-4">
              Copilot has pinpointed 20 key leads that show purchase intent and
              are actively engaging. These leads need your focus.
            </p>

            <div className="relative w-full py-4">
              <Carousel
                className="w-full"
                useKeyboardArrows={true}
                renderArrowPrev={renderArrowPrev}
                renderArrowNext={renderArrowNext}
                renderIndicator={renderIndicator}
                showStatus={false}
              >
                {leads.map((item, index) => (
                  <div key={index} className="flex gap-3 snap-start mx-4">
                    <LeadCard
                      item={item[0]}
                      onClick={() => handleClickLead(item[0])}
                    />
                    <LeadCard
                      item={item[1]}
                      onClick={() => handleClickLead(item[1])}
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>

          <div className="flex-1 md:w-1/3 w-full">
            <p className="text-gray-600 text-sm ml-4">Other key activities</p>
            <KeyActivities />
          </div>
        </div>
      )}

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        ariaHideApp={false}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            zIndex: 1000,
          },

          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            padding: "20px",
            // width: "90%",
            maxHeight: "95%",
            maxWidth: "60%",
            // borderRadius: "10px",
            zIndex: 1001, // Set z-index for modal content if needed
            // border: "none",
            // overflow: "hidden",
            backgroundColor: "#FFF",
            // boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",

            borderWidth: 2,
            borderColor: "#3b82f6",
            borderRadius: "0.75rem", // 12px
            "--tw-bg-opacity": 1,
            "--tw-shadow":
              "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
            "--tw-shadow-colored":
              "0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color)",
            boxShadow:
              "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
            "--tw-drop-shadow":
              "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
            filter:
              "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)",
            transitionProperty: "box-shadow",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDuration: "150ms",
            scrollbarWidth: "none" /* For Firefox */,
          },
        }}
      >
        <Carousel
          className="w-full"
          useKeyboardArrows={true}
          renderArrowPrev={renderModalArrowPrev}
          renderArrowNext={renderModalArrowNext}
          renderIndicator={renderIndicator}
          showStatus={false}
        >
          {leads.map((item, index) => (
            <div className="snap-start">
              <LeadDetail
                key={index.toString()}
                selectedItem={item[0]}
                onClose={() => setIsOpen(false)}
              />
            </div>
          ))}
        </Carousel>
      </Modal>
    </div>
  );
};

export default LeadsBoard;

const ProgressTracker = () => {
  const metrics = [
    { value: 18, label: "Won $18m", color: "bg-green-400" },
    { value: 8, label: "Committed $8m", color: "bg-blue-400" },
    { value: 7, label: "Best case $7m", color: "bg-purple-300" },
    {
      value: 3,
      label: "Qualified $3m",
      color: "bg-yellow-300",
    },
    { value: 75, label: "Leads $75m", color: "bg-gray-200" },
  ];

  return (
    <div className="flex-1 w-full bg-white rounded-lg">
      {/* Header with target and progress */}
      <div className="flex justify-between items-center mb-0.5">
        <div className="flex items-center gap-1 text-[10px] text-gray-500">
          <FaRegClock size={10} />
          <span> 1 month until Q4 ends</span>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className="text-[10px] text-gray-500 border-l border-gray-600 mb-[-8px] pl-[2px] z-10 pb-2">
          Target <span className="text-gray-900">{target}</span>
        </div>
        <div className="text-[10px] text-gray-500">
          {progress}% of target achieved
        </div>
      </div>

      {/* Progress bars */}
      <div className="flex h-1.5 rounded-lg overflow-hidden">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className={`${metric.color} h-full ${
              index === 0 ? "rounded-l-lg" : ""
            } ${index === metrics.length - 1 ? "rounded-r-lg" : ""}`}
            style={{ width: `${(metric.value / total) * 100}%` }}
          />
        ))}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 mt-0.5">
        {metrics.map((metric, index) => (
          <div key={index} className="flex items-center gap-1">
            <span
              className={`${metric.color} p-1 rounded-lg text-white`}
            ></span>
            <span className="text-[10px] text-gray-600">{metric.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const leads = [
  [
    {
      name: "Jane Reyes",
      image: "https://picsum.photos/100",
      title: "COO",
      company: "Northwind Traders",
      action: "Engage with Jane Reyes",
      description:
        "Jane may be interested in upgrading espresso machines for her in-store coffee shops.",
      tags: ["Expand business", "High buying intent"],
    },
    {
      name: "Allan Munger",
      image: "https://picsum.photos/100",
      title: "Head of Real Estate Development",
      company: "Contoso Coffee",
      action: "Prepare for meeting with Allan",
      description:
        "Prepare for high-buying intent meeting Copilot scheduled for 2 PM regarding upgrading service contract.",
      tags: ["Upcoming meeting", "Due today"],
    },
  ],
  [
    {
      name: "Sarah Connor",
      image: "https://picsum.photos/100",
      title: "VP of Operations",
      company: "Skyline Industries",
      action: "Review operational report for Sarah",
      description:
        "Sarah is reviewing quarterly operational inefficiencies and is open to workflow automation solutions.",
      tags: ["Operational review", "Medium buying intent"],
    },
    {
      name: "Mark Evans",
      image: "https://picsum.photos/100",
      title: "CEO",
      company: "Peak Solutions",
      action: "Connect with Mark Evans",
      description:
        "Mark is exploring innovative IT solutions for his company’s infrastructure upgrade.",
      tags: ["IT infrastructure", "High buying intent"],
    },
  ],
  [
    {
      name: "Emily Zhang",
      image: "https://picsum.photos/100",
      title: "Director of Marketing",
      company: "GreenTech Solutions",
      action: "Follow up with Emily Zhang",
      description:
        "Emily is analyzing engagement metrics and is considering investing in new marketing analytics tools.",
      tags: ["Marketing tools", "Potential opportunity"],
    },
    {
      name: "John Carter",
      image: "https://picsum.photos/100",
      title: "Senior Manager",
      company: "Metro Supplies Co.",
      action: "Pitch sustainability solutions to John",
      description:
        "John is looking for eco-friendly suppliers for his company’s growing sustainability initiative.",
      tags: ["Sustainability", "Low buying intent"],
    },
  ],
  [
    {
      name: "Jane Reyes",
      image: "https://picsum.photos/100",
      title: "COO",
      company: "Northwind Traders",
      action: "Engage with Jane Reyes",
      description:
        "Jane may be interested in upgrading espresso machines for her in-store coffee shops.",
      tags: ["Expand business", "High buying intent"],
    },
    {
      name: "Allan Munger",
      image: "https://picsum.photos/100",
      title: "Head of Real Estate Development",
      company: "Contoso Coffee",
      action: "Prepare for meeting with Allan",
      description:
        "Prepare for high-buying intent meeting Copilot scheduled for 2 PM regarding upgrading service contract.",
      tags: ["Upcoming meeting", "Due today"],
    },
  ],
  [
    {
      name: "Sarah Connor",
      image: "https://picsum.photos/100",
      title: "VP of Operations",
      company: "Skyline Industries",
      action: "Review operational report for Sarah",
      description:
        "Sarah is reviewing quarterly operational inefficiencies and is open to workflow automation solutions.",
      tags: ["Operational review", "Medium buying intent"],
    },
    {
      name: "Mark Evans",
      image: "https://picsum.photos/100",
      title: "CEO",
      company: "Peak Solutions",
      action: "Connect with Mark Evans",
      description:
        "Mark is exploring innovative IT solutions for his company’s infrastructure upgrade.",
      tags: ["IT infrastructure", "High buying intent"],
    },
  ],
  [
    {
      name: "Emily Zhang",
      image: "https://picsum.photos/100",
      title: "Director of Marketing",
      company: "GreenTech Solutions",
      action: "Follow up with Emily Zhang",
      description:
        "Emily is analyzing engagement metrics and is considering investing in new marketing analytics tools.",
      tags: ["Marketing tools", "Potential opportunity"],
    },
    {
      name: "John Carter",
      image: "https://picsum.photos/100",
      title: "Senior Manager",
      company: "Metro Supplies Co.",
      action: "Pitch sustainability solutions to John",
      description:
        "John is looking for eco-friendly suppliers for his company’s growing sustainability initiative.",
      tags: ["Sustainability", "Low buying intent"],
    },
  ],
];
