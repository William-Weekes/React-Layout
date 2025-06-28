import React from 'react'

const ThreeCards = () => {
  return (
      <section className="bg-[#efefef]">
          <div className="container mx-auto">
              <h2 className="py-5 font-semibold text-4xl text-center w-150 mb-10 ml-100 mt-5 tracking-wide"> Social Proof Section (Stats, Testimonials, Case Studies, etc.)</h2>
              <div className="flex justify-center items-center h-[300px] mb-10">
                    <div className="card w-[300px] h-full bg-white border-2 border-solid mr-8">Social Proof</div>
                    <div className="card w-[300px] h-full bg-white border-2 border-solid mr-8">Social Proof</div>
                    <div className="card w-[300px] h-full bg-white border-2 border-solid ">Social Proof</div>
              </div>
              <button className="bg-black text-white py-3 px-5 rounded-lg mb-10 ml-160"> Learn More</button>
          </div>
    </section>
  )
}

export default ThreeCards