// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// import agent from "../../app/api/agent";

// const initialState = {
//     slots: undefined,
//     isFetching: false,
// }

// export const fetchSlotsAsync = createAsyncThunk(
//     'slots/fetchSlotsAsync',
//     async (_, thunkAPI) => {
//         try {
//             return await agent.Slot.list();
//         } catch (error) {
//             return thunkAPI.rejectWithValue({ error: error.data })
//         }
//     }
// )

// export const slotSlice = createSlice({
//     name: 'slot',
//     initialState,
//     reducers: {},

//     extraReducers: (builder => {
//         builder.addCase(fetchSlotsAsync.pending, (state, action) => {
//             state.isFetching = true;
//         });
//         builder.addCase(fetchSlotsAsync.fulfilled, (state, action) => {
//             state.slots = action.payload;
//             state.isFetching = false;
//         });
//         builder.addCase(fetchSlotsAsync.rejected, (state, action) => {
//             state.isFetching = false;
//         });
//     })
// })

// export const { } = slotSlice.actions;