import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const FooterBanner = ({
  footerBanner: {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    product,
    buttonText,
    image,
    desc,
  },
}) => {
  const productLink = "/product/vans-black-sneakers";
  return (
    <div className="footer-banner-container">
      <Link href={productLink}>
        <div className="banner-desc">
          <div className="left">
            <p>{discount}</p>
            <h3>{largeText1}</h3>
            <h3>{largeText2}</h3>
            <p>{saleTime}</p>
          </div>
          <div className="right">
            <p>{smallText}</p>
            <h3>{midText}</h3>
            <p>{desc}</p>
            <button type="button">{buttonText}</button>
          </div>
          <img src={urlFor(image)} className="footer-banner-image" />
        </div>
      </Link>
    </div>
  );
};

export default FooterBanner;
