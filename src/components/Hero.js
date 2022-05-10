import React from "react";
import '../css/Hero.css'

export default function Hero(){
    return(
        <section className="Hero">
            <img src="images/heroimage.png" className="heroImage" alt=""/>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    );
}