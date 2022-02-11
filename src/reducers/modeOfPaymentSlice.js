import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import agent from "../../app/api/agent";

const initialState = {
    modeOfPayments: [],
    isFetching: false,
    modeOfPayment: undefined,
    isFetchingDetails: false,
}

export const fetchModeOfPaymentsAsync = createAsyncThunk(
    'modeOfPayments/fetchModeOfPaymentsAsync',
    async (_, thunkAPI) => {
        try {
            return await agent.ModeOfPayment.list();
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.data })
        }
    }
)

export const fetchModeOfPaymentDetailsAsync = createAsyncThunk(
    'modeOfPayments/fetchModeOfPaymentDetailsAsync',
    async (id, thunkAPI) => {
        try {
            return await agent.ModeOfPayment.details(id);
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.data })
        }
    }
)

export const modeOfPaymentSlice = createSlice({
    name: 'modeOfPayment',
    initialState,
    reducers: {
        updateStatus: (state, action) => {
            state.modeOfPayments = [...state.modeOfPayments].map(i => {
                if (i.id === action.payload.id) {
                    i.isEnabled = !i.isEnabled;
                }
                return i;
            })
        }
    },

    extraReducers: (builder => {
        builder.addCase(fetchModeOfPaymentsAsync.pending, (state, action) => {
            state.isFetching = true;
        });
        builder.addCase(fetchModeOfPaymentsAsync.fulfilled, (state, action) => {
            state.modeOfPayments = action.payload;
            state.isFetching = false;
        });
        builder.addCase(fetchModeOfPaymentsAsync.rejected, (state, action) => {
            state.isFetching = false;
        });


        builder.addCase(fetchModeOfPaymentDetailsAsync.pending, (state, action) => {
            state.isFetchingDetails = true;
        });
        builder.addCase(fetchModeOfPaymentDetailsAsync.fulfilled, (state, action) => {
            state.modeOfPayment = action.payload;
            state.isFetchingDetails = false;
        });
        builder.addCase(fetchModeOfPaymentDetailsAsync.rejected, (state, action) => {
            state.isFetchingDetails = false;
        });
    })
})

export const { updateStatus } = modeOfPaymentSlice.actions;