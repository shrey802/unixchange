/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from 'react';
import '../common/edit.css';
import { GetProductByProductId, UpdateProductByProductId } from '../../api/Productapi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function EditForm() {
  const [specificProductData, setSpecificProductData] = useState({});
  const navigate = useNavigate();

  // FETCH ALL PRODUCT DATA 
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

  // HANDLE EDITED PRODUCT CHANGES
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

  // HANDLE SUBMITTED FORM CHANGES
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

  // EDIT FORM PREFILLED AND THEN YOU CAN MODIFY 
  return (
    <div className='container mt-5'>
      <div className='row justify-content-center'>
        <div className='col-lg-6 col-md-8'>
          <div className='addyourproductform p-4'>
            <h2 className='prodhead'>Edit your product data here</h2>
            <div className='form-group'>
              <label>Product Name</label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter your product name'
                name='name'
                value={specificProductData?.name || ''}
                onChange={handleEditedChanges}
              />
            </div>

            <div className='form-group'>
              <label>Product Description (up to 20-25 words)</label>
              <textarea
                className='form-control'
                placeholder='Enter your product description'
                name='description'
                value={specificProductData?.description || ''}
                onChange={handleEditedChanges}
              />
            </div>

            <div className='form-group'>
              <label>Product Price (in ₹)</label>
              <input
                type='number'
                className='form-control'
                placeholder='Enter your product price'
                name='price'
                value={specificProductData?.price || ''}
                onChange={handleEditedChanges}
              />
            </div>

            <div className='form-group'>
              <label>Product Condition</label>
              <div className='checkbox-group'>
                <label>
                  <input
                    type='checkbox'
                    className='productcondition'
                    name='condition'
                    value='new'
                    checked={specificProductData?.condition === 'new'}
                    onChange={handleEditedChanges}
                  />
                  New
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
                  Used
                </label>
              </div>
            </div>

            <div className='form-group'>
              <label>Category</label>
              <select
                className='form-control'
                name='category'
                value={specificProductData?.category || ''}
                onChange={handleEditedChanges}
              >
                <option value=''>Select a category</option>
                <option value='electronics'>Electronics</option>
                <option value='clothing'>Clothing</option>
                <option value='home'>Home &amp; Kitchen</option>
                <option value='finance'>Finance</option>
                <option value='education'>Education</option>
                <option value='fitness'>Fitness</option>
              </select>
            </div>

            <div className='form-group'>
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
              </div>

            <button type='submit' className='btn btn-primary' name='edit' onClick={handleEditedSubmit}>
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
