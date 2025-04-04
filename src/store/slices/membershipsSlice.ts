"use client"
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MembershipsState {
  [key: string]: boolean;
}

const initialState: MembershipsState = {};

const membershipsSlice = createSlice({
  name: 'memberships',
  initialState,
  reducers: {
    joinAssociation: (state, action: PayloadAction<string>) => {
      state[action.payload] = true;
    },
    leaveAssociation: (state, action: PayloadAction<string>) => {
      state[action.payload] = false;
    },
  },
});

export const { joinAssociation, leaveAssociation } = membershipsSlice.actions;
export default membershipsSlice.reducer; 