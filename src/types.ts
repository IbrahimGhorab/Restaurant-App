export interface AppProp {
  item?: Product;
  displayMenu?: Function;
  smShow?: boolean;
  onHide?: Function;
  handleClose?: Function;
  updateFilter?: Function;
  cartItem?:Product
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
}

export interface Order {
  id: number;
  orderNumber: string;
  isCompleted: boolean;
  client: Client;
}

export interface OrderLine {
  id: number;
  quantity: number;
  order: Order;
  product: Product;
}
