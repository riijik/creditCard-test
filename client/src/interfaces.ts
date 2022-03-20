export interface MyForm {
    cardNumber: number | null,
    expDate: Date | null,
    cvv: number | null,
    amount: number | null
}

export interface ServerResponse {
    RequestID: string,
    Amount: number
}