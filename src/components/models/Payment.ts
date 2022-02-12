export interface IPayment {
    id: string,
    status: number,
    bankName: string,
    accountName: string,
    accountNumber: string,
    dateCreated: Date,
    amount: number,
    referenceNumber: string
  }

export enum PaymentStatus {
Unpaid,
Pending,
Approved,
Declined
}