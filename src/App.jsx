import './App.css';
import Home from './pages/home'
import About from './pages/about'
import Services from './pages/services'
import Pricing from './pages/pricing'
import Blog from './pages/blog'
import SignUp from './pages/signup'
import Login from './pages/login'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
