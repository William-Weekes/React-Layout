import React from 'react'

const Login = () => {
  return (
      <div className="pt-50 items-center">
          <div className="  h-dvh container mx-auto">
              <div className="border-2 border-gray-200 w-175 mx-auto  rounded-lg mb-10">
                  <h2 className="text-3xl font-bold text-center mt-10 mb-10">Log-in</h2>
                  <h3 className="text-2xl font-bold text-center mt-10 mb-10"> Welcome to Inboxd</h3>
                  <p className="text-base text-center mt-10 mb-10">Your Marketing Excellence Tool</p>
                  <div className="ml-40">
                    <label htmlFor="workEmail">Work Email</label> <br/> 
                    <input name="email" type='email' placeholder="Bob@apple.com" className="border-2 border-gray-200 w-94 px-2 py-2 rounded-lg mb-5"/>
                  </div>
                    
                  <div className="ml-40">
                      <label htmlFor="password">Password</label> <br/>
                      <input name="password" type='password' placeholder="a2#sd&" className="border-2 border-gray-200 w-94 px-2 py-2 rounded-lg mb-10" />
                  </div>
                  
                  <button className="bg-[#11345B] text-white px-40 py-4 rounded-lg mb-6 ml-40" type='submit'> Submit  </button>

                  <p className="text-center">Don't have an account? <a href='#' className="text-blue-300">Sign-up</a> here.</p>
                  <p className="text-center mb-20">Forget password? <a href='#' className="text-blue-300">Click here.</a></p>
              </div>
              <p className="text-center text-gray-200 w-xl text-sm mx-auto">By clicking "Submit" you agree to Get Inboxd <a href='#' className="text-blue-300">User Agreement</a> and <a href='#'className="text-blue-300">Privacy Policy</a> we prioritize your privacy and trust, guiding you though innovative interaction while safeguarding your personal information.</p>
          </div>
          
      
     </div>
  )
}

export default Login