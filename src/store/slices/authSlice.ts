import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface User {
  id: number
  username: string
  email: string
  first_name: string
  last_name: string
  phone: string
  birth_date: string
  gender: string
  is_staff: boolean
  is_superuser: boolean
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  loading: boolean
  error: string | null
}

const mockUsers: User[] = [
  {
    id: 1,
    username: 'user',
    email: 'user@example.com',
    first_name: 'فاطمة',
    last_name: 'علي',
    phone: '0502345678',
    birth_date: '1990-01-01',
    gender: 'female',
    is_staff: false,
    is_superuser: false
  },
  {
    id: 2,
    username: 'admin',
    email: 'admin@example.com',
    first_name: 'أحمد',
    last_name: 'محمد',
    phone: '0501234567',
    birth_date: '1985-01-01',
    gender: 'male',
    is_staff: true,
    is_superuser: true
  }
]

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true
      state.error = null
    },
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.user = action.payload
      state.isAuthenticated = true
      state.loading = false
      state.error = null
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.user = null
      state.isAuthenticated = false
      state.loading = false
      state.error = action.payload
    },
    logout: (state) => {
      state.user = null
      state.isAuthenticated = false
      state.loading = false
      state.error = null
    }
  }
})

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions

export const login = (username: string, password: string) => (dispatch: any) => {
  dispatch(loginStart())
  
  // Simulate API call delay
  setTimeout(() => {
    if ((username === 'user' && password === 'user') || 
        (username === 'admin' && password === 'admin')) {
      const user = mockUsers.find(u => u.username === username)
      if (user) {
        dispatch(loginSuccess(user))
      } else {
        dispatch(loginFailure('المستخدم غير موجود'))
      }
    } else {
      dispatch(loginFailure('اسم المستخدم أو كلمة المرور غير صحيحة'))
    }
  }, 1000)
}

export default authSlice.reducer 