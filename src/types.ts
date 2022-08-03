export interface AppProps {
  item?: ProductType,
  displayMenu?: Function,
  show?:boolean,
  handleClose?:Function,
  updateFilter?:Function
}

export interface ProductType {
  id: number,
  name: string,
  description: string,
  img: string,
  price: number
}
