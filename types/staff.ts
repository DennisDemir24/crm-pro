export interface Staff {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'electrician' | 'technician' | 'operator' | 'consultant' | 'supervisor';
  skills: string[];
  certifications: string[];
  hourlyRate: number;
  availability: {
    status: 'available' | 'busy' | 'off-duty' | 'on-leave';
    currentJob?: string;
    nextAvailable?: string;
  };
  location: {
    current: string;
    preferredRadius: number; // in miles
  };
  experience: number; // years
  rating: number; // 1-5 stars
  completedJobs: number;
  profileImage?: string;
  notes?: string;
}

export interface JobAssignment {
  id: string;
  jobTitle: string;
  customerId: string;
  customerName: string;
  description: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  estimatedHours: number;
  requiredSkills: string[];
  location: string;
  scheduledDate: string;
  status: 'pending' | 'assigned' | 'in-progress' | 'completed' | 'cancelled';
  assignedStaff?: string[];
}