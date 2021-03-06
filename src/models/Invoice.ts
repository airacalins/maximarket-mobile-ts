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
    balance: number;
}
  
export interface IInvoiceItem {
    amount: number,
    id: string,
    description: string,
}

export interface ICreatePaymentInput {
    invoiceId: string,
    modeOfPaymentId: string,
    amount: string,
    file: string,
    imageUri: string
}

export interface IPaymentResult {
    amount: number
    dateCreated: string
    referenceNumber: string
}

export enum PaymentStatus {
    Unpaid,
    Pending,
    Approved,
    Declined
  }

export enum InvoiceStatus {
    Unpaid,
    Pending,
    PartiallyPaid,
    Paid
}

