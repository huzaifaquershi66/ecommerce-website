import { useState } from "react";
import { useDispatch } from "react-redux";
import { additem, iscartopen,removeitem,aremovesingleitem } from "../../store/slicee";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "../../store/store";
import {faXmark,faCartPlus,faMinus,faPlus,faTrashCan,faCheck} from '@fortawesome/free-solid-svg-icons'; 

import Iceblast from "./Iceblastproduct";


import productdata from "./productdata";
import { Link } from "react-router-dom";
// import Singleproductdetail from "./Singleproductdetail";
// import { dom } from "@fortawesome/fontawesome-svg-core";




const Mainpagecontent = () => {
  const dispatch = useDispatch()
 
 
  const [addedToCart, setAddedToCart] = useState<{ [key: string]: boolean }>({});

 
 
  const {  isopen } = useSelector((state:RootState) => state.cart);

  const togglecarti = () => {
    if (!isopen) {
      dispatch(iscartopen());
      
   
  
      // Smooth scroll to the cartDiv (optional)
      // document.getElementById('cartDiv')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
     
    } 
  };
  
  
  const togglecart = () => {
    dispatch(iscartopen()); // cart toggle karega
    
    // Check if the cart is now closed, and if it is, reset pointer events to 'auto'
  
  };
  
  
    
  const handleAddToCart = (product: string) => {
    // Redux state update karne ka function
    dispatch(additem(product));
    
    // Local state ko update karein
    setAddedToCart((prev) => ({
      ...prev,
      [product]: true, // Yeh product add ho chuka hai
    }));
  };
  
    
  
  // const updateproduct=(productname:string,quantity:number)=>{
  //   setquantity((prevquantity)=>({...prevquantity,
  //     [productname]:quantity
  //   }))
  //   }
    
    const items = useSelector((state:RootState) => state.cart.items);
  // }


  // Function to focus the input
  
  // Optionally, you can focus the input when the component mounts
 ;

 
  const additems = (product?: string, product2?: string) => {
    const itemToAdd = product || product2 || ""; // default to empty string
    if (itemToAdd) {
      dispatch(additem(itemToAdd));
    }
  // const newquantity = (quantity[product]||0)+1
  // updateproduct(product,newquantity)
  // setRenderTrigger((prev) => prev + 1);

// };
console.log('Item added:', product); // Log which product was added
console.log('Updated Redux state:', items);
}
const removeitems = (prduct?:string,prduct2?:string)=>{
  const itemToAdd = prduct || prduct2|| ""; //
  if (itemToAdd) {
    dispatch(removeitem(itemToAdd))
  }

}

const removesingleitem = (product?:string,product2?:string)=>{
  const itemToAdd = product || product2|| ""; //
  if (itemToAdd) {
    dispatch(removeitem(itemToAdd))
  }

dispatch(aremovesingleitem(itemToAdd))
}


useEffect(() => {
  if (isopen) {
    document.body.style.overflow = 'hidden';
 
  } else {
    document.body.style.overflow = 'auto';

  }

  // The nested useEffect is unnecessary, and togglecart should be used conditionally based on user interaction, not automatically on mount
  // So you can remove the inner useEffect or call the function directly based on specific events like button clicks.

  // Cleanup function (optional) when component unmounts
  return () => {
    document.body.style.overflow = 'auto';
  };
}, [isopen]); // Ensure it only runs when isopen changes

const totalPrice = Object.keys(items).reduce((total, producting) => {
  const product = productdata.find((p) => p.productname === producting);
  const product2 = Iceblast.find((p) => p.productname === producting);
  
  if (!product && !product2) return total; // Agar dono products nahi mile, total waise hi rahega

  const price = product?.actualprice || product2?.actualprice || 0; // Price ko fetch karein
  const quantity = items[producting] || 0; // Quantity ko fetch karein

  return total + (price * quantity); // Total mein add karein
}, 0);

 // Empty array means this effect runs only once when the component mounts

const handlenavigate = ()=>{
  // navigate(`/productdetail/:${product}`)
  if (isopen) {
    dispatch(iscartopen());
    // document.getElementById('cartDiv')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
   
  }
  

}

const images = [
  "https://www.darimooch.com/cdn/shop/files/Anniversary_Discounts_1200x628_b03da7b6-76ff-483d-9881-b7f148abd9c6.jpg?v=1726205196",
  "https://www.darimooch.com/cdn/shop/files/Build_your_own_bundle_Box_Banner_1460x402_1.webp?v=1726206090",
  "https://www.darimooch.com/cdn/shop/files/Detan_bundle_banner_1460x402_0563a978-c7bc-4a52-ba26-6b811e2a8fec.jpg?v=1723706806",
];
const [currentIndex, setCurrentIndex] = useState(0);
const [isVisible, setIsVisible] = useState(true);
useEffect(() => {
  const interval = setInterval(() => {
    setIsVisible(false); // Fade out
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsVisible(true); // Fade in
    }, 500); // Duration of fade out
  }, 7000); // 3 seconds for image display

  return () => clearInterval(interval);
}, [images.length]);

