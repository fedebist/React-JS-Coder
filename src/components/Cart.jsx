import { useContext } from "react";
import {CartContext} from './CartContext';

const Cart = () => {
    const test = useContext(CartContext); /* Leyendo context como test */

    return (
        <>
            <h1>Carrito de compras</h1>
            <button onClick={test.removeCart}>Eliminar todo</button>
            {
                test.cartList.length > 0 && (
                <div>
                {
                test.cartList.map(item =>
                <div class='cartContainer'>
                <div class='container'>
                <div class='row'>
                <div class='col-lg-8'>
                <img src={item.img}></img>
                </div>
                <div class='col-lg-2'>
                <p>Producto: {item.title} </p>
                </div>
                <div class='col-lg-2'>
                <div>Cantidad:{item.qtyItem}</div>
                {item.price}</div>
                <button onClick={()=> test.deleteItem
                (item.idItem)}>Eliminar</button>
                </div>
                </div>
                </div>
                )
                }
                </div>
                )
            }
        </>
    );
}

export default Cart;