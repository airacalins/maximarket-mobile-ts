import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import agent from "../api/agent";
import { ITenant, IUpdateTenantInput } from "../models/Tenant";
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

export const updateTenantDetailsAsync = createAsyncThunk<ITenant, IUpdateTenantInput>(
  'tenants/updateTenantDetailsAsync',
  async (tenant, thunkAPI) => {
    try {
      return await agent.Tenant.update(tenant);
    } catch (error: any) {
      return thunkAPI.rejectWithValue({error: error.data})
    }
  }
)

export const getTenantContractPhoto = createAsyncThunk<any, string>(
  'tenants/getTenantContractPhoto',
  async (id, thunkAPI) => {
    try {
      return await agent.Tenant.getContractPhotos(id);
    } catch (error: any) {
      return thunkAPI.rejectWithValue({error: error.data})
    }
  }
)

export const tenantSlice = createSlice({
  name: 'tenant',
  initialState,
  reducers: {
    resetTenant(state) {
      state.tenant = undefined;
    },
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


    builder.addCase(updateTenantDetailsAsync.pending, (state, action) => {
      state.isSaving = true;
    });

    builder.addCase(updateTenantDetailsAsync.fulfilled, (state, action) => {
        state.isSaving = false;
    });

    builder.addCase(updateTenantDetailsAsync.rejected, (state, action) => {
        state.isSaving = false;
    });


  })
})

export const { resetTenant } = tenantSlice.actions;
export default tenantSlice