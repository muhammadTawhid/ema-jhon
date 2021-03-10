import React, {useEffect,useState,} from 'react';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData'
import Reviewitem from '../Reviewitem/Reviewitem'
import Cart from '../Header/Cart/Cart';
import happyImage from '../../images/giphy.gif'

const Review = () => {
    const [cart, setCart] = useState([]);  
    const [OrderPlaced, setOrderPlaced ] = useState(false)

    const handlePlaceholder = () => {
        setCart([])
        setOrderPlaced(true)
        processOrder()
    }

    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey)
        setCart(newCart)
        removeFromDatabaseCart(productKey);
    }

    useEffect(() =>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart)

        const cartProducts= productKeys.map(key=> {
            const product = fakeData.find(pd=> pd.key ===key);
            product.quantity = savedCart[key]
            return product;
        })
        setCart(cartProducts);
    },[])

    let thankyou
    if (OrderPlaced){
        thankyou = <img src={happyImage} alt=''/>
    } 
    return (
        <div className='twin-container'>
            <div className='product-container'>
                    {/* <h1>Total Cart Items: {cart.length}</h1> */}
                    {
                        cart.map(pd=><Reviewitem
                        key ={pd.key}
                        removeProduct={removeProduct}
                        product={pd}></Reviewitem>)
                    }
                    {
                        thankyou
                    }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    <button onClick={handlePlaceholder} className='main-button'>Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;