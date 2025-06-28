import React from 'react'

const How = () => {
  return (
      <section className="bg-[#efefef]">
          <div className="container mx-auto">
              <h2 className="w-145 pt-20 ml-125 font-semibold text-4xl text-center mb-20"> How it works? (Make the perceived likelihood of achieving success high and effortless)</h2>
              <div className="grid grid-cols-3 gap-4 w-230 ml-80 mb-10">
                  <div className="card w-[300px] size-60 bg-white border-2 border-solid mr-8"> Headline 1</div>
                  <div className="card w-[300px] size-60 bg-white border-2 border-solid mr-8"> Headline 2</div>
                  <div className="card w-[300px] size-60 bg-white border-2 border-solid mr-8"> Headline 3</div>
              </div>
              <button className="bg-black text-white py-3 px-5 rounded-lg mb-10 ml-180"> Learn More</button>
          </div>
    </section>
  )
}

export default How