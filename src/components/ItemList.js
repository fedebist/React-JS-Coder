import Item from './Item';
import Container from '@mui/material/Container';

let ItemList = ({items}) => {
     return (
     <Container>
      { /* operador ternario */
       items.length > 0
       ?
      items.map(item=>
      <Item
      productId={item.id}
      key={item.id}
      title={item.title}
      price={item.price}
      fabricante={item.fabricante}
      img={item.img}
      almacenamiento={item.almacenamiento}
      stock={item.stock}
      currency={item.currency}
       />)
       :
       <p>Loading...</p>
}
      </Container>
      );
}

export default ItemList;