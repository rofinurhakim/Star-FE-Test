import React from 'react';
import Nav from '../Components/Navbar'; 
import '../assets/style/Home.scss'
import line from '../assets/img/line.jpg'
import dot from '../assets/img/dot-ic.jpg'
import Union1 from '../assets/img/Union1.jpg'
import Union2 from '../assets/img/Union2.jpg'
import Union3 from '../assets/img/Union3.jpg'
import Footer from '../Components/footer'


const HomePage = () => {
    return (
        <> 
        <Nav></Nav>
        <div className="container homepage">
            <div className="row section-one">
                <div className="col-md-6 title-web">
                    <h1>WELCOMING <br/> YOU HERE</h1>
                    <p>Exerci odio feugait molestie amet, dolor suscipit ad iriure wisi <br/> illum Lorem aliquam diam dolor commodo dolore erat <br/> hendrerit et Ut nibh nonummy dignissim sit</p>
                    <button>
                       <img src={line} alt="line"/> Explore More
                    </button>
                </div>
            </div>
            <div className="row section-two">
                <div className="col-md-6 title-web">
                    <h1>PRICE OFFERING</h1>
                    <p>Exerci odio feugait molestie amet, dolor suscipit ad iriure wisi <br/> illum Lorem aliquam diam dolor commodo dolore erat <br/> hendrerit et Ut nibh nonummy dignissim sit</p>
                    <button>
                       <img src={line} alt= "line"/> Explore More
                    </button>
                </div>
            </div>
            <div className="row section-three">
                <div className="col-md-4 content">
                    <h1>We promise, <br/> it won't get borring.</h1>
                </div>
                <div className="col-md-4 content">
                    <p>Are you ready to go on adventures that will take <br/> your breath away? Climb the Olympus Mons, the <br/> tallest mountain on any planet or explore the Deep <br/> Ice Caves of Europa. The possibilities are endless.</p>
                </div>
                <div className="col-md-4 content">
                   <div className="d-flex circle">
                     <p className='pe-2'>EXPLORE EXPERIENCES</p>
                   <div className="circle-img">
                    <img width='10' height='10' src={dot} alt="dot" />

                   </div>
                   </div>
                </div>
                <div className="col-md-6">
                    <p>Somewhere, something incredible is <br/> waiting to be known.</p>
                    <img width='34' src={line} alt=""/> CARL SAGAN
                </div>
                <div className="col-md-4 ms-auto">
                    <button>
                        <img src={line} alt= "line"/> Find Your Trip
                    </button>
                </div>
            </div>
            <div className="row section-foor">
                  <div className="text-center title">
                      <h1>FEATURES</h1>
                      <p> exerci odio feugait molestie amet, dolor suscipit ad iriure wisi illum Lorem aliquam diam <br/> dolor commodo dolore erat hendrerit et Ut nibh nonummy dignissim sit</p>
                  </div>
                  <div className="row mt-4 Feature">
                      <div className="col-4">
                          <div className="text-center">
                            <img className='w-75'src={Union1} alt="" />
                          </div>
                      </div>
                      <div className="col-4">
                          <div className="text-center">
                            <img className='w-75' src={Union2} alt="" />
                          </div>
                      </div>
                      <div className="col-4">
                          <div className="text-center">
                            <img className='w-75' src={Union3} alt="" />
                          </div>
                      </div>
                  </div>
                </div>
        </div>
        <Footer></Footer>
        </>
    )
}



export default HomePage