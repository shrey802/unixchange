/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './display.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function ProductDisplay({ products }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // Number of slides to scroll at a time
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className='productGrid'>
      {products.map((product) => (
        <div key={product.id} className='productCard'>
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            infinite={true}
            autoPlay={false}
            containerClass='carousel-container'
            itemClass='carousel-item'
          >
            {product.images.map((image, index) => (
              <div key={index} className='imageContainer'>
                <img src={image} alt={`Product ${index + 1}`} className='productImage' />
              </div>
            ))}
          </Carousel>

          <p className='productName'>{product.name}</p>
          <p className='productDescription'><span className='spandata'>Description:</span> {product.description}</p>
          <p className='productPrice'><span className='spandata'>Price:</span> {product.price}</p>
          <p className='productQuantity'><span className='spandata'>Quantity:</span> {product.quantity}</p>
          <p className='productCondition'><span className='spandata'>Condition:</span> {product.condition}</p>
          <p className='productCategory'><span className='spandata'>Category:</span> {product.category}</p>
          <p className='productTag'><span className='spandata'>Tag:</span> {product.tag}</p>
        </div>
      ))}
    </div>
  );
}
