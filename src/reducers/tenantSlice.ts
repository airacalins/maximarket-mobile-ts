import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import agent from "../api/agent";
import { ITenant } from "../models/Tenant";
import { IContractPhotos } from "../models/TenantContract";

export interface ITenantState {
  tenant?: ITenant;
  isFetchingTenantDetails: boolean;
  isSaving: boolean;
  isFetchingPhotos: boolean;
  contractPhotos: IContractPhotos[];
  errorMessage: string
}

const initialState: ITenantState = {
  tenant: undefined,
  isFetchingTenantDetails: false,
  isSaving: false,
  contractPhotos:[],
  isFetchingPhotos: false,
  errorMessage: ""
}

export const fetchTenantDetailsAsync = createAsyncThunk<ITenant, string>(
  'tenants/fetchTenantDetailsAsync',
  async (id, thunkAPI) => {
    try {
      return await agent.Tenant.details(id);
    } catch (error: any) {
      return thunkAPI.rejectWithValue({error: error.data})
    }
  }
)

export const getTenantContractPhoto = createAsyncThunk<any, string>(
  'tenants/getTenantContractPhoto',
  async (model, thunkAPI) => {
    try {
      return await agent.Tenant.getContractPhotos(model);
    } catch (error: any) {
      return thunkAPI.rejectWithValue({error: error.data})
    }
  }
)

export const tenantSlice = createSlice({
  name: 'tenant',
  initialState,
  reducers: {
  },
  extraReducers: (builder => {

    
    builder.addCase(fetchTenantDetailsAsync.pending, (state, action) => {
      state.isFetchingTenantDetails = true;
    });
    builder.addCase(fetchTenantDetailsAsync.fulfilled, (state, action) => {
      state.tenant = action.payload;
      state.isFetchingTenantDetails = false;
    });
    builder.addCase(fetchTenantDetailsAsync.rejected, (state, action) => {
      state.isFetchingTenantDetails = false;
      state.errorMessage = "Invalid Account Number";
    });
    

    builder.addCase(getTenantContractPhoto.pending, (state, action) => {
      state.isFetchingPhotos = true;
    });

    builder.addCase(getTenantContractPhoto.fulfilled, (state, action) => {
      state.contractPhotos = action.payload;
      state.isFetchingPhotos = false;
    });
    
    builder.addCase(getTenantContractPhoto.rejected, (state, action) => {
      state.errorMessage = "No contract photo";
      state.isFetchingPhotos = false;
    });


  })
})

export const { } = tenantSlice.actions;