"use client"

import { useState } from "react"
import { StaffOverview } from "./staff-overview"
import { StaffList } from "./staff-list"
import { JobAssignments } from "./job-assignments"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { mockStaff, mockJobs } from "@/data/staffData"

export function StaffDashboard() {
  const [selectedStaffId, setSelectedStaffId] = useState<string | null>(null)

  return (
    <div className="space-y-6">
      <StaffOverview staff={mockStaff} jobs={mockJobs} />
      
      <Tabs defaultValue="staff" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="staff">Staff Members</TabsTrigger>
          <TabsTrigger value="jobs">Job Assignments</TabsTrigger>
        </TabsList>
        
        <TabsContent value="staff" className="space-y-4">
          <StaffList 
            staff={mockStaff} 
            selectedStaffId={selectedStaffId}
            onSelectStaff={setSelectedStaffId}
          />
        </TabsContent>
        
        <TabsContent value="jobs" className="space-y-4">
          <JobAssignments jobs={mockJobs} staff={mockStaff} />
        </TabsContent>
      </Tabs>
    </div>
  )
}