// }
  return (
    <>
    <div className="h-full w-full overflow-hidden">
      <div className="backi h-auto ">
        <div className="my-3 h-auto w-full">
          <img
            src={
             images[currentIndex]
            }
            className={`object-cover w-full transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
     
         <div className={`lg:mx-[860px] mx-[-10px] pointer-events-auto     my-[200px] py-24 backs h-[650px]  lg:w-[500px]   top-[-200px] left-2   fixed z-[10000]  md:border-gray-400 md:border-l-2  border-gray-400 border-r-2   cart-container ${isopen?"show":""}`} style={{maxWidth:"89%"}}>
     <div className={`fixed   md:top-0 top-[-8px] z-[9999] backs h-40  `} style={{maxWidth:"89%"}} >
       <div className="flex items-center justify-center my-4 space-x-2">
         <h3 className="text-black font-serif text-[17px] lg:text-lg">Shopping Cart</h3>
         <span>
           <FontAwesomeIcon
             onClick={togglecart}
             icon={faXmark}
             className="lg:text-[31px] text-[24px] text-gray-600 cursor-pointer lg:translate-x-36 translate-x-16"
           />
         </span>
       </div>
       <div className="w-8 h-1 lg:mx-56 mx-auto bg-black"></div>
       <div className="flex items-center space-x-1 my-6 mx-16"> 
         <span>
           <FontAwesomeIcon icon={faCartPlus} className="text-[20px] text-gray-700" />
         </span>
         <h1 className="text-black font-serif text-[14px] lg:text-[17px] lg:whitespace-nowrap whitespace-normal ">Free Shipping On All Orders Above Rs 1,999</h1>
       </div>
     </div>
     <div className="overflow-y-scroll h-[400px] md:overflow-x-hidden overflow-x-hidden">
     <div className="my-[60px] md:my-[70px]   mx-7   h-44 max-w-[450px]   rounded-lg bg-transparent border-2 border-gray-500">
       <div className="flex items-center lg:space-x-3 space-x-1 mx-5 px-6 my-1">
         <div className="h-16 lg:w-32 w-auto font-bold font-sans lg:text-[16px] text-[12px] ">
           <h2 className="lg:text-center text-left">400 OFF for orders over RS. 4000</h2>
         </div>
         <div className="h-16 lg:w-32 w-auto font-bold font-sans lg:text-[16px] text-[12px]">
           <h2 className="lg:text-center text-left">600 OFF for orders over RS. 6000</h2>
         </div>
         <div className="h-16 lg:w-32 w-auto font-bold font-sans lg:text-[16px] text-[12px]">
           <h2 className="lg:text-center text-left">1000 OFF for orders over RS. 8000</h2>
         </div>
       </div>
       <div
         className="max-w-[400px] h-3 mx-5 my-6 rounded-lg"
         style={{
           background: 'linear-gradient(45deg, #ffa82e 25%, #575757 25%, #575757 75%, #ffa82e 75%, #ffa82e 100%)',
         }}
       ></div>
       <div className="mx-8 font-sans lg:text-[16px] text-[10px] md:whitespace-nowrap ">Discount applied! Discount applied! Discount applied!</div>
     </div>
     

     {Object.keys(items).map((producting) => {
        console.log("Rendering product:", producting); 
       const product = productdata.find((p) => p.productname === producting);
       const product2 = Iceblast.find((p)=>p.productname===producting)
       if (!product &&!product2) return null;
   
       return (

<div key={producting} >
           <div className="mx-6 space-x-6 flex items-center my-[-50px] md:my-[-50px]">
             <img src={product?.productimage||product2?.productimage} className="lg:h-20 lg:w-20 w-16 h-16 rounded-xl " alt={product?.productname||product2?.productname} />
             <h3 className="lg:text-[16px] text-[14px] font-sans font-semibold">{product?.productname||product2?.productname}</h3>
           </div>
           <div className="flex items-center h-8 w-full mx-6 my-16 md:my-[60px] ">
           <div className="flex items-center justify-center space-x-2"> {/* space-x-2 adds spacing between elements */}
  <button
    onClick={() => removesingleitem(product?.productname||product2?.productname)}
    className="lg:h-[28px] h-[24px] w-[28px] bg-transparent border-[1px] border-gray-700"
  >
    <FontAwesomeIcon
      icon={faMinus}
      className="text-[10px] text-center translate-y-[-2px]"
    />
  </button>
  <h2 className="lg:h-[28px] h-[24px] w-[28px] bg-transparent border-[1px] border-gray-700 text-center">
    {items[producting]}
  </h2>
  <button
    onClick={() => additems(product?.productname||product2?.productname)}
    className="lg:h-[28px] h-[24px] w-[28px] bg-transparent border-[1px] border-gray-700"
  >
    <FontAwesomeIcon
      icon={faPlus}
      className="text-[10px] text-center translate-y-[-2px]"
    />
  </button>
</div>

             <FontAwesomeIcon icon={faTrashCan} className="lg:mx-3 mx-9 cursor-pointer" onClick={()=>removeitems(product?.productname||product2?.productname)}  />
             <div className="lg:px-36 w-10 px-auto">
               <h3 className="font-sans text-[16px] lg:text-[18px] font-semibold">
               {((product?.actualprice || product2?.actualprice) || 0) * items[producting]}


               </h3>
             </div>
           </div>
           <div/>
         </div>
        
       );
     })}
   </div>
     <div className="fixed md:top-[490px] top-[460px] h-80 backs  z-[9999]" style={{   maxWidth:'89%' }}>
     
       <div className="my-32 mx-5 cursor-pointer translate-y-[-100px]">
       
         <input
        
           type="text"
           className={`w-[464px] h-[90px] my-24 bg-transparent translate-y-[-100px] border-2 opacity-0 packing `}
         />
       </div>
   
       <div className={`h-[1px] max-w-[460px] bg-gray-700 mx-5 translate-y-[-500px]`}></div>
   
       <div className="mx-5 my-2 flex items-center space-x-28">
         <h3 className={`font-sans font-semibold lg:text-[16px] text-[14px] translate-y-[-500px]  }`}>
           Taxes and shipping calculated at checkout
         </h3>
         <div className={`h-10 w-28 break-words translate-y-[-500px]`}>
        
   <h3 className="font-sans font-semibold lg:text-[17px] text-[14px] lg:translate-y-[-0px] translate-y-[-9px]">
     Total Price:{totalPrice}
   </h3>
   
       
         </div>
       </div>
   <Link to="/checkout">
       <button onClick={handlenavigate} className="md:h-10 h-8 cursor-pointer   lg:translate-y-[-500px] translate-y-[-510px] bg-black text-white text-center lg:mx-3 mx-8 font-serif lg:w-[460px] w-[89%] md:text-[15px] text-[13px]" >Check Out</button>
       </Link>
     </div>

   </div>




  {/* )}   */}
 

  
    
    
   
        <div className="flex items-center justify-center mt-12" >
       
          <h1 className="font-bold font-serif text-2xl text-gray-700 ">
            Anniversary Bundles
          </h1>
        </div>
       
        <div className="my-3 h-1 w-10 bg-black mx-[650px]"></div>
        <div className="grid grid-cols-2 gap-4 mx-2 my-2 justify-center sm:grid-cols-2 lg:grid-cols-3">
  {productdata.map((product, index) => (
    <div key={index} className="m-4">
      <div className="relative">
         <Link to={`/productdetail/${product.productname}`}> 
        <img onClick={handlenavigate}
          src={product.productnextimages[currentIndex]}
          className={`min-h-[100px] min-w-[100px] object-cover sm:h-[300px] sm:w-[300px] lg:h-[400px] lg:w-[400px] transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-100'}`}
        />
         </Link> 
        <div className="h-[26px] w-[70px] bg-black text-white absolute top-0 left-4 py-1">
          <h3 className="text-xs font-sans text-center font-semibold">
            Save {product.discount}%
          </h3>
        </div>
      </div>
      <button onClick={() => {
  // additems(product.productname);
   handleAddToCart(product.productname)
  togglecarti();
}}
className="h-10 bg-transparent border-2 border-black min-w-[100px] mx-3 lg:mx-0 sm:w-[300px] lg:w-[400px] text-gray-700 hover:bg-black hover:text-white">
    {addedToCart[product.productname]&&isopen ? <FontAwesomeIcon icon={faCheck} /> : 'Add to Cart'}
      </button>
      <h2 className="text-gray-700 text-center my-2">{product.productname}</h2>
      <div className="flex items-center justify-center space-x-2">
        <h3 className="text-red-500 min-text-[12px] font-semibold lg:text-[17px]">
          Rs, {product.actualprice.toFixed(2)}
        </h3>
        <h3 className="line-through min-text-[12px] font-semibold lg:text-[17px]">
          Rs, {product.previousprice.toFixed(2)}
        </h3>
      </div>
    </div>
  ))}
