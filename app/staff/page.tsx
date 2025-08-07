"use client"

import { StaffDashboard } from "@/components/shared/staffing/staff-dashboard"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { NavigationSidebar } from "@/components/shared/navigation-sidebar"

export default function StaffPage() {
  return (
    <SidebarProvider>
      <NavigationSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <div className="flex flex-1 items-center gap-2">
            <h1 className="text-lg font-semibold">Staff Management</h1>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <StaffDashboard />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}