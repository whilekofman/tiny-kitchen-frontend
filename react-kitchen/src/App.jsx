import { useState, useEffect, createContext } from 'react'
import reactLogo from './assets/react.svg'
import Orders from './components/Orders.jsx'
import './App.css'
import OrderForm from './components/OrderForm'
import OrderContextProvidor from './components/OrderContext'
// import { useEffect } from 'react'

// import CompleteOrders from './components/orders.jsx'
export const orderContext = createContext()

// const backgroundChange = 
 
function App() {

  return (
    <div className="App">
        <OrderContextProvidor>
          
          <Orders />
          <OrderForm />

        </OrderContextProvidor>

    </div>
  )
}

export default App
//  {/* orders={Object.values(ordersState.incompleteOrders)}/> */}
//           {/* COMPLETE ORDERS: */}
//           {/* <Orders orders={Object.values(ordersState.completeOrders)}/> */}
//           {/* <Orders /> */}