import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import agent from "../api/agent";
import { IInvoice } from "../models/Invoice";

export interface IInvoiceState {
  invoices: IInvoice[];
  invoice?: IInvoice;
  isFetchingInvoices: boolean;
  isFetchingInvoiceDetails: boolean;
  isSaving: boolean;
  isError: boolean;
}

const initialState: IInvoiceState = {
  invoices: [],
  isFetchingInvoices: false,
  invoice: undefined,
  isFetchingInvoiceDetails: false,
  isSaving: false,
  isError: false
}

export const fetchInvoicesAsync = createAsyncThunk<IInvoice[], string>(
  'invoice/fetchInvoicessAsync',
  async (id, thunkAPI) => {
    try {
      return await agent.Invoice.list(id);
    } catch (error: any) {
      return thunkAPI.rejectWithValue({error: error.data})
    }
  }
)

export const fetchInvoiceDetailsAsync = createAsyncThunk<IInvoice, string>(
  'invoice/fetchInvoiceDetailsAsync',
  async (id, thunkAPI) => {
    try {
      return await agent.Invoice.details(id);
    } catch (error: any) {
      return thunkAPI.rejectWithValue({error: error.data})
    }
  }
)

export const invoiceSlice = createSlice({
  name: 'invoice',
  initialState,
  reducers: {},

  extraReducers: (builder => {

    builder.addCase(fetchInvoicesAsync.pending, (state, action) => {
        state.isError = false;
        state.isFetchingInvoices = true;
    });
    builder.addCase(fetchInvoicesAsync.fulfilled, (state, action) => {
        state.invoices = action.payload;
        state.isError = false;
        state.isFetchingInvoices = false;
    });
    builder.addCase(fetchInvoicesAsync.rejected, (state, action) => {
        state.isError = true;
        state.isFetchingInvoices = false;
    });

    
    builder.addCase(fetchInvoiceDetailsAsync.pending, (state, action) => {
        state.isError = false;
        state.isFetchingInvoiceDetails = true;
    });
    builder.addCase(fetchInvoiceDetailsAsync.fulfilled, (state, action) => {
        state.invoice = action.payload;
        state.isError = false;
        state.isFetchingInvoiceDetails = false;
    });
    builder.addCase(fetchInvoiceDetailsAsync.rejected, (state, action) => {
        state.isError = true;
        state.isFetchingInvoiceDetails = false;
    });
  })
})

export const {  } = invoiceSlice.actions;