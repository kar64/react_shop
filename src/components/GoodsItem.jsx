import React from "react";
function GoodsItem(props) {
    const{
          addToBasket=Function.prototype,
          mainId:id,
          displayName:name,
          displayDescription:description
   }=props;
   
   const{
    regularPrice:price
    }=props.price
    const{
        background
    }=props.displayAssets[0]

  return (
    <div className="card" >
        <div className="card-image">
          <img src={background}/>
          <span className="card-title">{name}</span>
          
        </div>
        <div className="card-content">
          <p>{description}</p>
        </div>
        <div className="card-action">
          <button className='btn' onClick={()=>addToBasket({
            id,
            name,
            price
          })}>Купить</button>
          <span className='right'>{price}</span>
        </div>
      </div>
  );
}
export { GoodsItem };