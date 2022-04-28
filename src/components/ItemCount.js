import {useState, useEffect} from 'react';

let ItemCount =  ({ stock = 0, initial = 1,  onAdd }) =>{
let [change, setChange] = useState(0);

useEffect(() => {
   setChange(initial);
},[]);

let count = () => {
    if(change<stock){
   setChange(change+1);
}
}

let reduct = () => {
   if(change> initial+1){
   setChange(change-1);
}
}


return(
  <div class='itemCount'>
  <button onClick={reduct} class='btnCantidad'>-</button>
  <p class='cantidad'>{change}</p>
  <button onClick={count} class='btnCantidad'>+</button>

  <button class='btnCart' onClick={() => onAdd(change)}> Agregar al carrito</button>
  


  </div>

  


);



}

export default ItemCount; 