import React from 'react'
import { useGetProductsQuery } from '../../services/products';
import { Link } from 'react-router-dom'

type Props = {}


const Product = (props: Props) => {
    const { data: products = [], isLoading, error } = useGetProductsQuery();

    return (
        <div>
            <div className="wrap">
                <div className="main">
                    <div className="content">
                        <div className="content_top">
                            <div className="heading">
                                <h3>New Products</h3>
                            </div>
                            <div className="see">
                                <p><a href="#">See all Products</a></p>
                            </div>
                            <div className="clear" />
                        </div>
                        <div className="section group">
                            <div className="section group">
                                {products.map(item => (
                                    <div className="grid_1_of_4 images_1_of_4" >
                                        <Link to={`products/detail/${item.id}`}><img src={item.img} alt="" /></Link>
                                        <h2 style={{ padding: '10px' }}>{item.name}</h2>
                                        <div className="price-details">
                                            <div className="price-number">
                                                <p><span className="rupees">{item.price}VNĐ</span></p>
                                            </div>
                                            <br />
                                            <div className="add-cart">
                                                <h4><a href="preview.html">Add to Cart</a></h4>
                                            </div>
                                            <div className="clear" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="content_bottom">
                            <div className="heading">
                                <h3>Feature Products</h3>
                            </div>
                            <div className="see">
                                <p><a href="#">See all Products</a></p>
                            </div>
                            <div className="clear" />
                        </div>
                        <div className="section group">
                            <div className="grid_1_of_4 images_1_of_4">
                                <a href="preview.html"><img src="src/assets/images/new-pic1.jpg" alt="" /></a>
                                <h2>Lorem Ipsum is simply </h2>
                                <div className="price-details">
                                    <div className="price-number">
                                        <p><span className="rupees">$849.99</span></p>
                                    </div>
                                    <div className="add-cart">
                                        <h4><a href="preview.html">Add to Cart</a></h4>
                                    </div>
                                    <div className="clear" />
                                </div>
                            </div>
                            <div className="grid_1_of_4 images_1_of_4">
                                <a href="preview.html"><img src="src/assets/images/new-pic2.jpg" alt="" /></a>
                                <h2>Lorem Ipsum is simply </h2>
                                <div className="price-details">
                                    <div className="price-number">
                                        <p><span className="rupees">$599.99</span></p>
                                    </div>
                                    <div className="add-cart">
                                        <h4><a href="preview.html">Add to Cart</a></h4>
                                    </div>
                                    <div className="clear" />
                                </div>
                            </div>
                            <div className="grid_1_of_4 images_1_of_4">
                                <a href="preview.html"><img src="src/assets/images/new-pic4.jpg" alt="" /></a>
                                <h2>Lorem Ipsum is simply </h2>
                                <div className="price-details">
                                    <div className="price-number">
                                        <p><span className="rupees">$799.99</span></p>
                                    </div>
                                    <div className="add-cart">
                                        <h4><a href="preview.html">Add to Cart</a></h4>
                                    </div>
                                    <div className="clear" />
                                </div>
                            </div>
                            <div className="grid_1_of_4 images_1_of_4">
                                <a href="preview.html"><img src="src/assets/images/new-pic3.jpg" alt="" /></a>
                                <h2>Lorem Ipsum is simply </h2>
                                <div className="price-details">
                                    <div className="price-number">
                                        <p><span className="rupees">$899.99</span></p>
                                    </div>
                                    <div className="add-cart">
                                        <h4><a href="preview.html">Add to Cart</a></h4>
                                    </div>
                                    <div className="clear" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product