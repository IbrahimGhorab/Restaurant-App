export interface AppProp {
  item?: Product;
  displayMenu?: Function;
  smShow?: boolean;
  onHide?: Function;
  handleClose?: Function;
  updateFilter?: Function;
  cartItem?: Product;
}

export interface Category {
  id: number;
  name: string;
}

export interface Client {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  mobile: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  isPopular: boolean;
  category: string;
}

export interface OrderType {
  id: string;
  orderNumber: string;
  isCompleted: boolean;
  client: Client;
  createdAt: Date;
  updatedAt: Date;
  orderLines: OrderLineType[];
}

export interface OrderLineType {
  id: number;
  quantity: number;
  order: OrderType;
  product: Product;
}

export interface Cart extends Product {
  quantity: number;
}
