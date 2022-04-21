import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import customFetch from "../utils/customFetch";
import ItemDetail from './ItemDetail';
import products from '../data/Products';



const ItemDetailContainer= () => {
    const [dato, setDato ] = useState({});
    const { productId } = useParams();

    useEffect(()=> {
        customFetch(500, products.find(item=> item.id
            === parseInt( productId )))
        .then(result=> setDato(result))
        .catch(err=> console.log(err))
    }, []);

    return(
        <ItemDetail item={dato} />
    )
}

export default ItemDetailContainer;