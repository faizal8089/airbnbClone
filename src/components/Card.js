import React from "react";
import '../css/Card.css'


export default function Card(Data){
    let title = Data.title;
    let price= Data.price;
    let location=Data.location;
    let rating= Data.stats.rating;
    let reviewCount=Data.stats.reviewCount;
    let stats=(Data.openSpots===0?'Sold':Data.location=='Online'&&Data.openSpots!=0?'Online':false);
    let img=Data.coverImg;
    let desc=Data.description;
    return(
        <div className="card">
            {stats&&<span id="status">{stats}</span>}
            <img id="item-img" src={img} alt="" />
            <div className="rating-section">
                <img id="star" src='images/star.png' alt="" />{rating&&<p id="rating">&nbsp;{rating}&nbsp;</p>}
                <p id="origin">({reviewCount}) <img id="elipse" src='images/Ellipse.png' alt="" /> {location}</p>
            </div>
            <p id="title">{title}</p>
            {desc&&<p id="desc">{desc}</p>}
            <p id="price-tag"><span id="price">From ${price}</span> / person</p>
        </div>
    );
}


