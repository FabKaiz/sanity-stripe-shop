import React from 'react'
import { Product, FooterBanner, HeroBanner } from '../components'

const Home = () => {
  return (
    <>
      <HeroBanner />

      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Our lastest tech products</p>
      </div>

      <Product />

      <div className="products-container">
        {['Product 1', 'Product 2'].map((product) => {
          return product
        })}
      </div>
      
      <FooterBanner />
    </>
  )
}

export default Home
