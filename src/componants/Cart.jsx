import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../product/ProductContext';
import { Link } from 'react-router-dom';
import { CiCircleRemove } from "react-icons/ci";


const Cart = () => {
  const { cart, removeFromCart } = useContext(ProductContext);
  const [counts, setCounts] = useState(cart.reduce((acc, product) => ({ ...acc, [product.id]: 0 }), {}));
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.forEach((product) => {
      ans += counts[product.id] * product.price;
    });
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  }, [counts, cart]);

  const increment = (id) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 0) + 1,
    }));
  };

  const decrement = (id) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 0) > 0 ? prevCounts[id] - 1 : 0,
    }));
  };

  return (
    <div className='text-orange-600 font-bold'>
      <h1 className='text-center text-[40px] my-16'>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className=' container mx-auto grid grid-cols-1 md:grid-cols-2 mdl:grid-cols-3 lgl:grid-cols-4'>
          {cart.map((product) => (
            <div key={product.id} className='mb-20 text-center '>
              <div className='flex justify-center'>
                <img src={product.image} alt={product.title} className='h-[200px]' />
              </div>
              <h3 className='my-4'>{product.title}</h3>
              <p className='text-black'>Price: {product.price}</p>
              <p className='my-4 text-black'>{counts[product.id]}</p>
              <div className="flex justify-center items-center">
              <button
                className='w-8 h-8 bg-orange-500 mr-10 text-white'
                onClick={() => increment(product.id)}
              >
                +
              </button>
              <button
                className='w-8 h-8 bg-orange-500 mr-8 text-white'
                onClick={() => decrement(product.id)}
              >
                -
              </button>
              <button
                className='w-8 h-8 bg-red-600 text-white ml-4'
                onClick={() => removeFromCart(product.id)}
              >
               <p className='text-[15px]' >X</p>

              </button>
              </div>
              
            </div>
          ))}
        </div>
      )}
      <div className="w-[100%] h-[60px] flex justify-around items-center mt-4 fixed bottom-0 bg-green-700 p-0 m-0">
        <p className='text-white '>Total: {price} LE</p>
        <button className='bg-white w-[100px] p-2 rounded text-center text-green-700 hover:border border-white hover:bg-green-700 hover:text-white'>
              {/* if(counts[product.id]) ===0 {
              <p>is empty </p>
            } elsy {
              
            } */}


          <Link to='/ChecOut'>Check Out</Link>
        </button>
      </div>

     
    </div>
  );
};

export default Cart;
