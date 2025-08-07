"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Clock, CheckCircle, AlertTriangle } from "lucide-react"
import { Staff, JobAssignment } from "@/types/staff"

interface StaffOverviewProps {
  staff: Staff[]
  jobs: JobAssignment[]
}

export function StaffOverview({ staff, jobs }: StaffOverviewProps) {
  const availableStaff = staff.filter(s => s.availability.status === 'available').length
  const busyStaff = staff.filter(s => s.availability.status === 'busy').length
  const pendingJobs = jobs.filter(j => j.status === 'pending').length
  const urgentJobs = jobs.filter(j => j.priority === 'urgent').length
  const averageRating = staff.reduce((acc, s) => acc + s.rating, 0) / staff.length

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Staff</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{staff.length}</div>
          <p className="text-xs text-muted-foreground">
            {availableStaff} available, {busyStaff} busy
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Pending Jobs</CardTitle>
          <Clock className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{pendingJobs}</div>
          <p className="text-xs text-muted-foreground">
            {urgentJobs > 0 && (
              <Badge variant="destructive" className="text-xs">
                {urgentJobs} urgent
              </Badge>
            )}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
          <CheckCircle className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{averageRating.toFixed(1)}</div>
          <p className="text-xs text-muted-foreground">
            Based on {staff.length} staff members
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Urgent Tasks</CardTitle>
          <AlertTriangle className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{urgentJobs}</div>
          <p className="text-xs text-muted-foreground">
            Require immediate attention
          </p>
        </CardContent>
      </Card>
    </div>
  )
}