import React, { useState } from 'react'
import { auth } from '../Firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
// import bac from '../images/amazone.webp'
import bac from '../images/amazone4.jfif'

const Login = () => {
      const [email , setEmail]=useState('')
      const [password , setPassword]=useState('')
      const navigate = useNavigate()



      const signin = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth,email,password)
             .then((userCredential) => {
              console.log(userCredential)
              setEmail('')
              setPassword('')
              navigate('/ChecOut')


              }).catch((error) => {
                 console.log(error)
                 alert('you must be to rgister before login')
                 setEmail('')
                 setPassword('')
                 navigate('/Register')
                })
       }


  return (
    <div className="flex justify-center items-center grid grid-cols-1 md:grid-cols-2 h-[100vh] container mx-auto">
          
          <div className="">
                 <img className='w-[80%] ' src={bac} alt="" />
          </div>


    <div className='back flex justify-center items-center   ' >
      <form onSubmit={signin} >
        <h1 className='text-center font-bold text-[25px] text-orange-500 mb-14'>Log in</h1>
  
        <br />
        <div className="flex justify-center flex-col">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='w-[300px] h-[40px] my-4 rounded-full p-6  border border-orange-500 '
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='w-[300px] h-[40px] my-4 rounded-full p-6  border border-orange-500 '

        />

        </div>
        <div className="flex justify-center">
        <button type="submit" className='flex justify-center items-center w-[150px] mt-10 h-[40px] rounded-full p-6 text-white bg-orange-500 hover:bg-green-700'>
                  Register
                  </button>
        </div>

      </form>
      </div>
      </div>
)
}

export default Login