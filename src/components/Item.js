import Products from '../data/Products';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

let Item = ({ title, price, fabricante, img, almacenamiento, stock, currency, productId }) => {
    return (
       <>
       <div class='cardsTienda'>
       <ul>
       <li>
       <Link to={'/item/'+ productId}><img src={img}/></Link>
       <div class='title'>{title}</div>
       <div class='price'>{price} {currency}</div>
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