export interface OrderDto {
  id: number;
  originNodeId: number;
  targetNodeId: number;
  load: number;
  value: number;
  deliveryDateUtc: string;
  expirationDateUtc: string;
}

export interface ResponseDto {
  orders: OrderDto[];
  coins: number;
}