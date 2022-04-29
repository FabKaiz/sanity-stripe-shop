import React from 'react'

const Home = () => {
  return (
    <>
      HeroBanner

      <div>
        <h2>Best Selling Products</h2>
        <p>Our lastest tech products</p>
      </div>

      <div>
        {['Product 1', 'Product 2'].map((product) => {
          return product
        })}
      </div>
      
      Footer
    </>
  )
}

export default Home