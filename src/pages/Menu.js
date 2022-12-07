import React, { useState, useReducer, useEffect } from 'react';
import '../App.css';
import {useNavigate} from 'react-router-dom';
import CustomAxios from '../utils/CustomAxios';
import MenuComponet from '../components/Menus';
import OrdersCompnent from '../components/Orders';


function matchOrder(arr, key){
  return arr.find(x => x.menuId === key);
}

const reducer = (state, action) => {
  let copy = state;
  let isMatch = matchOrder(copy.ordersDetail, action.payload.menu.id);
  
  if(isMatch === undefined){
    let newOrdersDetail = initOrders.ordersDetail;
    newOrdersDetail = {
      id: copy.ordersDetail.length
      , price: action.payload.menu.price
      , amount:1
      , menuId: action.payload.menu.id
      , menuName : action.payload.menu.menuName
    };
    return{
      count : copy.count+1,
      price : copy.price+action.payload.menu.price,
      ordersDetail : [...copy.ordersDetail, newOrdersDetail]
    }
  }else{
    let newOrdersDetail = isMatch;
    copy.ordersDetail.map( v => {
      if(v.menuId === action.payload.menu.id){
        v.count = v.count+1;
        v.price = v.price + action.payload.menu.price;
        v.amount = v.amount+1;
        v.menuName = v.menuName;
        return;
      }
    });

    return{
      count : copy.count+1,
      price : copy.price+action.payload.menu.price,
      ordersDetail : copy.ordersDetail
    }
  }
};

//주문 타입 설정.
const ORDER_TYPE = {
  order : 'order',
  update : 'update',
  cancel : 'cancel'
}

// 주문 초기 데이터 생성.
const initOrders = {
  count: 0,
  price: 0,
  status: "0",
  ordersDetail : []
};

export default function Menu() {
  
  const [menus, setMenus] = useState([]);
  const [orderInfo, dispatch] = useReducer(reducer, initOrders);

  useEffect(() => {
      async function requestGet(){
      let param = {
        sort : "createdDate,asc",
        page:0,
        size:10
      };

      const result = await CustomAxios.get('http://localhost:8080/api/menu', {params : param}
      );
      // console.log("result="+JSON.stringify(result.data.list));
      setMenus(result.data.list);
    }
    requestGet();
}, []);
  
  return (
    <>
      <div className='flex-2 overflow-y-auto max-w-5xl mx-auto'>
        <MenuComponet data={ menus } dispatch={ dispatch } ORDER_TYPE={ ORDER_TYPE }></MenuComponet>
      </div>
      <div className='min-h-12 max-h-48 border-t-2 md:border-t-3'>
        { orderInfo && <OrdersCompnent data={ orderInfo }/>}
      </div>
    </>
  );
}