import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
type Props = {}

const Header = (props: Props) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className="wrap">
            <div className="header">
                <div className="headertop_desc">
                    <div className="call">
                        <p><span>Need help?</span> call us <span className="number">1-22-3456789</span></p>
                    </div>
                    <div className="account_desc">
                        <ul>
                            <li><a href="#" onClick={handleClickOpen}>Register</a></li>
                            <li><a href="#">Login</a></li>
                            <li><a href="#">Delivery</a></li>
                            <li><a href="#">Checkout</a></li>
                            <li><a href="#">My Account</a></li>

                        </ul>
                    </div>
                    <div className="clear" />
                </div>
                <div className="header_top">
                    <div className="logo">
                        <a href="index.html"><img src="src/assets/images/logo.png" alt="" /></a>
                    </div>
                    <div className="cart">
                        <p>Welcome to our Online Store! <span>Cart:</span>
                        </p><div id="dd" className="wrapper-dropdown-2"> 0 item(s) - $0.00
                            <ul className="dropdown">
                                <li>you have no items in your Shopping cart</li>
                            </ul>
                        </div>
                        <p />
                    </div>
                    <div className="clear" />
                </div>
                <div className="header_bottom">
                    <div className="menu">
                        <ul>
                            <li className="active"><a href="index.html">Home</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="delivery.html">Delivery</a></li>
                            <li><a href="news.html">News</a></li>
                            <li><a href="contact.html">Contact</a></li>
                            <div className="clear" />
                        </ul>
                    </div>

                    <div className="clear" />
                </div>
                <div className="header_slide">
                    <div className="header_bottom_left">
                        <div className="categories">
                            <ul>
                                <h3>Categories</h3>
                                <li><a href="#">Mobile Phones</a></li>
                                <li><a href="#">Desktop</a></li>
                                <li><a href="#">Laptop</a></li>
                                <li><a href="#">Accessories</a></li>
                                <li><a href="#">Software</a></li>
                                <li><a href="#">Sports &amp; Fitness</a></li>
                                <li><a href="#">Footwear</a></li>

                            </ul>
                        </div>
                    </div>
                    <div className="header_bottom_right">
                        <div className="slider">
                            <div id="slider">
                                <div id="mover">
                                    <div id="slide-1" className="slide">
                                        <div className="slider-img">
                                            <a href="preview.html"><img src="https://hoangtusaigon.vn/wp-content/uploads/2021/01/banner-1.jpg" alt="learn more" /></a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="clear" />
                        </div>
                    </div>
                    <div className="clear" />
                </div>
            </div>
        </div>
    );
}

export default Header