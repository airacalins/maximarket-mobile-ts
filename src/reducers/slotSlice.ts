import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import agent from "../api/agent";
import { ISlot } from "../models/Slot";

export interface ISlotState {
  slots: ISlot[];
  slot?: ISlot;
  isFetchingSlots: boolean;
  isFetchingSlotDetails: boolean;
}

const initialState: ISlotState = {
  slots: [],
  isFetchingSlots: false,
  slot: undefined,
  isFetchingSlotDetails: false,
}

export const fetchSlotsAsync = createAsyncThunk<ISlot[]>(
  'slots/fetchSlotsAsync',
  async (_, thunkAPI) => {
    try {
      return await agent.Slot.list();
    } catch (error: any) {
      return thunkAPI.rejectWithValue({error: error.data})
    }
  }
)

export const fetchSlotDetailsAsync = createAsyncThunk<ISlot, string>(
  'slots/fetchSlotDetailsAsync',
  async (id, thunkAPI) => {
    try {
      return await agent.Slot.details(id);
    } catch (error: any) {
      return thunkAPI.rejectWithValue({error: error.data})
    }
  }
)


export const slotSlice = createSlice({
  name: 'slot',
  initialState,
  reducers: {},

  extraReducers: (builder => {
    builder.addCase(fetchSlotsAsync.pending, (state, action) => {
      state.isFetchingSlots = true;
    });
    builder.addCase(fetchSlotsAsync.fulfilled, (state, action) => {
      state.slots = action.payload;
      state.isFetchingSlots = false;
    });
    builder.addCase(fetchSlotsAsync.rejected, (state, action) => {
      state.isFetchingSlots = false;
    });

    
    builder.addCase(fetchSlotDetailsAsync.pending, (state, action) => {
      state.isFetchingSlotDetails = true;
    });
    builder.addCase(fetchSlotDetailsAsync.fulfilled, (state, action) => {
      state.slot = action.payload;
      state.isFetchingSlotDetails = false;
    });
    builder.addCase(fetchSlotDetailsAsync.rejected, (state, action) => {
      state.isFetchingSlotDetails = false;
    });
  })
})

export const {  } = slotSlice.actions;