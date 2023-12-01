import React, { useState, useEffect } from "react";
import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import {BasketList} from './BasketList';
import {Alert} from './Alert';
function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow,setBasketShow]=useState(false);
  const[alertName,setAlertName]=useState('');

  const addToBasket = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);
    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
    setAlertName(item.name);
  };

  const removeFromBasket=(itemId)=>{
    const newOrder=order.filter(el=>el.id!==itemId);
    setOrder(newOrder);
  }
  const incQuantity=(itemId)=>{
    const newOrder=order.map((el)=>{
      if(el.id===itemId){
        const newQuantity=el.quantity+1;
        return{
          ...el,
          quantity:newQuantity
        }
      }else{
        return el;
      }
    });
    setOrder(newOrder);
  };
  const decQuantity=(itemId)=>{
    const newOrder=order.map((el)=>{
      if(el.id===itemId){
        const newQuantity=el.quantity-1;
        return{
          ...el,
          quantity:newQuantity>=0?newQuantity:0
        }
      }else{
        return el;
      }
    });
    setOrder(newOrder);
  }

  const handleBasketShow=()=>{
    setBasketShow(!isBasketShow);
  }

  const closeAlert=()=>{
    setAlertName('');
  }

  useEffect(function getGoods() {
    fetch("https://fortniteapi.io/v2/shop?lang=ru", {
      headers: {
        Authorization: "00d86b65-dc7461df-10a6b2fd-c93167c4",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.shop[0]);
        data.shop && setGoods(data.shop);
        setLoading(false);
      });
  }, []);

  return (
    <main className="container content">
      <Cart quantity={order.length}  handleBasketShow={handleBasketShow}/>
      {loading ? <Preloader /> : <GoodsList goods={goods} addToBasket={addToBasket} />}
      {isBasketShow&&<BasketList order={order} handleBasketShow={handleBasketShow} removeFromBasket={removeFromBasket} incQuantity={incQuantity} decQuantity={decQuantity}/>}
      {alertName&&<Alert name={alertName} closeAlert={closeAlert}/>}
    </main>
  );
}
export { Shop };
