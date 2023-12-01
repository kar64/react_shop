import React from 'react';

function BasketItem(props) {
    const{
        id,
        name,
        price,
        quantity,
        removeFromBasket=Function.prototype,
        incQuantity=Function.prototype,
        decQuantity=Function.prototype
    }=props;
  return (
    <li  className="collection-item ">{name}X<i class="material-icons basket-quantity" onClick={()=>decQuantity(id)}>remove</i>{quantity}<i class="material-icons basket-quantity " onClick={()=>incQuantity(id)}>add</i>={price*quantity}<span  class="secondary-content" onClick={()=>removeFromBasket(id)}><i class="material-icons basket-delete" >clear</i></span></li>
  );
}
export {BasketItem}