</div>


      </div>
      <div className="backi h-ful w-full -my-12 py-16">
      <div className="flex items-center justify-center mt-12" >
       
       <h1 className="font-bold font-serif text-2xl text-gray-700 ">
         Iceblast Bundles
       </h1>
       
      
     </div>
     
     <div className="my-3 h-1 w-10 bg-black mx-[650px] "></div>
     <div className="grid grid-cols-2 gap-4 mx-2 my-2 justify-center sm:grid-cols-2 lg:grid-cols-3">
  {Iceblast.map((product, index) => (
      
    <div key={index} className="m-4">
      <div className="relative">
         <Link to={`/productdetail/${product.productname}`}> 
        <img onClick={handlenavigate}
          src={product.productnextimages[currentIndex]}
          className={`min-h-[100px] min-w-[100px] object-cover sm:h-[300px] sm:w-[300px] lg:h-[400px] lg:w-[400px] transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-100'}`}
        />
         </Link> 
        <div className="h-[26px] w-[70px] bg-black text-white absolute top-0 left-4 py-1">
          <h3 className="text-xs font-sans text-center font-semibold">
            Save {product.discount}%
          </h3>
        </div>
      </div>
      <button onClick={() => {
  // additems(product.productname);
   handleAddToCart(product.productname)
  togglecarti();
}}
className="h-10 bg-transparent border-2 border-black min-w-[100px] mx-3 lg:mx-0 sm:w-[300px] lg:w-[400px] text-gray-700 hover:bg-black hover:text-white">
    {addedToCart[product.productname]&&isopen ? <FontAwesomeIcon icon={faCheck} /> : 'Add to Cart'}
      </button>
      <h2 className="text-gray-700 text-center my-2">{product.productname}</h2>
      <div className="flex items-center justify-center space-x-2">
        <h3 className="text-red-500 min-text-[12px] font-semibold lg:text-[17px]">
          Rs, {product.actualprice.toFixed(2)}
        </h3>
        <h3 className="line-through min-text-[12px] font-semibold lg:text-[17px]">
          Rs, {product.previousprice.toFixed(2)}
        </h3>
      </div>
    </div>
   ))} 
  
     </div>
     </div>
     </div>
    </>
  );
};



export default Mainpagecontent;
