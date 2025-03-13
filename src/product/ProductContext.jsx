import { createContext , useEffect , useState} from "react";

export const ProductContext = createContext()

export const ProuductProvider = ({children}) => {
    
    const [products , setProducts] = useState([])
    const [selectProduct , setSelectProduct] = useState (null)
    const [cart , setCart]=useState([])

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((product) => product.id !== id));
      };

    useEffect(() => {

         const fetchProducts = async () => {
             try {
                const res = await fetch ("https://fakestoreapi.com/products")
                const data = await res.json()
                setProducts(data)
             }catch (error)  {
                console.error("Error fetching products: ", error)
             }
         }
         fetchProducts()
    }, [])



    const addToCart = (product) => {
        setCart([...cart, product])
    }


    return(
        <ProductContext.Provider value={{products , selectProduct , setSelectProduct, cart , addToCart , removeFromCart}}>
             {children}
        </ProductContext.Provider>
    )  
}