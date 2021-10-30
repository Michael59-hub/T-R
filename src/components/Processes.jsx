import React from 'react';
import Header from './Header';



function Processes(){
    return(
        <div className="Processes">
            <Header />
           <div className="processes-head">How does it work?</div>
           <div className="processes-main">
               <div className="processes-step" id="processes-step-1">
                   <i className="fa fa-check fa-4x" ></i>
                   <p className="processes-text">First you Book</p>
               </div>
               <div className="processes-break">
                   <i className="fa fa-angle-right fa-4x"></i>
               </div>
               <div className="processes-step" id="processes-step-2">
                   <i className="fa fa-plane fa-4x"> </i>
                   <p className="processes-text">Then you take a trip</p>
               </div>
               <div className="processes-break">
                   <i className="fa fa-angle-right fa-4x"></i>
               </div>
               <div className="processes-step" id="processes-step-3">
                   <i className="fa fa-edit fa-4x"></i>
                   <p className="processes-text">And you leave a Review</p>
               </div>
           </div>
        </div>
    )
}


export default Processes;