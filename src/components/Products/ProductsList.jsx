import React from 'react'

import './ProductsList.css'
import ProductCard from './ProductCard'

const ProductsList = () => {
  return (
    <section className="products_list_section">
        <header className="align_center products_list_header">
            <h2>Products</h2>
            <select name="short" id="" className='products_sorting'>
            <option value="" className="">Relevance</option>
            <option value="price desc" className="">Price HIGH to LOW</option>
            <option value="price asc" className="">Price LOW to HIGH</option>
            <option value="rate desc" className="">Rate HIGH to LOW</option>
            <option value="rate asc" className="">Rate LOW to HIGH</option>
            </select>
        </header>

        <div className="products_list">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    </section>
  )
}

export default ProductsList