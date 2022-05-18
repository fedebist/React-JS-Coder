import {Badge} from '@material-ui/core';
import logoCarrito from '../multimedia/CART.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import  CartContext  from './CartContext';

let CartWidget = () => {
    const test = useContext(CartContext);

    return(
        <Badge badgeContent={6} color="primary">
       <ShoppingCartIcon/>
       </Badge>
    )
}

export default CartWidget;