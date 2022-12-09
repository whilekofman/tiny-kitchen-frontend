import { useState, useEffect, createContext } from 'react'

export const OrderContext = createContext()

const OrderContextProvidor = (props) => {
    const [count, setCount] = useState(0)
    const [outstandingOrders, setOutStandingOrders] = useState(true)
    const [ordersState, setOrdersState] = useState({
        completeOrders: {
        1: {
            id: 1,
            name: "Mark",
            address: "12345",
            items: "Pizza",
            isComplete: true
            }
        },
        incompleteOrders: {
        2: {
            id: 2,
            name: "Kenny",
            address: "6789",
            items: "not pizza",
            isComplete: false
        },
             
        3: {
            id: 3,
            name: "Wilson",
            address: "5294",
            items: "cokesi",
            isComplete: false
        }
        
    }
        // ,
        // outstandingOrders: Object.keys(this.incompleteOrders).length
    })
    console.log(outstandingOrders)


    const addOrder = (name, address, items) =>{
        setOrdersState([...ordersState.incompleteOrders, {name, address, items}])
    }

    const completeOrder = (id) => {
        const nextState = { ...ordersState }
        const order = nextState.incompleteOrders[id]
        order.isComplete = true
        delete nextState.incompleteOrders[id]
        nextState.completeOrders[id] = order
        setOrdersState(nextState)
    }
    return ( 
        <OrderContext.Provider value={ { ordersState, addOrder, completeOrder, setOutStandingOrders, outstandingOrders } }>
            { props.children }
        </OrderContext.Provider>
     );
}
 
export default OrderContextProvidor;