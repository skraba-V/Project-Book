import React from 'react';
import '../styles/Slider.scss';
import Address from "./address";

const Map = () => {
    return (
        <div className='wwls'>
            <Address/>
            <iframe
                title="map"
                width="100%"
                height="550px" 
                scrolling="no" 
                src="https://www.openstreetmap.org/export/embed.html?bbox=14.022814034608137%2C48.16233204180645%2C14.025783239987623%2C48.1637525624235&amp;layer=mapnik&amp;marker=48.163489384567086%2C14.023100050823587">
            </iframe>
        </div>
    );
};

export default Map;