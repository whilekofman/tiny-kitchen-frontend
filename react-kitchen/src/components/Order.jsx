import React from "react";
import { useContext } from "react";
import { orderContext } from "../App";
export const Order = ({ order, completeOrder }) => {

    const handleCompletion = e => {
        e.preventDefault()
        const id = order.id
        completeOrder(id)


    }
    //     setOrdersState(orderState => {
    //         orderState.completeOrders.append(incompleteOrders.id)
    //         orderState.incompleteOrders.delete(id)
    //   })

    // const orders = useContext(orderContext)
//     const completeToggle = id => {
//         e.preventDefault()
//         e.target.value = id
//         console.log('click')
//         setOrdersState(orderState => {
//             orderState.completeOrders.append(incompleteOrders.id)
//             orderState.incompleteOrders.delete(id)
//       })
//   }

    return ( 
        <div className="order">
            <span className="name">{order.name}</span><br />
            <span className="address">{order.address}</span><br />
            <span className="items">{order.items}</span><br />
            {!order.isComplete && (
            <button className="isComplete" onClick={handleCompletion}>Complete?</button>)}
            <br />

        </div>
     );
}
    
// export default Order;