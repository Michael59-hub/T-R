import React from 'react';

function Converter(){
    return(
        <div className="converter">
            <div className="converter-intro">
                <p className="converter-intro-head">Are you a Foreigner?</p>
                <p className="converter-intro-sub">Convert from any currency to Naira right here.</p>
            </div>
            <iframe src="https://www.xe.com/currencyconverter/convert/?Amount=1&From=EUR&To=NGN" className="converter-iframe"></iframe>
        </div>
    )
}


export default Converter;