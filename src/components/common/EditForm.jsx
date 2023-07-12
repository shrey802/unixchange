/* eslint-disable no-unused-vars */
import React from 'react'
import '../common/addproduct.css'
export default function EditForm() {
  return (
    <div className='addyourproductform'>
      <h2 className='prodhead'>Edit your product data here</h2>
      <label>Product Name</label>
      <input 
        type='text'
        className='nameofproduct'
        placeholder='Enter your product name'
        name='name'
        
      />

      <label>Product Description (upto 20-25 words)</label>
      <textarea
        placeholder='Enter your product description'
        name='description'
        
      />

      <label>Product Price (in ₹)</label>
      <input
        type='number'
        className='productprice'
        placeholder='Enter your product price'
        name='price'
        
      />

      <label>Product Quantity</label>
      <input
        type='number'
        className='productquantity'
        placeholder='Enter number of copies you want to sell'
        name='quantity'
        
      />

      <label>Product Condition</label>
      <label>
        <input
          type='checkbox'
          className='productcondition'
          name='condition'
          value='new'
          
        />
        new
      </label>
      <label>
        <input
          type='checkbox'
          className='productcondition'
          name='condition'
          value='used'
          
        />
        used
      </label>

      <label htmlFor='category'>
        Category <br />
        <select
          id='category'
          name='category'  
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
        />
        Sold
      </label>
      <label>
        <input
          type='checkbox'
          name='tag'
          value='unsold'
        />
        Unsold
      </label>
      {/* <label>Product Images (press ctrl + select multiple images from your computer)</label>
      <input type='file' name='pictures' multiple onChange={handleImageChange}/> */}
      <input
        type='submit'
        name='edit'
        value='Edit'
      />
    </div>
  )
}
