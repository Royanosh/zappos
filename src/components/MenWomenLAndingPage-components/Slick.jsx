import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import './App.css';
import './slick.css';

const Slick = () => {
    const settings = {
      dots: true,
    //   autoplay: true,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 6
    };
    return (
      <div className="container">
        <Slider {...settings}>
        <div><img src="https://m.media-amazon.com/images/I/81CKNNjY9BL._AC_SX255_.jpg" alt="Credit to Joshua Earle on Unsplash"/></div>
        <div><img src="https://m.media-amazon.com/images/I/81CKNNjY9BL._AC_SX255_.jpg" alt="Credit to Joshua Earle on Unsplash"/></div>
        <div><img src="https://m.media-amazon.com/images/I/81CKNNjY9BL._AC_SX255_.jpg" alt="Credit to Joshua Earle on Unsplash"/></div>
        <div><img src="https://m.media-amazon.com/images/I/81CKNNjY9BL._AC_SX255_.jpg" alt="Credit to Joshua Earle on Unsplash"/></div>
        <div><img src="https://m.media-amazon.com/images/I/81CKNNjY9BL._AC_SX255_.jpg" alt="Credit to Joshua Earle on Unsplash"/></div>
        <div><img src="https://m.media-amazon.com/images/I/81CKNNjY9BL._AC_SX255_.jpg" alt="Credit to Joshua Earle on Unsplash"/></div>
        <div><img src="https://m.media-amazon.com/images/I/81CKNNjY9BL._AC_SX255_.jpg" alt="Credit to Joshua Earle on Unsplash"/></div>
        <div><img src="https://m.media-amazon.com/images/I/81CKNNjY9BL._AC_SX255_.jpg" alt="Credit to Joshua Earle on Unsplash"/></div>
        <div><img src="https://m.media-amazon.com/images/I/81CKNNjY9BL._AC_SX255_.jpg" alt="Credit to Joshua Earle on Unsplash"/></div>
        <div><img src="https://m.media-amazon.com/images/I/81CKNNjY9BL._AC_SX255_.jpg" alt="Credit to Joshua Earle on Unsplash"/></div>
        <div><img src="https://m.media-amazon.com/images/I/81CKNNjY9BL._AC_SX255_.jpg" alt="Credit to Joshua Earle on Unsplash"/></div>
        <div><img src="https://m.media-amazon.com/images/I/81CKNNjY9BL._AC_SX255_.jpg" alt="Credit to Joshua Earle on Unsplash"/></div>
        
        </Slider>
      </div>
    );
  }



export default Slick;

