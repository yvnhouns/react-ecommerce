import React from 'react'
import {ProductConsumer} from "../context"
import styled from "styled-components"
import {Link} from "react-router-dom"
import { FaSearch, FaCartPlus } from "react-icons/fa";

const Product = ({product}) => {
    return (
        <ProductConsumer>
            {
                value=>{
                    const {addToCart,setSingleProduct}=value;
                    return (
                    <ProductWrapper className="col-10 mx-auto col-sm-8 col-md-6 col-lg-4 my-3">
                         
                        <div className="card">
                            <div className="img-container">
                            <Link to={`/product/${product.id}`} onClick={()=>setSingleProduct(product.id)}>
                                <img src={product.image} alt={product.name} 
                                className="card-image-top p-5" height="320px"/>
                                </Link>
                                <div className="product-icon ">
                                    <Link to={`/product/${product.id}`} onClick={()=>setSingleProduct(product.id)}>
                                        <FaSearch className="icon" />
                                    </Link>
                                    <FaCartPlus className="icon"  onClick={()=>addToCart(product.id)}/>
                                </div>
                            </div>
                            <div className="card-body d-flex justify-content-between">
                                <p className="mb-0">{product.title}</p>
                                <p className="mb-0 text-main">{product.price} CFA</p>
                            </div>
                        </div>
                        
                    </ProductWrapper>
                    )
                }
            }

        </ProductConsumer>
    )
}

const ProductWrapper=styled.div`
.card{
    transition:var(--mainTransition);
    box-shadow:5px 5px 5px 0px rgba(0,0,0,0.3);
    height:100%;
}
.card:hover{
    box-shadow:7px 10px 5px 0px rgba(0,0,0,0.5);
    cursor:pointer;
}
.card-image-top{
    transition:var(--mainTransition);
}
.card:hover .card-image-top {
    transform:scale(1.15);
    opacity:0.2;
}
.img-container{
    position: relative;
}

.product-icon{
    top:50%;
    left:50%;
    position:absolute;
    transition: var(--mainTransition);
    transform: translate(-50%,-50%);
    opacity:0;
}

.card:hover .product-icon{
    opacity:1;
}
.icon{
    font-size:2.5rem;
    margin:1rem;
    padding:0.5rem;
    color:var(--primaryColor);
    background:var(--mainBlack);
    border-radius:0.5rem;
}
.card-body{
    transition: var(--mainTransition);
   font-weight:bold;
   letter-spacing:1px;
   text-transform:uppercase;
}

`;
export default Product;
