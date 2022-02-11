import { configureStore } from '@reduxjs/toolkit';
import { announcementSlice } from '../reducers/announcementSlice';
import { invoiceSlice } from '../reducers/invoiceSlice';
import { modeOfPaymentSlice } from '../reducers/modeOfPaymentSlice';
import { slotSlice } from '../reducers/slotSlice';
import { tenantSlice } from "../reducers/tenantSlice";

export const store = configureStore({
  reducer: {
    announcement: announcementSlice.reducer,
    invoice: invoiceSlice.reducer,
    modeOfPayment: modeOfPaymentSlice.reducer,
    slot: slotSlice.reducer,
    tenant: tenantSlice.reducer,
  }
})