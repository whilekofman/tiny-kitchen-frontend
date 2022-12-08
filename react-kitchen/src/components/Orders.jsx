import React from "react"
import { Order } from "./Order.jsx";

const Orders = ({orders}, toggleComplete) => {
    // debugger
    const ordersList = orders.map(order => <Order order={order} key={order.id} toggleComplete/>)
    
    return ( 
        <div className="orders-list">
            {ordersList}
        </div>
     );
}
 
export default Orders;