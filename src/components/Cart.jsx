import { useContext } from "react";
import {CartContext} from './CartContext';
import {Link} from 'react-router-dom';
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import db from '../utils/firebaseConfig';

const Cart = () => {
    const test = useContext(CartContext); /* Leyendo context como test */
    const checkout = () =>{
        let order = {
            buyer: {
                name: "Muñeco Gallardo",
                email: 'muñeco@gallardo.com',
                phone: '9121831'
            },
            date: serverTimestamp(),
            items: test.cartList.map(item => ({
                id: item.idItem,
                title: item.title,
                price: item.price,
                qty: item.qtyItem
            })),
            total: test.subTotal()
        }

        test.cartList.forEach(async (item) => {
            const itemRef = doc(db, "products", item.idItem);
            await updateDoc(itemRef, {
              stock: increment(-item.qtyItem)
            });
          });
          const createOrderInFirestore = async () => {
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc(newOrderRef, order);
            return newOrderRef;
          }
        
          createOrderInFirestore()
            .then(result => alert('Your order has been created. Please take note of the ID of your order.\n\n\nOrder ID: ' + result.id + '\n\n'))
            .catch(err => console.log(err));
        
          test.removeCart();

    }
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
                <button class='backShop' onClick={checkout}>Comprar</button>
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