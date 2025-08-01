import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Course from './pages/Course'
import Contact from './pages/Contact'
import About from './pages/About'
import Fallback from './pages/Fallback'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/our-services' element={<Course/>}/>
          <Route path='/contact' element={<Contact/>}/>
           <Route path='/about-us' element={<About/>}/>
            <Route path='*' element={<Fallback/>}/>  
      </Routes>
      <Footer/>
      </>
    
  )
}

export default App
