import React from 'react';

export default function Card({ source, text }) {
  return (
    <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center mb-5">
      <div className="karte">
        <div className='content-karte p-5 justify-content-center align-items-center'>
          <img className="card-img-top" src={source} alt=""/>
          <div className="card-body mt-2">
            <p className="card-text text-center">{text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}


