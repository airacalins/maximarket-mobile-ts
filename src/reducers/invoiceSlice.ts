import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import agent from "../api/agent";
import { ICreatePaymentInput, IInvoice, IPaymentResult } from "../models/Invoice";
import { IPayment } from "../models/Payment";

export interface IInvoiceState {
  invoices: IInvoice[];
  invoice?: IInvoice;
  isFetchingInvoices: boolean;
  isFetchingInvoiceDetails: boolean;
  isSaving: boolean;
  isError: boolean;
  paymentResult?: IPaymentResult;
  selectedPayment?: IPayment;
}

const initialState: IInvoiceState = {
  invoices: [],
  isFetchingInvoices: false,
  invoice: undefined,
  isFetchingInvoiceDetails: false,
  isSaving: false,
  isError: false,
  paymentResult: undefined,
  selectedPayment: undefined
}

export const createPaymentAsync = createAsyncThunk<IPaymentResult, ICreatePaymentInput>(
  'invoice/createPaymentAsync',
  async (payment, thunkAPI) => {
    try {
      const bodyFormData = new FormData();
      bodyFormData.append('invoiceId', payment.invoiceId);
      // bodyFormData.append('file', payment.file);
      bodyFormData.append('file', { uri: payment?.imageUri, name: 'payment.jpeg', type: 'image/jpeg' } as any)
      bodyFormData.append('modeOfPaymentId', payment.modeOfPaymentId);
      bodyFormData.append('amount', `${payment.amount}`);
      return await agent.Invoice.create(bodyFormData) as any;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({error: error.data})
    }
  }
)

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
  reducers: {
    resetPaymentResult(state) {
      state.paymentResult = undefined;
    },
    setSelectedPayment (state, action) {
      state.selectedPayment = action.payload;
    },
  },


  extraReducers: (builder => {

    builder.addCase(createPaymentAsync.pending, (state, action) => {
      state.isSaving = true;
    });
    builder.addCase(createPaymentAsync.fulfilled, (state, action) => {
      state.paymentResult = action.payload;
      state.isSaving = false;
    });
    builder.addCase(createPaymentAsync.rejected, (state, action) => {
        state.isSaving = false;
        console.log(action.payload)
        state.paymentResult = {
          amount: 10,
          dateCreated: '',
          referenceNumber: ''

        }
    });

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

export const { resetPaymentResult, setSelectedPayment } = invoiceSlice.actions;