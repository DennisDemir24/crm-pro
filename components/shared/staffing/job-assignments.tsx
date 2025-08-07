"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Calendar, Clock, MapPin, User, AlertTriangle, CheckCircle, Users } from "lucide-react"
import { JobAssignment, Staff } from "@/types/staff"
import { cn } from "@/lib/utils"

interface JobAssignmentsProps {
  jobs: JobAssignment[]
  staff: Staff[]
}

export function JobAssignments({ jobs, staff }: JobAssignmentsProps) {
  const [selectedJob, setSelectedJob] = useState<JobAssignment | null>(null)
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [priorityFilter, setPriorityFilter] = useState<string>("all")

  const filteredJobs = jobs.filter(job => {
    const matchesStatus = statusFilter === "all" || job.status === statusFilter
    const matchesPriority = priorityFilter === "all" || job.priority === priorityFilter
    return matchesStatus && matchesPriority
  })

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'destructive'
      case 'high': return 'destructive'
      case 'medium': return 'default'
      case 'low': return 'secondary'
      default: return 'outline'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'outline'
      case 'assigned': return 'default'
      case 'in-progress': return 'secondary'
      case 'completed': return 'default'
      case 'cancelled': return 'destructive'
      default: return 'outline'
    }
  }

  const getAvailableStaffForJob = (job: JobAssignment) => {
    return staff.filter(member => {
      const isAvailable = member.availability.status === 'available'
      const hasRequiredSkills = job.requiredSkills.some(skill => 
        member.skills.some(memberSkill => 
          memberSkill.toLowerCase().includes(skill.toLowerCase())
        )
      )
      return isAvailable && hasRequiredSkills
    })
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="assigned">Assigned</SelectItem>
            <SelectItem value="in-progress">In Progress</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>
        <Select value={priorityFilter} onValueChange={setPriorityFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by priority" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Priority</SelectItem>
            <SelectItem value="urgent">Urgent</SelectItem>
            <SelectItem value="high">High</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="low">Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Jobs List */}
      <div className="space-y-4">
        {filteredJobs.map((job) => {
          const availableStaff = getAvailableStaffForJob(job)
          
          return (
            <Card key={job.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-lg">{job.jobTitle}</CardTitle>
                    <CardDescription>{job.customerName}</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant={getPriorityColor(job.priority)}>
                      {job.priority}
                    </Badge>
                    <Badge variant={getStatusColor(job.status)}>
                      {job.status.replace('-', ' ')}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{job.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{formatDate(job.scheduledDate)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{job.estimatedHours} hours</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{job.location}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-sm font-medium">Required Skills</div>
                  <div className="flex flex-wrap gap-1">
                    {job.requiredSkills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{availableStaff.length} available staff with required skills</span>
                  </div>
                  
                  {job.status === 'pending' && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          size="sm" 
                          onClick={() => setSelectedJob(job)}
                          disabled={availableStaff.length === 0}
                        >
                          Assign Staff
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Assign Staff to {job.jobTitle}</DialogTitle>
                          <DialogDescription>
                            Select staff members to assign to this job based on their skills and availability.
                          </DialogDescription>
                        </DialogHeader>
                        
                        <div className="space-y-4">
                          <div className="text-sm font-medium">
                            Available Staff ({availableStaff.length})
                          </div>
                          
                          <div className="grid gap-3 max-h-96 overflow-y-auto">
                            {availableStaff.map((member) => (
                              <div key={member.id} className="flex items-center justify-between p-3 border rounded-lg">
                                <div className="flex items-center space-x-3">
                                  <Avatar className="h-10 w-10">
                                    <AvatarImage src={member.profileImage} alt={member.name} />
                                    <AvatarFallback>
                                      {member.name.split(' ').map(n => n[0]).join('')}
                                    </AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <div className="font-medium">{member.name}</div>
                                    <div className="text-sm text-muted-foreground capitalize">
                                      {member.role} • ${member.hourlyRate}/hr
                                    </div>
                                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                                      <CheckCircle className="h-3 w-3" />
                                      <span>{member.rating} rating • {member.completedJobs} jobs</span>
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="text-right space-y-1">
                                  <div className="flex flex-wrap gap-1 justify-end">
                                    {member.skills.filter(skill => 
                                      job.requiredSkills.some(reqSkill => 
                                        skill.toLowerCase().includes(reqSkill.toLowerCase())
                                      )
                                    ).slice(0, 2).map((skill, index) => (
                                      <Badge key={index} variant="secondary" className="text-xs">
                                        {skill}
                                      </Badge>
                                    ))}
                                  </div>
                                  <Button size="sm" className="w-20">
                                    Assign
                                  </Button>
                                </div>
                              </div>
                            ))}
                          </div>
                          
                          {availableStaff.length === 0 && (
                            <div className="text-center py-8 text-muted-foreground">
                              <AlertTriangle className="h-12 w-12 mx-auto mb-4 opacity-50" />
                              <p>No available staff with required skills found.</p>
                            </div>
                          )}
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
      
      {filteredJobs.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          <CheckCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <p>No jobs found matching your criteria.</p>
        </div>
      )}
    </div>
  )
}