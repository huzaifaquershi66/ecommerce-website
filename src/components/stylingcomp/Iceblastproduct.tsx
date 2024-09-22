
type productdetails = {
    discount: number;
    productimage: string;
    productname: string;
    actualprice: number;
    previousprice: number; 
    // Spelling correction
    productnextimages:string[]
  };
  
  const Iceblast: productdetails[] = [
    {
      discount: 8,
      productimage:
        "https://www.darimooch.com/cdn/shop/files/Ice_blast_bundle.webp?v=1720422505&width=360",
        
      productname: "Ice Blast Bundle",
      actualprice: 1300.00,
      previousprice: 1400.00,
      productnextimages:[
        "https://www.darimooch.com/cdn/shop/files/Bundle2.webp?v=1720422521&width=720",
        'https://www.darimooch.com/cdn/shop/files/IceBlastFacewash_6b06a9c0-2a47-4e89-bc75-a3049aa356ce.webp?v=1720422521&width=720',
  'https://www.darimooch.com/cdn/shop/files/IceBlastBodywash2_9ed783fe-c821-45ef-9906-30bcfcf5cc14.webp?v=1720422521&width=720',
  'https://www.darimooch.com/cdn/shop/files/Bundle_1.webp?v=1720422521&width=720',
      ]
      
    },
    {
      discount: 3,
      productimage:
        "https://www.darimooch.com/cdn/shop/files/IMG-20240418-WA0027.jpg?v=1713507387&width=720",
      productname: "Ice Blast Face Wash",
      actualprice: 1719.0,
      previousprice: 1700.0,
      productnextimages:[
        "https://www.darimooch.com/cdn/shop/files/IceBlastFacewash2.webp?v=1713521217&width=720",
        'https://www.darimooch.com/cdn/shop/files/IMG-20240418-WA0029.jpg?v=1713521217&width=720',
  'https://www.darimooch.com/cdn/shop/files/IceBlastFacewash.webp?v=1713521217&width=720',

      ]
    },
    {
      discount: 5,
      productimage:
        "https://www.darimooch.com/cdn/shop/files/IMG-20240418-WA0026.jpg?v=1713507612&width=720",
      productname: "Fresh Start Essentials",
      actualprice: 629.0,
      previousprice: 699.0,
      productnextimages:[
        "https://www.darimooch.com/cdn/shop/files/IMG-20240418-WA0025.jpg?v=1713507612&width=720",
        'https://www.darimooch.com/cdn/shop/files/IceBlastBodywash2.webp?v=1713521197&width=720',
  'https://www.darimooch.com/cdn/shop/files/IceBlastBodywash.webp?v=1713521197&width=720',
 
      ]
    },
    {
      discount: 6,
      productimage:
        "https://www.darimooch.com/cdn/shop/files/Bundle_17.webp?v=1718353117&width=720",
      productname: "Summer Go-To Bundle",
      actualprice: 2699.0,
      previousprice: 3199.0,
      productnextimages:[
        "https://www.darimooch.com/cdn/shop/files/IceBlastBundleKeratinHairwa.webp?v=1714379605&width=720",
        'https://www.darimooch.com/cdn/shop/files/Gold_Starter_Beard_Grooming_Kit.webp?v=1720436083&width=720',
        "https://www.darimooch.com/cdn/shop/files/IceBlastBundleKeratinHairwa.webp?v=1714379605&width=720",

      ]
    },
    
  ];
  export default Iceblast