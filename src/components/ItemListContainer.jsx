import { useEffect } from 'react';
import {useState} from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import customFetch from '../utils/customFetch';
import Products from '../data/Products';
import { useParams } from 'react-router-dom';

let ItemListContainer = ({}) => {

    const[datos, setDatos ] = useState([ ]);
    const { idCategory } = useParams(); /* Hook de react router dom */

    useEffect(() => {
        if(idCategory== undefined){
        customFetch(1000, Products)
        .then(result=> setDatos(result))
        .catch(err => console.log(err))
        } else{
        customFetch(1000, Products.filter(item=> item.categoryId
         === parseInt(idCategory)   ))
        .then(result=> setDatos(result))
        .catch(err => console.log(err))
        }
    }, [ idCategory ]);

    return(
        <>
        <ItemList items={datos}/>
        </>
    );
    }

export default ItemListContainer;