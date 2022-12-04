import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    return (
        <div> <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">

                <div className="footer">
                    <div className="wrap">
                        <div className="section group">
                            <div className="col_1_of_4 span_1_of_4">
                                <h4>Information</h4>
                                <ul>
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="contact.html">Customer Service</a></li>
                                    <li><a href="#">Advanced Search</a></li>
                                    <li><a href="delivery.html">Orders and Returns</a></li>
                                    <li><a href="contact.html">Contact Us</a></li>
                                </ul>
                            </div>
                            <div className="col_1_of_4 span_1_of_4">
                                <h4>Why buy from us</h4>
                                <ul>
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="contact.html">Customer Service</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="contact.html">Site Map</a></li>
                                    <li><a href="#">Search Terms</a></li>
                                </ul>
                            </div>
                            <div className="col_1_of_4 span_1_of_4">
                                <h4>My account</h4>
                                <ul>
                                    <li><a href="contact.html">Sign In</a></li>
                                    <li><a href="index.html">View Cart</a></li>
                                    <li><a href="#">My Wishlist</a></li>
                                    <li><a href="#">Track My Order</a></li>
                                    <li><a href="contact.html">Help</a></li>
                                </ul>
                            </div>
                            <div className="col_1_of_4 span_1_of_4">
                                <h4>Contact</h4>
                                <ul>
                                    <li><span>+91-123-456789</span></li>
                                    <li><span>+00-123-000000</span></li>
                                </ul>
                                <div className="social-icons">
                                    <h4>Follow Us</h4>
                                    <ul>
                                        <li><a href="#" target="_blank"><img src="src/assets/images/facebook.png" alt="" /></a></li>
                                        <li><a href="#" target="_blank"><img src="src/assets/images/twitter.png" alt="" /></a></li>
                                        <li><a href="#" target="_blank"><img src="src/assets/images/skype.png" alt="" /> </a></li>
                                        <li><a href="#" target="_blank"> <img src="src/assets/images/dribbble.png" alt="" /></a></li>
                                        <li><a href="#" target="_blank"> <img src="src/assets/images/linkedin.png" alt="" /></a></li>
                                        <div className="clear" />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div></div></div></div>
    )
}

export default Footer