import Products from '../data/Products';

let ItemList = (items) => {
     return (
      <>
      {
      Products.map(item=>
      <ItemList
      key={item.id}
      title={item.title}
      price={item.price}
      fabricante={item.fabricante}
      img={item.img}
      almacenamiento={item.almacenamiento}
      stock={item.stock}

      />
      )
}
      </>
  );
}


export default ItemList;