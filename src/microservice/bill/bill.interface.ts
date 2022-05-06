export interface Product {
    id: number;
    quantity: number;
    cost: number;
}

export interface BillResponse {
    total: number;
    errorMessage: string;
}
