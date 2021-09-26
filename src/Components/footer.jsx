import React from 'react'
import '../assets/style/footer.scss'
import Fb from '../assets/img/Facebook.png'
import twit from '../assets/img/Twitter.png'
import instag from '../assets/img/Instagram.png'
const Footer = () => {
    return (
        <>
        <div className=" footer">
          <div className="container">
            <div className="row py-5">
              <div className="col-md-3 right ">
                  <h5>StarTraveler</h5>
              </div>
              <div className="col-md-6">
                <div className="row">
                    <div className="col-md-4">
                        <p>DESTINATIONS</p>
                        <ul>
                            <li><a href="#">Eart</a></li>
                            <li><a href="#">Mons</a>Mons</li>
                            <li><a href="#">Mars</a>Mars</li>
                            <li><a href="#">Europa</a></li>
                        </ul>

                    </div>
                    <div className="col-md-4">
                    <p>GET HELP</p>
                        <ul>
                            <li><a href="#">Status</a></li>
                            <li><a href="#">Preoder</a>Mons</li>
                            <li><a href="#">Returns</a>Mars</li>
                            <li><a href="#">Payment Options</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                    <p>ABOUT</p>
                        <ul>
                            <li><a href="#">News</a></li>
                            <li><a href="#">Careers</a>Mons</li>
                            <li><a href="#">Story</a>Mars</li>
                            <li><a href="#">Sustainable Innovation</a></li>
                            <li><a href="#">Media</a></li>
                        </ul>
                    </div>
                </div>
              </div>
              <div className="col-md-3">
                  <div className="d-flex ms-5">
                      <img width='30' src={twit} alt="" />
                      <img width='30'  className='mx-3'src={Fb} alt="" />
                      <img width='30'  src={instag} alt="" />
                  </div>
              </div>
              </div> 
              <hr />
               <div className="row footer-bottom">
                   <div className="col-md-10 mx-auto line">
                       <div className="row my-4">
                       <div className="col-3 bottom">
                            <h6>© 2021 StarTRAVELER, Inc. All rights reserved.</h6>
                       </div>
                       <div className="col-auto ms-auto">
                           <div className="d-flex list">
                               
                                   <div><a href="">Guides</a></div>
                                   <div><a href="">Terms Of Use</a></div>
                                   <div><a href="">Company Details</a></div>
                                   <div><a href="">Privacy & Cookies Policy</a></div>
                               

                           </div>
                       </div>
                       
                       </div>
                      
                   </div>
               </div>
          </div>
        </div>
        </>
    )

}



export default Footer