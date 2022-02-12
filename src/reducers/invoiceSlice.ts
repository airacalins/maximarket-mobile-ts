// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// import agent from "../../app/api/agent";

// const initialState = {
//     invoices: [],
//     isFetching: false,
//     invoice: undefined,
//     isFetchingDetails: false,
//     payment: undefined,
//     payments: [],
//     paymentReference: undefined
// }

// export const fetchInvoicesAsync = createAsyncThunk('invoice/fetchInvoicessAsync', async (id, thunkAPI) => {
//     try {
//         return await agent.Invoice.list(id);
//     } catch (error) {
//         return thunkAPI.rejectWithValue({ error: error.data })
//     }
// })

// export const fetchInvoiceDetailsAsync = createAsyncThunk('invoice/fetchInvoiceDetailsAsync', async (id, thunkAPI) => {
//     try {
//         return await agent.Invoice.details(id);
//     } catch (error) {
//         return thunkAPI.rejectWithValue({ error: error.data })
//     }
// })

// export const createInvoiceAsync = createAsyncThunk("invoices/createInvoiceAsync", async (payment, thunkAPI) => {
//     try {

//         const bodyFormData = new FormData();
//         bodyFormData.append('invoiceId', payment.invoiceId);
//         bodyFormData.append('file', payment.file);
//         bodyFormData.append('modeOfPaymentId', payment.modeOfPaymentId);
//         bodyFormData.append('amount', payment.amount);
//         return await agent.Invoice.create(bodyFormData);
//     } catch (error) {
//         return thunkAPI.rejectWithValue({ error: error.data })
//     }
// })


// export const invoiceSlice = createSlice({
//     name: 'invoice',
//     initialState,
//     reducers: {
//         setInvoiceDetails(state, action) {
//             state.invoice = state.invoices.find(i => i.id === action.payload);
//         },
//         setPaymentDetails(state, action) {
//             state.payment = action.payload;
//         },
//         resetPaymentRefence(state, action) {
//             state.paymentReference = undefined;
//         },
//     },

//     extraReducers: (builder => {
//         builder.addCase(fetchInvoicesAsync.pending, (state, action) => {
//             state.isFetching = true;
//         });
//         builder.addCase(fetchInvoicesAsync.fulfilled, (state, action) => {
//             state.invoices = action.payload;
//             const invoicePayments = action.payload.map(i => !!i.payments ? i.payments : []);
//             state.payments = invoicePayments.flat(1);
//             state.isFetching = false;
//         });
//         builder.addCase(fetchInvoicesAsync.rejected, (state, action) => {
//             state.isFetching = false;
//         });


//         builder.addCase(fetchInvoiceDetailsAsync.pending, (state, action) => {
//             state.isFetchingDetails = true;
//         });
//         builder.addCase(fetchInvoiceDetailsAsync.fulfilled, (state, action) => {
//             state.invoice = action.payload;
//             state.isFetchingDetails = false;
//         });
//         builder.addCase(fetchInvoiceDetailsAsync.rejected, (state, action) => {
//             state.isFetchingDetails = false;
//         });


//         builder.addCase(createInvoiceAsync.pending, (state, action) => {
//             state.isSaving = true;
//         });
//         builder.addCase(createInvoiceAsync.fulfilled, (state, action) => {
//             state.isSaving = false;
//             state.paymentReference = action.payload;
//         });
//         builder.addCase(createInvoiceAsync.rejected, (state, action) => {
//             state.isSaving = false;
//         });

//     })
// })

// export const { setInvoiceDetails, setPaymentDetails, resetPaymentRefence } = invoiceSlice.actions;