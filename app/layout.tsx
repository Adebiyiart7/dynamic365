"use client";

import localFont from "next/font/local";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./globals.css";
import { useSidebar } from "./hooks/sidebarState";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "Sales Hub - Dynamics 365",
//   description: "Sales management dashboard",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const showSidebar = useSidebar((state) => state.showSidebar);
  const toggleSidebar = useSidebar((state) => state.toggleSidebar);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`}
      >
        {/* Header */}
        <Header />

        <div className="flex bg-gray-100 mt-14 relative h-[calc(100vh-48px)]">
          {/* Mobile Sidebar Overlay */}
          {showSidebar && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
              onClick={() => toggleSidebar()}
            />
          )}

          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <main
            className={`${
              showSidebar ? "ml-44" : "ml-10"
            } p-4 w-full overflow-x-hidden`}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
