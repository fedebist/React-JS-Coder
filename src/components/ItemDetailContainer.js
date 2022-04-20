import { useEffect, useState } from "react"
import customFetch from "../utils/customFetch";
import ItemDetail from './ItemDetail';
const {products} = require('../data/Products');
import { useParams } from 'react-router-dom';


const ItemDetailContainer= () => {
    const [dato, setDato ] = useState({});
    const { productId } = useParams();

    useEffect(()=> {
        customFetch(2000, products.find(item=> item.id
            === parseInt( productId )))
        .then(result=> setDato(result))
        .catch(err=> console.log(err))
    }, []);

    return(
        <ItemDetail item={dato} />
    )
}

export default ItemDetailContainer;