import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleExclamation, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

import { RootState } from '../../store/store';
import { useSelector, UseSelector } from 'react-redux';
import { setUserDetails } from '../../store/userdetailslice';
import productdata from './productdata';



const Showuserdata: React.FC = () => {
  const userDetails = useSelector((state: RootState) => state.user.details);
  const items = useSelector((state:RootState) => state.cart.items);

  if (!userDetails) {
    return <div className="text-red-500">No user details found.</div>;
  }

  const totalPrice = Object.keys(items).reduce((total, producting) => {
    const product = productdata.find((p) => p.productname === producting);
    if (!product) return total; // If product not found, skip
  
    return total + (product.actualprice * items[producting]); // Multiply price with quantity and add to total
  }, 0); 

  const [toggle, settoggle] = useState(false)


  
  const handletogglestate= ()=>{
    settoggle(!toggle)
  }
  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const today = new Date();

  return (
    <div className="h-full w-full bg-white text-black">
      <div className="grid md:grid-cols-2 h-full w-full">
        <div className="md:col-span-1 col-span-2 max-w-[700px] h-full">
          <div className="md:mx-48 md:my-16 mx-5 my-2 ">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjyZygphpOyAH48IDkm8M27iNUc3uizu_5Dw&s"
              alt="Checkout Image"
              className="h-16 w-16"
            />
            <div className="my-8 font-sans text-[15px] ">
              <h2>Order #584125</h2>
            </div>
            <div className="flex items-center space-x-3 md:translate-x-[-60px] md:translate-y-[-30px]">
              <span>
                <FontAwesomeIcon icon={faCircleCheck} className='md:text-[50px] text-[40px] text-blue-700 translate-y-[-20px]' />
              </span>
              <h1 className='md:text-2xl text-xl font-bold font-sans whitespace-nowrap'>Thank you,{userDetails.firstname}!</h1>
            </div>
            <div className='h-12 md:w-[600px] w-full bg-blue-100 rounded flex items-center justify-between py-2 px-5 whitespace-nowrap'>
              <div className='flex items-center space-x-3'>
                <span>
                  <FontAwesomeIcon icon={faCircleExclamation} className='text-[22px] text-blue-600' />
                </span>
                <h1 onClick={handletogglestate} className='md:text-[15px] cursor-pointer text-[13px] whitespace-normal md:whitespace-nowrap   font-sans font-semibold'>Your order is confirmed on {formatDate(today)} see details.</h1>
            </div>
              

              <span><FontAwesomeIcon icon={faChevronDown} className='text-gray-700 text-[14px]' onClick={handletogglestate} /></span>
            </div>
            {Object.keys(items).map((producting:string)=>{
    const product = productdata.find((p) => p.productname === producting);
    if (!product) return null;

  

  return (
    <>
    {toggle&&(
  <div className='space-y-2 h-auto w-auto mx-4 my-8 md:hidden block '>
    <div className='flex items-center justify-between'>
      <div className='flex space-x-2'>
      <img src={product.productimage}
      className='h-16 w-16 rounded'
      />
      <div className='h-6 w-6 rounded-full index text-center translate-x-[-28px] text-white  text-[14px] font-sans font-semibold translate-y-[-12px]'>
      <h4 className=''>{items[producting]}</h4>
      </div>
      
      <h3 className='my-4 text-[14px] font-sans text-black'>{product.productname}</h3>
      </div>
      <h1 className='font-semibold font-sans text-[15px] '>{items[producting]*product.actualprice}</h1>
    </div>
  
  </div>
  )}
  </>
  )

})}
       
            <div className='md:h-96 md:w-[530px] h-full max-w-[500px] mx-auto bg-white border-2 border-gray-500 my-12 rounded'>

              <h1 className='mx-5 my-6 font-semibold font-sans text-[18px]'>Order details</h1>
              <div className='space-y-2 '>
            <div className='md:flex md:items-center justify-between px-5'>
             
             <h1 className='text-[15px]  font-sans font-semibold '>Contact information</h1> 
             <h1 className='text-[15px]   font-sans font-semibold md:block hidden'>Payment Method</h1> 
             <h1 className='text-[14px] font-sans  block md:hidden'>
             {userDetails.email}
</h1>
            </div>
            <div className='md:flex md:items-center justify-between px-5'>
             
             <h1 className='text-[15px]  font-sans font-semibold md:block hidden '>{userDetails.email}</h1> 
             <h1 className='text-[15px]  font-sans font-semibold md:hidden block '>Payment Method</h1> 

             <h1 className='text-[14px]  font-sans  '>Cash on Delivery (COD) - Rs{totalPrice}</h1> 
            </div>
            </div>
            <div className='my-3'>
            <div className='md:flex md:items-center justify-between px-5'>
             
             <h1 className='text-[15px] font-sans font-semibold'>Shipping address</h1> 
             <h1 className='text-[15px] font-sans font-semibold md:block hidden'>Billing address</h1> 
            </div>
            <div className='md:flex md:items-center justify-between px-5 my-2'>
             
             <h1 className='text-[14px] font-sans '>{userDetails.firstname}</h1> 
             <h1 className='text-[14px] font-sans md:block hidden '>{userDetails.firstname}</h1> 
            </div>
            <div className='md:flex md:items-center justify-between px-5 my-2'>
             
             <h1 className='text-[14px] font-sans '>{userDetails.lastname}</h1> 
             <h1 className='text-[14px] font-sans md:block hidden  '>{userDetails.lastname}</h1> 
            </div>
            <div className='md:flex md:items-center justify-between px-5 '>
             
             <h1 className='text-[14px] font-sans '>{userDetails.address}</h1> 
             <h1 className='text-[14px] font-sans md:block hidden  '>{userDetails.address}</h1> 
            </div>
            <div className='md:flex md:items-center justify-between px-5 '>
             
             <h1 className='text-[14px] font-sans '>{userDetails.apartment}</h1> 
             <h1 className='text-[14px] font-sans md:block hidden '>{userDetails.apartment}</h1> 
            </div>
            <div className='md:flex md:items-centerjustify-between px-5 '>
             
             <h1 className='text-[14px] font-sans '>{userDetails.city}</h1> 
             <h1 className='text-[14px] font-sans md:block hidden  '>{userDetails.city}</h1> 
            </div>
            <div className='md:flex md:items-center justify-between px-5 '>
             
             <h1 className='text-[14px] font-sans '>{userDetails.phone}</h1> 
             <h1 className='text-[14px] font-sans md:block hidden '>{userDetails.phone}</h1> 
            </div>
            <div className='md:flex md:items-center justify-between px-5 '>
             
             <h1 className='text-[14px] font-sans '>{userDetails.postalcode}</h1> 
             <h1 className='text-[14px] font-sans md:block hidden '>{userDetails.postalcode}</h1>

              <h1 className='text-[15px] font-sans font-semibold md:hidden block my-2'>Billing address</h1>
              <h1 className='text-[14px] font-sans md:hidden block '>{userDetails.firstname}</h1>  
              <h1 className='text-[14px] font-sans md:hidden block '>{userDetails.lastname}</h1>  
              <h1 className='text-[14px] font-sans md:hidden block '>{userDetails.address}</h1>
              <h1 className='text-[14px] font-sans md:hidden block '>{userDetails.apartment}</h1> 
              <h1 className='text-[14px] font-sans md:hidden block '>{userDetails.city}</h1> 
              <h1 className='text-[14px] font-sans md:hidden block '>{userDetails.phone}</h1> 
              <h1 className='text-[14px] font-sans md:hidden block '>{userDetails.postalcode}</h1>              
            </div>
            </div>
            <h1 className='text-[15px] font-sans mx-2 my-2 font-bold '>Shipping Method</h1> 
            <h1 className='text-[14px] font-sans mx-2 my-2  '>Free</h1> 
            </div>

          <div className='my-2 flex items-center justify-between h-full md:w-[530px]'>
            <div className='flex items-center space-x-1'>
              <h3 className='text-sm font-sans'>Need help?</h3>
              <h3 className='text-sm font-sans text-blue-400'>Contact?</h3>
            </div>
            <button className='h-14 w-44 blu text-center text-white rounded fomt-sans font-semibold'>Continue Shopping</button>

          </div>
          <div className='h-[1px] md:w-[530px] bg-gray-500 my-6'></div>
          <div className='flex items-center space-x-3 my-4   text-blue-700 font-sans text-[14px] underline whitespace-normal'>
          <h1>Refund Policy</h1>
          <h1>Privacy Policy</h1>
          <h1>Terms of Service</h1>
        </div>
          </div>
        </div>
        <div className='lg:col-span-1 h-full w-[500px] bg-gray-100 mx-44 lg:block hidden '>
  {Object.keys(items).map((producting:string)=>{
    const product = productdata.find((p) => p.productname === producting);
    if (!product) return null;

  

  return (
  <div className='space-y-2 h-auto w-auto mx-10 my-20'>
    <div className='flex items-center justify-between'>
      <div className='flex space-x-2'>
      <img src={product.productimage}
      className='h-16 w-16 rounded'
      />
      <div className='h-6 w-6 rounded-full index text-center translate-x-[-28px] text-white  text-[14px] font-sans font-semibold translate-y-[-12px]'>
      <h4 className=''>{items[producting]}</h4>
      </div>
      
      <h3 className='my-4 text-[14px] font-sans text-black'>{product.productname}</h3>
      </div>
      <h1 className='font-semibold font-sans text-[15px] '>{items[producting]*product.actualprice}</h1>
    </div>
 
  </div>

  )
})}

<div className='h-[1px] max-w-[430px] mx-10  translate-y-[-30px] bg-gray-400'></div>
<div className='flex items-center justify-between max-w-[430px] my-3 mx-10'>
  <h2 className='font-serif text-[15px]'>Subtotal</h2>
  <h2 className='font-sans text-[15px] font-bold'>Rs,{totalPrice}</h2>
</div>
<div className='flex items-center justify-between max-w-[430px] my-3 mx-10'>
  <h2 className='font-serif text-[15px]'>Shipping</h2>
  <h2 className='font-sans text-[15px] font-bold'>Free</h2>
</div>
<div className='h-[1px] max-w-[430px] mx-10   bg-gray-400'></div>
<div className='flex items-center justify-between max-w-[430px] my-3 mx-10'>
  <h2 className='font-serif text-[15px]'>Total</h2>
  <h2 className='font-sans text-[15px] font-bold text-xl'>PKR Rs,{totalPrice.toFixed()}</h2>
</div>
</div>

      </div>
    </div>
  );
}

export default Showuserdata;
