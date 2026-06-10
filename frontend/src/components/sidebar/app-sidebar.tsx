"use server";

import { UserButton } from "@daveyplate/better-auth-ui";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "../ui/sidebar";
import { User, Mic, Settings } from "lucide-react";
import Link from "next/link";
import SidebarMenuItems from "./sidebar-menu-items";
import MobileSidebarClose from "./mobile-sidebar-close";
import Credits from "./credits";
import Upgrade from "./upgrade";

export default async function AppSidebar() {
  return (
    <Sidebar className="border-r border-stone-200 bg-white">
      <SidebarContent className="px-3">
        <MobileSidebarClose />
        <SidebarGroup>
          <SidebarGroupLabel className="mt-6 mb-8 flex flex-col items-start justify-start px-2">
            <Link
              href="/"
              className="mb-1 flex cursor-pointer items-center gap-2.5"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-stone-900">
                <Mic className="h-4 w-4 text-white" />
              </div>
              <p className="text-lg font-semibold tracking-tight text-stone-900">
                Vokl
              </p>
            </Link>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              <SidebarMenuItems />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-muted/30 border-t p-3">
        <div className="mb-3 flex w-full items-center justify-center gap-2 text-xs">
          <Credits />
          <Upgrade />
        </div>
        <UserButton
          variant="outline"
          className="border-muted-foreground/20 hover:border-primary/50 w-full transition-colors"
          disableDefaultLinks={true}
          additionalLinks={[
            {
              label: "Customer Portal",
              href: "/dashboard/customer-portal",
              icon: <User className="h-4 w-4" />,
            },
            {
              label: "Settings",
              href: "/dashboard/settings",
              icon: <Settings className="h-4 w-4" />,
            },
          ]}
        />
      </SidebarFooter>
    </Sidebar>
  );
}
