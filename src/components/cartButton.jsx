import {Link} from 'react-router-dom';

const cartButton = () => {
    return(
        <Link to='/Cart'><button classname='btnCart'>Ir al carrito</button></Link>
    )
}

export default cartButton;