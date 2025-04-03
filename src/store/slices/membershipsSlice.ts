"use client"
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MembershipsState {
  memberships: {
    [key: number]: boolean;
  };
  loading: boolean;
  error: string | null;
}

const initialState: MembershipsState = {
  memberships: {
    1: true,  // User is a member of association with ID 1
    2: false, // User is not a member of association with ID 2
    3: false  // User is not a member of association with ID 3
  },
  loading: false,
  error: null
};

const membershipsSlice = createSlice({
  name: 'memberships',
  initialState,
  reducers: {
    setMemberships: (state, action: PayloadAction<{ [key: number]: boolean }>) => {
      state.memberships = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    joinAssociation: (state, action: PayloadAction<number>) => {
      state.memberships[action.payload] = true;
    },
    leaveAssociation: (state, action: PayloadAction<number>) => {
      state.memberships[action.payload] = false;
    }
  }
});

export const {
  setMemberships,
  setLoading,
  setError,
  joinAssociation,
  leaveAssociation
} = membershipsSlice.actions;

export default membershipsSlice.reducer; 