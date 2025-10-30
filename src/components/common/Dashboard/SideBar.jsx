import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

import {
  BarChart,
  FileChartColumn,
  BriefcaseBusiness,
  PlusCircle,
  AlertTriangle,
  Landmark,
  LayoutDashboard,
  LayoutTemplate,
  Network,
  FileInput,
  FilePlus,
  StickyNote,
  FileText,
  FileSearch,
  Files,
  User,
  FileMinus,
  Archive,
  Shield,
  LifeBuoy,
  Database,
} from "lucide-react";
import { ChevronDown, LogOut, MoreVertical, Settings } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavLink, useNavigate } from "react-router-dom";

const sidebarData = {
  user: {
    name: "Thomas",
    email: "thomas@gmail.com",
    avatar: "T",
  },
};

const data = {
  navMain: [
    {
      title: "Monitoring & Evaluation",
      url: "/dashboard/monitoring-evaluation",
      items: [
        {
          title: "Overview",
          url: "/dashboard/overview",
          icon: LayoutDashboard,
        },
        {
          title: "Analysis",
          url: "/dashboard/analysis",
          icon: BarChart,
        },
        {
          title: "Reports",
          url: "/dashboard/reports",
          icon: FileChartColumn,
        },
      ],
    },
    {
      title: "Case Management",
      url: "/dashboard/case-management",
      items: [
        {
          title: "Cases",
          url: "/dashboard/cases",
          icon: BriefcaseBusiness,
        },
        {
          title: "Case requests",
          url: "/dashboard/case-requests",
          icon: PlusCircle,
        },
        {
          title: "Accusations",
          url: "/dashboard/accusations",
          icon: AlertTriangle,
        },
      ],
    },
    {
      title: "Content Management",
      url: "/dashboard/content-management",
      items: [
        {
          title: "CMS",
          url: "/dashboard/cms",
          icon: LayoutTemplate,
        },
      ],
    },
    {
      title: "Document Management",
      url: "/dashboard/document-management",
      items: [
        {
          title: "Incoming Letters",
          url: "/dashboard/incoming-letter",
          icon: FileInput,
        },
        {
          title: "Outgoing Letters",
          url: "/dashboard/outgoing-letters",
          icon: FilePlus,
        },
        {
          title: "Memo",
          url: "/dashboard/memo",
          icon: StickyNote,
        },
        {
          title: "Minutes",
          url: "/dashboard/minutes",
          icon: FileText,
        },
        {
          title: "Pre-System Letters",
          url: "/dashboard/pre-system-letters",
          icon: FileSearch,
        },
        {
          title: "Delegated Documents",
          url: "/dashboard/delegated-documents",
          icon: Files,
        },
        {
          title: "Closings",
          url: "/dashboard/closings",
          icon: FileMinus,
        },
        {
          title: "Document Category",
          url: "/dashboard/document-category",
          icon: Archive,
        },
      ],
    },
    {
      title: "Organizational Control",
      url: "/dashboard/organizational-control",
      items: [
        {
          title: "Organizations management",
          url: "/dashboard/organization-management",
          icon: Network,
        },
        {
          title: "Record Offices",
          url: "/dashboard/record-offices",
          icon: Landmark,
        },
      ],
    },
    {
      title: "System & Administration",
      url: "/dashboard/system-administration",
      items: [
        {
          title: "User Management",
          url: "/dashboard/user-management",
          icon: User,
        },
        {
          title: "Group and Permissions",
          url: "/dashboard/group-and-permissions",
          icon: Shield,
        },
        {
          title: "Permission",
          url: "/dashboard/permission",
          icon: LifeBuoy,
        },
        {
          title: "CORS",
          url: "/dashboard/cors",
          icon: Database,
        },
      ],
    },
  ],
};
import { useState, useEffect } from "react";

