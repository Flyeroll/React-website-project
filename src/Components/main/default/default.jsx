import React from "react";
import '../default/default.css'

export default function Default(){

    return (
        <div className="aboutUsBox">
            <h1>OUR RESTAURANT</h1>
            <p>One of America's most beloved restaurants, Gramercy Tavern has welcomed guests to enjoy its contemporary American cuisine, warm hospitality, and unparalleled service in New York City for over two decades. Chef Michael Anthony's ever-evolving seasonal menu showcases the restaurant's relationships with local farms and purveyors.

Opened in 1994 by restaurateur Danny Meyer in a historic landmark building just north of Union Square, the restaurant has earned nine James Beard Awards, including "Outstanding Restaurant" and "Outstanding Chef in America.”</p>
            <div className="staffBox">
                <div className="staffBox1">
                    <div>
                        <img src="/images/person1.png" alt="" className="staffFoto"/>
                        <h3>MICHAEL ANTHONY</h3>
                        <h4>Executive Chef</h4>
                    </div>
                    <div>
                        <img src="/images/person2.png" alt="" className="staffFoto"/>
                        <h3>WILLIAM CARROLL</h3>
                        <h4>General Manager</h4>
                    </div>
                </div>
                <div className="staffBox2">
                    <div>
                        <img src="/images/person3.png" alt="" className="staffFoto"/>
                        <h3>MIRO USKOVIC</h3>
                        <h4>Executive Pastry Chef</h4>
                    </div>
                    <div>
                        <img src="/images/person4.png" alt="" className="staffFoto"/>
                        <h3>JOE LAM</h3>
                        <h4>Chef de cusine</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}