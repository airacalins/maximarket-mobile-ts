import { SlotContract } from "./SlotContract";

export interface ITenant {  
  address: string;
  dateCreated: Date;
  contract?: SlotContract;
  businessName: string;
  id: string;
  isActive: boolean,
  firstName: string;
  lastName: string;
  phone: string;
  tenantUniqueId: string
}

