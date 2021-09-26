import React from "react";
import vector1 from '../assets/img/Vector11.png'
import vector2 from '../assets/img/Vector2.png'
import vector3 from '../assets/img/Vektor3.png'
import vector4 from '../assets/img/Vector4.png'
import vector5 from '../assets/img/Vector5.png'
import '../assets/style/detail.scss'
import Gr from '../assets/img/Gr.png'




const Detail = () => {
    return(
        <>
            <div className="detailpage">
            <div className="container detailPage">
                <div className="row country">
                    <div className="col-md-6 section-1">
                        <h1>ROMA, ITALIA</h1>
                        <p>te veniam, nonummy consequat. luptatum aliquip iriure ipsum et sit dolor et facilisi. <br/> volutpat. erat suscipit commodo vulputate consequat, qui wisi vero facilisis <br/> tincidunt amet, vel accumsan dolore exerci molestie elit, nulla ut eu dignissim feugait <br/> feugiat quis autem nibh ex eros at nostrud tation enim dolor duis praesent sed</p>
                        <p>ea feugait delenit consectetuer blandit suscipit minim erat dolore dignissim iusto <br/> amet, volutpat. Lorem consequat, feugiat laoreet sed illum zzril et autem nostrud wisi <br/> sit nulla ut aliquam ad facilisi.</p>
                        <div className="row mt-4 logo ">
                            <div className="col-1">
                                <img src={vector1} alt="" />
                        </div>
                         <div className="col-md-1">
                            <img src={vector2} alt="" />
                        </div>
                            <div className="col-md-1">
                            <img src={vector3} alt="" />
                        </div>
                            <div className="col-md-1">
                            <img src={vector4} alt="" />
                        </div>
                            <div className="col-md-1">
                            <img src={vector5} alt="" /> 
                        </div>
                    
                    </div>
                    </div>
                    <div className="col-md-6 contentRight">
                        <img src={Gr} alt="" />

                    </div>
                    
                </div>
            </div> 
            </div>
           
        </>
    )
}



export default Detail