export interface Association {
  id: number;
  name: string;
  banner: string;
  activities: Activity[];
}

export interface Activity {
  id: number;
  title: string;
  description: string;
  date: string;
  associationId: number;
}

export interface UserProfile {
  id: number;
  name: string;
  associationId: number;
  fields: {
    [key: string]: {
      value: string;
      private: boolean;
    };
  };
}

export interface AccessRequest {
  id: number;
  userId: number;
  associationId: number;
  status: 'pending' | 'approved' | 'rejected';
  requestedAt: string;
}

// Mock data
const mockAssociations: Association[] = [
  {
    id: 1,
    name: "مؤسسة الصحة",
    banner: "health.jpg",
    activities: [
      {
        id: 1,
        title: "حملة التوعية الصحية",
        description: "برنامج توعية صحي للمجتمع",
        date: "2024-03-15",
        associationId: 1
      }
    ]
  },
  {
    id: 2,
    name: "تحالف التعليم",
    banner: "edu.jpg",
    activities: [
      {
        id: 2,
        title: "برنامج محو الأمية",
        description: "دروس محو الأمية للكبار",
        date: "2024-03-20",
        associationId: 2
      }
    ]
  }
];

const mockUserProfiles: UserProfile[] = [
  {
    id: 1,
    name: "عشيرة ال بنورة",
    associationId: 1,
    fields: {
      married: { value: "متزوج", private: true },
      job: { value: "مهندس", private: false }
    }
  },
  {
    id: 2,
    name: "عشيرة ال بنورة",
    associationId: 2,
    fields: {
      married: { value: "غير متزوجة", private: true },
      job: { value: "معلمة", private: false }
    }
  },
  {
    id: 3,
    name: "مكتب الطلبة",
    associationId: 3,
    fields: {
      married: { value: "غير متزوجة", private: true },
      job: { value: "معلمة", private: false },
      address: { value: "القاهرة", private: false },
      phone: { value: "01234567890", private: false }
    }
  }
];

const mockAccessRequests: AccessRequest[] = [
  {
    id: 1,
    userId: 1,
    associationId: 2,
    status: 'pending',
    requestedAt: '2024-03-10T10:00:00Z'
  }
];

// API functions
export async function fetchAssociations(): Promise<Association[]> {
  return mockAssociations;
}

export async function fetchUserProfiles(): Promise<UserProfile[]> {
  return mockUserProfiles;
}

export async function fetchAccessRequests(): Promise<AccessRequest[]> {
  return mockAccessRequests;
}

export async function fetchAssociationById(id: number): Promise<Association | null> {
  return mockAssociations.find(assoc => assoc.id === id) || null;
}

export async function fetchUserProfileById(id: number): Promise<UserProfile | null> {
  return mockUserProfiles.find(profile => profile.id === id) || null;
} 