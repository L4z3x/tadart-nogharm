export interface Member {
  id: string;
  name: string;
  email: string;
  phone: string;
  joinDate: string;
  status: 'active' | 'inactive' | 'pending';
  role: 'admin' | 'member' | 'volunteer';
  lastActivity: string;
  contributions: number;
  maritalStatus: 'single' | 'married' | 'divorced' | 'widowed';
  occupation: 'employed' | 'student' | 'unemployed' | 'retired';
  gender: 'male' | 'female';
}

export const mockMembers: Member[] = [
  {
    id: '1',
    name: 'أحمد محمد',
    email: 'ahmed@example.com',
    phone: '+966501234567',
    joinDate: '2023-01-15',
    status: 'active',
    role: 'admin',
    lastActivity: '2024-04-01',
    contributions: 12,
    maritalStatus: 'married',
    occupation: 'employed',
    gender: 'male'
  },
  {
    id: '2',
    name: 'سارة أحمد',
    email: 'sara@example.com',
    phone: '+966502345678',
    joinDate: '2023-02-20',
    status: 'active',
    role: 'member',
    lastActivity: '2024-03-28',
    contributions: 8,
    maritalStatus: 'single',
    occupation: 'student',
    gender: 'female'
  },
  {
    id: '3',
    name: 'محمد علي',
    email: 'mohammed@example.com',
    phone: '+966503456789',
    joinDate: '2023-03-10',
    status: 'inactive',
    role: 'member',
    lastActivity: '2023-12-15',
    contributions: 5,
    maritalStatus: 'divorced',
    occupation: 'employed',
    gender: 'male'
  },
  {
    id: '4',
    name: 'فاطمة حسن',
    email: 'fatima@example.com',
    phone: '+966504567890',
    joinDate: '2023-04-05',
    status: 'pending',
    role: 'volunteer',
    lastActivity: '2024-02-10',
    contributions: 3,
    maritalStatus: 'single',
    occupation: 'student',
    gender: 'female'
  },
  {
    id: '5',
    name: 'خالد عبدالله',
    email: 'khaled@example.com',
    phone: '+966505678901',
    joinDate: '2023-05-12',
    status: 'active',
    role: 'member',
    lastActivity: '2024-03-30',
    contributions: 7,
    maritalStatus: 'married',
    occupation: 'employed',
    gender: 'male'
  },
  {
    id: '6',
    name: 'نورا سعد',
    email: 'noura@example.com',
    phone: '+966506789012',
    joinDate: '2023-06-18',
    status: 'active',
    role: 'volunteer',
    lastActivity: '2024-04-02',
    contributions: 9,
    maritalStatus: 'widowed',
    occupation: 'retired',
    gender: 'female'
  },
  {
    id: '7',
    name: 'عبدالرحمن محمد',
    email: 'abdulrahman@example.com',
    phone: '+966507890123',
    joinDate: '2023-07-22',
    status: 'inactive',
    role: 'member',
    lastActivity: '2023-11-05',
    contributions: 4,
    maritalStatus: 'single',
    occupation: 'student',
    gender: 'male'
  },
  {
    id: '8',
    name: 'لمى أحمد',
    email: 'lama@example.com',
    phone: '+966508901234',
    joinDate: '2023-08-30',
    status: 'active',
    role: 'member',
    lastActivity: '2024-03-25',
    contributions: 6,
    maritalStatus: 'married',
    occupation: 'employed',
    gender: 'female'
  },
  {
    id: '9',
    name: 'ياسر علي',
    email: 'yasser@example.com',
    phone: '+966509012345',
    joinDate: '2023-09-14',
    status: 'pending',
    role: 'volunteer',
    lastActivity: '2024-01-20',
    contributions: 2,
    maritalStatus: 'single',
    occupation: 'unemployed',
    gender: 'male'
  },
  {
    id: '10',
    name: 'هناء محمد',
    email: 'haneen@example.com',
    phone: '+966510123456',
    joinDate: '2023-10-08',
    status: 'active',
    role: 'member',
    lastActivity: '2024-03-29',
    contributions: 10,
    maritalStatus: 'married',
    occupation: 'employed',
    gender: 'female'
  }
]; 