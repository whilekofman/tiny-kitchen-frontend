import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Orders from './components/Orders.jsx'
import './App.css'
import OrderForm from './components/OrderForm'

// import CompleteOrders from './components/orders.jsx'

function App() {
  const [count, setCount] = useState(0)
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
      }
    }
  })

  const completeToggle = id => {
      setOrdersState(orderState => {
        orderState.completeOrders.append(incompleteOrders.id)
        orderState.incompleteOrders.delete(id)
      })
  }

  return (
    <div className="App">
      INCOMPLETE:
      <Orders orders={Object.values(ordersState.incompleteOrders)}/>
      Complete:
      <Orders orders={Object.values(ordersState.completeOrders)}/>
      <OrderForm />
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  )
}

export default App
