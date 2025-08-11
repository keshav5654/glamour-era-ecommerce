import React from 'react'
import { Link } from 'react-router-dom'
import bannerImg from "../../assets/header .png"
const Banner = () => {
  return (
    <div className='section__container header__container'>
        <div className='header__content z-30'>
            <h4>up to 30% Discount on </h4>
            <h1>
                Fashion Hub
            </h1>
            <p>"🌟 Unmissable Fashion Frenzy! 🌟 Dive into the ultimate style upgrade with our exclusive discounts on girls' fashion products. Trendy outfits, chic accessories, and more—grab them now at unbeatable prices! 🛍️ Hurry, offers are limited!"</p>
            <button className='btn'>
                <Link to='/shop'>EXPLORE NOW</Link>
            </button>
        </div>
        <div className='header__image'>
            <img src={bannerImg} alt="banner image" />
        </div>
      
    </div>
  )
}

export default Banner
