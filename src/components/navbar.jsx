import React, { useState } from 'react';


export default function Navbar() {
    const [isToggled, setIsToggled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const click = () => {
        setIsToggled(!isToggled);
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };


    return (
        <div>
            <div className={`nav-head ${isSearchOpen ? 'blurred' : ''}`}>
                <div className="nav-list">
                    <div className="nav-bars">
                        <div className="toggles">
                            <button onClick={click}>
                                <i className="fa-solid fa-bars fa-lg"></i>
                            </button>
                        </div>
                        <div className="nav-logo">
                            <img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2295%2FLogo-new.png&w=1920&q=75" alt="logo" />
                        </div>
                        <div className="nav-box">
                            <div className="gadgets">
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
                    <div className="nav-right">
                        <div className="nav-shops">
                            <div className="nav-item">
                                <ul className="list-items">
                                    <li className="nav-links">Shops</li>
                                    <li className="nav-links">Offer</li>
                                    <li className="nav-links">Contact</li>
                                    <li className="nav-links">
                                        <div className="down">
                                            Pages<i className="fa-solid fa-chevron-down fa-2xs"></i>
                                            <ul className="content">
                                                <li>Flash Sale</li>
                                                <li>Manufactures / Publisher</li>
                                                <li>Author</li>
                                                <li>FAQ</li>
                                                <li>Terms and Conditions</li>
                                                <li>Customer Refund Policy</li>
                                                <li>Vendor Refund Policy</li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="nav-user">
                                <div className="nav-search">
                                    <ul className="nav-main">
                                        <li className="research">
                                            <i className="fa-solid fa-magnifying-glass" onClick={toggleSearch}></i>
                                        </li>
                                        <li className="research">
                                            <button className="btns">Join</button>
                                        </li>
                                        <li className="seller">
                                            <button className="btns">Become a Seller</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`search-box ${isSearchOpen ? 'open' : ''}`}>
                <input type="text" placeholder="Search..." />
                <button onClick={toggleSearch}><i className="fa-solid fa-times"></i></button>
            </div>
            <div className={`toggle ${isToggled ? 'open' : ''}`}>
                <button className="close-btn" onClick={click}>
                    <i className="fa-solid fa-times"></i>
                </button>
                <ul className="groups1">
                    <li><a href='#carousel'><img src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2295%2FLogo-new.png&w=1920&q=75" alt="logo" /></a></li>
                    <hr />
                    <li><a href="#carousel">Shops</a></li>
                    <li><a href="#box">Offers</a></li>
                    <li><a href="#set">Contact</a></li>
                    <li><a href="#mobile">Flash Sale</a></li>
                    <li><a href="#Watches">Manufacture / Publisher</a></li>
                    <li><a href="#posts">Author</a></li>
                    <li><a href="#posts">FAQ</a></li>
                    <li><a href="#posts">Terms and Conditions</a></li>
                    <li><a href="#posts">Customer Refund Policy</a></li>
                    <li><a href="#posts">Vendor Refund Policy</a></li>
                </ul>
            </div>
            <div className='bottom-icon'>
                <ul className='bottom'>
                    <li><button onClick={click}><i class="fa-solid fa-bars"></i></button></li>
                    <li><button onClick={toggleSearch}><i class="fa-solid fa-magnifying-glass"></i></button></li>
                    <li><button ><i class="fa-solid fa-house"></i></button></li>
                    <li><button><i class="fa-solid fa-cart-shopping"></i></button></li>
                    <li><button><i class="fa-solid fa-user"></i></button></li>
                </ul>
            </div>
        </div>
    );
}
