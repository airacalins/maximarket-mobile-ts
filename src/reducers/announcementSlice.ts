import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import agent from "../api/agent";
import { IAnnouncement } from "../components/models/Announcement";

export interface IAnnouncementState {
    announcements: IAnnouncement[];
    announcement?: IAnnouncement;
    isFetchingAnnouncements: boolean;
    isFetchingAnnouncementDetailsisFetchingDetails: boolean;
    isSaving: boolean;
    errorMessage?: string;
  }

const initialState = {
    announcements: [] as Array<IAnnouncement>,
    announcement: undefined,
    isFetchingAnnouncements: false,
    isFetchingAnnouncementDetails: false,
    isSaving: false,
    errorMessage: ""
}

export const fetchAnnouncementsAsync = createAsyncThunk<IAnnouncement[]>(
    'announcements/fetchAnnouncementsAsync',
    async (_, thunkAPI) => {
      try {
        return await agent.Announcement.list();
      } catch (error: any) {
        return thunkAPI.rejectWithValue({error: error.data})
      }
    }
  )

  export const fetchAnnouncementDetailsAsync = createAsyncThunk<IAnnouncement, string>(
    'announcements/fetchAnnouncementDetailsAsync',
    async (id, thunkAPI) => {
      try {
        return await agent.Announcement.details(id);
      } catch (error: any) {
        return thunkAPI.rejectWithValue({error: error.data})
      }
    }
  )

export const announcementSlice = createSlice({
    name: 'announcement',
    initialState,
    reducers: {},

    extraReducers: (builder => {
        builder.addCase(fetchAnnouncementsAsync.pending, (state, action) => {
            state.isFetchingAnnouncements = true;
          });
          builder.addCase(fetchAnnouncementsAsync.fulfilled, (state, action) => {
            state.announcements = action.payload as any;
            state.isFetchingAnnouncements = false;
          });
          builder.addCase(fetchAnnouncementsAsync.rejected, (state, action) => {
            state.isFetchingAnnouncements = false;
          });


          builder.addCase(fetchAnnouncementDetailsAsync.pending, (state, action) => {
            state.isFetchingAnnouncementDetails = true;
          });
          builder.addCase(fetchAnnouncementDetailsAsync.fulfilled, (state, action) => {
            state.announcement = action.payload as any;
            state.isFetchingAnnouncementDetails = false;
          });
          builder.addCase(fetchAnnouncementDetailsAsync.rejected, (state, action) => {
            state.isFetchingAnnouncementDetails = false;
          });
    })
})

export const { } = announcementSlice.actions;