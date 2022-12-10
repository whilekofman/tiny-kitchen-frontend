const RECEIVE_ORDERS = 'orders/RECEIVE_ORDERS'
const RECEIVE_ORDER = 'order/RECEIVE_ORDER'
const REMOVE_ORDER = 'orderId/DELETE_ORDER'

const receiveOrders = orders => ({
    type: RECEIVE_ORDERS,
    orders
})

const receiveOrder = order => ({
    type: RECEIVE_ORDER,
    order
})

const removeOrder = orderId => ({
    type: REMOVE_ORDER,
    orderId
})

export const getOrders = () => ({ orders } ) => orders ? Object.values(orders) : null
export const getOrder = orderId => ({ orders } ) => orders ? orders[orderId] : null

export const fetchOrders = async dispatch => {
    const res = await fetch('api/orders')
    // const data = await res.json()
    debugger
    dispatch(receiveOrders(res.data))

}

export const updateOrder = (order) => async dispatch => {
    const res = await fetch(`api/order/${order.id}`, {
        method: "patch",
        body: order,
        header: "application/json",

    })
    dispatch(fetchOrders)

}

export const createOrder = (order) => async dispatch => {
    const res = await fetch('api/orders', {
        method: "post",
        header: "application/json",
        body: JSON.stringify(order)
    })
    data = res.json()
    dispatch(fetchOrders(data))
}

export const deleteOrder = orderId => async dispatch => {
    const res = await fetch(`api/orders/${orderId}`, {
        method: "DELETE",
        header: "application/json"
    });
    // const data = await res.json()
    dispatch(removeOrder(data))
}

const ordersReducer = (state = {}, action) => {
    const nextState = { ...state }
    switch(action.type) {
        case RECEIVE_ORDERS:
            return { ...nextState, ...action.orders }
        case RECEIVE_ORDER:
            delete nextState[orderId]
            return nextState
        default:
            return state;
    }
}

export default ordersReducer