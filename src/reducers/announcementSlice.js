import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import agent from "../../app/api/agent";

const initialState = {
    announcements: [],
    isFetching: false,
    announcement: undefined,
    isFetchingDetails: false,
}

export const fetchAnnouncementsAsync = createAsyncThunk(
    'announcements/fetchAnnouncementsAsync',
    async (_, thunkAPI) => {
        try {
            return await agent.Announcement.list();
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.data })
        }
    }
)

export const fetchAnnouncementDetailsAsync = createAsyncThunk(
    'announcements/fetchAnnouncementDetailsAsync',
    async (id, thunkAPI) => {
        try {
            return await agent.Announcement.details(id);
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.data })
        }
    }
)

export const announcementSlice = createSlice({
    name: 'announcement',
    initialState,
    reducers: {},

    extraReducers: (builder => {
        builder.addCase(fetchAnnouncementsAsync.pending, (state, action) => {
            state.isFetching = true;
        });
        builder.addCase(fetchAnnouncementsAsync.fulfilled, (state, action) => {
            state.isFetching = false;
            state.announcements = action.payload;
        });
        builder.addCase(fetchAnnouncementsAsync.rejected, (state, action) => {
            state.isFetching = false;
        });


        builder.addCase(fetchAnnouncementDetailsAsync.pending, (state, action) => {
            state.isFetchingDetails = true;
        });
        builder.addCase(fetchAnnouncementDetailsAsync.fulfilled, (state, action) => {
            state.announcement = action.payload;
            state.isFetchingDetails = false;
        });
        builder.addCase(fetchAnnouncementDetailsAsync.rejected, (state, action) => {
            state.isFetchingDetails = false;
        });
    })
})

export const { } = announcementSlice.actions;