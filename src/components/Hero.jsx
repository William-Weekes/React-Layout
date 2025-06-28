import React from 'react'

const Hero = () => {
  return (
      <section className="hero flex container mx-auto mb-20 ">
          <div className="text w-md">
              <h1 className="headline text-7xl font-bold">5x LTV</h1>
              <h3 className="sub-headline text-3xl font-semibold mb-2">Without Spending More</h3>
              <p className="description text-base mb-10 leading-7">
                  Customer churn killing your profits? Our proprietary retention engine identifies at-risk customers and automatically deploys targeted win-back campaigns, loyalty rewards, and personalized offers that transform fleeting buyers into repeat purchasers—multiplying LTV without touching your marketing budget.
              </p>
              <button className="bg-black text-white py-3 px-5 rounded-lg mb-10">stop losing customers today!</button>
          </div>
          <div className="image ml-50"> this is an image</div>
      </section>
  )
}

export default Hero