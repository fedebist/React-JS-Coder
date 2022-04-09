import { useEffect } from 'react';
import {useState} from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import customFetch from '../utils/customFetch';
const {Products} = require('../data/Products');

let ItemListContainer = ({props}) => {

    const[datos, setDatos ] = useState([ ]);

    useEffect(() => {
        customFetch(2000, Products)
        .then(result=> setDatos(result))
        .catch(err => console.log(err))
    }, [ ]);



    return(
        <>
        <ItemCount />
        <ItemList/>
        </>
    );
    }

export default ItemListContainer;