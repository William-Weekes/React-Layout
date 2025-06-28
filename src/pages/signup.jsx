import React from 'react'

const Signup = () => {
  return (
      <div className=" flex flex-row  h-dvh">
          <div className=" flex-1 bg-[#11345B]"></div>
          <div className=" flex-2" >
              <h2 className="text-4xl font-semibold mt-50 text-center mb-5">Sign-Up</h2>
              <h3 className="text-2xl font-semibold text-center mb-5">Create  your account</h3>

              <div className="flex justify-center mb-10">
                  <div className="px-2 py-5 size-8 bg-gray-300 font-bold flex items-center">G</div>
                  <div className="bg-[#2631C7] flex items-center px-5 py-2 text-white font-bold">Register with Google </div>
              </div>

              <p className="text-center mb-10">Or, register with your email</p>
              <div className="flex justify-center">
                  <form className="flex flex-col">
                  <label htmlFor="fullName">Full Name</label>
                  <input name="fullName" type='text' placeholder="Bob Leeson" className="border-2 border-gray-200 w-full px-2 py-2 rounded-lg mb-5"/>
                  <div className="flex">
                        <div className="mr-4 mb-5">
                            <label htmlFor="companyName">Company Name</label> <br/>
                            <input name="companyName" type='text' placeholder="apple.com" className="border-2 border-gray-200 w-84 px-2 py-2 rounded-lg"/>
                      </div>
                      <div>
                            <label htmlFor="companySize">Company Size</label> <br/>
                            <select className="border-2 border-gray-200 w-64 px-2 py-2 rounded-lg">
                                <option value="-">Select a Size</option>
                                <option value="1-5">1-5</option>
                                <option value="6-10">6-10</option>
                                <option value="11-30">11-30</option>
                                <option value="31-50">31-50</option>
                                <option value="51-over">51-over</option>
                            </select>
                      </div>
                  </div>
                  <label htmlFor="workEmail">Work Email</label>
                  <input name="email" type='email' placeholder="Bob@apple.com" className="border-2 border-gray-200 w-full px-2 py-2 rounded-lg mb-5"/>

                  <label htmlFor="password">Password</label>
                  <input name="password" type='password' placeholder="a2#sd&" className="border-2 border-gray-200 w-full px-2 py-2 rounded-lg mb-5"/>

                  <label htmlFor="phone">Phone Number</label>
                      <input name="phone" type='tel' placeholder="(212)940-1234" className="border-2 border-gray-200 w-full px-2 py-2 rounded-lg mb-5"/>
                      
                <button className="bg-[#11345B] text-white px-2 py-4 rounded-lg mb-6" type='submit'> Register </button>
                <p className="text-gray-300 text-sm text-center">By clicking "Register" you agree to Get Inboxd <a href='#' className="text-blue-500">Terms of Service</a> and <a href='#' className="text-blue-500">Privacy Policy</a></p>
                  </form>
                  
              </div>

          </div>
      
     </div>
  )
}

export default Signup