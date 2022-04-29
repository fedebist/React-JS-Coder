import { useState } from "react";
import {Link} from 'react-router-dom';
import ItemCount from './ItemCount';
import React from 'react';
import CartButton from './cartButton';

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);

    const onAdd = (qty) => {
        alert("Seleccionaste " + qty + " items.");
        setItemCount(qty);
    }

    return (
        <>
        {   
            <div class='detail'>
            <div class='row'>
     
            <div class='col-lg-6'>
             <img src={item.img} />
             {
                      itemCount === 0  /* Luego de clickear agregar, elimina el botón y agrega otro */
                      ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                    : <CartButton />
                    }
             </div>
            <div class='col-lg-6'>
            <div class='detailTitle'>{item.title}</div>
              <div class='priceDetail'>{item.price}</div>
               <div class='stockDetail'>{item.stock} unidades en stock</div>
               </div>
            
            </div>
            </div>
        }
    
    </>
    )
}


export default ItemDetail;