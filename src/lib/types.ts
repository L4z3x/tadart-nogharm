export interface Member {
  id: string;
  associationId: string;
  name: string;
  email: string;
  phone: string;
  joinDate: string;
  status: 'active' | 'inactive' | 'pending';
  financialStatus: 'poor' | 'rich';
  lastActivity: string;
  role: 'admin' | 'member' | 'volunteer';
  contributions: number;
  maritalStatus: 'single' | 'married' | 'divorced' | 'widowed';
  occupation: 'employed' | 'student' | 'unemployed' | 'retired';
  gender: 'male' | 'female';
}

export interface Association {
  id: string;
  name: string;
  description: string;
  logo: string;
  banner: string;
  foundingDate: string;
  status: 'active' | 'inactive' | 'pending';
  address: string;
  phone: string;
  email: string;
  website: string;
  socialMedia: {
    twitter: string;
    facebook: string;
    instagram: string;
  };
  membersCount: number;
  totalContributions: number;
  categories: string[];
  goals: string[];
  activities: {
    id: number;
    title: string;
    description: string;
    date: string;
  }[];
}

export interface Data {
  associations: Association[];
  members: Member[];
} 