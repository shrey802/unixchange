/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../common/addproduct.css';
import { AddUsersProduct } from '../../api/Productapi';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
export default function AddProductComponent() {
  // WE HAVE (TEXT & CHECKBOX & SELECTORS) ALSO IMAGES STORED AS (ARRAY)
  const[productimages, setproductimages] = useState(null);
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    price: '',
    quantity: '',
    condition: '',
    category: '',
    tag: '',
    images: []
  });
  const navigate = useNavigate();
  const handlingProductAPI = async () => {
    try {
      await AddUsersProduct(
        productData.name,
        productData.description,
        productData.price,
        productData.quantity,
        productData.condition,
        productData.category,
        productData.tag,
        productimages
      );
      toast.success('Your product has been added successfully.');
      setProductData({
        name: '',
        description: '',
        price: '',
        quantity: '',
        condition: '',
        category: '',
        tag: '',
        images: []
      })
      setTimeout(() => {
        toast('you are being navigated now wait for few seconds');
        navigate('/products');
      }, 6000);
    } catch (error) {
      toast.error(error);
    }
  };
  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const imageArray = [];

    files.forEach((file) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onloadend = () => {
        imageArray.push(reader.result);
      };
    });

    setproductimages(imageArray);
  }
  const handleInputChange = (event) => {
    const { name, value, type, checked} = event.target;
    
    if (type === 'checkbox') {
      setProductData((prevState) => ({
        ...prevState,
        [name]: checked ? value : '',
      }))
    }else{
      setProductData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }
};
 return (
    <div className='addyourproductform'>
      <h2 className='prodhead'>Add your product data here</h2>
      <label>Product Name</label>
      <input
        type='text'
        className='nameofproduct'
        placeholder='Enter your product name'
        name='name'
        value={productData.name}
        onChange={handleInputChange}
      />

      <label>Product Description (upto 20-25 words)</label>
      <textarea
        placeholder='Enter your product description'
        name='description'
        value={productData.description}
        onChange={handleInputChange}
      />

      <label>Product Price (in ₹)</label>
      <input
        type='number'
        className='productprice'
        placeholder='Enter your product price'
        name='price'
        value={productData.price}
        onChange={handleInputChange}
      />

      <label>Product Quantity</label>
      <input
        type='number'
        className='productquantity'
        placeholder='Enter number of copies you want to sell'
        name='quantity'
        value={productData.quantity}
        onChange={handleInputChange}
      />

      <label>Product Condition</label>
      <label>
        <input
          type='checkbox'
          className='productcondition'
          name='condition'
          value='new'
          checked={productData.condition === 'new'}
          onChange={handleInputChange}
        />
        new
      </label>
      <label>
        <input
          type='checkbox'
          className='productcondition'
          name='condition'
          value='used'
          checked={productData.condition === 'used'}
          onChange={handleInputChange}
        />
        used
      </label>

      <label htmlFor='category'>
        Category <br />
        <select
          id='category'
          name='category'
          value={productData.category}
          onChange={handleInputChange}
        >
          <option value=''>Select a category</option>
          <option value='electronics'>Electronics</option>
          <option value='clothing'>Clothing</option>
          <option value='home'>Home &amp; Kitchen</option>
          <option value='finance'>Finance</option>
          <option value='education'>Education</option>
          <option value='fitness'>Fitness</option>
        </select>
      </label>

      <label>Sold?</label>
      <label>
        <input
          type='checkbox'
          name='tag'
          value='sold'
          checked={productData.tag === 'sold'}
          onChange={handleInputChange}
        />
        Sold
      </label>
      <label>
        <input
          type='checkbox'
          name='tag'
          value='unsold'
          checked={productData.tag === 'unsold'}
          onChange={handleInputChange}
        />
        Unsold
      </label>
      <label>Product Images (press ctrl + select multiple images from your computer)</label>
      <input type='file' name='pictures' multiple onChange={handleImageChange}/>
      <input
        type='submit'
        name='add'
        className='submitprod'
        onClick={handlingProductAPI}
      />
    </div>
  );
}
