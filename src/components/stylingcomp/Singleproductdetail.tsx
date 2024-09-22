import { useState } from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronRight,faMinus,faPlus,faTrashCan,faXmark,faCartPlus,faChevronLeft,faCheck} from '@fortawesome/free-solid-svg-icons'; 
import { useParams } from 'react-router-dom';
import productdata from './productdata';
import { useDispatch, UseDispatch } from 'react-redux';
import { additem,aremovesingleitem,iscartopen,removeitem } from '../../store/slicee';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
const Singleproductdetail = () => {
const {productslug}= useParams()
const [quantity, setQuantity] = useState(1);

const product = productdata.find((item) => item.productname === productslug);
const [selectedImage, setSelectedImage] = useState(product?.productimage); // Initially, main product image is selected
const [activeIndex, setActiveIndex] = useState(0);
const items = useSelector((state:RootState) => state.cart.items);
const [openinput, setopeninput] = useState(false)
const [mobileIndex, setMobileIndex] = useState(0);
const [addedToCart, setAddedToCart] = useState<{ [key: string]: boolean }>({});
const {  isopen } = useSelector((state:RootState) => state.cart);
const dispatch = useDispatch()




const handleImageClick = (image:string, index:number) => {
  setSelectedImage(image); // Set clicked image as the main image
  setActiveIndex(index); // Set active index to the clicked image
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
const additems = (product:string)=>{
  dispatch(additem(product))
  setQuantity((prevquantity)=>prevquantity+1)
 
  // const newquantity = (quantity[product]||0)+1
  // updateproduct(product,newquantity)
  // setRenderTrigger((prev) => prev + 1);

// };
console.log('Item added:', product); // Log which product was added
// console.log('Updated Redux state:', items);
}
const removesingleitem = (product:string)=>{
  dispatch(aremovesingleitem(product))
  setQuantity((prevQuantity) => {
    if (prevQuantity > 1) {
      return prevQuantity - 1; // Decrement only if quantity is greater than 1
    }
    return prevQuantity; // If quantity is 1, do nothing
  });

  }
  
  const togglecarti = () => {
    if (!isopen) {
      dispatch(iscartopen());
      // document.getElementById('cartDiv')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
     
    }
  };
  const removeitems = (prduct:string)=>{
    dispatch(removeitem(prduct))
  }
  const togglecart = () => {
    dispatch(iscartopen());
   
  };
  
  const handleNextImage = () => {
    if (product?.productnextimages && product.productnextimages.length > 3) {
      if (mobileIndex < product.productnextimages.length - 3) {
        setMobileIndex(mobileIndex + 1);
      }
    }
  };
  
  const handlePrevImage = () => {
    if (mobileIndex > 0) {
      setMobileIndex(mobileIndex - 1);
    }
  };

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
  }, [isopen]);
  const handlenavigate = ()=>{
    // navigate(`/productdetail/:${product}`)
    if (isopen) {
      dispatch(iscartopen());
      // document.getElementById('cartDiv')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
     
    }
    
  
  }
  const totalPrice = Object.keys(items).reduce((total, producting) => {
    const product = productdata.find((p) => p.productname === producting);
    if (!product) return total; // If product not found, skip
  
    return total + (product.actualprice * items[producting]); // Multiply price with quantity and add to total
  }, 0); 
  
   return (
<>
<div className="h-[1px] w-full bg-gray-400"></div>
<div className="h-auto w-full backi">
    <div className="py-6 flex items-center justify-center font-sans lg:text-[14px] md:text-[14px] text-[12px] whitespace-nowrap   ">
        <div className="space-x-2 flex items-center lg:mx-3 mx-1">
            <h2>Home</h2>
            <h4><FontAwesomeIcon icon={faChevronRight} className='text-[13px] text-gray-500' /></h4>
        </div>
        <div className="space-x-2 flex items-center mx-1">
            <h2>Anniversary Bundle</h2>
            <h4><FontAwesomeIcon icon={faChevronRight} className='text-[13px] text-gray-500' /></h4>
        </div>
        <div className="space-x-2 flex items-center lg:mx-3 mx-1 whitespace-normal  ">
            <h2>{product?.productname}</h2>
          
        </div>
    </div>
    <div className='h-[1200px] w-full lg:flex lg:items-center flex-none space-x-7 md:translate-y-[-170px]'>
    <div className='mx-6 my-6 lg:h-[700px]   lg:w-[800px] h-auto w-auto  '>
        <img src={selectedImage} className='h-full w-full'/>
              {/* Thumbnails */}
      <div className='flex items-center space-x-8 lg:mx-32 mx-auto'>
        <div className='lg:hidden block md:hidden ' >
        <FontAwesomeIcon icon={faChevronLeft} onClick={handlePrevImage} className='cursor-pointer'/>
        </div>
        
        {product?.productnextimages.slice(mobileIndex,mobileIndex+3).map((image, index) => (
          <img
            key={index}
            src={image}
            onClick={() => handleImageClick(image, index)} // When clicked, update the main image and active index
            className={`lg:h-20 lg:w-20 h-14 w-14 md:h-20 md:w-20 cursor-pointer border-2 ${
              activeIndex === index ? 'border-black' : 'border-transparent'
            }`} // Apply border to the active image
            alt={`Thumbnail ${index + 1}`}
          />
        
        ))}
      <div className='lg:invisible visible translate-x-[-20px] md:hidden cursor-pointer mx-auto w-full flex justify-center'>
  <FontAwesomeIcon icon={faChevronRight} onClick={handleNextImage} className='cursor-pointer text-gray-600' />
</div>

      </div>
    
     
    </div>
   
    
    <div className='my-3'>
        <h2 className='font-sans text-[18px] font-semibold opacity-40'>Dari Mooch</h2>
        <h1 className='text-[27px] font-sans font-semibold '>{product?.productname}</h1>
        <div className='h-1 w-8 bg-black my-1 '></div>
        <div className='flex items-center space-x-3 my-3'>
            <h3 className='text-[22px] text-red-700 font-sans font-semibold'>Rs,{product?.actualprice.toFixed()}</h3>
            <h3 className='text-[22px] text-black font-sans font-semibold opacity-65 line-through'>Rs,{product?.previousprice.toFixed()}
                <button className='h-7 w-20 bg-blue-800 text-white font-sans font-bold text-sm text-center mx-6 opacity-100'>Save 29%</button>
            </h3>
        </div>
    <div className='h-[1px] w-[460px] bg-slate-400 my-4'></div>
    <h3 className='font-sans my-4 text-[17px] font-semibold'>Quantity</h3>
    <div className="flex items-center  space-x-2"> {/* space-x-2 adds spacing between elements */}
  <button
    onClick={() => removesingleitem(product?.productname||"")}
    className="lg:h-[28px] h-[24px] w-[28px] bg-transparent border-[1px] border-gray-700"
  >
    <FontAwesomeIcon
      icon={faMinus}
      className="text-[10px] text-center translate-y-[-2px]"
    />
  </button>
  <h2 className="lg:h-[28px] h-[24px] w-[28px] bg-transparent border-[1px] border-gray-700 text-center">
    {/* {items[producting]} */}
    {quantity}
  </h2>
  <button
    onClick={() => handleAddToCart(product?.productname||"")}
    className="lg:h-[28px] h-[24px] w-[28px] bg-transparent border-[1px] border-gray-700"
  >
    <FontAwesomeIcon
      icon={faPlus}
      className="text-[10px] text-center translate-y-[-2px]"
    />
  </button>
</div>
<button className='my-4 h-12 w-full bg-transparent text-black text-center border-2 font-serif border-black hover:bg-black hover:text-white'
    onClick={() => {
      // additems(product.productname);
       additems(product?.productname||"")
      togglecarti();
    }}
>Add to Cart</button>
<button className=' h-12 w-full bg-black text-white text-center border-2 font-serif'>Buy it now</button>
<h1 className='text-red-600 text-[26px] my-1 font-sans font-semibold lg:whitespace-nowrap whitespace-normal'>Save Up to 21%! Bundle & Save More</h1>

<ul className="font-bold font-sans list-disc my-3">
  WHY YOU NEED THIS!
  
  <div className="my-2 space-y-3 lg:text-[16px] md:text-[16px] text-xs]">
    <li className="font-normal">Provides a refreshing and cooling sensation with every wash</li>
    <li className="font-normal">Deeply cleanses the skin, removing dirt and oil</li>
    <li className="font-normal">Leaves your skin feeling fresh, revitalized, and hydrated</li>
    <li className="font-normal">Menthol-infused formula provides a burst of energy to awaken your senses</li>
  </div>
</ul>
 <div className='font-sans text-[16px] h-auto max-w-[480px]  '> 
  <h3>Dari Mooch's charcoal facewash contains natural charcoal substances which remove dirt and control excess oils, which results in reducing breakouts, giving you healthier and glowing skin. This daily use detoxifying facewash will be the perfect addition to your daily skincare regimen, plus it is suitable for all skin types!

100ml/ 3.38 fl oz</h3>
 </div> 
   
    </div>
    
    </div>
    
</div>
<div className='h-auto w-full backi py-36'>
<div className='flex items-center justify-center '>
  <h1 className='text-2xl font-bold font-serif md:translate-y-[-430px]'>You may also like</h1>
</div>
<div className="grid grid-cols-2 gap-4 mx-2 md:translate-y-[-400px] my-2 justify-center sm:grid-cols-2 lg:grid-cols-3">
  {productdata.map((product, index) => (
    <div key={index} className="m-4">
      <div className="relative">
        <Link to={`/productdetail/${product.productname}`}>
        <img
          src={product.productimage}
          className="min-h-[100px] min-w-[100px] object-cover sm:h-[300px] sm:w-[300px] lg:h-[300px] lg:w-[300px]"
        />
        </Link>
        <div className="h-[26px] w-[70px] bg-black text-white absolute top-0 left-4 py-1">
          <h3 className="text-xs font-sans text-center font-semibold">
            Save {product.discount}%
          </h3>
        </div>
      </div>
      <button onClick={() => {
  additems(product.productname);
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

{/* {isopen&&( */}
     
     <div className={`lg:mx-[875px] mx-[-10px]    my-[200px] py-24 backw h-[650px]  lg:w-[500px]   top-[-200px] left-2   fixed z-50  cart-container ${isopen?"show":""}`} style={{maxWidth:"89%"}}>
     <div className={`fixed  md:top-0 top-[-8px] z-[9999] backw h-40  `} style={{maxWidth:"89%"}} >
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
   
     <div className="my-[60px] md:my-[70px]   mx-7 h-44 max-w-[450px]   rounded-lg bg-transparent border-2 border-gray-500">
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
   
     {Object.keys(items).map((producting:string) => {
        console.log("Rendering product:", producting); 
       const product = productdata.find((p) => p.productname === producting);
       if (!product) return null;
   
       return (
         <div key={producting}  >
           <div className="mx-6 space-x-6 flex items-center my-[-50px] md:my-[-50px]">
             <img src={product.productimage} className="lg:h-20 lg:w-20 w-16 h-16 rounded-xl " alt={product.productname} />
             <h3 className="lg:text-[16px] text-[14px] font-sans font-semibold">{product.productname}</h3>
           </div>
           <div className="flex items-center h-8 w-full mx-6 my-16 md:my-[60px] ">
           <div className="flex items-center justify-center space-x-2"> {/* space-x-2 adds spacing between elements */}
  <button
    onClick={() => removesingleitem(product.productname)}
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
    onClick={() => additems(product.productname)}
    className="lg:h-[28px] h-[24px] w-[28px] bg-transparent border-[1px] border-gray-700"
  >
    <FontAwesomeIcon
      icon={faPlus}
      className="text-[10px] text-center translate-y-[-2px]"
    />
  </button>
</div>

             <FontAwesomeIcon icon={faTrashCan} className="lg:mx-3 mx-9 cursor-pointer" onClick={()=>removeitems(product.productname)}  />
             <div className="lg:px-36 w-10 px-auto">
               <h3 className="font-sans text-[16px] lg:text-[18px] font-semibold">
                 {product.actualprice * items[producting]}
               </h3>
             </div>
           </div>
         </div>
       );
     })}
   
     <div className="fixed md:top-[490px] top-[460px] h-80 backw  z-[9999]" style={{   maxWidth:'89%' }}>
       {/* <div className="h-[1px] w-[460px] bg-gray-700 mx-5"></div> */}
       <div className="my-32 mx-5 cursor-pointer translate-y-[-100px]">
         {/* <h1 className="font-sans text-[16px] cursor-pointer" onClick={handleoneclick}>
           Special instructions for seller or Gift Note
         </h1> */}
         <input
          //  ref={inputRef}
           type="text"
           className={`w-[464px] h-[90px] my-24 bg-transparent translate-y-[-100px] border-2 opacity-0 packing ${openinput ? 'show border-gray-500 opacity-100' : ''}`}
         />
       </div>
   
       <div className={`h-[1px] max-w-[460px] bg-gray-700 mx-5 translate-y-[-500px] ${openinput ? 'show border-gray-500 opacity-100 translate-y-[-350px]' : ''}`}></div>
   
       <div className="mx-5 my-2 flex items-center space-x-28">
         <h3 className={`font-sans font-semibold lg:text-[16px] text-[14px] translate-y-[-500px] ${openinput ? 'show border-gray-500 opacity-100 translate-y-[-350px]' : ''}`}>
           Taxes and shipping calculated at checkout
         </h3>
         <div className={`h-10 w-28 break-words translate-y-[-500px] ${openinput ? 'show border-gray-500 opacity-100 translate-y-[-350px]' : ''}`}>
        
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

</>
  )
}

export default Singleproductdetail