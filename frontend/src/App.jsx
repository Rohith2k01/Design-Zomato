import React from 'react'
import './App.css'
import { HiArrowUpRight } from "react-icons/hi2";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci"

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
            <FaLocationDot className='location-icon-first' />
            <IoIosArrowDown className='down-arrow-first' />
            <input className='first-content-search' type="text" placeholder='Search for restaurent, item or more' />
            <CiSearch className='search-icon-first' />
          </div>

        </div>

        {/* first-last-section */}
        <div className='first-last-section'>
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"
            alt="" height={'400px'} width={'350px'} />

          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"
            alt="" height={'400px'} width={'350px'} />

          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"
            alt="" height={'400px'} width={'350px'} />

        </div>

      </section>

      {/* second section product */}

      <section className='second-section-main'>

        <div className='second-inner'>

          <button style={{ all: 'unset' }}>
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Momo.png"
              height={'150px'} width={'150px'} alt="" />

          </button>


          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Momo.png"
            height={'150px'} width={'150px'} alt="" />

          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Momo.png"
            height={'150px'} width={'150px'} alt="" />

          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Momo.png"
            height={'150px'} width={'150px'} alt="" />

          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Momo.png"
            height={'150px'} width={'150px'} alt="" />

          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Momo.png"
            height={'150px'} width={'150px'} alt="" />

          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Momo.png"
            height={'150px'} width={'150px'} alt="" />

          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Momo.png"
            height={'150px'} width={'150px'} alt="" />

          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Momo.png"
            height={'150px'} width={'150px'} alt="" />

          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Momo.png"
            height={'150px'} width={'150px'} alt="" />

          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Momo.png"
            height={'150px'} width={'150px'} alt="" />

          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Momo.png"
            height={'150px'} width={'150px'} alt="" />

          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Momo.png"
            height={'150px'} width={'150px'} alt="" />

          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Momo.png"
            height={'150px'} width={'150px'} alt="" />





        </div>

      </section>
    </div>
  )
}

export default App