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
      role: 'عضو العشيرة',
      join_date: '2024-01-15',
      status: 'نشط',
      activities_participated: 5,
      upcoming_events: 2,
      achievements: [
        'مشارك في مهرجان العيد السنوي',
        'متطوع في حفل تكريم الطلاب المتفوقين',
        'مساهم في صندوق الزكاة'
      ]
    },
    2: {
      id: 2,
      role: 'عضو المكتب',
      join_date: '2023-11-20',
      status: 'نشط',
      activities_participated: 8,
      upcoming_events: 3,
      achievements: [
        'مشارك في معرض التخصصات الجامعية',
        'متطوع في دورة مهارات البحث العلمي',
        'منسق للبرامج التعليمية'
      ]
    },
    3: {
      id: 3,
      role: 'عضو الجمعية',
      join_date: '2024-02-10',
      status: 'نشط',
      activities_participated: 6,
      upcoming_events: 2,
      achievements: [
        'مشارك في المدرسة الدينية الصيفية',
        'متطوع في ندوة الفقه الإباضي',
        'مساهم في البرامج التعليمية'
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