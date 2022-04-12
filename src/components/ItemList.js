import Products from '../data/Products';
import Item from './Item';
import Container from '@mui/material/Container';

let ItemList = ({items}) => {
     return (
     <Container>
      {
       items.length > 0
       ?
      items.map(item=>
      <Item
      key={item.id}
      title={item.title}
      price={item.price}
      fabricante={item.fabricante}
      img={item.img}
      almacenamiento={item.almacenamiento}
      stock={item.stock}
       />)
       :
       <p>Cargando...</p>
}
      </Container>
      );
}

export default ItemList;