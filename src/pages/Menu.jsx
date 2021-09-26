import React from "react";
import Line from '../assets/img/lineWhite.png'
import '../assets/style/Menu.scss'
import Slid from '../assets/img/sldDetail.png'

const Menu = () => {
    return(
        <>
            <div className="MenuPage">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 listMenu">
                            <ul>
                                <li>
                                    <img width='73px' src={Line} alt="" />
                                    <a href="">Benefit</a></li>
                                <li>
                                    <img width='73px' src={Line} alt="" />
                                    <a href="">Price</a></li>
                                <li>
                                <   img width='73px' src={Line} alt="" />
                                    <a href="">Features</a></li>
                                <li>
                                    <img width='73px' src={Line} alt="" />
                                    <a href="">Membership</a></li>
                                <li>
                                    <img width='73px' src={Line} alt="" />
                                    <a href="">Review</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4 contentright" >
                            <h1>SANS <br/> FRANCISCO</h1>
                            <p>feugiat ipsum luptatum duis hendrerit quis iusto <br/> consequat. nulla zzril ea aliquam vel dolore <br/> laoreet nulla praesent facilisi. veniam, te</p>
                            <button>
                                <img src={Line} alt="" /> Read More
                            </button>
                        </div>
                        <div className="col-md-4 picture">
                            <img width='103%' src={Slid} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Menu