import { useContext } from "react";
import {CartContext} from './CartContext';
import {Link} from 'react-router-dom';

const Cart = () => {
    const test = useContext(CartContext); /* Leyendo context como test */

    return (
        <>
            <h1 class='titleCarrito'>Carrito de compras</h1>
            {/* Operador ternario */}
            {
            (test.cartList.length > 0)
            ? 
            <button onClick={test.removeCart}>Eliminar todo</button>
            : 
            <div class='cartFather'>
            <div class='emptyCart'>Tu carrito está vacío, ¡comenzá a llenarlo!</div>
            <Link to='/'><div><button class='backShop'>Ir a la tienda</button></div></Link>
            </div>
            }
            {
                test.cartList.length > 0 && (
                <div>
                {
                test.cartList.map(item =>
                <div class='cartContainer'>
                <div class='container'>
                <div class='row'>
                <div class='col-lg-5'>
                <img src={item.img}></img>
                </div>
                <div class='col-lg-7'>
                <div>Producto: {item.title} </div>
                <div>Cantidad: {item.qtyItem} item(s)</div>
                <div>Precio: ${item.price}</div>
                <div>Subtotal: ${test.calcTotalPerItem(item.idItem)}</div>
                </div>
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
            {
                test.cartList.length > 0 &&
                <>
                <div class='purchaseFather'>
                <div class='purchaseContainer'>
                <div class='container'>
                <div class='row'>
                <div class='col-lg-12'>
                <div class='purchaseTitle'>Resumen de la compra</div>
                <div>Total de la compra: $ {test.subTotal()}</div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </>
            }
        </>
    );
}

export default Cart;