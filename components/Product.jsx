import React, { useState } from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Product = ({ product: { image, name, slug, price } }) => {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='product-card'>
          <img
            src={urlFor(image && (index === 0? image[0] : image[1] || image[0]))}
            width={280}
            height={250}
            className='product-image'
            onMouseOver={() => setIndex(1)}
            onMouseOut={() => setIndex(0)}
          />
          <p className='product-name'>{name}</p>
          <p className='product-price'>&#8377; {price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;