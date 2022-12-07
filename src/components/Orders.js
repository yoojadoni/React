import React, { Component } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

class Orders extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const order = this.props.data;
        const ordersList = this.props.data.ordersDetail;
        // console.log('components data='+JSON.stringify(ordersList));
        
        // <div className="grid grid-rows-3 grid-flow-col"></div>
        return(
            <>
            <div className="grid grid-rows-2 grid-flow-col gap-0">
                <div className='flex items-center justify-center row-span-3 
                border-r-2 border-b-2 md:border-r-3 md:border-b-3'> 
                    <span className=''>주문 목록</span>
                </div>
                <div className='col-span-6 border-r-2 border-b-2 md:border-r-3 md:border-b-3'>
                    <div className='grid grid-rows-1 grid-flow-col'>
                        <div className='col-span-1 md:grid-cols-5 text-right '>
                            <span className='text-xs sm:text-base'>총 수량 :</span>
                        </div>
                        <div className='col-span-1 text-right'>
                            <span className='text-xs sm:text-base'>{order.count} 개</span>
                        </div>
                    </div>
                </div>
                <div className='row-span-2 col-span-6 border-r-2 border-b-2 md:border-r-3 md:border-b-3'>
                <div className='grid grid-rows-1 grid-flow-col'>
                        <div className='col-span-1 md:grid-cols-5 text-right '>
                            <span className='text-xs sm:text-base'>총 금액 :</span>
                        </div>
                        <div className='col-span-1 text-right'>
                            <span className='text-xs sm:text-base'>{order.price} 원</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="order-list">
                    <ul>
                        <h4>주문목록</h4> 
                        <br></br>
                        { ordersList.map((orders) =>
                            <li key={orders.id}>
                                <span>{orders.menuName} {orders.amount} 개</span>
                                <h4></h4>
                                <h4>가격 : {orders.price}</h4>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            {/* <div className="bg-gray-300">
	        <div className="py-4">
            <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg  md:max-w-5xl">
                <div className="md:flex ">
                    <div className="w-full p-4 px-5 py-5">
                        <div className="md:grid md:grid-cols-3 gap-2 ">
                            <div className="col-span-2 p-5">
                                <h1 className="text-xl font-medium ">Shopping Cart</h1>
                                <div className="flex justify-between items-center mt-6 pt-6">
                                    <div className="flex  items-center">
                                        <div className="flex flex-col ml-3">
                                            <span className="md:text-md font-medium">Chicken momo</span>
                                            <span className="text-xs font-light text-gray-400">#41551</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div> */}
            </>
        )
    }
}

export default Orders;