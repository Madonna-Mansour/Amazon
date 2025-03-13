import React from 'react'
import { Link } from 'react-router-dom'
import cart from './Cart'
import { FaCartPlus } from 'react-icons/fa'
import register from '../pages/Register'
import ChecOut from '../pages/ChecOut'
import AuthDetails from '../product/AuthDetails'
import logo from '../images/logo.png'
import { CiSearch } from "react-icons/ci";
import Login from '../pages/Login'





const Navv = () => {
  return (
    <div  className='navv font-bold  h-20 bg-black p-4 text-white flex justify-between items-center'>
         <div className="flex justify-center items-center">
         <img className='w-28 h-10 object-cover rounded-full mr-20 ' src={logo} alt="logo" />
         <Link to='/Home' className=' hover:text-orange-400 mr-14 '>Home</Link>
         <Link to='cart' className='mx-10 flex justify-center items-center  hover:text-orange-400'><FaCartPlus className='mr-2'/> Cart</Link>
         </div>
         
         <div className="flex justify-center hidden xl:flex">
            <input type="text" placeholder='Search Amazone.eg' className='w-[400px] rounded p-4 font-normal'/>
            <button className='ms-4 bg-orange-400 w-14  rounded flex justify-center items-center hover:bg-orange-600 '><CiSearch /></button>
         </div>
           
        {/* <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
        <Link to='/ChecOut'>ChecOut</Link> */}
        {/* <Link to='/AuthDetails'>AuthDetails</Link> */}

        <div className=" flex justify-between items-center">
          <Link to={'/Login'} className=' hover:text-orange-400'> <AuthDetails  /> </Link>

        </div>
        
        </div>
  )
}

export default Navv