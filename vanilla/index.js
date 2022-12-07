// document.getElementById
// document.addEventListener('DOMContentLoaded', () => {
//     const root = document.getElementById(root)

// })
const render = () => {
    const root = document.getElementById("root")
    const App = document.createElement("div")
    const OrderForm = document.createElement("form")
    
    const name = document.createElement("input")
    name.placeholder = "Name"

    const address = document.createElement("input")
    address.placeholder = "Address"

    const items = document.createElement("input")
    items.placeholder = "Items"

    const submit = document.createElement("button")
    submit.innerText = "submit"
    OrderForm.append(name, address, items, submit)
    App.append(OrderForm)
    // App.innerText = "Hello World"
    root.append(App)
}

render()