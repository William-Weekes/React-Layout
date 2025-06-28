import React from 'react'

const ValueRight = () => {
  return (
      <section>
          <div className="container mx-auto flex">
              <div className="image mr-20">
                  <div className="border-2 border-solid bg-white w-150 h-100 mt-20 mb-15 mr-10"></div>
              </div>
              <div className="text">
                  <h4 className="tracking-wide uppercase font-semibold mb-5 pt-30">Dream Outcome Summary</h4>
                  <h2 className="font-semibold mb-5 text-2xl w-75">Value prop and Big Benefit #2 ("WIIFM")</h2>
                  <p className="text-base mb-10 w-125">Our solution does X,Y,Z (articulate main benefit you provide & explain how you do it in a proprietary or unique way).</p>
                  <button className="bg-black text-white py-3 px-5 rounded-lg mb-10"> Learn More</button>
              </div>
          </div>
      </section>
  )
}

export default ValueRight