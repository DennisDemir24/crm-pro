import { Customer } from '../types/customer';

export const mockCustomers: Customer[] = [
  {
    id: '1',
    name: 'ABC Manufacturing Corp',
    email: 'contact@abcmanufacturing.com',
    phone: '(555) 123-4567',
    address: {
      street: '123 Industrial Blvd',
      city: 'Detroit',
      state: 'MI',
      zipCode: '48201'
    },
    industry: 'manufacturing',
    status: 'active',
    totalRevenue: 45000,
    lastContact: '2024-01-10',
    nextFollowUp: '2024-01-20',
    priority: 'high',
    tags: ['VIP', 'Large Account', 'Monthly Service'],
    serviceHistory: [
      {
        id: '1',
        date: '2024-01-05',
        type: 'Electrical Maintenance',
        description: 'Quarterly electrical system inspection and maintenance',
        technician: 'Mike Johnson',
        status: 'completed',
        cost: 2500,
        duration: 8,
        materials: ['Circuit breakers', 'Electrical panels', 'Wiring'],
        notes: 'All systems functioning properly. Recommended upgrade for Panel B.'
      },
      {
        id: '2',
        date: '2024-01-15',
        type: 'Equipment Repair',
        description: 'Repair conveyor belt motor',
        technician: 'Sarah Chen',
        status: 'scheduled',
        cost: 1200,
        duration: 4
      }
    ],
    interactions: [
      {
        id: '1',
        date: '2024-01-10',
        type: 'call',
        subject: 'Quarterly Service Check-in',
        description: 'Discussed upcoming maintenance schedule and budget planning',
        outcome: 'Approved additional electrical panel upgrade',
        nextAction: 'Schedule panel upgrade for February',
        staff: 'John Smith'
      },
      {
        id: '2',
        date: '2024-01-08',
        type: 'service',
        subject: 'Electrical Maintenance Completed',
        description: 'Completed quarterly electrical inspection',
        outcome: 'All systems operational, upgrade recommended',
        staff: 'Mike Johnson'
      }
    ],
    followUps: [
      {
        id: '1',
        title: 'Schedule Panel B Upgrade',
        description: 'Customer approved electrical panel upgrade for Panel B',
        dueDate: '2024-01-20',
        priority: 'high',
        status: 'pending',
        type: 'quote',
        assignedTo: 'Mike Johnson',
        createdDate: '2024-01-10'
      }
    ],
    notes: 'Long-term client with consistent monthly service needs. Always pays on time.'
  },
  {
    id: '2',
    name: 'Downtown Office Complex',
    email: 'maintenance@downtownoffice.com',
    phone: '(555) 234-5678',
    address: {
      street: '456 Business Ave',
      city: 'Chicago',
      state: 'IL',
      zipCode: '60601'
    },
    industry: 'electrical',
    status: 'active',
    totalRevenue: 28000,
    lastContact: '2024-01-12',
    nextFollowUp: '2024-01-25',
    priority: 'medium',
    tags: ['Commercial', 'HVAC'],
    serviceHistory: [
      {
        id: '3',
        date: '2024-01-12',
        type: 'HVAC Service',
        description: 'Building-wide HVAC system maintenance',
        technician: 'David Rodriguez',
        status: 'completed',
        cost: 3200,
        duration: 12,
        materials: ['Filters', 'Belts', 'Refrigerant'],
        notes: 'Replaced filters on all floors. System running efficiently.'
      }
    ],
    interactions: [
      {
        id: '3',
        date: '2024-01-12',
        type: 'service',
        subject: 'HVAC Maintenance Completed',
        description: 'Annual HVAC system maintenance and inspection',
        outcome: 'All systems operational',
        staff: 'David Rodriguez'
      }
    ],
    followUps: [
      {
        id: '2',
        title: 'Summer HVAC Prep',
        description: 'Schedule pre-summer HVAC system check',
        dueDate: '2024-01-25',
        priority: 'medium',
        status: 'pending',
        type: 'maintenance',
        assignedTo: 'David Rodriguez',
        createdDate: '2024-01-12'
      }
    ],
    notes: 'Prefers early morning service calls to minimize tenant disruption.'
  },
  {
    id: '3',
    name: 'Johnson Residence',
    email: 'mike.johnson.home@email.com',
    phone: '(555) 345-6789',
    address: {
      street: '789 Maple Street',
      city: 'Suburbs',
      state: 'OH',
      zipCode: '44101'
    },
    industry: 'electrical',
    status: 'active',
    totalRevenue: 8500,
    lastContact: '2024-01-08',
    nextFollowUp: '2024-02-01',
    priority: 'low',
    tags: ['Residential', 'Smart Home'],
    serviceHistory: [
      {
        id: '4',
        date: '2024-01-08',
        type: 'Smart Home Installation',
        description: 'Install smart switches and outlets throughout house',
        technician: 'Emma Davis',
        status: 'completed',
        cost: 2800,
        duration: 6,
        materials: ['Smart switches', 'Smart outlets', 'Hub'],
        notes: 'Customer very satisfied with installation. Interested in security system.'
      }
    ],
    interactions: [
      {
        id: '4',
        date: '2024-01-08',
        type: 'service',
        subject: 'Smart Home Installation',
        description: 'Completed smart switch and outlet installation',
        outcome: 'Customer satisfied, interested in security upgrade',
        nextAction: 'Follow up about security system in 3 weeks',
        staff: 'Emma Davis'
      }
    ],
    followUps: [
      {
        id: '3',
        title: 'Security System Follow-up',
        description: 'Customer expressed interest in smart security system',
        dueDate: '2024-02-01',
        priority: 'low',
        status: 'pending',
        type: 'quote',
        assignedTo: 'Emma Davis',
        createdDate: '2024-01-08'
      }
    ],
    notes: 'Tech-savvy homeowner interested in latest smart home technology.'
  },
  {
    id: '4',
    name: 'City Snow Removal Services',
    email: 'operations@citysnow.com',
    phone: '(555) 456-7890',
    address: {
      street: '321 Winter Road',
      city: 'Buffalo',
      state: 'NY',
      zipCode: '14201'
    },
    industry: 'snow-plowing',
    status: 'active',
    totalRevenue: 15000,
    lastContact: '2024-01-14',
    priority: 'high',
    tags: ['Seasonal', 'Equipment Rental'],
    serviceHistory: [
      {
        id: '5',
        date: '2024-01-14',
        type: 'Equipment Maintenance',
        description: 'Pre-season plow truck maintenance and inspection',
        technician: 'James Wilson',
        status: 'completed',
        cost: 1800,
        duration: 5,
        materials: ['Hydraulic fluid', 'Plow blades', 'Salt spreader parts'],
        notes: 'All equipment ready for winter season. Backup truck needs tire replacement.'
      }
    ],
    interactions: [
      {
        id: '5',
        date: '2024-01-14',
        type: 'service',
        subject: 'Equipment Maintenance',
        description: 'Completed pre-season equipment check',
        outcome: 'Fleet ready, backup truck needs tires',
        nextAction: 'Schedule tire replacement',
        staff: 'James Wilson'
      }
    ],
    followUps: [
      {
        id: '4',
        title: 'Backup Truck Tire Replacement',
        description: 'Replace tires on backup plow truck',
        dueDate: '2024-01-18',
        priority: 'high',
        status: 'pending',
        type: 'maintenance',
        assignedTo: 'James Wilson',
        createdDate: '2024-01-14'
      }
    ],
    notes: 'Seasonal client. Critical to have equipment ready before first snowfall.'
  },
  {
    id: '5',
    name: 'Pete\'s Auto Repair',
    email: 'pete@petesauto.com',
    phone: '(555) 567-8901',
    address: {
      street: '654 Garage Lane',
      city: 'Phoenix',
      state: 'AZ',
      zipCode: '85001'
    },
    industry: 'repair-shop',
    status: 'prospect',
    totalRevenue: 0,
    lastContact: '2024-01-11',
    nextFollowUp: '2024-01-18',
    priority: 'medium',
    tags: ['New Lead', 'Electrical Upgrade'],
    serviceHistory: [],
    interactions: [
      {
        id: '6',
        date: '2024-01-11',
        type: 'quote',
        subject: 'Shop Electrical Upgrade Quote',
        description: 'Provided quote for upgrading shop electrical system',
        outcome: 'Quote delivered, customer reviewing',
        nextAction: 'Follow up in one week',
        staff: 'Mike Johnson'
      }
    ],
    followUps: [
      {
        id: '5',
        title: 'Quote Follow-up',
        description: 'Follow up on electrical upgrade quote',
        dueDate: '2024-01-18',
        priority: 'medium',
        status: 'pending',
        type: 'call',
        assignedTo: 'Mike Johnson',
        createdDate: '2024-01-11'
      }
    ],
    notes: 'New prospect. Needs electrical upgrade to support new equipment. Price-sensitive.'
  },
  {
    id: '6',
    name: 'Riverside Manufacturing',
    email: 'facilities@riverside-mfg.com',
    phone: '(555) 678-9012',
    address: {
      street: '987 River Road',
      city: 'Portland',
      state: 'OR',
      zipCode: '97201'
    },
    industry: 'manufacturing',
    status: 'inactive',
    totalRevenue: 32000,
    lastContact: '2023-11-15',
    priority: 'low',
    tags: ['Former Client', 'Reactivation Target'],
    serviceHistory: [
      {
        id: '6',
        date: '2023-11-15',
        type: 'Emergency Repair',
        description: 'Emergency electrical repair after power surge',
        technician: 'Mike Johnson',
        status: 'completed',
        cost: 4500,
        duration: 10,
        materials: ['Circuit breakers', 'Surge protectors', 'Wiring'],
        notes: 'Resolved power surge damage. Recommended surge protection upgrade.'
      }
    ],
    interactions: [
      {
        id: '7',
        date: '2023-11-15',
        type: 'service',
        subject: 'Emergency Repair Completed',
        description: 'Resolved electrical issues from power surge',
        outcome: 'Systems restored, surge protection recommended',
        staff: 'Mike Johnson'
      }
    ],
    followUps: [
      {
        id: '6',
        title: 'Reactivation Outreach',
        description: 'Reach out to former client for potential new business',
        dueDate: '2024-01-22',
        priority: 'low',
        status: 'pending',
        type: 'call',
        assignedTo: 'John Smith',
        createdDate: '2024-01-15'
      }
    ],
    notes: 'Former regular client. Lost contact after management change. Worth reactivating.'
  }
];