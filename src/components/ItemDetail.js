import ItemCount from './ItemCount';
import React from 'react';

const ItemDetail = ({ item }) => {

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }

    return (
        <>
        {
            <div>
     

             <img src={item.img} />
              {item.title}
               {item.price}
               {item.stock} unidades en stock
               <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
            <p>Cargando...</p>
            </div>
        }
    
    );
    
    </>
    )
}


export default ItemDetail;