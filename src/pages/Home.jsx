import React from 'react';
import Nav from '../Components/Navbar'; 
import '../assets/style/Home.scss'
import line from '../assets/img/line.jpg'
import dot from '../assets/img/dot-ic.jpg'

const HomePage = () => {
    return (
        <> 
        <Nav></Nav>
        <div className="container homepage">
            <div className="row section-one">
                <div className="col-md-6 title-web">
                    <h1>WELCOMING YOU HERE</h1>
                    <p>Exerci odio feugait molestie amet, dolor suscipit ad iriure wisi illum Lorem aliquam diam dolor commodo dolore erat hendrerit et Ut nibh nonummy dignissim sit</p>
                    <button>
                       <img src={line} alt="line"/> Explore More
                    </button>
                </div>
            </div>
            <div className="row section-two">
                <div className="col-md-6 title-web">
                    <h1>PRICE OFFERING</h1>
                    <p>Exerci odio feugait molestie amet, dolor suscipit ad iriure wisi illum Lorem aliquam diam dolor commodo dolore erat hendrerit et Ut nibh nonummy dignissim sit</p>
                    <button>
                       <img src={line} alt= "line"/> Explore More
                    </button>
                </div>
            </div>
            <div className="row section-three">
                <div className="col-md-4 content">
                    <h1>We promise, it won't get borring.</h1>
                </div>
                <div className="col-md-4 content">
                    <p>Are you ready to go on adventures that will take your breath away? Climb the Olympus Mons, the tallest mountain on any planet or explore the Deep Ice Caves of Europa. The possibilities are endless.</p>
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
                    <p>Somewhere, something incredible is waiting to be known.</p>
                    <img width='34' src={line} alt=""/> CARL SAGAN
                </div>
                <div className="col-md-4 ms-auto">
                    <button>
                        <img src={line} alt= "line"/> Find Your Trip
                    </button>
                </div>
            </div>
            <div className="row section foor">
                  
                </div>
        </div>
        </>
    )
}



export default HomePage