export interface ClassMember {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  ssn: string;
  dateOfBirth: string;
  caseId: number;
}

// Case 1 Data
const CASE_1_DATA: ClassMember[] = [
  {
    id: '1-1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(555) 123-4567',
    address: '123 Main Street',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    ssn: '***-**-1234',
    dateOfBirth: '1985-05-15',
    caseId: 1,
  },
  {
    id: '1-2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '(555) 234-5678',
    address: '456 Oak Avenue',
    city: 'Los Angeles',
    state: 'CA',
    zipCode: '90001',
    ssn: '***-**-2345',
    dateOfBirth: '1990-08-22',
    caseId: 1,
  },
  {
    id: '1-3',
    name: 'Robert Johnson',
    email: 'robert.johnson@example.com',
    phone: '(555) 345-6789',
    address: '789 Pine Road',
    city: 'Chicago',
    state: 'IL',
    zipCode: '60601',
    ssn: '***-**-3456',
    dateOfBirth: '1988-12-10',
    caseId: 1,
  },
  {
    id: '1-4',
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    phone: '(555) 456-7890',
    address: '321 Elm Street',
    city: 'Houston',
    state: 'TX',
    zipCode: '77001',
    ssn: '***-**-4567',
    dateOfBirth: '1992-03-25',
    caseId: 1,
  },
  {
    id: '1-5',
    name: 'Michael Brown',
    email: 'michael.brown@example.com',
    phone: '(555) 567-8901',
    address: '654 Maple Drive',
    city: 'Phoenix',
    state: 'AZ',
    zipCode: '85001',
    ssn: '***-**-5678',
    dateOfBirth: '1987-07-18',
    caseId: 1,
  },
];

// Case 2 Data
const CASE_2_DATA: ClassMember[] = [
  {
    id: '2-1',
    name: 'Sarah Wilson',
    email: 'sarah.wilson@example.com',
    phone: '(555) 678-9012',
    address: '987 Cedar Lane',
    city: 'Philadelphia',
    state: 'PA',
    zipCode: '19101',
    ssn: '***-**-6789',
    dateOfBirth: '1991-11-30',
    caseId: 2,
  },
  {
    id: '2-2',
    name: 'David Martinez',
    email: 'david.martinez@example.com',
    phone: '(555) 789-0123',
    address: '147 Birch Boulevard',
    city: 'San Antonio',
    state: 'TX',
    zipCode: '78201',
    ssn: '***-**-7890',
    dateOfBirth: '1989-04-12',
    caseId: 2,
  },
  {
    id: '2-3',
    name: 'Lisa Anderson',
    email: 'lisa.anderson@example.com',
    phone: '(555) 890-1234',
    address: '258 Spruce Court',
    city: 'San Diego',
    state: 'CA',
    zipCode: '92101',
    ssn: '***-**-8901',
    dateOfBirth: '1993-09-05',
    caseId: 2,
  },
];

// Case 3 Data
const CASE_3_DATA: ClassMember[] = [
  {
    id: '3-1',
    name: 'James Taylor',
    email: 'james.taylor@example.com',
    phone: '(555) 901-2345',
    address: '369 Willow Way',
    city: 'Dallas',
    state: 'TX',
    zipCode: '75201',
    ssn: '***-**-9012',
    dateOfBirth: '1986-01-20',
    caseId: 3,
  },
  {
    id: '3-2',
    name: 'Amanda White',
    email: 'amanda.white@example.com',
    phone: '(555) 012-3456',
    address: '741 Ash Street',
    city: 'San Jose',
    state: 'CA',
    zipCode: '95101',
    ssn: '***-**-0123',
    dateOfBirth: '1994-06-14',
    caseId: 3,
  },
  {
    id: '3-3',
    name: 'Christopher Lee',
    email: 'christopher.lee@example.com',
    phone: '(555) 111-2222',
    address: '852 Oak Street',
    city: 'Austin',
    state: 'TX',
    zipCode: '78701',
    ssn: '***-**-1111',
    dateOfBirth: '1984-02-28',
    caseId: 3,
  },
  {
    id: '3-4',
    name: 'Jessica Garcia',
    email: 'jessica.garcia@example.com',
    phone: '(555) 222-3333',
    address: '963 Pine Avenue',
    city: 'Miami',
    state: 'FL',
    zipCode: '33101',
    ssn: '***-**-2222',
    dateOfBirth: '1995-10-08',
    caseId: 3,
  },
];

// Case 4 Data
const CASE_4_DATA: ClassMember[] = [
  {
    id: '4-1',
    name: 'Daniel Rodriguez',
    email: 'daniel.rodriguez@example.com',
    phone: '(555) 333-4444',
    address: '159 Elm Drive',
    city: 'Seattle',
    state: 'WA',
    zipCode: '98101',
    ssn: '***-**-3333',
    dateOfBirth: '1983-07-22',
    caseId: 4,
  },
  {
    id: '4-2',
    name: 'Michelle Thompson',
    email: 'michelle.thompson@example.com',
    phone: '(555) 444-5555',
    address: '357 Maple Court',
    city: 'Boston',
    state: 'MA',
    zipCode: '02101',
    ssn: '***-**-4444',
    dateOfBirth: '1996-12-15',
    caseId: 4,
  },
];

// Case 5 Data
const CASE_5_DATA: ClassMember[] = [
  {
    id: '5-1',
    name: 'Ryan Moore',
    email: 'ryan.moore@example.com',
    phone: '(555) 555-6666',
    address: '741 Cedar Boulevard',
    city: 'Denver',
    state: 'CO',
    zipCode: '80201',
    ssn: '***-**-5555',
    dateOfBirth: '1982-09-03',
    caseId: 5,
  },
  {
    id: '5-2',
    name: 'Nicole Jackson',
    email: 'nicole.jackson@example.com',
    phone: '(555) 666-7777',
    address: '852 Birch Lane',
    city: 'Portland',
    state: 'OR',
    zipCode: '97201',
    ssn: '***-**-6666',
    dateOfBirth: '1997-04-19',
    caseId: 5,
  },
  {
    id: '5-3',
    name: 'Kevin Harris',
    email: 'kevin.harris@example.com',
    phone: '(555) 777-8888',
    address: '963 Willow Road',
    city: 'Nashville',
    state: 'TN',
    zipCode: '37201',
    ssn: '***-**-7777',
    dateOfBirth: '1981-11-27',
    caseId: 5,
  },
  {
    id: '5-4',
    name: 'Rachel Clark',
    email: 'rachel.clark@example.com',
    phone: '(555) 888-9999',
    address: '147 Spruce Way',
    city: 'Atlanta',
    state: 'GA',
    zipCode: '30301',
    ssn: '***-**-8888',
    dateOfBirth: '1998-08-11',
    caseId: 5,
  },
  {
    id: '5-5',
    name: 'Thomas Lewis',
    email: 'thomas.lewis@example.com',
    phone: '(555) 999-0000',
    address: '258 Ash Court',
    city: 'Detroit',
    state: 'MI',
    zipCode: '48201',
    ssn: '***-**-9999',
    dateOfBirth: '1980-05-30',
    caseId: 5,
  },
];

// Map case IDs to their data
export const CASE_DATA_MAP: Record<number, ClassMember[]> = {
  1: CASE_1_DATA,
  2: CASE_2_DATA,
  3: CASE_3_DATA,
  4: CASE_4_DATA,
  5: CASE_5_DATA,
};

// Helper function to get data for a case
export const getCaseData = (caseId: number | null): ClassMember[] => {
  if (!caseId) return [];
  return CASE_DATA_MAP[caseId] || [];
};

