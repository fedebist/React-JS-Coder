import { useContext, useState } from "react";
import ItemCount from './ItemCount';
import React from 'react';
import CartButton from './CartButton';
import {CartContext} from './CartContext';

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext);

    const onAdd = (qty) => {
        alert("Seleccionaste " + qty + " items.");
        setItemCount(qty);
        test.addToCart(item); 
    }

    return (
        <>
        {   
            <div class='detail'>
            <div class='row'>
     
            <div class='col-lg-6'>
             <img src={item.img} />
             </div>
            <div class='col-lg-6'>
            <div class='detailTitle'>{item.title}</div>
              <div class='priceDetail'>{item.price}</div>
               <div class='stockDetail'>{item.stock} unidad(es) en stock</div>
               <div class='resumenDetail'>Lanzamiento: {item.release}</div>
               <div class='resumenDetail'>RAM: {item.ram}</div>
               <div class='resumenDetail'>Procesador: {item.procesador}</div>
               <div class='pesoDetail'>Cámara: {item.camera}</div>
               <div class='pesoDetail'>Peso: {item.peso}</div>
               <div class='pesoDetail'>Alto: {item.alto}</div>
               <div class='pesoDetail'>Ancho: {item.ancho}</div>
               <div class='pesoDetail'>Grosor: {item.grosor}</div>
               {
                      itemCount === 0  /* Luego de clickear agregar, elimina el botón y agrega otro */
                      ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                    : <CartButton />
                    }
               
               </div>
               </div>
            
            </div>
        }
    
    </>
    )
}


export default ItemDetail;