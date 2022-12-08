import React from "react";
export const Order = ({ order, toggleComplete }) => {
    const handleCompletion = e => {
        e.preventDefault()
        console.log('click')
    }

    return ( 
        <div className="order">
            <span className="name">{order.name}</span>
            <span className="address">{order.address}</span>
            <span className="items">{order.items}</span>
            {!order.isComplete && (
            <button className="isComplete" onClick={handleCompletion}>Complete?</button>)}


        </div>
     );
}
    
// export default Order;