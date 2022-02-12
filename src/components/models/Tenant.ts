import { SlotContract } from "./SlotContract";

export interface ITenant {  
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  dateCreated: Date;
  businessName: string;
  address: string;
  contract?: SlotContract;
  isActive: boolean,
  tenantUniqueId: string
}

