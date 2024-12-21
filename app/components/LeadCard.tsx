import React from "react";
import { Mail, Sparkles } from "lucide-react";
import Image from "next/image";
import { LeadCardProps } from "./LeadsBoard";

const LeadCard = ({
  item,
  onClick,
}: {
  item: LeadCardProps;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className="flex-1 bg-white rounded-2xl p-3 m-1 hover:shadow drop-shadow transition-shadow cursor-pointer"
    >
      {/* Header with user info */}
      <div className="flex items-center gap-3 mb-3">
        {/* Avatar placeholder */}
        <div>
          <Image
            src={item.image}
            alt="Photo"
            height={28}
            width={28}
            className="rounded-full"
          />
        </div>

        <div className="flex flex-col items-start">
          <h3 className="text-gray-800 font-semibold text-sm">{item.name}</h3>
          <div className="flex items-center gap-1 text-gray-500 leading-none">
            <span className="text-xs">{item.title}</span>
            <span>•</span>
            <span className="text-xs">{item.company}</span>
          </div>
        </div>
      </div>

      {/* Engagement section */}
      <div className="relative bg-blue-50 rounded-xl p-3 mb-2 rounded-tr-[40px]">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <Mail className="text-gray-500 w-5 h-5" />
            <span className="text-gray-700 font-semibold text-sm">
              {item.action}
            </span>
          </div>
          <span className="absolute top-[-2px] right-[-2px] bg-transparent border-white border-4 rounded-full">
            <Sparkles className="text-blue-600 w-5 h-5" />
          </span>
        </div>

        <p className="text-gray-600 mt-2 text-xs text-start">
          {item.description}
        </p>
      </div>

      {/* Tags */}
      <div className="flex ml-4 gap-1 text-xs text-gray-500">
        <span>{item.tags[0]}</span>
        <span>•</span>
        <span>{item.tags[1]}</span>
      </div>
    </div>
  );
};

export default LeadCard;
