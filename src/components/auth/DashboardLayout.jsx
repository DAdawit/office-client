// layouts/DashboardLayout.jsx
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import AppSidebar from "../common/Dashboard/SideBar";
import MainNavbar from "../common/MainNavbar";

export default function DashboardLayout() {
  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "288px",
        "--sidebar-collapsed-width": "65px",
      }}
    >
      <MainNavbar />
      {/* TODO: pl */}
      <div className="flex w-full pl-2.5 pr-3 h-full">
        <AppSidebar />
        <SidebarInset className="top-(--header-height) bg-base-lightBlue !custom-ml-20 border-2 min-h-max overflow-x-hidden">
          <Outlet />
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
