
import { useState } from 'react';
import { useEffect } from 'react';
import productdata from './productdata';
import { useSelector } from 'react-redux';


  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { 
    faBullhorn, faCloudShowersHeavy,faUser,
  faCartPlus,faMagnifyingGlass,faBars,faXmark,faMobileScreenButton,faAt, 
  
  faTriangleExclamation
} from '@fortawesome/free-solid-svg-icons'; 
import { RootState } from '../../store/store';
import { Link } from 'react-router-dom';


const Header = () => {
  const [toggleform, settoggleform] = useState(false)
  const handletoggleform = ()=>{
    console.log("Toggling form", toggleform);
    settoggleform(!toggleform)
  }
  useEffect(() => {
    if (toggleform) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup when the component is unmounted or when toggleform changes
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [toggleform]);
const items = useSelector((state:RootState)=>state.cart.items)

const totalquantity = Object.keys(items).reduce((total, producting) => {
  const product = productdata.find((p) => p.productname === producting);
  if (!product) return total; // If product not found, skip

  return total + ( items[producting]); // Multiply price with quantity and add to total
}, 0); 
  return (
    <>
<div className="flex flex-wrap lg:flex-nowrap items-center background text-white h-auto w-full px-10 md:px-52 lg:px-60 lg:py-1">
  {/* First Section (Free Shipping) */}
  <div className="flex items-center flex-wrap w-full lg:flex-nowrap lg:w-auto mb-2 md:mb-0">
    <FontAwesomeIcon icon={faBullhorn} className='text-gray-300 text-[12px] md:text-[15px] lg:text-[20px]' />
    <h3 className='ml-2 text-[12px] md:text-[14px] lg:text-[14px] flex-1 min-w-0 lg:whitespace-nowrap'>
      Free Shipping Over Rs 1,999! | Delivery Time: 5 to 7 days!
    </h3>
  </div>

  {/* Second Section (Delivery Delay) */}
  <div className="flex items-center flex-wrap w-full lg:flex-nowrap lg:w-auto mb-2 md:mb-0">
    <FontAwesomeIcon icon={faTriangleExclamation} className='text-yellow-400 text-[12px] md:text-[15px] lg:text-[14px]' />
    <h3 className='ml-2 text-[12px] md:text-[14px] lg:text-[14px] flex-1 min-w-0 lg:whitespace-nowrap'>
      Deliveries might be delayed due to heavy rain. We appreciate your patience!
    </h3>
  </div>

  {/* Third Section (Buy Now) */}
  <div className="flex items-center flex-wrap w-full lg:flex-nowrap lg:w-auto mb-2 md:mb-0">
    <FontAwesomeIcon icon={faCloudShowersHeavy} className='text-[12px] md:text-[15px] lg:text-[15px] lg:mx-1' />
    <h2 className='text-yellow-700 px-1 text-[12px] md:text-[14px] lg:text-[14px] underline ml-2 flex-1 min-w-0 lg:whitespace-nowrap'>
      Buy Now
    </h2>
  </div>
</div>






      <div className='backi colorr lg:h-[157px] lg:w-auto h-[54px] relative'>
      {!toggleform&&(
      <span className='visible lg:invisible absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer z-50' onClick={handletoggleform}  >
    <FontAwesomeIcon icon={faBars} className='text-[22px] ' />
  </span>
  )}
<span>
  <div className='relative flex items-center justify-center py-5 '>
    <img src="https://www.darimooch.com/cdn/shop/files/logo-01_medium_b485c4e6-aadb-4c0b-a0aa-fe42d685fbac.png?height=76&v=1639553545"
      className='h-[28px] md:h-[34px] lg:h-[40px]  translate-y-[-10px] '
    />
  </div>
  </span>

  <div className='absolute flex items-center space-x-5 lg:top-[20%] md:top-[37%] top-[45%] left-[85%]  lg:left-[90%] transform -translate-x-1/2 -translate-y-1/2'>
    <FontAwesomeIcon icon={faUser} className='text-[20px] text-gray-700 hidden lg:block' />
    <Link to={"/checkout"}>
    <FontAwesomeIcon  icon={faCartPlus} className='text-[20px] text-gray-700' />
    </Link>
    <div className='bg-black text-white h-4 w-4 rounded-full absolute left-8 right-0 top-[-11px] text-center  '>
    
    <h3 className=' font-sans translate-y-[-2px] text-[12px] '>{totalquantity}</h3>
  
    </div>
    <FontAwesomeIcon icon={faMagnifyingGlass} className='text-[20px] text-gray-700' />
  </div>

  
  <div className='hidden lg:flex flex-wrap items-center justify-center mx-10 lg:mx-48 space-x-6 min-w-[800px]'>
    <h3 className='font-sans sansing'>Categories</h3>
    <h3 className="font-sans sansing">Anniversary Sale</h3>
    <h3 className="font-sans sansing">Build Your Own Bundle</h3>
    <h3 className="font-sans sansing">Ice Blast</h3>
    <h3 className="font-sans sansing">Best Sellers</h3>
    <h3 className="font-sans sansing">Deals</h3>
    <h3 className="font-sans sansing">Face</h3>
    <h3 className="font-sans sansing">Hair</h3>
    <h3 className="font-sans sansing">Beard</h3>
    <h3 className="font-sans sansing">Gifts</h3>
    <h3 className="font-sans sansing">Intimate</h3>

    <div className='flex flex-wrap justify-center space-x-6 mt-1'>
      <h3 className="font-sans sansing">Trimmers</h3>
      <h3 className="font-sans sansing">All Products</h3>
      <h3 className="font-sans sansing">Blog</h3>
      <h3 className="font-sans sansing">Order Tracker</h3>
    </div>
  </div>
</div>
{/* {toggleform && ( */}
  <div
    className={`fixed top-0 left-0 py-2 px-4 space-x-44 bg-white backi z-[9999] overflow-x-hidden border-transparent backing   ${toggleform ? 'show mx-0' : ''}`}
    // style={{ width: toggleform ? '89%' : 'auto', overflowY: 'auto', height: '100vh' }}
    style={{ maxWidth: '89%', overflowY: 'hidden',minWidth:"20%" }}
  >
     <FontAwesomeIcon
      icon={faXmark}
      className="text-[31px] text-gray-600 cursor-pointer"
      onClick={handletoggleform}
    />
    <span className="flex items-center translate-y-[-27px]">
      <FontAwesomeIcon icon={faUser} />
      <h3 className="px-2 text-[15px] text-gray-600 whitespace-nowrap">Log in</h3>
    </span>
  </div> 
 
 

<div className={`h-[690px]   visible lg:invisible backi absolute -mt-48 z-50 backing overflow-x-hidden  ${toggleform ? 'show mx-0' : ''}`}

style={{  overflowY: 'auto', maxWidth:'89%' }}>
 




  <div className='my-32 mx-4 h-auto w-full saning font-sans text-gray-700  '>
  <div className='flex flex-col space-y-4 '>
  {[
  
    'Categories',
    'Anniversary Sale',
    'Build Your Own Bundle',
    'Ice Blast',
    'Best Sellers',
    'Deals',
    'Face',
    'Hair',
    'Beard',
    'Gifts',
    'Intimate',
    'Trimmers',
    'All Products',
    'Blog',
    'Order Tracker'
  ].map((item, index) => (
    <div key={index}>
      <h1>{item}</h1>
      <div className='h-[1px] w-[340px] bg-gray-400 mx-0 translate-x-[-4px] my-4'></div>
    </div>
  ))}
</div>

  </div>
  <div className='flex items-center mx-3 space-x-2'>
    <span><FontAwesomeIcon icon={faMobileScreenButton} /></span>
    <h3 className='text-gray-600 text-[14px]'> +92 316 1115556</h3>
  </div>
  <div className='flex items-center mx-3 space-x-2 my-2'>
    <span><FontAwesomeIcon icon={faAt} /></span>
    <h3 className='text-gray-600 text-[14px]'>  support@darimooch.com</h3>
  </div>
</div>


    </>
  );
};

export default Header;



