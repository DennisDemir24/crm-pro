"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Star, Clock, User } from "lucide-react"
import { Staff } from "@/types/staff"
import { cn } from "@/lib/utils"

interface StaffListProps {
  staff: Staff[]
  selectedStaffId: string | null
  onSelectStaff: (staffId: string | null) => void
}

export function StaffList({ staff, selectedStaffId, onSelectStaff }: StaffListProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [roleFilter, setRoleFilter] = useState<string>("all")
  const [statusFilter, setStatusFilter] = useState<string>("all")

  const filteredStaff = staff.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesRole = roleFilter === "all" || member.role === roleFilter
    const matchesStatus = statusFilter === "all" || member.availability.status === statusFilter
    
    return matchesSearch && matchesRole && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-500'
      case 'busy': return 'bg-yellow-500'
      case 'off-duty': return 'bg-gray-500'
      case 'on-leave': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'available': return 'default'
      case 'busy': return 'secondary'
      case 'off-duty': return 'outline'
      case 'on-leave': return 'destructive'
      default: return 'outline'
    }
  }

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Input
          placeholder="Search staff by name or skills..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1"
        />
        <Select value={roleFilter} onValueChange={setRoleFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Roles</SelectItem>
            <SelectItem value="electrician">Electrician</SelectItem>
            <SelectItem value="technician">Technician</SelectItem>
            <SelectItem value="operator">Operator</SelectItem>
            <SelectItem value="consultant">Consultant</SelectItem>
            <SelectItem value="supervisor">Supervisor</SelectItem>
          </SelectContent>
        </Select>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="available">Available</SelectItem>
            <SelectItem value="busy">Busy</SelectItem>
            <SelectItem value="off-duty">Off Duty</SelectItem>
            <SelectItem value="on-leave">On Leave</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Staff Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredStaff.map((member) => (
          <Card 
            key={member.id} 
            className={cn(
              "cursor-pointer transition-all hover:shadow-md",
              selectedStaffId === member.id && "ring-2 ring-primary"
            )}
            onClick={() => onSelectStaff(selectedStaffId === member.id ? null : member.id)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={member.profileImage} alt={member.name} />
                      <AvatarFallback>
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className={cn(
                      "absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-white",
                      getStatusColor(member.availability.status)
                    )} />
                  </div>
                  <div>
                    <CardTitle className="text-base">{member.name}</CardTitle>
                    <CardDescription className="capitalize">{member.role}</CardDescription>
                  </div>
                </div>
                <Badge variant={getStatusBadgeVariant(member.availability.status)} className="text-xs">
                  {member.availability.status.replace('-', ' ')}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{member.rating}</span>
                </div>
                <div className="flex items-center space-x-1 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{member.experience}y exp</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span className="truncate">{member.email}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>{member.phone}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span className="truncate">{member.location.current}</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-sm font-medium">Skills</div>
                <div className="flex flex-wrap gap-1">
                  {member.skills.slice(0, 3).map((skill, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {member.skills.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{member.skills.length - 3} more
                    </Badge>
                  )}
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-2">
                <span className="text-sm font-medium">${member.hourlyRate}/hr</span>
                <span className="text-sm text-muted-foreground">
                  {member.completedJobs} jobs completed
                </span>
              </div>
              
              {member.availability.status === 'busy' && member.availability.currentJob && (
                <div className="text-xs text-muted-foreground bg-muted p-2 rounded">
                  Current: {member.availability.currentJob}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      
      {filteredStaff.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          <User className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <p>No staff members found matching your criteria.</p>
        </div>
      )}
    </div>
  )
}