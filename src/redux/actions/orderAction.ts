export const getOrders=(orders:any)=>{
    return{
        type:"ADD_ALL_ORDERS",
        payload:orders
    }
}