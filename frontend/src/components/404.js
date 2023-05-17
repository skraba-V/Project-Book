import React from 'react';
import '../styles/404.scss'
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="home-button">
        Go Back to Home
      </Link>
    </div>
  )
}