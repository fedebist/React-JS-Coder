import Products from '../data/Products';
import Container from '@mui/material/Container';

let Item = ({ title, price, fabricante, img, almacenamiento, stock }) => {
    return (
       <>
       <img src={img}/>
       {price}
       {stock}
       {title}
       {fabricante}
       {almacenamiento}
       
       
       
       
       </>
    );
    }

export default Item;