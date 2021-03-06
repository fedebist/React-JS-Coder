import { createContext } from "react";
import {useState} from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList ] = useState([]);
    const addToCart= (item, qty) =>{
      let find = cartList.find(product=> product.idItem === item.id);
      if (find=== undefined){
       setCartList([
         ...cartList,/* dejar cartList de antes y agregar nuevo elemento */
         {
           idItem: item.id,
           img: item.img,
           title: item.title,
           price: item.price,
           qtyItem: qty
         }
       ]);
      } else{
        find.qtyItem += qty;
      }
    }

  const removeCart = () => {
    setCartList([ ])
  }
 /* remover item */
  const deleteItem = (id) => {
    let result = cartList.filter(item => item.idItem != id);
    setCartList(result);
  }

  const calcTotalPerItem = (idItem) => {
    let index = cartList.map(item=> item.idItem). indexOf(idItem);
    return cartList[ index].price * cartList[ index].qtyItem
  }

  const subTotal = () => {
    let totalPerItem = cartList.map(item => calcTotalPerItem(item.idItem));
    return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue);
}

const calcItemsQty = () => {
  let qtys = cartList.map(item => item.qtyItem);
  return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
}

    return(
        <CartContext.Provider value={{cartList, addToCart, removeCart, deleteItem, calcTotalPerItem, subTotal, calcItemsQty}}> {/* estado global + función global */}
          {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;