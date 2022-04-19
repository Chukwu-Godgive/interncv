import React from 'react';

function biodata() {
    return(
        <div class='container'>
            <div className='subContainer'>
                <div className='heading' id='biodata'>
                    <h3>Bio Data</h3>
                </div>

                <div className='items'>
                    <p>Name: <span>Chukwu Godgive Lawson</span></p>
                    <p>Phone: <span>(+234) 0813 070 9131</span></p>
                    <p>Email: <span><a href='mailto'>chukwugodgive@gmail.com</a></span></p>
                    <p>Twitter: <span><a href='www.twitter.com/givestarzy'>@givestarzy</a></span></p>
                </div>
            </div>
        </div>
    )
};
export default biodata;