export default function AppSidebar() {
  const navigate = useNavigate();
  // To mimic routing in this component only
  const [pathname, setPathname] = useState(window.location.pathname);
  const {
    state,
    open,
    setOpen,
    openMobile,
    setOpenMobile,
    isMobile,
    toggleSidebar,
  } = useSidebar();

  useEffect(() => {
    const handleRouteChange = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);
  return (
    // TODO: left
    <Sidebar
      className="top-(--header-height) left-[10px] h-[calc(100svh-var(--header-height))]! data-[sidebar-inner]:gap-3.5"
      collapsible="icon"
      variant="inset"
    >
      <SidebarContent className="text-white pt-3.5 pb-3.5 rounded-[10px] bg-[#0A74B9] group-data-[collapsible=icon]:overflow-auto overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {data.navMain.map((group) => (
          <SidebarGroup key={group.title} className="p-0">
            <SidebarGroupLabel className="px-3.5 py-[4.5px] rounded-none">
              <span className="text-white custom-text-12 font-normal leading-none tracking-normal align-middle w-full py-2 pr-3.5 pl-2.5 box-border border-b border-[#E1EEF7]">
                {group.title}
              </span>
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="gap-0">
                {group.items.map((navItem) => {
                  const isActive = pathname === navItem.url;
                  return (
                    <SidebarMenuItem key={navItem.title}>
                      <NavLink
                        to={navItem.url}
                        className="w-full flex items-center gap-2 group-data-[collapsible=icon]:flex-col group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:items-center group-data-[collapsible=icon]:gap-1 group-data-[collapsible=icon]:text-center"
                      >
                        {({ isActive }) => (
                          <SidebarMenuButton
                            onClick={() => navigate(navItem.url)}
                            className={`w-full gap-2.5 h-[40px] mx-3.5 py-0 cursor-pointer flex ${
                              isActive
                                ? "text-[#0A74B9] bg-[#F5F5F5] border-y-0 border-l-4 border-[#FCB043] shadow-[0_2px_6px_0_#1018280F]"
                                : "text-white"
                            } ${!isActive ? "hover:text-[#0A74B9]" : ""} ${
                              state !== "collapsed" && isActive
                                ? "border-r-4"
                                : ""
                            }`}
                          >
                            <>
                              {navItem.icon && (
                                <navItem.icon
                                  size={20}
                                  className="group-data-[collapsible=icon]:mx-auto group-data-[collapsible=icon]:size-5"
                                />
                              )}
                              <span
                                className={`px-0.5 ${
                                  isActive ? "font-bold" : "font-normal"
                                } group-data-[collapsible=icon]:whitespace-normal group-data-[collapsible=icon]:break-words group-data-[collapsible=icon]:text-center group-data-[collapsible=icon]:leading-tight group-data-[collapsible=icon]:text-[10px] ${
                                  !isActive ? "hover:text-[#0A74B9]" : ""
                                }`}
                              >
                                {navItem.title}
                              </span>
                            </>
                          </SidebarMenuButton>
                        )}
                      </NavLink>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter className="rounded-[10px] !gap-0 custom-mt-12.5 pt-2.5 pb-2.5 bg-white shadow-[0_0_60px_0_#0A74B933] h-fit">
        <SidebarMenu className="gap-0">
          {/* USER DROPDOWN */}
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="flex items-center rounded-lg bg-white px-3 text-[#021828] hover:bg-[#F5F5F5] data-[state=open]:bg-[#F5F5F5]"
                >
                  <Avatar className="size-8 shrink-0">
                    <AvatarFallback className="bg-[#F5F5F5] text-[20px] font-semibold text-[#021828]">
                      {sidebarData.user.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-1 flex-col overflow-hidden text-left group-data-[collapsible=icon]:hidden">
                    <span className="custom-text-14 leading-none truncate">
                      {sidebarData.user.name}
                    </span>
                    <span className="custom-text-12 leading-none text-[#737373] truncate">
                      {sidebarData.user.email}
                    </span>
                  </div>
                  <MoreVertical className="ml-auto size-4 text-[#0a74b9] group-data-[collapsible=icon]:hidden" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                side="top"
                align="end"
                sideOffset={6}
                className="min-w-56 rounded-lg custom-p-8"
              >
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-2 py-1.5 text-left custom-text-14">
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarFallback className="rounded-lg bg-[#F5F5F5] custom-text-14 font-semibold text-[#021828]">
                        {sidebarData.user.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left custom-text-14 leading-tight">
                      <span className="truncate font-medium">
                        {sidebarData.user.name}
                      </span>
                      <span className="truncate custom-text-12 text-[#737373]">
                        {sidebarData.user.email}
                      </span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-[#021828]">
                  <Settings className="custom-mr-8 size-5" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem className="text-[#7F1D1D] focus:bg-[#F5F5F5]">
                  <LogOut className="custom-mr-8 size-5" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>

          {/* Divider */}
          <div className="w-full h-px border border-[#A3A3A3] my-0.5 data-[state=collapsed]:hidden" />

          {/* SETTINGS BUTTON */}
          <SidebarMenuItem>
            <SidebarMenuButton className="flex data-[state=collapsed]:flex-col items-center gap-3 rounded-lg px-3 py-2 hover:bg-[#F5F5F5] text-[#021828]">
              <Settings className="size-5 shrink-0" />
              <span className="flex-1 text-left custom-text-14 font-medium group-data-[collapsible=icon]:hidden">
                Settings
              </span>
              <ChevronDown className="size-4" />
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* LOGOUT BUTTON */}
          <SidebarMenuItem>
            <SidebarMenuButton className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#7F1D1D] hover:bg-[#F5F5F5]">
              <LogOut className="size-5 shrink-0" />
              {state !== "collapsed" && (
                <span className="flex-1 text-left custom-text-14 font-medium group-data-[collapsible=icon]:hidden">
                  Logout
                </span>
              )}
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Divider */}
          {open && (
            <div className="w-full h-px border border-[#F5F5F5] my-0.5 data-[state=collapsed]:hidden" />
          )}

          {/* POWERED BY AASTU */}
          {open && !isMobile && (
            <div className="text-center custom-text-12 font-bold text-[#032A44]">
              Powered By <span className="font-bold text-[#AD892E]">AASTU</span>
            </div>
          )}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
