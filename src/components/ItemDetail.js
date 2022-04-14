import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }

    return (
        <>
        {
            <div>
            item.image
            ?
     

             <img src={item.image[0]} />
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