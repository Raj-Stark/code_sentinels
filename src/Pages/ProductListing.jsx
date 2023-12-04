import React from 'react'
import { useGlobalContext } from '../Context/AppContext';
import ProductCard from '../Components/ProductCard';


const ProductListing = () => {
  const { allProducts , cart } = useGlobalContext();
  return (
    <div className=' max-w-screen-xl mx-auto h-screen '>

      <div className=' grid grid-cols-2 gap-2'>
      {
        allProducts.map((item)=>{
          return <ProductCard key={item.id} {...item}></ProductCard>
        })
      }
      </div>

    </div>
  )
}

export default ProductListing;