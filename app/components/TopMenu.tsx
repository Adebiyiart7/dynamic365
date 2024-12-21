"use client";

import {
  BarChart,
  Check,
  ChevronDown,
  Layout,
  LineChart,
  Menu,
  MoreVertical,
  Pencil,
  Plus,
  RefreshCw,
  Table,
  Trash,
  Users,
  X,
} from "lucide-react";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import { useEffect, useRef, useState } from "react";
import { ImShare } from "react-icons/im";

interface MobileMenuProps {
  icon: Icon;
  label: string;
  onClick?: () => void;
}

const TopMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLeadsDropdownOpen, setIsLeadsDropdownOpen] = useState(false);
  const [isShareDropdownOpen, setIsShareDropdownOpen] = useState(false);

  // Create refs for the dropdown containers
  const leadsDropdownRef = useRef<HTMLDivElement>(null);
  const shareDropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Handle leads dropdown
      if (
        leadsDropdownRef.current &&
        !leadsDropdownRef.current.contains(event.target as Node)
      ) {
        setIsLeadsDropdownOpen(false);
      }

      // Handle share dropdown
      if (
        shareDropdownRef.current &&
        !shareDropdownRef.current.contains(event.target as Node)
      ) {
        setIsShareDropdownOpen(false);
      }

      // Handle mobile menu
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const MobileMenuItem = ({ icon: Icon, label, onClick }: MobileMenuProps) => (
    <button
      className="flex items-center space-x-1 w-full px-4 py-3 hover:bg-gray-100"
      onClick={onClick}
    >
      <Icon className="w-4 h-4 text-gray-500 hidden lg:block" />
      <span className="text-xs text-gray-600">{label}</span>
    </button>
  );

  return (
    <div className="relative w-full">
      <div className="flex items-center justify-between p-1 bg-white border-b drop-shadow-sm border-gray-200 rounded">
        {/* Left section */}
        <div className="flex items-center space-x-1">
          <div className="relative" ref={leadsDropdownRef}>
            <button
              onClick={() => setIsLeadsDropdownOpen(!isLeadsDropdownOpen)}
              className="flex items-center space-x-1 px-2 py-1.5 hover:bg-gray-100 rounded-sm"
            >
              <span className="font-medium text-xs">My open leads</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {isLeadsDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                <div className="py-1">
                  <button className="flex items-center w-full px-4 py-2 text-xs text-left hover:bg-gray-100">
                    <Check className="w-4 h-4 mr-2 text-blue-600" />
                    My open leads
                  </button>
                  <button className="w-full px-4 py-2 text-xs text-left hover:bg-gray-100">
                    All leads
                  </button>
                  {/* <button className="w-full px-4 py-2 text-xs text-left hover:bg-gray-100">
                    Closed leads
                  </button> */}
                  <hr className="my-1 border-gray-200" />
                  <button className="w-full px-4 py-2 text-xs text-left hover:bg-gray-100">
                    Create new view
                  </button>
                  {/* <button className="w-full px-4 py-2 text-xs text-left hover:bg-gray-100">
                    Manage views
                  </button> */}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right section - Desktop */}
        <div className="hidden md:flex items-center space-x-1">
          <div className="hidden md:flex items-center space-x-1">
            <button className="flex items-center space-x-1 px-2 py-1.5 hover:bg-gray-100 rounded-sm">
              <BarChart className="w-4 h-4 text-gray-500 hidden lg:block" />
              <span className="text-xs text-gray-600">Show chart</span>
            </button>

            <button className="flex items-center space-x-1 px-2 py-1.5 hover:bg-gray-100 rounded-sm">
              <Layout className="w-4 h-4 text-gray-500 hidden lg:block" />
              <span className="text-xs text-gray-600">Focused view</span>
            </button>
          </div>

          <button className="flex items-center space-x-1 px-2 py-1.5 hover:bg-gray-100 rounded-sm">
            <Plus className="w-4 h-4 text-gray-500 hidden lg:block" />
            <span className="text-xs text-gray-600">New</span>
          </button>

          <button className="flex items-center space-x-1 px-2 py-1.5 hover:bg-gray-100 rounded-sm">
            <RefreshCw className="w-4 h-4 text-gray-500 hidden lg:block" />
            <span className="text-xs text-gray-600">Refresh</span>
          </button>

          <button className="flex items-center space-x-1 px-2 py-1.5 hover:bg-gray-100 rounded-sm">
            <Users className="w-4 h-4 text-gray-500 hidden lg:block" />
            <span className="text-xs text-gray-600">Collaborate</span>
          </button>

          <div className="flex items-center space-x-1 pl-2">
            <button className="flex items-center space-x-1 px-2 py-1.5 hover:bg-gray-100 rounded-sm">
              <Trash className="w-4 h-4 text-gray-500 hidden lg:block" />
              <span className="text-xs text-gray-600">Delete</span>
            </button>
          </div>

          <div className="flex items-center space-x-1 pl-2 border-l border-gray-200">
            <ChevronDown className="w-4 h-4 text-gray-500 hidden lg:block" />
            <MoreVertical className="w-4 h-4 text-gray-500 hidden lg:block" />
          </div>

          <div className="flex items-center space-x-1 pl-2">
            <button className="flex items-center space-x-1 px-2 py-1.5 hover:bg-gray-100 border rounded-sm">
              <LineChart className="w-4 h-4 text-gray-500 hidden lg:block" />
              <span className="text-xs text-gray-600">Smart data</span>
            </button>

            <button className="flex items-center space-x-1 px-2 py-1.5 hover:bg-gray-100 border rounded-sm">
              <Pencil className="w-4 h-4 text-gray-500 hidden lg:block" />
              <span className="text-xs text-gray-600">Edit filters</span>
            </button>

            <button className="flex items-center space-x-1 px-2 py-1.5 hover:bg-gray-100 border rounded-sm">
              <Table className="w-4 h-4 text-gray-500 hidden lg:block" />
              <span className="text-xs text-gray-600">Edit columns</span>
            </button>

            <div className="relative" ref={shareDropdownRef}>
              <button
                onClick={() => setIsShareDropdownOpen(!isShareDropdownOpen)}
                className="flex items-center space-x-1 px-2 pr-1 py-1.5 bg-blue-600 hover:bg-blue-700 border border-blue-600 rounded-sm"
              >
                <ImShare className="w-4 h-4 text-gray-200" />
                <span className="border-r border-r-gray-200 h-4 px-1" />
                <ChevronDown className="w-4 h-4 text-gray-200" />
              </button>

              {isShareDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <div className="py-1">
                    <button className="w-full px-4 py-2 text-xs text-left hover:bg-gray-100">
                      Share view
                    </button>
                    <button className="w-full px-4 py-2 text-xs text-left hover:bg-gray-100">
                      Export as CSV
                    </button>
                    <button className="w-full px-4 py-2 text-xs text-left hover:bg-gray-100">
                      Export as Excel
                    </button>
                    <hr className="my-1 border-gray-200" />
                    <button className="w-full px-4 py-2 text-xs text-left hover:bg-gray-100">
                      Print view
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center space-x-1">
          <button className="flex items-center space-x-1 px-2 py-1.5 text-white bg-blue-600 hover:bg-blue-700 rounded-md">
            <Plus className="w-4 h-4" />
            <span className="text-xs">New</span>
          </button>

          <button
            className="p-1.5 hover:bg-gray-100 rounded-sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-500" />
            ) : (
              <Menu className="w-6 h-6 text-gray-500" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg md:hidden z-50"
          ref={mobileMenuRef}
        >
          <div className="py-2">
            <MobileMenuItem icon={BarChart} label="Show chart" />
            <MobileMenuItem icon={Layout} label="Focused view" />
            <MobileMenuItem icon={RefreshCw} label="Refresh" />
            <MobileMenuItem icon={Users} label="Collaborate" />
            <MobileMenuItem icon={Trash} label="Delete" />
            <MobileMenuItem icon={LineChart} label="Smart data" />
            <MobileMenuItem icon={Pencil} label="Edit filters" />
            <MobileMenuItem icon={Table} label="Edit columns" />
          </div>
        </div>
      )}
    </div>
  );
};

export default TopMenu;
