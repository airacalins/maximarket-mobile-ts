import { IPayment } from "./Payment";

export interface IInvoice {
    amount: number,
    businessName: string,
    dateCreated: Date,
    dueDate: Date,
    id: string,
    invoiceItems: IInvoiceItem[],
    invoiceNumber: string,
    invoiceStatus: InvoiceStatus
    firstName: string,
    lastName: string,
    payments: IPayment[],
    phone: string,
    slotNumber: string,
    tenantId: string,
}
  
export interface IInvoiceItem {
    amount: number,
    id: string,
    description: string,
}


export enum InvoiceStatus {
    Unpaid,
    Pending,
    PartiallyPaid,
    Paid
}