/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from 'react';
import '../common/addproduct.css';
import { GetProductByProductId, UpdateProductByProductId } from '../../api/Productapi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
export default function EditForm() {
  const [specificProductData, setSpecificProductData] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const productID = localStorage.getItem('currentProductID');
        const specificData = await GetProductByProductId(productID);
        setSpecificProductData(specificData);
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchProductData();
  }, []);

  const handleEditedChanges = useCallback(
    (e) => {
      const { name, value, checked } = e.target;
      if (name === 'condition' || name === 'tag') {
        setSpecificProductData((prevState) => ({
          ...prevState,
          [name]: checked ? value : '',
        }));
      } else {
        setSpecificProductData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      }
    },
    [setSpecificProductData]
  );
  

  function handleEditedSubmit() {
    try {
      const productID = localStorage.getItem('currentProductID');
      UpdateProductByProductId(productID, specificProductData);
      toast('You have updated the product now redirecting please wait...');
      navigate('/myproducts');
      localStorage.removeItem('currentProductID');
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div className='addyourproductform'>
      <h2 className='prodhead'>Edit your product data here</h2>
      <label>Product Name</label>
      <input
        type='text'
        className='nameofproduct'
        placeholder='Enter your product name'
        name='name'
        value={specificProductData?.name || ''}
        onChange={handleEditedChanges}
      />

      <label>Product Description (up to 20-25 words)</label>
      <textarea
        placeholder='Enter your product description'
        name='description'
        value={specificProductData?.description || ''}
        onChange={handleEditedChanges}
      />

      <label>Product Price (in ₹)</label>
      <input
        type='number'
        className='productprice'
        placeholder='Enter your product price'
        name='price'
        value={specificProductData?.price || ''}
        onChange={handleEditedChanges}
      />

      <label>Product Quantity</label>
      <input
        type='number'
        className='productquantity'
        placeholder='Enter the number of copies you want to sell'
        name='quantity'
        value={specificProductData?.quantity || ''}
        onChange={handleEditedChanges}
      />

      <label>Product Condition</label>
      <label>
        <input
          type='checkbox'
          className='productcondition'
          name='condition'
          value='new'
          checked={specificProductData?.condition === 'new'}
          onChange={handleEditedChanges}
        />
        new
      </label>
      <label>
        <input
          type='checkbox'
          className='productcondition'
          name='condition'
          value='used'
          checked={specificProductData?.condition === 'used'}
          onChange={handleEditedChanges}
        />
        used
      </label>

      <label htmlFor='category'>
        Category <br />
        <select id='category' name='category' value={specificProductData?.category || ''} onChange={handleEditedChanges}>
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
          checked={specificProductData?.tag === 'sold'}
          onChange={handleEditedChanges}
        />
        Sold
      </label>
      <label>
        <input
          type='checkbox'
          name='tag'
          value='unsold'
          checked={specificProductData?.tag === 'unsold'}
          onChange={handleEditedChanges}
        />
        Unsold
      </label>

      <input type='submit' name='edit' value='Edit' onClick={handleEditedSubmit}/>
    </div>
  );
}
