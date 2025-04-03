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
      name: 'جمعية التنمية الاجتماعية',
      description: 'جمعية تعنى بالتنمية الاجتماعية والثقافية في المنطقة، تهدف إلى تطوير المجتمع ورفع مستوى الوعي الثقافي',
      banner: '/banner1.jpg',
      activities: [
        {
          id: 1,
          title: 'ورشة عمل حول التنمية المستدامة',
          description: 'ورشة عمل حول مفاهيم التنمية المستدامة وأهدافها',
          date: '2024-03-15'
        },
        {
          id: 2,
          title: 'ندوة حول التطوع المجتمعي',
          description: 'ندوة تهدف إلى تشجيع العمل التطوعي في المجتمع',
          date: '2024-03-20'
        }
      ]
    },
    {
      id: 2,
      name: 'جمعية حماية البيئة',
      description: 'جمعية تعنى بحماية البيئة وتوعية المجتمع بأهمية الحفاظ على الموارد الطبيعية',
      banner: '/banner2.jpg',
      activities: [
        {
          id: 3,
          title: 'حملة تنظيف الشاطئ',
          description: 'حملة تنظيف شاطئ المدينة بمشاركة المتطوعين',
          date: '2024-03-20'
        },
        {
          id: 4,
          title: 'معرض البيئة المستدامة',
          description: 'معرض يهدف إلى عرض مشاريع صديقة للبيئة',
          date: '2024-03-25'
        }
      ]
    },
    {
      id: 3,
      name: 'جمعية رعاية المسنين',
      description: 'جمعية تعنى برعاية المسنين وتقديم الخدمات الاجتماعية والصحية لهم',
      banner: '/banner3.jpg',
      activities: [
        {
          id: 5,
          title: 'زيارة دور المسنين',
          description: 'زيارة دور المسنين وتقديم الهدايا والرعاية',
          date: '2024-03-25'
        },
        {
          id: 6,
          title: 'ورشة صحية للمسنين',
          description: 'ورشة توعوية حول الصحة والتغذية للمسنين',
          date: '2024-03-30'
        }
      ]
    },
    {
      id: 4,
      name: 'جمعية تنمية الشباب',
      description: 'جمعية تعنى بتنمية مهارات الشباب وتطوير قدراتهم في مختلف المجالات',
      banner: '/banner4.jpg',
      activities: [
        {
          id: 7,
          title: 'دورة تدريبية في ريادة الأعمال',
          description: 'دورة تدريبية حول أساسيات ريادة الأعمال',
          date: '2024-04-01'
        },
        {
          id: 8,
          title: 'مسابقة الابتكار الشبابي',
          description: 'مسابقة تهدف إلى تشجيع الابتكار بين الشباب',
          date: '2024-04-05'
        }
      ]
    },
    {
      id: 5,
      name: 'جمعية الثقافة والفنون',
      description: 'جمعية تعنى بالثقافة والفنون وتنظيم الفعاليات الثقافية',
      banner: '/banner5.jpg',
      activities: [
        {
          id: 9,
          title: 'معرض الفن التشكيلي',
          description: 'معرض يضم أعمال فنانين محليين',
          date: '2024-04-10'
        },
        {
          id: 10,
          title: 'أمسية شعرية',
          description: 'أمسية شعرية بمشاركة شعراء محليين',
          date: '2024-04-15'
        }
      ]
    },
    {
      id: 6,
      name: 'جمعية التوعية الصحية',
      description: 'جمعية تعنى بالتوعية الصحية وتقديم الخدمات الصحية للمجتمع',
      banner: '/banner6.jpg',
      activities: [
        {
          id: 11,
          title: 'حملة التوعية بمرض السكري',
          description: 'حملة توعوية حول مرض السكري وطرق الوقاية',
          date: '2024-04-20'
        },
        {
          id: 12,
          title: 'يوم الصحة العالمي',
          description: 'فعاليات متنوعة بمناسبة يوم الصحة العالمي',
          date: '2024-04-25'
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