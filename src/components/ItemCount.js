import {useState} from 'react';

let ItemCount = () =>{
let [change, setChange] = useState(0);

let count = () => {
    if(change<5){
   setChange(change+1);
}
}

let reduct = () => {
   if(change>0){
   setChange(change-1);
}
}


return(
  <div class='itemCount'>
  <button onClick={reduct} class='btnCantidad'>-</button>
  <p class='cantidad'>{change}</p>
  <button onClick={count} class='btnCantidad'>+</button>
  


  </div>


);



}

export default ItemCount; 