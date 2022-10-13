import React from "react";
// import { useNavigate, useParams } from "react-router-dom";
import styles from "../components/MenWomenLAndingPage-components/product.module.css";
// import { useEffect, useState } from "react";
// import {  useParams } from "react-router-dom";



 const Product = ({setCartToggle}) => {
 

  let data = JSON.parse(localStorage.getItem("singleProduct")) ;

  let CartData = JSON.parse(localStorage.getItem("CartItem")) || [];

  const AddtoCart = () => {
    CartData.push(data);
    localStorage.setItem("CartItem", JSON.stringify(CartData));
    setCartToggle(true);
  };

  return (
    <div className="container">
    <div className={styles.parent}>
      <div>
        <img src={data.imageurl} alt="" />
      </div>
      <div>
        <h1 style={{fontSize:"25px",fontWeight:"bold"}}>{data.desc}</h1>
        <br />
        <h2>Online Shopping of Women Dresses. Wear beautiful, gorgeous, and chic western dresses by Vero Moda, Harpa, Honey by Pantaloons, and Tokyo Talkies to make a red</h2>

        <br />
          <h1 style={{fontWeight:"bolder"}}>{data.brand}</h1>
        <div className={styles.priceFlex}>
          <p> $ {data.price}</p>
        </div>
        <div>
          <button className={styles.shippingBtn}>
            <img
              src="https://www.zappos.com/marty-assets/shipping-box.dfa1add9e27522acc3ee5d8e061339a9.svg"
              alt=""
            />
            SHIPS FREE
          </button>
          
          ⭐⭐⭐⭐⭐ <span className={styles.ratingSpan}>({data.ratings})</span>
        </div>
        <button  className={styles.cartBtn} onClick={AddtoCart}> 
          {/* onClick={AddtoCart} */}
          Add To Cart
        </button>
        <div className={styles.lastBox}>
          <strong>FREE</strong> upgraded shipping & returns with
        </div>
        <img
          width={"20%"}
          src="https://www.zappos.com/marty-assets/amazon-prime.2821774c351a0e9079f230ad4b312a71.svg"
          alt=""
        />
      </div>
    </div>
    </div>
  );
};


export default Product;
