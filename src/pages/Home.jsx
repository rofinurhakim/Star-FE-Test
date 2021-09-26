import React from 'react';
import NavBar from '../Components/Navbar'; 
import '../assets/style/Home.scss'
import line from '../assets/img/line.jpg'
import dot from '../assets/img/dot-ic.jpg'
import Union1 from '../assets/img/Union1.jpg'
import Union2 from '../assets/img/Union2.jpg'
import Union3 from '../assets/img/Union3.jpg'
import Menu from '../assets/img/Menu.png'
import Footer from '../Components/footer'
import {Carousel} from '3d-react-carousal';
import {useHistory} from 'react-router' 

const HomePage = () => {
    const history = useHistory()

    let slides = [
        <img  src="https://picsum.photos/800/300/?random" alt="1" />,
        <img  src="https://picsum.photos/800/301/?random" alt="2" />  ,
        <img  src="https://picsum.photos/800/302/?random" alt="3" />  ,
        <img  src="https://picsum.photos/800/303/?random" alt="4" />  ,
        <img src="https://picsum.photos/800/304/?random" alt="5" />   ];

    return (
        <> 
        <NavBar></NavBar>
        <div className="homepage">
            <div className="fixed-menu d-none d-md-block">
                <img onClick={() => history.push('/Menu')} width={100} src={Menu} alt="menu"/>
            </div>
            <div className="container mt-5 mt-md-2">
                <div className="row section-one">
                    <div className="col-md-6 title-web order-md-1 order-2">
                        <h1>WELCOMING <br/> YOU HERE</h1>
                        <p>Exerci odio feugait molestie amet, dolor suscipit ad iriure wisi <br/> illum Lorem aliquam diam dolor commodo dolore erat <br/> hendrerit et Ut nibh nonummy dignissim sit</p>
                        <button>
                        <img src={line} alt="line"/> Explore More
                        </button>
                    </div>
                    <div className="col-md-6 align-self-center order-md-2 order-1">
                        <Carousel slides={slides} autoplay={false} interval={1000}/>
                    </div>
                </div>
            </div>
            <div className="container mt-5 mt-md-2">
                <div className="row section-two">
                    <div className="col-md-6 title-web order-md-1 order-2">
                        <h1>PRICE OFFERING</h1>
                        <p>Exerci odio feugait molestie amet, dolor suscipit ad iriure wisi <br/> illum Lorem aliquam diam dolor commodo dolore erat <br/> hendrerit et Ut nibh nonummy dignissim sit</p>
                        <button>
                        <img src={line} alt= "line"/> Explore More
                        </button>
                    </div>
                    <div className="col-md-6 align-self-center order-md-2 order-1">
                        <Carousel slides={slides} autoplay={false} interval={1000}/>
                    </div>
                </div>
            </div>
           <div className=" section-three">
            <div className="container">
                    <div className="row ">
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

                        <div className="col-md-12 my-3">
                            <Carousel slides={slides} autoplay={false} interval={1000} />
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
                </div>
           </div>
            <div className="container">
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
        </div>
        <Footer></Footer>
        </>
    )
}



export default HomePage