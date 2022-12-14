import { useCallback, useContext } from "react";
import { useRef } from "react";
import { orderContext } from "../App";
import { OrderContext } from "./OrderContext";


const OrderForm = () => {

    const nameInput = useRef();
    const addressInput = useRef();
    const  itemsInput = useRef();
    const isCompleteInput = useRef();

    const { addOrder } = useContext(OrderContext)
    
    const formSubmission = useCallback(e => {
        e.preventDefault()
        const formData = {
            name: nameInput.current?.value,
            address: addressInput.current?.value,
            items: itemsInput.current?.value,

        };
        console.log({orders})
    }, [])

    return ( 
        <form className="order-form" onSubmit={formSubmission}>
            <input placeholder="name" type="text" className="name-input" ref={nameInput}/>
            <input placeholder="address" type="text" className="address-input" ref={addressInput}/>
            <input placeholder="items, Please use commas to seperate items" type="text" className="items-input" ref={itemsInput}/>
            {/* <input type="checkbox" className="is-complete-marker" /> */}
            <button className="submit" type="submit" onSubmit={formSubmission}>Place order</button>
        </form>
     );
}
 
export default OrderForm;