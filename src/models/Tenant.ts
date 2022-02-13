import { SlotContract } from "./SlotContract";

export interface ITenant {  
  id: string;
  isActive: boolean,
  address: string;
  businessName: string;
  contract?: SlotContract;
  dateCreated: Date;
  firstName: string;
  lastName: string;
  phone: string;
  tenantUniqueId: string
}

export interface IUpdateTenantInput {
  id: string;
  address: string;
  businessName: string;
  contract?: SlotContract;
  firstName: string;
  lastName: string;
  contact: string;
}