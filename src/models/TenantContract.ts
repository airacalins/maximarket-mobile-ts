import { ITenant } from "./Tenant";

export interface IContractPhotos {
    id: string;
    url: string;
    dateCreated: string
  }

  export interface ITenantContract {
    id: string;
    slotId: number;
    contractPrice: number;
    deposit: number;
    advance: number;
    contractStartDate: string;
    contractEndDate: string;
    contractEarlyTerminationDate: string;
    contractEarlyTerminationReason: string;
    nextBillingDate: string;
    status: string;
    tenant: ITenant;
  }
  