import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
const HeroBanner = ({ heroBanner, slug}) => {
  const productLink = slug && slug.current ? `/product/${slug.current}` : "/product/vans-black-sneakers";
  return (
    <div className="hero-banner-container">
      <div className="banner-div">
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3 className="mid-text">{heroBanner.midText}</h3>
        <h1 className="large-text">{heroBanner.largeText1}</h1>
          <img
            src={urlFor(heroBanner.image)}
            alt="sneakers-image"
            className="hero-banner-image" 
          />        
        <div className="hero-banner-button">
        
            <Link href={productLink}>
              <button type="button">{heroBanner.buttonText}</button>
            </Link>
          
          <div className="desc">
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
