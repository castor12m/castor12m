import { Link, NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarFooter,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar";

import { NavMain } from "./nav-main";
import { NavSecondary } from "./nav-secondary";
import { Collapsible } from "@/components/ui/collapsible";
import { appSidebarData } from "@/data/appSidebarData";
import { SidebarTrigger } from "@/components/ui/sidebar";

const AppSidebar = () => {
  return (
    // <div className="w-64 h-screen bg-gray-800 text-white">
    //   <nav className="flex flex-col space-y-4 p-4">
    //     <Link to="/" className="text-xl hover:text-gray-400">Home</Link>
    //     <Link to="/about" className="text-xl hover:text-gray-400">About</Link>
    //   </nav>
    // </div>

    <Sidebar side='left' variant='sidebar' collapsible='icon'>
      {/* <SidebarHeader /> */}
      <SidebarTrigger />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Basic</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <Collapsible defaultOpen className='group/collapsible'>
                {appSidebarData.basic.map(item => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink to="/about">
                        <item.icon />
                        <span>{item.title}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </Collapsible>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <NavMain items={appSidebarData.navMain} />
        <NavSecondary items={appSidebarData.navSecondary} />
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
