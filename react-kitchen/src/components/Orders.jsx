import React from "react"
import { Order } from "./Order.jsx";

export const Orders = orders => {
    
    const ordersList = orders.map(order => <Order key={order.id} order={order} />)
    
    return ( 
        <div className="orders-list">
            {ordersList}
        </div>
     );
}
 
// export default Orders;