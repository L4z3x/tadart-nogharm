import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Activity {
  id: number;
  title: string;
  description: string;
  date: string;
}

interface Association {
  id: number;
  name: string;
  description: string;
  banner: string;
  activities: Activity[];
}

interface AssociationsState {
  data: Association[];
  loading: boolean;
  error: string | null;
}

const initialState: AssociationsState = {
  data: [
    {
      id: 1,
      name: 'عشيرة آل نشاشبة آل يونس',
      description: 'عشيرة تعنى بشؤون أبناء العشيرة وخدمة المجتمع',
      banner: '/associations/1/banner.jpg',
      activities: [
        {
          id: 1,
          title: 'مهرجان العيد السنوي',
          description: 'تنظيم مهرجان العيد السنوي للعشيرة يشمل أنشطة ترفيهية واجتماعية',
          date: '2024-06-16'
        },
        {
          id: 2,
          title: 'حفل تكريم الطلاب المتفوقين',
          description: 'حفل تكريم للطلاب المتفوقين من أبناء العشيرة',
          date: '2024-07-01'
        }
      ]
    },
    {
      id: 2,
      name: 'مكتب الطلبة الجامعيين البريانيين',
      description: 'مكتب يعنى بشؤون الطلبة الجامعيين من أبناء بريان',
      banner: '/associations/2/banner.jpg',
      activities: [
        {
          id: 1,
          title: 'معرض التخصصات الجامعية',
          description: 'معرض تعريف بالتخصصات الجامعية وآفاقها المستقبلية',
          date: '2024-04-10'
        },
        {
          id: 2,
          title: 'دورة مهارات البحث العلمي',
          description: 'دورة تدريبية في مهارات البحث العلمي ومنهجية الكتابة الأكاديمية',
          date: '2024-05-15'
        }
      ]
    },
    {
      id: 3,
      name: 'جمعية إروان وادي ميزاب',
      description: 'جمعية دينية واجتماعية تعنى بالمساهمة في المجتمع الميزابي',
      banner: '/associations/3/banner.jpg',
      activities: [
        {
          id: 1,
          title: 'المدرسة الدينية الصيفية',
          description: 'تنظيم مدرسة صيفية لتعليم مبادئ الدين والمذهب الإباضي',
          date: '2024-04-15'
        },
        {
          id: 2,
          title: 'ندوة حول الفقه الإباضي',
          description: 'ندوة علمية حول الفقه الإباضي وأصوله',
          date: '2024-05-20'
        }
      ]
    }
  ],
  loading: false,
  error: null
};

const associationsSlice = createSlice({
  name: 'associations',
  initialState,
  reducers: {
    setAssociations: (state, action: PayloadAction<Association[]>) => {
      state.data = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    }
  }
});

export const { setAssociations, setLoading, setError } = associationsSlice.actions;
export default associationsSlice.reducer; 