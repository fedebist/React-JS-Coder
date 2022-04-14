import Products from '../data/Products';
import Container from '@mui/material/Container';

let Item = ({ title, price, fabricante, img, almacenamiento, stock }) => {
    return (
       <>
       <div class='cardsTienda'>
       <ul>
       <li>
       <img src={img}/>
       <div class='title'>{title}</div>
       <div class='price'>{price}</div>
       <div class='fabricante'>Fabricante: {fabricante}</div>
       <div class='almacenamiento'>Almacenamiento: {almacenamiento}</div>
       <div class='stock'>El stock disponible es de {stock} unidad(es)</div>
       </li>
       
       </ul>
       </div>
       
       </>
    );
    }

export default Item;