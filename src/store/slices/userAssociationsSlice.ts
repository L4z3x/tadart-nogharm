import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserAssociationInfo {
  id: number;
  role: string;
  join_date: string;
  status: string;
  activities_participated: number;
  upcoming_events: number;
  achievements: string[];
}

interface UserAssociationsState {
  data: {
    [associationId: number]: UserAssociationInfo;
  };
  loading: boolean;
  error: string | null;
}

const initialState: UserAssociationsState = {
  data: {
    1: {
      id: 1,
      role: 'عضو نشط',
      join_date: '2024-01-15',
      status: 'نشط',
      activities_participated: 5,
      upcoming_events: 2,
      achievements: [
        'مشارك في حملة تنظيف الشاطئ',
        'متطوع في اليوم العالمي للبيئة',
        'منسق فعالية اليوم المفتوح'
      ]
    },
    2: {
      id: 2,
      role: 'عضو مجلس الإدارة',
      join_date: '2023-11-20',
      status: 'نشط',
      activities_participated: 12,
      upcoming_events: 3,
      achievements: [
        'رئيس لجنة الأنشطة',
        'منظم معرض الكتاب السنوي',
        'مشرف على برنامج التطوع الصيفي'
      ]
    },
    3: {
      id: 3,
      role: 'متطوع',
      join_date: '2024-02-10',
      status: 'نشط',
      activities_participated: 3,
      upcoming_events: 1,
      achievements: [
        'مشارك في حملة التوعية الصحية',
        'متطوع في اليوم العالمي للمسنين'
      ]
    }
  },
  loading: false,
  error: null
};

const userAssociationsSlice = createSlice({
  name: 'userAssociations',
  initialState,
  reducers: {
    setUserAssociationInfo: (state, action: PayloadAction<{ associationId: number; info: UserAssociationInfo }>) => {
      state.data[action.payload.associationId] = action.payload.info;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    }
  }
});

export const { setUserAssociationInfo, setLoading, setError } = userAssociationsSlice.actions;
export default userAssociationsSlice.reducer; 