import React from 'react'
import './App.css'
import { HiArrowUpRight } from "react-icons/hi2";

function App() {
  return (
    <div>
      {/* First section Poster */}
      <section className='first_section_main'>

        <div className='first-navbar-section'>

          <div className='first-navbar-left'>
            <img src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png" 
            height={'60px'} width={'200px'} alt="" />

          </div>

          <div className='first-navbar-right'>
            <p className='first-navbar-right-content'>Swiggy</p>
            <p className='first-navbar-right-content'>Partner</p>

            <button className='first-navbar-get-btn'>Get the App <HiArrowUpRight className='get-btn' /></button>
            <button className='first-navbar-signin-btn'>Sign in</button>

          </div>

        </div>

        <div className='first-content-section'>

          <div className='first-content-heading'>Order food & groceries. Discover best restaurants. Swiggy it!</div>

          <div className='first-content-input-section'>
            <select className='first-content-location'>
              <option> Enter your delivery location</option>
            </select>
            <input type="text" placeholder='Search for restaurent, item or more' />
          </div>

        </div>

      </section>
    </div>
  )
}

export default App