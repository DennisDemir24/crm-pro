"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import { Home, Users, Calendar, User, HardHat } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const navigationItems = [
  {
    title: "Dashboard",
    icon: Home,
    href: "/",
  },
  {
    title: "Customers",
    icon: Users,
    href: "/customers",
  },
  {
    title: "Staff",
    icon: HardHat,
    href: "/staff",
  },
  {
    title: "Follow-ups",
    icon: Calendar,
    href: "/follow-ups",
    badge: 4,
  },
]

interface NavigationSidebarProps {
  className?: string
}

export function NavigationSidebar({ className }: NavigationSidebarProps) {
  const { state } = useSidebar()
  const pathname = usePathname()

  return (
    <Sidebar className={cn("border-r", className)}>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-semibold text-sm">
            S
          </div>
          {state === "expanded" && (
            <div className="flex flex-col">
              <span className="font-semibold text-sm">ServiceCRM Pro</span>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                    className={cn(
                      "w-full justify-start",
                      pathname === item.href && "!bg-blue-600 !text-white hover:!bg-blue-700"
                    )}
                  >
                    <a href={item.href} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      {state === "expanded" && (
                        <>
                          <span>{item.title}</span>
                          {item.badge && (
                            <Badge 
                              variant="secondary" 
                              className="ml-auto h-5 w-5 flex items-center justify-center p-0 text-xs"
                            >
                              {item.badge}
                            </Badge>
                          )}
                        </>
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src="" alt="John Doe" />
            <AvatarFallback className="bg-blue-600 text-white text-sm font-medium">
              JD
            </AvatarFallback>
          </Avatar>
          {state === "expanded" && (
            <div className="flex flex-col min-w-0">
              <span className="text-sm font-medium truncate">John Doe</span>
              <span className="text-xs text-muted-foreground truncate">Admin</span>
            </div>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}