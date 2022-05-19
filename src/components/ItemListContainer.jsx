import { useEffect } from 'react';
import {useState} from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { firestoreFetch } from '../utils/fireStoreFetch';

let ItemListContainer = ({}) => {

    const[datos, setDatos ] = useState([ ]);
    const { idCategory } = useParams(); /* Hook de react router dom */

    useEffect(() => {
        firestoreFetch(idCategory)
            .then(result => setDatos(result))
            .catch(err => console.log(err));
    }, [idCategory]);

    //componentWillUnmount
    useEffect(() => {
        return (() => {
            setDatos([]);
        })
    }, []);

    return (
            <ItemList items={datos} />
    );
}
export default ItemListContainer;