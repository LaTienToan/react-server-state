import React from 'react'
import { useGetProductQuery } from '../../services/products';
import { useParams } from 'react-router-dom';
import Item from 'antd/es/list/Item';



type Props = {}

const Details = (props: Props) => {
    const { id } = useParams()
    const { data, isLoading, error } = useGetProductQuery(id)
    console.log(data);


    if (isLoading) return <div>loading</div>
    return (

        <div className='wrap'>
            <div className="main">
                <div className="content">
                    <div className="content_top">
                        <div className="back-links">
                            <p><a href="index.html">Home</a>
                                <a href="#">Electronics</a></p>
                        </div>
                        <div className="clear" />
                    </div>
                    <div className="section group">
                        <div className="cont-desc span_1_of_2">
                            <div className="product-details" style={{ display: 'flex' }}>
                                <div className="grid images_3_of_2">
                                    <div id="container">
                                        <div id="products_example">
                                            <div id="products">
                                                <div className="slides_container">
                                                    <img style={{ width: 250 }} src={data.img} alt=" " />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="desc span_3_of_2">
                                    <h2>{data.name}</h2>
                                    <p>{data.desc}</p>
                                    <div className="price">
                                        <p>Price: <span>{data.price} VNĐ</span></p>
                                    </div>
                                    <div className="available">
                                        <p>Available Options :</p>
                                        <ul>
                                            <li>Color:
                                                <select>
                                                    <option>Silver</option>
                                                    <option>Black</option>
                                                    <option>Dark Black</option>
                                                    <option>Red</option>
                                                </select>
                                            </li>
                                            <li>Size:<select>
                                                <option>Large</option>
                                                <option>Medium</option>
                                                <option>small</option>
                                                <option>Large</option>
                                                <option>small</option>
                                            </select></li>
                                            <li>Quality:<select>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select></li>
                                        </ul>
                                    </div>
                                    <div className="share-desc">
                                        <div className="share">
                                            <p>Share Product :</p>
                                            <ul>
                                                <li><a href="#"><img src="src/assets/mages/facebook.png" alt="" /></a></li>
                                                <li><a href="#"><img src="src/assets/images/twitter.png" alt="" /></a></li>
                                            </ul>
                                        </div>
                                        <div className="button"><span><a href="#">Add to Cart</a></span></div>
                                        <div className="clear" />
                                    </div>
                                    <div className="wish-list">
                                        <ul>
                                            <li className="wish"><a href="#">Add to Wishlist</a></li>
                                            <li className="compare"><a href="#">Add to Compare</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="clear" />
                            </div>

                            <div className="content_bottom">
                                <div className="heading">
                                    <h3>Related Products</h3>
                                </div>
                                <div className="see">
                                    <p><a href="#">See all Products</a></p>
                                </div>
                                <div className="clear" />
                            </div>
                            <div className="section group">
                                <div className="grid_1_of_4 images_1_of_4">
                                    <a href="#"><img src="../../src/assets/images/new-pic1.jpg" alt="" /></a>
                                    <div className="price" style={{ border: 'none' }}>
                                        <div className="add-cart" style={{ float: 'none' }}>
                                            <h4><a href="#">Add to Cart</a></h4>
                                        </div>
                                        <div className="clear" />
                                    </div>
                                </div>
                                <div className="grid_1_of_4 images_1_of_4">
                                    <a href="#"><img src="../../src/assets/images/new-pic2.jpg" alt="" /></a>
                                    <div className="price" style={{ border: 'none' }}>
                                        <div className="add-cart" style={{ float: 'none' }}>
                                            <h4><a href="#">Add to Cart</a></h4>
                                        </div>
                                        <div className="clear" />
                                    </div>
                                </div>
                                <div className="grid_1_of_4 images_1_of_4">
                                    <a href="#"><img src="../../src/assets/images/new-pic4.jpg" alt="" /></a>
                                    <div className="price" style={{ border: 'none' }}>
                                        <div className="add-cart" style={{ float: 'none' }}>
                                            <h4><a href="#">Add to Cart</a></h4>
                                        </div>
                                        <div className="clear" />
                                    </div>
                                </div>
                                <div className="grid_1_of_4 images_1_of_4">
                                    <img src="../../src/assets/images/new-pic3.jpg" alt="" />
                                    <div className="price" style={{ border: 'none' }}>
                                        <div className="add-cart" style={{ float: 'none' }}>
                                            <h4><a href="#">Add to Cart</a></h4>
                                        </div>
                                        <div className="clear" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rightsidebar span_3_of_1">
                            <h2>CATEGORIES</h2>
                            <ul className="side-w3ls">
                                <li><a href="#">Mobile Phones</a></li>
                                <li><a href="#">Desktop</a></li>
                                <li><a href="#">Laptop</a></li>
                                <li><a href="#">Accessories</a></li>
                                <li><a href="#">Software</a></li>
                                <li><a href="#">Sports &amp; Fitness</a></li>
                                <li><a href="#">Footwear</a></li>
                                <li><a href="#">Jewellery</a></li>
                                <li><a href="#">Clothing</a></li>
                                <li><a href="#">Home Decor &amp; Kitchen</a></li>
                                <li><a href="#">Beauty &amp; Healthcare</a></li>
                                <li><a href="#">Toys, Kids &amp; Babies</a></li>
                            </ul>
                            <div className="subscribe">
                                <h2>Newsletters Signup</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.......</p>
                                <div className="signup">
                                    <form>
                                        <input type="text" defaultValue="E-mail address" />
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details