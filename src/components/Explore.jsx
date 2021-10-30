import React from 'react';
import pic from '../img/first-image.jpg';
import festac from '../img/Festac.jpg';
import badagry from '../img/badagry.jpeg';
import tropicana from '../img/La-Campagne-Tropicana-Lagos.jpeg';
import nike from '../img/Nike.jpg';
import omu from '../img/omu_resort.jpg';
import rufus from '../img/rufus_bee.jpg';

function Explore(){
    return(
        <div className="explore-nearby">
            <div className="explore-header">Explore nearby</div>
            <table className="explore-table">
                <tr>
                    <td className="explore-data">
                        <div className="explore-items">
                            <img src={festac} style={{width: `70px`, height:`70px`}} className="explore-pic"/>
                            <span class="explore-text"><strong>Festac</strong><br /> 45 minute drive</span>
                        </div>
                    </td>
                    <td className="explore-data">
                        <div className="explore-items">
                            <img src={badagry} style={{width: `70px`, height:`70px`}} className="explore-pic"/>
                            <span class="explore-text"><strong>Badagry</strong><br /> 1 Hour drive</span>
                        </div>
                    </td>
                    <td className="explore-data">
                        <div className="explore-items">
                            <img src={tropicana} style={{width: `70px`, height:`70px`}} className="explore-pic"/>
                            <span class="explore-text"><strong>La Campagne Tropicana</strong><br /> 50 minute drive</span>
                        </div>
                    </td>

                </tr>
                <br />
                <tr>
                    <td className="explore-data">
                            <div className="explore-items">
                                <img src={nike} style={{width: `70px`, height:`70px`}} className="explore-pic"/>
                                <span class="explore-text"><strong>Nike Art Gallery</strong><br /> 35 minute drive</span>
                            </div>
                        </td>
                        <td className="explore-data">
                            <div className="explore-items">
                                <img src={omu} style={{width: `70px`, height:`70px`}} className="explore-pic"/>
                                <span class="explore-text"><strong>Omu Resort</strong><br /> 35 minute drive</span>
                            </div>
                        </td>
                        <td className="explore-data">
                            <div className="explore-items">
                                <img src={rufus} style={{width: `70px`, height:`70px`}} className="explore-pic"/>
                                <span class="explore-text"><strong>Rufus and Bee</strong><br /> 45 minute drive</span>
                            </div>
                        </td>
                </tr>
            </table>
        </div>
    )
}

export default Explore;