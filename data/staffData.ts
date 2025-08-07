import { Staff, JobAssignment } from '../types/staff';

export const mockStaff: Staff[] = [
  {
    id: '1',
    name: 'Mike Johnson',
    email: 'mike.johnson@company.com',
    phone: '(555) 123-4567',
    role: 'electrician',
    skills: ['Residential Wiring', 'Commercial Electrical', 'Panel Installation', 'Troubleshooting'],
    certifications: ['Licensed Electrician', 'OSHA 30', 'Arc Flash Safety'],
    hourlyRate: 45,
    availability: {
      status: 'available',
      nextAvailable: '2024-01-15T08:00:00Z'
    },
    location: {
      current: 'Downtown District',
      preferredRadius: 25
    },
    experience: 8,
    rating: 4.8,
    completedJobs: 156,
    notes: 'Specializes in commercial electrical systems'
  },
  {
    id: '2',
    name: 'Sarah Chen',
    email: 'sarah.chen@company.com',
    phone: '(555) 234-5678',
    role: 'technician',
    skills: ['HVAC Repair', 'Electrical Troubleshooting', 'Preventive Maintenance', 'Equipment Installation'],
    certifications: ['EPA 608', 'NATE Certified', 'Electrical License'],
    hourlyRate: 42,
    availability: {
      status: 'busy',
      currentJob: 'Industrial HVAC Maintenance',
      nextAvailable: '2024-01-16T14:00:00Z'
    },
    location: {
      current: 'Industrial Park',
      preferredRadius: 30
    },
    experience: 6,
    rating: 4.9,
    completedJobs: 134,
    notes: 'Expert in industrial HVAC systems'
  },
  {
    id: '3',
    name: 'David Rodriguez',
    email: 'david.rodriguez@company.com',
    phone: '(555) 345-6789',
    role: 'consultant',
    skills: ['Project Management', 'Electrical Design', 'Code Compliance', 'Cost Estimation'],
    certifications: ['PE License', 'PMP', 'LEED AP'],
    hourlyRate: 75,
    availability: {
      status: 'available',
      nextAvailable: '2024-01-15T09:00:00Z'
    },
    location: {
      current: 'Business District',
      preferredRadius: 50
    },
    experience: 12,
    rating: 4.7,
    completedJobs: 89,
    notes: 'Specializes in large commercial projects'
  },
  {
    id: '4',
    name: 'Lisa Thompson',
    email: 'lisa.thompson@company.com',
    phone: '(555) 456-7890',
    role: 'operator',
    skills: ['Machine Operation', 'Quality Control', 'Safety Protocols', 'Equipment Maintenance'],
    certifications: ['Forklift Certified', 'Safety Training', 'ISO 9001'],
    hourlyRate: 28,
    availability: {
      status: 'available',
      nextAvailable: '2024-01-15T06:00:00Z'
    },
    location: {
      current: 'Manufacturing District',
      preferredRadius: 20
    },
    experience: 4,
    rating: 4.6,
    completedJobs: 203,
    notes: 'Reliable and detail-oriented operator'
  },
  {
    id: '5',
    name: 'James Wilson',
    email: 'james.wilson@company.com',
    phone: '(555) 567-8901',
    role: 'supervisor',
    skills: ['Team Leadership', 'Project Coordination', 'Safety Management', 'Quality Assurance'],
    certifications: ['Supervisor Certification', 'OSHA 30', 'First Aid/CPR'],
    hourlyRate: 55,
    availability: {
      status: 'on-leave',
      nextAvailable: '2024-01-20T08:00:00Z'
    },
    location: {
      current: 'Central Office',
      preferredRadius: 40
    },
    experience: 10,
    rating: 4.8,
    completedJobs: 78,
    notes: 'Experienced in managing large teams'
  },
  {
    id: '6',
    name: 'Emma Davis',
    email: 'emma.davis@company.com',
    phone: '(555) 678-9012',
    role: 'electrician',
    skills: ['Residential Service', 'Smart Home Installation', 'Solar Systems', 'EV Charging'],
    certifications: ['Licensed Electrician', 'Solar Installation', 'Tesla Certified'],
    hourlyRate: 48,
    availability: {
      status: 'available',
      nextAvailable: '2024-01-15T10:00:00Z'
    },
    location: {
      current: 'Suburban Area',
      preferredRadius: 35
    },
    experience: 5,
    rating: 4.9,
    completedJobs: 112,
    notes: 'Specializes in modern electrical solutions'
  }
];

export const mockJobs: JobAssignment[] = [
  {
    id: '1',
    jobTitle: 'Emergency Electrical Repair',
    customerId: '1',
    customerName: 'ABC Manufacturing',
    description: 'Power outage in main production line. Requires immediate attention.',
    priority: 'urgent',
    estimatedHours: 4,
    requiredSkills: ['Electrical Troubleshooting', 'Commercial Electrical'],
    location: 'Industrial Park',
    scheduledDate: '2024-01-15T08:00:00Z',
    status: 'pending'
  },
  {
    id: '2',
    jobTitle: 'HVAC System Maintenance',
    customerId: '2',
    customerName: 'Downtown Office Complex',
    description: 'Quarterly maintenance check for building HVAC systems.',
    priority: 'medium',
    estimatedHours: 6,
    requiredSkills: ['HVAC Repair', 'Preventive Maintenance'],
    location: 'Downtown District',
    scheduledDate: '2024-01-16T09:00:00Z',
    status: 'pending'
  },
  {
    id: '3',
    jobTitle: 'Smart Home Installation',
    customerId: '3',
    customerName: 'Johnson Residence',
    description: 'Install smart switches, outlets, and home automation system.',
    priority: 'low',
    estimatedHours: 8,
    requiredSkills: ['Smart Home Installation', 'Residential Wiring'],
    location: 'Suburban Area',
    scheduledDate: '2024-01-17T10:00:00Z',
    status: 'pending'
  }
];