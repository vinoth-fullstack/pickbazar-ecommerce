import axios from "axios";
import { useEffect, useState } from "react";

export default function Filters() {
    const products = [
        {
            id: 1,
            imgSrc: 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1716%2FGaming.jpg&w=1920&q=75',
            name: 'Razero Wolverine',
            price: '$111.00',
            originalPrice: '$132.00',
            category:'soundbox'

        },
        {
            id: 2,
            imgSrc: 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1724%2FGaming-4.jpg&w=1920&q=75',
            name: 'Ninotendo Switch Joy-Con Controller',
            price: '$79.99',
            category:'soundbox'
        },
        {
            id: 3,
            imgSrc: 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1725%2FGaming-3.jpg&w=1920&q=75',
            name: 'Razero Playstation VR',
            price: '$500.00',
            category:'soundbox'
        },
        {
            id: 4,
            imgSrc: 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1727%2FLaptop.jpg&w=1920&q=75',
            name: 'Makbook Pro M1',
            price: '$500.00',
            category:'smartwatch'
        },
        {
            id: 5,
            imgSrc: 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1732%2FLaptop-1.jpg&w=1920&q=75',
            name: 'Makbook Air M1',
            price: '$500.00',
            category:'smartwatch'
        },
        {
            id: 6,
            imgSrc: 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1741%2FLaptop-5.jpg&w=1920&q=75',
            name: 'Makbook Air 2019',
            price: '$500.00',
            category:'smartwatch'
        },
        {
            id: 7,
            imgSrc: 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1747%2FLaptop-3.jpg&w=1920&q=75',
            name: 'Azsus VivoBook Pro 15',
            price: '$500.00',
            category:'smartwatch'
        },
        {
            id: 8,
            imgSrc: 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1764%2FMonitor-3.jpg&w=1920&q=75',
            name: 'Azsus VG279Q Gaming Moni',
            price: '$500.00',
            category:'router'
        },
        {
            id: 9,
            imgSrc: 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1769%2FMonitor-4.jpg&w=1920&q=75',
            name: 'Azsus ProArt PA329Q Professional',
            price: '$500.00',
            category:'router'
        },
        {
            id: 10,
            imgSrc: 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1774%2Fmonitor-1.jpg&w=1920&q=75',
            name: 'Azsus ROG Swift PG279QZ ',
            price: '$500.00',
            category:'router'
        },
        {
            id: 11,
            imgSrc: 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2170%2Faccessories-1.jpg&w=1920&q=75',
            name: 'Fanytech VX7 Crypto Mouse',
            price: '$500.00',
            category:'mobile'
        },
        {
            id: 12,
            imgSrc: 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2170%2Faccessories-1.jpg&w=1920&q=75',
            name: 'HypereX Pulsefire Haste 2',
            price: '$500.00',
            category:'mobile'
        },
        {
            id: 13,
            imgSrc: 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2174%2Faccessories-6.jpg&w=1920&q=75',
            name: 'Loogitech Powered Wireless Chargi',
            price: '$500.00',
            category:'mobile'
        },
        {
            id: 14,
            imgSrc: 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2176%2Faccessories-4.jpg&w=1920&q=75',
            name: 'Samusung SoundPal S8 Mini',
            price: '$500.00',
            category:'headphones'
        },
        {
            id: 15,
            imgSrc: 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2177%2Faccessories-5.jpg&w=1920&q=75',
            name: 'JuBL BOOSTUP Wireless Charging Pad',
            price: '$500.00',
            category:'heaphones'
        },
        {
            id: 16,
            imgSrc: 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2182%2Fsound-box-5.jpg&w=1920&q=75',
            name: 'JuBL X100 Mini Bluetooth Speaker',
            price: '$500.00',
            category:'heaphones'
        },
        {
            id: 17,
            imgSrc: 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2184%2Fsound-box-4.jpg&w=1920&q=75',
            name: 'JuBL Charge 5',
            price: '$500.00',
            category:'headphones'
        },
        {
            id: 18,
            imgSrc: 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2186%2Fsound-box-3.jpg&w=1920&q=75',
            name: 'Souny SRS-XB43 Bluetooth Speaker',
            price: '$500.00',
            category:'camera'
        },
        {
            id: 19,
            imgSrc: 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2187%2Fsound-box-2.jpg&w=1920&q=75',
            name: 'Aamazfit Soundcore Flare',
            price: '$500.00',
            category:'camera'
        },
        {
            id: 20,
            imgSrc: 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2188%2FSmart-watch-6.jpg&w=1920&q=75',
            name: 'Aamazfit Verge Lite',
            price: '$500.00',
            category:'camera'
        },
        {
            id: 21,
            imgSrc: 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2190%2FSmart-watch-5.jpg&w=1920&q=75',
            name: 'Aamazfit GTR 3',
            price: '$500.00',
            category:'camera'
        },
        {
            id: 22,
            imgSrc: 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2193%2FSmart-watch-1.jpg&w=1920&q=75',
            name: 'Razero Playstation VR',
            price: '$500.00',
            category:'accessories'
        },
        {
            id: 23,
            imgSrc: 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2195%2FSmart-watch-3.jpg&w=1920&q=75',
            name: 'Razero Playstation VR',
            price: '$500.00',
            category:'accessories'
        },
        {
            id: 24,
            imgSrc: 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2197%2FSmart-watch-4.jpg&w=1920&q=75',
            name: 'Razero Playstation VR',
            price: '$500.00',
            category:'accessories'
        },
        {
            id: 25,
            imgSrc: 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2200%2Fcamera-3.jpg&w=1920&q=75',
            name: 'Razero Playstation VR',
            price: '$500.00',
            category:'accessories'
        },
        {
            id: 26,
            imgSrc: 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2202%2Fcamera-2.jpg&w=1920&q=75',
            name: 'Razero Playstation VR',
            price: '$500.00',
            category:'monitor'
        },
        {
            id: 27,
            imgSrc: 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2204%2Fcamera-1.jpg&w=1920&q=75',
            name: 'Razero Playstation VR',
            price: '$500.00',
            category:'monitor'
        },
        {
            id: 28,
            imgSrc: 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2206%2Fcamera.jpg&w=1920&q=75',
            name: 'Razero Playstation VR',
            price: '$500.00',
            category:'monitor'
        },
        {
            id: 29,
            imgSrc: 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2208%2Fcamera-4.jpg&w=1920&q=75',
            name: 'Razero Playstation VR',
            price: '$500.00',
            category:'monitor'
        },
        {
            id: 30,
            imgSrc: 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2208%2Fcamera-4.jpg&w=1920&q=75',
            name: 'Razero Playstation VR',
            price: '$500.00',
            category:'console'
        },
        {
            id: 31,
            imgSrc: 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2210%2FHeadphone-6.jpg&w=1920&q=75',
            name: 'Razero Playstation VR',
            price: '$500.00',
            category:'console'
        },
        {
            id: 32,
            imgSrc: 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2212%2FHeadphone-5.jpg&w=1920&q=75',
            name: 'Razero Playstation VR',
            price: '$500.00',
            category:'laptop'
        },
        {
            id: 33,
            imgSrc: 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2214%2FHeadphone-4.jpg&w=1920&q=75',
            name: 'Razero Playstation VR',
            price: '$500.00',
            category:'laptop'
        },
        {
            id: 34,
            imgSrc: 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2214%2FHeadphone-4.jpg&w=1920&q=75',
            name: 'Razero Playstation VR',
            price: '$500.00',
            category:'laptop'
        },
        
        {
            id: 35,
            imgSrc: 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2219%2FMobile-1.jpg&w=1920&q=75',
            name: 'Razero Playstation VR',
            price: '$500.00',
            category:'console'
        },
        {
            id: 36,
            imgSrc: 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2220%2FMobile.jpg&w=1920&q=75',
            name: 'Razero Playstation VR',
            price: '$500.00',
            category:'console'
        },
        {
            id: 37,
            imgSrc: 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2221%2FMobile-3.jpg&w=1920&q=75',
            name: 'Razero Playstation VR',
            price: '$500.00',
            category:'laptop'
        },
        {
            id: 38,
            imgSrc: 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2222%2FMobile-4.jpg&w=1920&q=75',
            name: 'Razero Playstation VR',
            price: '$500.00',
            category:'laptop'
        },
        {
            id: 39,
            imgSrc: 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2224%2FMobile-5.jpg&w=1920&q=75',
            name: 'Razero Playstation VR',
            price: '$500.00',
            category:'mobile'
        },
        {
            id: 40,
            imgSrc: 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2229%2FRouter.jpg&w=1920&q=75',
            name: 'Razero Playstation VR',
            price: '$500.00',
            category:'camera'
        },
        {
            id: 41,
            imgSrc: 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2231%2FRouter-1.jpg&w=1920&q=75',
            name: 'Razero Playstation VR',
            price: '$500.00',
            category:'mobile'
        },
        {
            id: 42,
            imgSrc: 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2234%2FRouter-2.jpg&w=1920&q=75',
            name: 'Razero Playstation VR',
            price: '$500.00',
            category:'laptop'
        },
        {
            id: 43,
            imgSrc: 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2236%2FRouter-3.jpg&w=1920&q=75',
            name: 'Razero Playstation VR',
            price: '$500.00',
            category:'router'
        },
        {
            id: 44,
            imgSrc: 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2238%2FRouter-4.jpg&w=1920&q=75',
            name: 'Razero Playstation VR',
            price: '$500.00',
            category:'camera'
        }



    ];
    const apiUrl = "https://6655cd493c1d3b60293b26de.mockapi.io/web_devloper/bugetplanner";

    const [isfilter, setfilter] = useState(false);
    const [budget, setbudget] = useState(false);
    const [quantities, setQuantities] = useState(Array(products.length).fill(0));
    const [totalAmount, setTotalAmount] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState(26);
    const [selectedProduct, setSelectedProduct] = useState(null);
  

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await axios.get(apiUrl);
                setCartItems(response.data.cartItems || []);
                setTotalAmount(response.data.totalAmount || 0);
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };

        fetchCartItems();
    }, []);

    const parsePrice = (price) => {
        return parseFloat(price.replace(/[$,]/g, ''));
    };

    const addToCart = (index, price) => {
        const parsedPrice = parsePrice(price);
        const newQuantities = [...quantities];
        newQuantities[index] += 1;
        setQuantities(newQuantities);
        setTotalAmount(totalAmount + parsedPrice);
    
        const selectedProduct = products[index];
        const updatedCartItems = [...cartItems];
        const existingItem = updatedCartItems.find(item => item.id === selectedProduct.id);
    
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            updatedCartItems.push({
                id: selectedProduct.id,
                name: selectedProduct.name,
                price: selectedProduct.price,
                quantity: 1
            });
        }
    
        setCartItems(updatedCartItems);
        updateCartOnServer(updatedCartItems);
    };

    const removeFromCart = (index, price) => {
        const parsedPrice = parsePrice(price);
        const newQuantities = [...quantities];
        if (newQuantities[index] > 0) {
            newQuantities[index] -= 1;
            setQuantities(newQuantities);
            setTotalAmount(totalAmount - parsedPrice); 
    
            const selectedProduct = products[index];
            const updatedCartItems = [...cartItems];
            const existingItemIndex = updatedCartItems.findIndex(item => item.id === selectedProduct.id);
    
            if (existingItemIndex !== -1) {
                const existingItem = updatedCartItems[existingItemIndex];
                existingItem.quantity -= 1;
                if (existingItem.quantity === 0) {
                    updatedCartItems.splice(existingItemIndex, 1); 
                }
    
                setCartItems(updatedCartItems);
                updateCartOnServer(updatedCartItems);
            }
        }
    };

    const handleRemoveItem = (id, price) => {
        const parsedPrice = parsePrice(price);
    
        const removedItem = cartItems.find(item => item.id === id);
    
        if (!removedItem) {
            console.error(`Item with id ${id} not found in cart.`);
            return;
        }
    
        const newQuantities = [...quantities];
        const removedItemIndex = products.findIndex(product => product.id === id);
        newQuantities[removedItemIndex] = 0; 
        setQuantities(newQuantities);
    
        const updatedCartItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCartItems);
    
        const removedItemTotalPrice = parsedPrice * removedItem.quantity;
        setTotalAmount(totalAmount - removedItemTotalPrice);
    
        updateCartOnServer(updatedCartItems);
    };
    
    const updateCartOnServer = async (updatedCartItems) => {
        try {
            await axios.put(apiUrl, {
                cartItems: updatedCartItems,
                totalAmount,
                timestamp: new Date().toISOString()
            });
        } catch (error) {
            console.error('Error updating cart on server:', error);
        }
    };

    const loadMoreProducts = () => {
        setVisibleProducts(prev => Math.min(prev + products.length));
    };

    const fliter = () => {
        setfilter(!isfilter);
    };

    const budgets = () => {
        setbudget(!budget);
    };


    const [orderPlaced, setOrderPlaced] = useState(false);
    const handleCheckout = async () => {
        try {
            if (totalAmount <= 0) {
                alert('Failed to place order. Please try again');
                return;
            }
    
            const response = await axios.post(apiUrl, {
                cartItems,
                totalAmount,
                timestamp: new Date().toISOString()
            });
            
            alert('Order placed successfully:', response.data);
    
            setCartItems([]);
            setQuantities(Array(products.length).fill(0));
            setTotalAmount(0);
            setOrderPlaced(true);
            setTimeout(() => {
                setOrderPlaced(false);
            }, 3000); 

        } catch (error) {
            console.error('Error placing order:', error);
            alert('Failed to place order. Please try again.');
        }
    };

   

   

    const handleCardClick = (product) => {
        setSelectedProduct(product);
        document.body.style.overflow = 'hidden';
    };

    const closeProductDetails = () => {
        setSelectedProduct(null);
        document.body.style.overflow = 'auto';
    };

    
   


       return (
        <div className="components">
         <div className={`page-content ${budget || isfilter ? 'dimmed' : ''}`}>
            <div className="pages">
                <div className="scroll">
                    <div className="side">
                        <div className="console" >
                            <div className="console-image">
                                <i className="fa-solid fa-gamepad fa-2xl"></i>
                            </div>
                            <div className="console-head">
                                <h6>Console</h6>
                            </div>
                        </div>
                        <div className="console">
                            <div className="console-image">
                                <i className="fa-solid fa-laptop fa-2xl"></i>
                            </div>
                            <div className="console-head">
                                <h6>Laptop</h6>
                            </div>
                        </div>
                    </div>
                    <div className="side">
                        <div className="console">
                            <div className="console-image">
                                <i className="fa-solid fa-desktop fa-2xl"></i>
                            </div>
                            <div className="console-head">
                                <h6>Monitor</h6>
                            </div>
                        </div>
                        <div className="console">
                            <div className="console-image">
                                <i className="fa-solid fa-keyboard fa-2xl"></i>
                            </div>
                            <div className="console-head">
                                <h6>Accessories</h6>
                            </div>
                        </div>
                    </div>
                    <div className="side">
                        <div className="console">
                            <div className="console-image">
                                <i className="fa-solid fa-camera fa-2xl"></i>
                            </div>
                            <div className="console-head">
                                <h6>Camera</h6>
                            </div>
                        </div>
                        <div className="console">
                            <div className="console-image">
                                <i className="fa-solid fa-headphones fa-2xl"></i>
                            </div>
                            <div className="console-head">
                                <h6>Headphones</h6>
                            </div>
                        </div>
                    </div>
                    <div className="side">
                        <div className="console">
                            <div className="console-image">
                                <i className="fa-solid fa-mobile fa-2xl"></i>
                            </div>
                            <div className="console-head">
                                <h6>Mobiles</h6>
                            </div>
                        </div>
                        <div className="console">
                            <div className="console-image">
                                <i className="fa-solid fa-route fa-2xl"></i>
                            </div>
                            <div className="console-head">
                                <h6>Router</h6>
                            </div>
                        </div>
                    </div>
                    <div className="side">
                        <div className="console">
                            <div className="console-image">
                                <i className="fa-solid fa-stopwatch fa-2xl"></i>
                            </div>
                            <div className="console-head">
                                <h6>Smart Watch</h6>
                            </div>
                        </div>
                        <div className="console">
                            <div className="console-image">
                                <i className="fa-solid fa-music fa-2xl"></i>
                            </div>
                            <div className="console-head">
                                <h6>Sound Box</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="left">
                <div className="control">
                    <div className="head-img">
                        <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2146%2FGadget-banners.png&w=1920&q=75" alt="offers" />
                    </div>
                    <button className="cart-items" onClick={budgets}>
                        <div className="count-items">
                            <h6 className="counting">
                                <i className="fa-solid fa-bag-shopping"></i><span>{cartItems.length} Items</span>
                            </h6>
                        </div>
                        <div className="amount">
                            <h6>${totalAmount.toFixed(2)}</h6>
                        </div>
                    </button>

                    <div className="new-nav">
                        <div className="new-filter">
                            <div className="content-fliter">
                                <button onClick={fliter}><i className="fa-solid fa-arrows-turn-to-dots"></i><span>Filter</span></button>
                            </div>
                            <div className="dropdown">
                                <button className="btnn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fa-solid fa-headphones"></i> Gadgets
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#"><i className="fa-solid fa-apple-whole"></i><span>Grocery</span></a></li>
                                    <li><a className="dropdown-item" href="#"><i className="fa-solid fa-cake-candles"></i><span>Bakery</span></a></li>
                                    <li><a className="dropdown-item" href="#"><i className="fa-solid fa-paintbrush"></i><span>Makeup</span></a></li>
                                    <li><a className="dropdown-item" href="#"><i className="fa-solid fa-bag-shopping"></i><span>Bags</span></a></li>
                                    <li><a className="dropdown-item" href="#"><i className="fa-solid fa-shirt"></i><span>Clothings</span></a></li>
                                    <li><a className="dropdown-item" href="#"><i className="fa-solid fa-chair"></i><span>Furniture</span></a></li>
                                    <li><a className="dropdown-item" href="#"><i className="fa-solid fa-apple-whole"></i><span>Daily Needs</span></a></li>
                                    <li><a className="dropdown-item" href="#"><i className="fa-solid fa-book"></i><span>Books</span></a></li>
                                    <li><a className="dropdown-item" href="#"><i className="fa-solid fa-headphones"></i><span>Gadgets</span></a></li>
                                    <li><a className="dropdown-item" href="#"><i className="fa-solid fa-syringe"></i><span>Medicine</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="containers">
                        {products.slice(0, visibleProducts).map((product, index) => (
                            <div className="card" key={product.id} >
                                <img src={product.imgSrc} alt={product.name} onClick={() => handleCardClick(product)}/>
                                <div className="price">
                                    {product.price}
                                    {product.originalPrice && <span className="original-price">{product.originalPrice}</span>}
                                </div>
                                <h6>{product.name}</h6>
                                <div className="quantity-controls">
                                    <div onClick={() => removeFromCart(index, product.price)} style={{ visibility: quantities[index] > 0 ? 'visible' : 'hidden' }}>
                                        -
                                    </div>
                                    <div className="quantity" onClick={() => addToCart(index, product.price)}>
                                        {quantities[index] > 0 ? quantities[index] : 'Add'}
                                    </div>
                                    <div onClick={() => addToCart(index, product.price)}>+</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {selectedProduct && (
    <div className="product-details-modal">
        <div className="modal-content">
            <img src={selectedProduct.imgSrc} alt={selectedProduct.name} />
            <div className="select">
                <h2>{selectedProduct.name}</h2>
                <p>{selectedProduct.price}</p>
                {selectedProduct.originalPrice && <p>Original Price: {selectedProduct.originalPrice}</p>}
                <p>Category: {selectedProduct.category}</p>
                <div className="quantity-controls">
                    <button  className="product sub" onClick={() => removeFromCart(products.findIndex(product => product.id === selectedProduct.id), selectedProduct.price)}>-</button>
                    <span>{quantities[products.findIndex(product => product.id === selectedProduct.id)]}</span>
                    <button className="product add" onClick={() => addToCart(products.findIndex(product => product.id === selectedProduct.id), selectedProduct.price)}>+</button>
                </div>
            </div>
        </div>
        <button className="close-btn" onClick={closeProductDetails}>
            <i className="fa-solid fa-times"></i>
        </button>
    </div>
)}
<div className={`overlay ${selectedProduct ? 'open' : ''}`} onClick={closeProductDetails}></div>

        
                

                
                {visibleProducts < products.length && (
                    <div className="load-more-btn">
                        <button onClick={loadMoreProducts}>Load More</button>
                    </div>
                )}
            </div>
            </div>
            <div className={`overlay ${isfilter ? 'open' : ''}`} onClick={fliter}></div>

            <div className={`filter-menu ${isfilter ? 'open' : ''}`}>
                <button className="close-btn" onClick={fliter}>
                    <i className="fa-solid fa-times"></i>
                </button>
                <div className="filter-menu-head">
                    <ul className="filter-list">
                        <li><a href='#carousel'><img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2295%2FLogo-new.png&w=1920&q=75" alt="logo" /></a></li>
                        <hr />
                        <li><i class="fa-solid fa-gamepad"></i> <span>Console</span></li>
                        <li><i class="fa-solid fa-laptop"></i> <span>Laptop</span></li>
                        <li><i class="fa-solid fa-desktop"></i> <span>Monitor</span></li>
                        <li> <i class="fa-solid fa-keyboard"></i><span>Accessories</span></li>
                        <li> <i class="fa-solid fa-camera"></i><span></span>Camera</li>
                        <li><i class="fa-solid fa-headphones"></i> <span>Heaphone</span></li>
                        <li>  <i class="fa-solid fa-mobile"></i><span>Mobile</span></li>
                        <li>  <i class="fa-solid fa-route"></i><span>Router</span></li>
                        <li> <i class="fa-solid fa-stopwatch"></i><span>Smart Watches</span></li>
                        <li> <i class="fa-solid fa-music"></i><span>Sound Box</span></li>
                    </ul>
                </div>
            </div>
            <div className={`overlay ${budget ? 'open' : ''}`} onClick={budgets}></div>
            <div className={`budget-menu ${budget ? 'open' : ''}`}>
                <button className="close-btn" onClick={budgets}>
                    <i className="fa-solid fa-times"></i>
                </button>
                <div className="api">
                    <ul className="api-list">
                        <li>
                            <h5 className="countings">
                                <i className="fa-solid fa-bag-shopping fa-lg"></i><span>{cartItems.length}  Items</span>
                            </h5>
                        </li>
                        <li>
                        {cartItems.map((item, idx) => (
    <div className="cart-item" key={item.id}>
        
        <div className="cart-item-details">

        <button onClick={() => removeFromCart(products.findIndex(product => product.id === item.id), item.price)}>-</button>
                <button>{item.quantity}</button>
                <button onClick={() => addToCart(products.findIndex(product => product.id === item.id), item.price)}>+</button>
            
            </div>
            <div className="cart-name">
            <h6>{item.name}</h6>
            <h6>{item.price}</h6>
            <span>{item.quantity}*1 pcs</span>
            </div>
            <div className="cart-price">
            <p> ${(parsePrice(item.price) * item.quantity).toFixed(2)}</p>
            </div>
            <div className="cart-close">
            <button onClick={() => handleRemoveItem(item.id, item.price)}>
                <i className="fa-solid fa-close"></i>
            </button>
        
           </div>
          
        </div>
        
    
))}
                        </li>
                    </ul>
                    <div className="total-amount">
                        
                    
                    <div className="checkout-btn" onClick={handleCheckout}>
                        Checkout
                    </div>
                    <div className="am" onClick={handleCheckout}>${totalAmount.toFixed(2)}</div>
                    </div>
                </div>
            </div>
            
            
        </div>
    );
}