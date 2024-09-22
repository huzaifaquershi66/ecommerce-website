import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus,faChevronDown } from '@fortawesome/free-solid-svg-icons'; 
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import productdata from './productdata';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { setUserDetails } from '../../store/userdetailslice';

type userdetails = {
email:string|number,
firstname:string,
lastname:string,
address:string,
apartment:string,
city:string,
postalcode?:string,
phone:string

}

const collectdetail = ({
  email,
  firstname,
  lastname,
  address,
  apartment,
  city,
  postalcode,
  phone}: userdetails): userdetails => {
  return {
    email,
    firstname,
    lastname,
    address,
    apartment,
    city,
    postalcode,
    phone,
  };
};
const Checkout = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
 
  const [email, setEmail] = useState<string | number>("");
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [apartment, setApartment] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [postalcode, setPostalcode] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const [order, setOrder] = useState<userdetails | null>(null); 
  const items = useSelector((state:RootState) => state.cart.items);
  const [toggle, settoggle] = useState(false)


  
  const handletogglestate= ()=>{
    settoggle(!toggle)
  }

  const totalPrice = Object.keys(items).reduce((total, producting) => {
    const product = productdata.find((p) => p.productname === producting);
    if (!product) return total; // If product not found, skip
  
    return total + (product.actualprice * items[producting]); // Multiply price with quantity and add to total
  }, 0); 
  
  const quantitypro = Object.keys(items).reduce((total, producting) => {
    const product = productdata.find((p) => p.productname === producting);
    if (!product) return total; // If product not found, skip
  
    return total + ( items[producting]); // Multiply price with quantity and add to total
  }, 0);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    if (!email || !firstname || !lastname || !address || !apartment || !city || !phone) {
      alert("All fields are required");
      return; // Stop submission if any field is missing
    }
   
    // Prevent form from refreshing the page

    // Collect user details from the form
    const userDetails = collectdetail({
      email,
      firstname,
      lastname,
      address,
      apartment,
      city,
      postalcode,
      phone,
    });
    if (userDetails) {
      setOrder(userDetails)
   
      dispatch(setUserDetails(userDetails))
      navigate("/userdetail")
    }else{
      alert("all fields are required")
    }

 // Set the collected details in state
  };

  
  return (
    <div className="h-full w-full bg-white text-black relative">
      <div className="h-16 w-full flex items-center justify-between mx-24 my-5 relative">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjyZygphpOyAH48IDkm8M27iNUc3uizu_5Dw&s"
          alt="Checkout Image"
          className="h-16 w-16"
        />
        <div className="flex-grow" /> {/* Spacer */}
        <span className='absolute right-40 top-1/2 transform -translate-y-1/2'>
          <FontAwesomeIcon 
            icon={faCartPlus} 
            className="text-[20px] text-gray-700"
          />
        </span>
      </div>
      <div className='w-full h-[1px] bg-gray-400'></div>
      <div className='grid md:grid-cols-2 h-full w-full'>
        <div className='md:col-span-1 col-span-2 h-full max-w-[900px]'>
          <div className='md:mx-24 mx-4 my-16'>
            <div className='flex items-center space-x-2 justify-between'>
              <h1 className='font-bold text-xl font-sans'>Contact</h1>
             
              <h3 className='text-blue-700 whitespace-nowrap underline'>Log in</h3>
            
            </div>
            <div className='w-full h-8 my-4 '>
<input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email or phone number' className='px-3 rounded h-12 w-full bg-transparent border-2 border-gray-500' />
            </div>
            <div className='flex items-center space-x-2 '>
            <input type='checkbox' className='h-4 w-4 my-4' />
            <h3 className='font-semibold font-sans text-[15px] my-4'>Email me with news and offers</h3>
            </div>
          <h1 className='font-bold text-xl font-sans my-4'>Delivery</h1>
          <div className='w-full h-12 my-3 '>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
        Select Country
      </label>
            <select className='w-full h-12 border-2 border-gray-500' >
    
            
                <option>Pakistan</option>
            </select>
          </div>
          <div className='flex items-center space-x-2 h-8 w-full my-14'>
            <input value={firstname} onChange={(e)=>setFirstname(e.target.value)} className='h-12 w-full px-3 bg-transparent border-2 border-gray-500' type='text' placeholder='First name'/>
            <input value={lastname} onChange={(e)=>setLastname(e.target.value)}  className='h-12 w-full px-3 border-2 border-gray-500' type='text' placeholder='Last name'/>
          </div>
          <div className='w-full h-12 translate-y-[-27px] '>
<input type='text' value={address} onChange={(e)=>setAddress(e.target.value)}  placeholder='Complete Address House #, Street #, Area, Landmark & City' className='px-3 rounded h-12 w-full bg-transparent border-2 border-gray-500' />
            </div>
            <div className='w-full h-12 translate-y-[-6px] '>
<input type='text' value={apartment} onChange={(e)=>setApartment(e.target.value)}  placeholder='Apartment,Suite,etc, (Optional)' className='px-3 rounded h-12 w-full bg-transparent border-2 border-gray-500' />
            </div>
            <div className='flex items-center space-x-2 h-8 w-full my-5'>
            <input value={city} onChange={(e)=>setCity(e.target.value)}  className='h-12 w-full px-3 bg-transparent border-2 border-gray-500' type='text' placeholder='City'/>
            <input className='h-12 w-full px-3 border-2 border-gray-500' type='text' placeholder='Postal code,(Optional)'/>
          </div>
          <div className='w-full h-12 translate-y-2 '>
<input type='text' value={phone} onChange={(e)=>setPhone(e.target.value)}  placeholder='Phone' className='px-3 rounded h-12 w-full bg-transparent border-2 border-gray-500' />
            </div>
            <div className='flex items-center space-x-2 '>
            <input type='checkbox' className='h-4 w-4 my-4' />
            <h3 className='font-semibold font-sans text-[15px] my-4'>Save this information for next time</h3>
            </div>
            <h1 className='font-bold text-[text-16px] font-sans'>Shipping method</h1>
            <div className='flex items-center justify-between h-12 w-full bg-blue-100 px-2 my-4 border-2 border-blue-100 font-semibold font-sans rounded'>
                <h3>Free Shipping</h3>
                <h3>Free</h3>
            </div>
            <h1 className='font-bold text-xl font-sans my-8'>Payment</h1>
            <h2 className='font-semibold text-[15px] font-sans translate-y-[-25px] '>All transactions are secure and encrypted.</h2>
        <div className='h-12 w-ful flex items-center px-5 translate-y-[-20px] bg-blue-100 border-2 border-blue-200 space-x-2 cursor-pointer rounded'>
          <input type='radio' className='h-5 w-5 checked:cursor-pointer' />
          <h1 className='font-bold font-sans text-[14px] cursor-pointer'>Cash on Delivery (COD)</h1>
        </div>
        <div className='h-12 w-ful flex items-center px-5 translate-y-[-22px] bg-blue-100 border-2 border-blue-200 space-x-2 cursor-pointer rounded'>
          <input type='radio' className='h-5 w-5 checked:cursor-pointer' />
          <h1 className='font-bold font-sans  md:text-[14px] text-[12px]  cursor-pointer'>PAYFAST(Pay via Debit/Credit/Wallet/Bank Account)
          </h1>
        </div>
        <h1 className='font-bold text-[17px] font-sans my-1'>Billing address</h1>
        <div className='h-12 w-ful flex items-center px-5 bg-blue-100 border-2 border-blue-100 space-x-2 cursor-pointer rounded'>
          <input type='radio' className='h-5 w-5 checked:cursor-pointer' />
          <h1 className='font-bold font-sans text-[14px] cursor-pointer'>Same as shipping address</h1>
       
        </div>
        <div className='flex items-center justify-between md:hidden my-8'>
            <h1 className='font-bold text-[18px] font-sans'>Order Summary {`( ${quantitypro} )`}</h1>

        


            <div className='space-x-2 flex items-center'>
            <h3 className='text-blue-700 text-[14px] font-sans cursor-pointer' onClick={handletogglestate}>{toggle?"Hide":"Show"}</h3>
            <FontAwesomeIcon icon={faChevronDown} className='text-[13px] text-gray-700'/>
            </div>
          </div>
          {Object.keys(items).map((producting:string)=>{
    const product = productdata.find((p) => p.productname === producting);
    if (!product) return null;

  

  return (
    <>
    {toggle&&(
  <div className='space-y-2 h-auto w-auto mx-4 my-8 '>
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

          <div className='flex items-center md:hidden justify-between'>
            <input type='text' placeholder='Discount code' className='px-3 rounded h-12 w-[70%] bg-transparent border-2 border-gray-500'/>
            <button className='bg-gray-300 font-semibold h-12 w-[20%] text-[14px] text-gray-600'>Apply</button>
          </div>
          <div className='flex items-center justify-between text-[15px] font-sans text-black font-semibold md:hidden my-6'>
            <h1>Subtotal {`( ${quantitypro} )`}</h1>
            <h1>{totalPrice}</h1>
          </div>
          <div className='flex items-center justify-between text-[15px] font-sans text-black font-semibold md:hidden my-2'>
            <h1>Shipping</h1>
            <h1>Free</h1>
          </div>
          <div className='flex items-center justify-between text-[18px] font-sans text-black font-bold md:hidden my-6'>
            <h1>Total</h1>
            <h1>PKR
            {totalPrice}</h1>
          </div>
        <button onClick={handleSubmit} className='w-full h-12 bgblu my-4 text-white text-center font-semibold text-[18px]'>Complete order</button>
        <hr className='my-4 text-gray-500'></hr>
        <div className='flex items-center space-x-3 md:hidden  text-blue-700 font-sans text-[14px] underline whitespace-normal'>
          <h1>Refund Policy</h1>
          <h1>Privacy Policy</h1>
          <h1>Terms of Service</h1>
        </div>
          </div>
        
        </div>
        
<div className='md:col-span-1 h-full w-full bg-gray-100 mx-6 md:block hidden '>
  {Object.keys(items).map((producting:string)=>{
    const product = productdata.find((p) => p.productname === producting);
    if (!product) return null;

  

  return (
  <div className='space-y-2 h-auto w-auto mx-10 my-8'>
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
</div>

      </div>
    </div>
  );
}

export default Checkout;
