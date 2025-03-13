import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "./ProductContext";
import { CiStar } from "react-icons/ci";
import logo from '../images/logo.png'
import one from '../images/one.jpg'
import tow from '../images/tow.jpg'
import three from '../images/three.jpg'
import four from '../images/four.jpg'
import five from '../images/five.jpg'
import six from '../images/six.jpg'
import seven from '../images/seven.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay } from 'swiper/modules';


const ProductList = () => {
    const {selectProduct} = useContext(ProductContext)   
    const {products, setSelectProduct ,addToCart}= useContext(ProductContext)


    const handelProductClick = (product) => {
        setSelectProduct(product)
    }


    const handleAddToCart = (product) => {
        addToCart(product)
    }






    return(
        <div className="">
        
        <div className='relative z-0'>

        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {/* الشرائح */}
                <SwiperSlide>
                    <img className="image-fade" src={tow} alt="User 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="image-fade" src={one} alt="User 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="image-fade" src={three} alt="User 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="image-fade" src={four} alt="User 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="image-fade" src={five} alt="User 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="image-fade" src={six} alt="User 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="image-fade" src={seven} alt="User 2" />
                </SwiperSlide>


            </Swiper>
        </div>


    </div>




        <div className="absolute top-40 left-0 ">
            {/* <h1 className="font-bold text-3xl text-center mt-10 text-orange-500">product List</h1>         */}

            <div className="grid grid-cols-1 md:grid-cols-2 mdl:grid-cols-3 lgl:grid-cols-4 mt-40 flex justify-center items-center ">
                {products.map((product) =>(
                    <div key={product.id} className="mb-10 p-6 bg-transparent shadow-2xl  m-6 text-center  ">
                        <Link to={`/products/${product.id}`} onClick={() => handelProductClick(product)}>
                            <div>
                                <div className="flex justify-center ">
                                <img src={product.image}   alt={product.title}  className="w-[170px] h-[200px] ms-10 bg"  />
                                </div>
                            <h2 className="font-bold my-6 text-orange-500">{product.title} </h2>
                              <div className="flex justify-around font-bold text-[15px] mb-5">
                                    <p>Price: { product.price}</p>
                                    <div className="flex items-center">
                                       <p className="mr-2">{product.rating && product.rating.rate}</p>                                        
                                       <CiStar  />

                                    </div>
                              </div>
                            </div>
                            <button className="w-[110px] mt-4 bg-orange-400 h-10 rounded-md mr-8 hover:bg-white border border-orange-500" > More details</button>
                        </Link> 
                        <button className="w-[110px] mt-4 bg-orange-400 h-10 rounded-md mr-8 hover:bg-white border border-orange-500" onClick={() => handleAddToCart(product)}>Add To Cart</button> <br /><br />

                    </div>
                ))}
            </div>

        </div>

    </div>
         
        

    )
}
export default ProductList



