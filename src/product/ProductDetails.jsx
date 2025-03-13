
import {useContext} from 'react'
import { ProductContext } from './ProductContext'

const ProductDetails = () => {
    const {selectProduct , addToCart} = useContext(ProductContext)


    const handleAddToCart = () => {
      if (selectProduct) {
      addToCart(selectProduct)
    }}


    if (!selectProduct) {
        return <div>Loading...</div>
    }


  return (
    <div className='p-10 flex justify-center w-[100%] '>
      <div className="w-[70%] text-center">
           <h1 className='text-[30px] font-bold text-orange-600 my-10'>{selectProduct.title}</h1>
            <div className="flex justify-center ">
                 <img src={selectProduct.image}   alt={selectProduct.title} className="w-[200px]"  />
            </div>
            <p className='my-10 text-[16px]'>{selectProduct.description}</p>
        <div className=" flex justify-around items-center mt-4  ">
            <p className='font-bold text-black '>Price: {selectProduct.price} Le</p>
            <button className=' bg-green-700  p-3 rounded text-center text-white hover:border border-green-700 hover:bg-white hover:text-green-700' onClick={handleAddToCart}>Add To Cart</button>
       </div>
    </div>
 </div>
  )
}

export default ProductDetails