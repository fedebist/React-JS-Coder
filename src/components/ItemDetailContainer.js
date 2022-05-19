import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { firestoreFetchOne } from "../utils/fireStoreFetch";

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { productId } = useParams();

    useEffect(() => {
        firestoreFetchOne(productId)
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);
    
    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;