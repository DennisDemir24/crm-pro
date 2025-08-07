export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  industry: 'electrical' | 'manufacturing' | 'snow-plowing' | 'repair-shop';
  status: 'active' | 'inactive' | 'prospect';
  totalRevenue: number;
  lastContact: string;
  nextFollowUp?: string;
  serviceHistory: ServiceRecord[];
  interactions: Interaction[];
  followUps: FollowUp[];
  notes?: string;
  priority: 'low' | 'medium' | 'high';
  tags: string[];
}

export interface ServiceRecord {
  id: string;
  date: string;
  type: string;
  description: string;
  technician: string;
  status: 'completed' | 'scheduled' | 'in-progress' | 'cancelled';
  cost: number;
  duration: number; // in hours
  materials?: string[];
  notes?: string;
}

export interface Interaction {
  id: string;
  date: string;
  type: 'call' | 'email' | 'meeting' | 'service' | 'quote' | 'complaint' | 'follow-up';
  subject: string;
  description: string;
  outcome?: string;
  nextAction?: string;
  staff: string;
}

export interface FollowUp {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: 'low' | 'medium' | 'high';
  status: 'pending' | 'completed' | 'overdue';
  type: 'call' | 'email' | 'visit' | 'quote' | 'maintenance';
  assignedTo: string;
  createdDate: string;
  completedDate?: string;
  notes?: string;
}