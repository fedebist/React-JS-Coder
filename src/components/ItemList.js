import Products from '../data/Products';

let ItemList = (props) => {
     return (
        <div>
        <h2>{props.title}</h2>
        <h3>{props.id}</h3>
        <h3>{props.price}</h3>
        <h3>{props.fabricante}</h3>
        <img width='250px' height='200px' src={props.img}/>
        <h3>{props.almacenamiento}</h3>
        <h3>{props.stock}</h3>

        
        </div>
     )
}


export default ItemList;