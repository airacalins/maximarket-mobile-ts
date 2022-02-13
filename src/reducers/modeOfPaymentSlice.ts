import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import agent from "../api/agent";
import { IModeOfPayment } from "../models/ModeOfPayment";

export interface IModeOfPaymentState {
  modeOfPayments: IModeOfPayment[];
  modeOfPayment?: IModeOfPayment;
  isFetchingModeOfPayments: boolean;
  isFetchingModeOfPaymentDetails: boolean;
  isSaving: boolean;
  errorMessage?: string;
}

const initialState: IModeOfPaymentState = {
  modeOfPayments: [],
  modeOfPayment: undefined,
  isFetchingModeOfPayments: false,
  isFetchingModeOfPaymentDetails: false,
  isSaving: false,
  errorMessage: ""
}

export const fetchModeOfPaymentsAsync = createAsyncThunk<IModeOfPayment[]>(
  'modeOfPayments/fetchModeOfPaymentsAsync',
  async (_, thunkAPI) => {
    try {
      return await agent.ModeOfPayment.list();
    } catch (error: any) {
      return thunkAPI.rejectWithValue({error: error.data})
    }
  }
)

export const modeOfPaymentSlice = createSlice({
  name: 'modeOfPayment',
  initialState,
  reducers: {},

  extraReducers: (builder => {

    builder.addCase(fetchModeOfPaymentsAsync.pending, (state, action) => {
      state.isFetchingModeOfPayments = true;
    });
    builder.addCase(fetchModeOfPaymentsAsync.fulfilled, (state, action) => {
      state.modeOfPayments = action.payload;
      state.isFetchingModeOfPayments = false;
    });
    builder.addCase(fetchModeOfPaymentsAsync.rejected, (state, action) => {
      state.errorMessage = action.payload as any;
      state.isFetchingModeOfPayments = false;
    });

    })
})


export const {  } = modeOfPaymentSlice.actions;