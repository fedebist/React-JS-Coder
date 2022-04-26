import { useState } from "react";
import {Link} from 'react-router-dom';
import ItemCount from './ItemCount';
import React from 'react';

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);

    const onAdd = (qty) => {
        alert("Seleccionaste " + qty + " productos.");
        setItemCount(qty);
    }

    return (
        <>
        {   
            <div class='detail'>
            <div class='row'>
     
            <div class='col-lg-6'>
             <img src={item.img} />
             <div class='detailTitle'>{item.title}</div>
             </div>
            <div class='col-lg-3'>
               {item.price}
               </div>
               <div class='col-lg-3'>
               {item.stock} unidades en stock
               </div>
               {
                      itemCount === 0
                      ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                    : <Link to='/cart' style={{textDecoration: "none"}}><button /></Link>
                    }
            <p>Cargando...</p>
            </div>
            </div>
        }
    
    );
    
    </>
    )
}


export default ItemDetail;