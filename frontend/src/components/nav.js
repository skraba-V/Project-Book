import React from 'react';
import { Link } from 'react-router-dom';  

export default function Nav() {

  return (
    <nav className="navbar navbar-expand-lg zomk">
        <div className="container-fluid container">
          <a className="navbar-brand" href="/"><img className="logo" src='/assets/book.png' alt=""/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/"
              >
                Leistungen
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/book">
                Bucher
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Uber Uns
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Referencen
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Kontakt
              </Link>
            </li>
            </ul> 
          </div>
        </div>
    </nav>
     
  )
}


