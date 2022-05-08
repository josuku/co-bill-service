export interface Product {
    productId: number;
    orderId: number;
    quantity: number;
    cost: number;
}

export interface BillResponse {
    total: number;
    errorMessage: string;
}
