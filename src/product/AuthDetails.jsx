import { onAuthStateChanged, signOut } from 'firebase/auth'
import {useState , useEffect} from 'react'
import { auth } from '../Firebase'
import { FiLogOut } from "react-icons/fi";



const AuthDetails = () => {
     const [authUser , setAuthUser] = useState(null)

     useEffect (() => {
         const listen = onAuthStateChanged(auth , (user) => {
            if (user){
                setAuthUser(user)
            }else {
                setAuthUser(null)
            }
         })

         return() => {
             listen()
         }
     },[])



     const userSignOut = () => {
         signOut(auth)
            .then(() => {
                console.log('user signed out')
            })
            .catch((error) => {
                console.log('sign-out error:',error)
            })
     }



  return (
    <div>
        {authUser ? (
            <div className='flex justify-center items-center hidden lg:flex'>
                <p className=' text-orange-400 mr-14'>{`Hello ${authUser.email}`}</p>
                 <button className=' bg-orange-400 w-[120px] p-2 rounded  flex items-center justify-center text-white hover:text-red-500 hover:bg-white ' onClick={userSignOut}>Sign Out <FiLogOut className='ms-2 font-bold text-[18px]'/>
                 </button>
            </div>
        ) : (
            <p>hello , sign in</p>
        )}
        
    </div>
  )
}

export default AuthDetails