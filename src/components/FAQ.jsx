import React, {useState} from 'react'

const FAQ = () => {
    //Use descriptive variable names and correct data types
    const [isVisible, setIsVisible] = useState(false)
    
    // Storing the question and answer content
    const question = "Question #1"
    const answer = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  
    return (
      <section>
          <div className="container mx-auto px-4">
                <h2 className="pt-20 font-semibold text-4xl text-center mb-20">
                    Frequently Asked Questions</h2>
              
                <div className="max-w-2xl mx-auto mb-20">
                    <div className="border border-gray-200 rounded-lg p-4 mb-4">
                        <button className="w-full text-left font-semibold text-lg flex justify-between items-center"
                            onClick={() => setIsVisible(!isVisible)}>
                            {question}
                            <span className="ml-2"> {isVisible ? '-' : '+'} </span>
                        </button>

                        {isVisible && (
                            <div className="mt-4 text-gray-700 leading-relaxed">
                                {answer}
                            </div>
                        )}
                    </div>
              </div>
              
          </div>
    </section>
  )
}

export default FAQ