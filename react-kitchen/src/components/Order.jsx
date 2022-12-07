import React from "react";
export const Order = ({ order }) => {
    return ( 
        <li className="order">
            <span className="name">{order.name}</span>
            <span className="address">{order.address}</span>
            <span className="items">{order.items}</span>
            <span className="isComplete">{order.isComplete}</span>


        </li>
     );
}
 
// export default Order;