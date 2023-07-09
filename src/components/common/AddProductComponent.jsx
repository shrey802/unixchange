/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import '../common/addproduct.css'
export default function AddProductComponent() {

  return (
    <div className='addyourproductform'>
      <h2 className='prodhead'>Add your product data here</h2>
      <label>Product Name</label>
      <input type='text' className="nameofproduct" placeholder="Enter your product name" name="nameofproduct" />

      <label>Product Description</label>
      <textarea placeholder='enter your product description' rows={10} cols={40} />

      <label>Product Price (in ₹)</label>
      <input type='number' className="productprice" placeholder="Enter your product price" name="price" />

      <label>Product Quantity</label>
      <input type='number' className="productquantity" placeholder="Enter number of copies you want to sell" name="quantity" />

      <label>Product Condition</label>
      <label>
        <input type='checkbox' className="productcondition"
          placeholder="enter the state of product" name="condition"
        />
        new
      </label>
      <label>
        <input type='checkbox' className="productcondition"
          placeholder="enter the state of product" name="condition" />
        used
      </label>
      <label htmlFor='category'>
        Category <br/>
        <select id="category">
        <option value="">Select a category</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
        <option value="home">Home &amp; Kitchen</option>
        <option value="finance">Finance</option>
        <option value="education">Education</option>
        <option value="fitness">Fitness</option>
        </select>
      </label>
      <label>Sold?</label>
      <label>
        <input type="checkbox" name="sold" value="sold"/>
        Sold
      </label>
      <label>
        <input type="checkbox" name="unsold" value="unsold"/>
        Unsold
      </label>
      <label>Enter Product Pictures</label>
      <input type="file" name="productpictures" />

      <input type='submit' name="add" className='submitprod'/>
    </div>

  )
}
