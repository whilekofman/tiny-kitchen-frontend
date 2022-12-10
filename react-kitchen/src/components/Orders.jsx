import React, {useContext, useEffect} from "react"
import { useDispatch } from "react-redux";
import { fetchOrders } from "../store/orders.jsx";
import { Order } from "./Order.jsx";
import { OrderContext } from "./OrderContext.jsx";

const Orders = ( ) => {
    // debugger
    const { ordersState, completeOrder, setOutStandingOrders } = useContext(OrderContext)
    const dispatch = useDispatch()
    useEffect(() => {
        if (!incompleteOrders.length) {
            setOutStandingOrders(false)
            
        }

    }, [ordersState])

    useEffect(() => {
        dispatch(fetchOrders())
    }, [])
    // useEffect = (() => {
    //     // if (!incompleteOrders.length) {
    //         console.log("help")
    //     // }
    // }, [ordersState])

    // const ordersList = orders.map(order => <Order order={order} key={order.id} toggleComplete/>)
    const incompleteOrders = Object.values(ordersState.incompleteOrders)
    const completeOrders = Object.values(ordersState.completeOrders)
    // console.log(incompleteOrders)
    const incompleteOrdersList = incompleteOrders.map(order => <Order order={order} key={order.id} completeOrder={completeOrder}/>)
    const completeOrdersList = completeOrders.map(order => <Order order={order} key={order.id} />)

    // console.log(ordersState)

    return ( 
        <div className="orders-list">
            {/* {ordersList} */}
            
            <div className="status-text">Incomplete Orders:</div>
            <div className="incompleteOrder">
                {incompleteOrdersList}
            </div>
            <div className="status-text">Complete Orders:</div>
            <div className="order">
                {completeOrdersList}
            </div>


            {/* {completeOrdersList} */}
        </div>
     );
}
 
export default Orders;