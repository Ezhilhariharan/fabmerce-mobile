import { createSlice } from '@reduxjs/toolkit'

export interface systemInitialState {
  isLoading: boolean;
  user: object | null;
  fcm: string;
  voiceSearchData: any;

  // Home dashbaord
  // homeData: { isLoading: boolean; data: any[] };
  // promotion: { isLoading: boolean; data: any[] };
  // brands: { isLoading: boolean; data: any[] };
  // featured: { isLoading: boolean; data: any[] };
  // unmissbale: { isLoading: boolean; data: any[] };
  // kids: { isLoading: boolean; data: any[] };
  // beauty: { isLoading: boolean; data: any[] };
  // electronics: { isLoading: boolean; data: any[] };
  // household: { isLoading: boolean; data: any[] };
  // foods: { isLoading: boolean; data: any[] };
  // foodCategory: { isLoading: boolean; data: any[] };
  // checkListLifeStyle: { isLoading: boolean; data: any[] };
}

export const initialState = {
  isLoading: true,
  user: null,
  fcm: "",
  voiceSearchData: null,
  isOnBoarded: null,
  isLoggedIn: null,
  byPassUser: null,
  
  // Home dashbaord
  homeData: { isLoading: true, data: [] },
  promotion: { isLoading: true, data: [] },
  brands: { isLoading: true, data: [] },
  featured: { isLoading: true, data: [] },
  unmissbale: { isLoading: true, data: [] },
  kids: { isLoading: true, data: [] },
  beauty: { isLoading: true, data: [] },
  electronics: { isLoading: true, data: [] },
  household: { isLoading: true, data: [] },
  foods: { isLoading: true, data: [] },
  foodCategory: { isLoading: true, data: [] },
  checkListLifeStyle: { isLoading: true, data: [] },
}

const slice = createSlice({
  name: 'system',
  initialState: initialState,
  reducers: {
    setSystemStore: (state, incoming) => {
      return state = { ...state, ...incoming.payload }
    }
  }
})

export const systemReducer = slice.reducer
export const systemActions = slice.actions