import React from 'react';

export default function Menus(props){
    const menuList = props.data;
    const ORDER_TYPE = props.ORDER_TYPE;
    const dispatch = props.dispatch;
    
    // grid place-items-center
    return (
    // <div className='sm:h-1/3 md:h-1/5 lg:h-1/7 border-b-2 mt-1 border-teal-100'>
    // <div className="grid grid-cols-3 gap-4 flex place-items-center bg-gray-500">
    <div >
        <div className='grid grid-cols-3 gap-1 flex place-items-center'>
            {menuList.map((menu) =>
                <div className='w-4/5 h-4/5 sm:w-4/5 h-4/5 lg:w-4/5 h-3/5 
                hover:border-1 border-cyan-100' key={menu.id}>
                    <img className='w-full h-full'
                        src={menu.imageUrl}
                        onClick={() => {
                        dispatch({type: ORDER_TYPE.order, payload:{                
                            menu
                        }});
                    }}
                    />
                    <p className='text-xs sm:text-base text-center'
                    >{menu.menuName}</p>
                </div>
            )}
        </div>
        
    </div>
      );
}