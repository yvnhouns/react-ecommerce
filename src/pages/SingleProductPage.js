import React, { Component } from "react";
import Hero from "../components/Hero.js";
import singleProductBcg from "../images/singleProductBcg.jpeg"
import { ProductConsumer } from "../context/context.js";
import {Link} from "react-router-dom"

class SingleProductPage extends Component {
  render() {

    return (
       <>
          <Hero img={singleProductBcg} title="Single Product"/>
          <ProductConsumer>
            {
              value=>
              {
                const {singleProduct,addToCart,loading}=value;
                if (loading){
                  return <h1>Product loading ...</h1>
                }
                const {id,title,price,company,description,image}=singleProduct;
                return (
                  <section className="py-5">
                  <div className="container">
                    <div className="row">
                      <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                        <img src={`../${image}`} alt={title} className="img-fluid"/>
                      </div>
                      <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                        <h5 className="text-title mb-4">{title}</h5>

                        <h5 className="text-capitalize text-muted mb-4">marque: {company}</h5>
                        <h5 className="text-capitalize text-title mt-3">Prix :{price} Fcfa</h5>
                        <p className="text-capitalize text-title mt-3"> Description</p>
                        <p>{description}</p>
                        <button className="main-link" 
                        type="button"
                        style={{margin:`2rem`}}
                        onClick={()=>addToCart(id)}> add to cart </button>
                        <Link to="/products"  className="main-link" style={{margin:`0.75rem`}}>back to store</Link>
                      </div>
                                              
                    </div>
                  </div>
                  </section>
                )
              }
            }
          </ProductConsumer>
        </>
      );
  }
}

SingleProductPage.propTypes = {};

export default SingleProductPage;
