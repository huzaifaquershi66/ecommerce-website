
type productdetails = {
    discount: number;
    productimage: string;
    productname: string;
    actualprice: number;
    previousprice: number; 
    // Spelling correction
    productnextimages:string[]
  };
  
  const productdata: productdetails[] = [
    {
      discount: 29,
      productimage:
        "https://www.darimooch.com/cdn/shop/files/AllInOneGroomingBundle.webp?v=1725967213&width=540",
        
      productname: "All-in-One Grooming Bundle",
      actualprice: 7529.0,
      previousprice: 10588.0,
      productnextimages:[
        "https://www.darimooch.com/cdn/shop/files/AllInOneGroomingBundle.webp?v=1725967213&width=540",
        'https://www.darimooch.com/cdn/shop/products/Charcoal-Face-Wash_210a8e1c-c3bb-4321-98f2-87b53ead05b5.jpg?v=1720423167',
  'https://www.darimooch.com/cdn/shop/products/Charcoal-Tooth-Powder_6e7265a2-2e58-4263-8b0c-0251b98a3ba9.jpg?v=1676895087',
  'https://www.darimooch.com/cdn/shop/products/Charcoal-Face-Mask_7385b5b5-6b69-4894-8096-2bd07850eee7.jpg?v=1676895087',
      ]
      
    },
    {
      discount: 13,
      productimage:
        "https://www.darimooch.com/cdn/shop/files/3.webp?v=1726045380&width=540",
      productname: "Everyday Grooming Bundle",
      actualprice: 5499.0,
      previousprice: 6294.0,
      productnextimages:[
        "https://www.darimooch.com/cdn/shop/files/3.webp?v=1726045380&width=540",
        'https://www.darimooch.com/cdn/shop/files/Detan-Bundle1.jpg?v=1685688122',
  'https://www.darimooch.com/cdn/shop/files/Gold_Complete_Beard_Grooming_Kit.webp?v=1720435875',
  'https://www.darimooch.com/cdn/shop/files/Growth_Kit_3ed0a5d4-a7e5-4097-9ad1-cc9238e5291b.webp?v=1721905521',
      ]
    },
    {
      discount: 15,
      productimage:
        "https://www.darimooch.com/cdn/shop/files/FreshStartEssentials.webp?v=1725967173&width=720",
      productname: "Fresh Start Essentials",
      actualprice: 2699.0,
      previousprice: 3096.0,
      productnextimages:[
        "https://www.darimooch.com/cdn/shop/files/FreshStartEssentials.webp?v=1725967173&width=720",
        'https://www.darimooch.com/cdn/shop/products/Oud-Wood-Beard-Oil.jpg?v=1719983704&width=720',
  'https://www.darimooch.com/cdn/shop/products/Oud-Wood-Beard-Oil-3.jpg?v=1719811938&width=720',
  'https://cdn.shopify.com/s/files/1/1707/3445/files/Growth_Line_2_-_Solid_copy.webp?v=1719462233',
      ]
    },
    {
      discount: 15,
      productimage:
        "https://www.darimooch.com/cdn/shop/files/Gentelman_sPowerBundle.webp?v=1725967308&width=720",
      productname: "Gentelmans Power Bundle",
      actualprice: 4999.0,
      previousprice: 5894.0,
      productnextimages:[
        "https://www.darimooch.com/cdn/shop/files/Gentelman_sPowerBundle.webp?v=1725967308&width=720",
        'https://www.darimooch.com/cdn/shop/files/Detan-Bundle1.jpg?v=1685688122',
  'https://www.darimooch.com/cdn/shop/files/UltimateCoolingBundle.webp?v=1725967271&width=1000',
  'https://www.darimooch.com/cdn/shop/products/DetanCharcoalFacewashBundle.jpg?v=1676895080',
      ]
    },
    {
      discount: 12,
      productimage:
        "https://www.darimooch.com/cdn/shop/files/UltimateCoolingBundle.webp?v=1725967271&width=540",
      productname: "Ultimate Cooling Bundle",
      actualprice: 7499.0,
      previousprice: 8499.0,
      productnextimages:[
        "https://www.darimooch.com/cdn/shop/files/UltimateCoolingBundle.webp?v=1725967271&width=540",
        'https://www.darimooch.com/cdn/shop/files/Growth_Kit_3ed0a5d4-a7e5-4097-9ad1-cc9238e5291b.webp?v=1721905521&width=300',
  'https://www.darimooch.com/cdn/shop/files/beard_shampoo.webp?v=1720424604&width=300',
  'https://www.darimooch.com/cdn/shop/products/DetanCharcoalFacewashBundle.jpg?v=1676895080',
      ]
    },
  ];
  export default productdata