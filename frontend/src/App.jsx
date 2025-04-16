import React from 'react'
import './App.css'
import { HiArrowUpRight } from "react-icons/hi2";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci"
import { FaStar } from "react-icons/fa";
import { IoIosCheckboxOutline } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

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


          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Biryani.png"
            height={'150px'} width={'150px'} alt="" />

          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Cake.png"
            height={'150px'} width={'150px'} alt="" />

          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pizza.png"
            height={'150px'} width={'150px'} alt="" />

          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Burger.png"
            height={'150px'} width={'150px'} alt="" />

          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Ice%20Cream.png"
            height={'150px'} width={'150px'} alt="" />

          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Shawarma.png"
            height={'150px'} width={'150px'} alt="" />

          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pasta.png"
            height={'150px'} width={'150px'} alt="" />

          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Momo.png"
            height={'150px'} width={'150px'} alt="" />

          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Momo.png"
            height={'150px'} width={'150px'} alt="" />

          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Chinese.png"
            height={'150px'} width={'150px'} alt="" />

          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Momo.png"
            height={'150px'} width={'150px'} alt="" />

          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Momo.png"
            height={'150px'} width={'150px'} alt="" />

          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Rolls.png"
            height={'150px'} width={'150px'} alt="" />

        </div>

      </section>

      {/* third section card */}

      <section className='third-section'>\
        <div className='third-inner'>

          <h1 className='third-heading'>Discover best restaurants on Dineout</h1>

          <div className='third-card-section'>

            <div className='third-card-onebyone'>

              <div className='third-card-image'>

                <p className='third-image-left'>
                  plan B
                </p>

                <p className='third-image-right'>
                  <FaStar className='third-star-icon' /> 4.2
                </p>

              </div>
              <div className='third-card-content'>

                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', color: 'rgb(102, 102, 102)', fontSize: '15px' }}>
                  <p>Mughlai</p>
                  <p>₹700 for two</p>
                </div>

                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', color: 'rgb(102, 102, 102)', marginTop: '10px', fontSize: '15px' }}>
                  <p>RS Puram, Coimbatore</p>
                  <p>46 km</p>
                </div>

                <button className='third-table-booking'> <IoIosCheckboxOutline className='icon-table-btn' />Table booking</button>

                <button className='third-card-offer-btn'>
                  <p>
                    Flat 30% off on pre-booking
                  </p>
                  <p>+ 1 more</p>
                </button>

                <button className='third-card-offer-btn2'>
                  <p>
                  Up to 10% off with bank offers
                  </p>
                </button>

              </div>



            </div>

          </div>

        </div>

      </section>

      <footer className='footer-main'>

        <div className='inner-footer'>

          <div className='footer-one'>
            <img src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg" height={'50px'} width={'200px'} alt="logo" />
            <p className='content-footer-one'>@ 2025 Swiggy Limited</p>

          </div>

          <div className='footer-two'>
            <h2>Company</h2>
            <p className='footer-p'>About Us</p> 
            <p className='footer-p'> Swiggy Corporate</p>
            <p className='footer-p'>Careers</p> 
            <p className='footer-p'>Team</p>
            <p className='footer-p'>Swiggy One</p>
            <p className='footer-p'>Swiggy Instamart</p>
            <p className='footer-p'>Swiggy Dineout</p>
            <p className='footer-p'>Swiggy Genie</p>
            <p className='footer-p'>Minis</p>
            <p className='footer-p'>Pyng</p>

          </div>

          <div className='footer-three'>
          <h2>Company</h2>
            <p className='footer-p'>About Us</p> 
            <p className='footer-p'> Swiggy Corporate</p>
            <p className='footer-p'>Careers</p> 
            
            <h2 style={{marginTop:'134px'}}>Company</h2>
            <p className='footer-p'>Swiggy Genie</p>
            <p className='footer-p'>Minis</p>
            <p className='footer-p'>Pyng</p>

          </div>

          <div className='footer-four'>

          <h2>Company</h2>
            <p className='footer-p'>About Us</p> 
            <p className='footer-p'> Swiggy Corporate</p>
            <p className='footer-p'>Careers</p> 
            <p className='footer-p'>Team</p>
            <p className='footer-p'>Swiggy One</p>
            <p className='footer-p'>Swiggy Instamart</p>
            <br />
            <select className='select-btn' name="" id="">
              <option  value="">685 cities</option>
            </select>
            

          </div>

          <div className='footer-five'>
          <h2>Company</h2>
            <p className='footer-p'>About Us</p> 
            <p className='footer-p'> Swiggy Corporate</p>
            <p className='footer-p'>Careers</p> 
            <p className='footer-p'>Team</p>

            <h2 style={{marginTop:'134px'}}>Company</h2>
            <div style={{marginTop:'20px'}}>
            <FaLinkedin style={{margin:'10px', color: 'rgb(110, 110, 110)'}} />
            <FaInstagram style={{margin:'10px', color: 'rgb(110, 110, 110)'}} />
            <FaFacebookF style={{margin:'10px', color: 'rgb(110, 110, 110)'}} />
            <FaPinterest style={{margin:'10px', color: 'rgb(110, 110, 110)'}} />
            <FaTwitter style={{margin:'10px', color: 'rgb(110, 110, 110)'}} />


            </div>
            

          </div>

        </div>

      </footer>
       <div className='line'>

       <hr style={{height:'2px', width:'90%',display:'flex', justifyContent:'center'}} />

       </div>

      <section className='bottom-section'>
        <div className='bottom-inner'>
        <h1>For better experience, download the Swiggy app now</h1>
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" alt="" />
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" alt="" />

        </div>
      
        </section>
    </div>
  )
}

export default App