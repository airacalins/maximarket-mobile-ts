import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import agent from "../../app/api/agent";

const initialState = {
    tenant: undefined,
    isFetchingDetails: false,
    isSaving: false,
    contractPhotos: [],
    isFetchingPhotos: false,
    errorMessage?: string
}

export const fetchTenantDetailsAsync = createAsyncThunk(
    'tenants/fetchTenantDetailsAsync',
    async (id, thunkAPI) => {
        try {
            return await agent.Tenant.details(id);
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.data })
        }
    }
)

export const updateTenantDetailsAsync = createAsyncThunk(
    'tenants/updateTenantDetailsAsync',
    async (tenant, thunkAPI) => {
        try {
            return await agent.Tenant.update(tenant);
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.data })
        }
    }
)

// Contract Photo
export const getTenantContractPhoto = createAsyncThunk(
    'tenants/getTenantContractPhoto',
    async (id, thunkAPI) => {
        try {
            return await agent.Tenant.getContractPhotos(id);
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.data })
        }
    }
)

export const tenantSlice = createSlice({
    name: 'tenant',
    initialState,
    reducers: {
        resetTenant(state, action) {
            state.tenant = undefined;
        },
    },
    extraReducers: (builder => {


        builder.addCase(fetchTenantDetailsAsync.pending, (state, action) => {
            state.isFetchingDetails = true;
        });
        builder.addCase(fetchTenantDetailsAsync.fulfilled, (state, action) => {
            state.tenant = action.payload;
            state.isFetchingDetails = false;
        });
        builder.addCase(fetchTenantDetailsAsync.rejected, (state, action) => {
            state.errorMessage = action.payload
            state.isFetchingDetails = false;
        });



        builder.addCase(getTenantContractPhoto.pending, (state, action) => {
            state.isFetchingPhotos = true;
        });

        builder.addCase(getTenantContractPhoto.fulfilled, (state, action) => {
            state.contractPhotos = action.payload;
            state.isFetchingPhotos = false;
        });

        builder.addCase(getTenantContractPhoto.rejected, (state, action) => {
            state.errorMessage = action.payload
            state.isFetchingPhotos = false;
        });



        builder.addCase(updateTenantDetailsAsync.pending, (state, action) => {
            state.isSaving = true;
        });

        builder.addCase(updateTenantDetailsAsync.fulfilled, (state, action) => {
            state.isSaving = false;
        });

        builder.addCase(updateTenantDetailsAsync.rejected, (state, action) => {
            state.errorMessage = action.payload
            state.isSaving = false;
        });



    })
})

export const { resetTenant } = tenantSlice.actions;
export default tenantSlice