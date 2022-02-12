import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { announcementSlice } from '../reducers/announcementSlice';
import { modeOfPaymentSlice } from '../reducers/modeOfPaymentSlice';


export const store = configureStore({
  reducer: {
    announcement: announcementSlice.reducer,
    // invoice: invoiceSlice.reducer,
    modeOfPayment: modeOfPaymentSlice.reducer,
    // slot: slotSlice.reducer,
    // tenant: tenantSlice.reducer,
  }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelecter: TypedUseSelectorHook<RootState> = useSelector;