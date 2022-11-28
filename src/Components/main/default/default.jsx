import React from "react";
import '../default/default.css'

export default function Default(){

    return (
        <div className="aboutUsBox">
            <h1>OUR RESTORAUNT</h1>
            <p>One of America's most beloved restaurants, Gramercy Tavern has welcomed guests to enjoy its contemporary American cuisine, warm hospitality, and unparalleled service in New York City for over two decades. Chef Michael Anthony's ever-evolving seasonal menu showcases the restaurant's relationships with local farms and purveyors.

Opened in 1994 by restaurateur Danny Meyer in a historic landmark building just north of Union Square, the restaurant has earned nine James Beard Awards, including "Outstanding Restaurant" and "Outstanding Chef in America.”</p>
            <div className="staffBox">
                <div>
                    <img src="/images/logo.png" alt="" className="staffFoto"/>
                    <h3>NAME</h3>
                    <h4>Beruf</h4>
                </div>
                <div>
                    <img src="/images/logo.png" alt="" className="staffFoto"/>
                    <h3>NAME</h3>
                    <h4>Beruf</h4>
                </div>
                <div>
                    <img src="/images/logo.png" alt="" className="staffFoto"/>
                    <h3>NAME</h3>
                    <h4>Beruf</h4>
                </div>
                <div>
                    <img src="/images/logo.png" alt="" className="staffFoto"/>
                    <h3>NAME</h3>
                    <h4>Beruf</h4>
                </div>
            </div>
        </div>
    )
}