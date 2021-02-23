import React from 'react';
import { Link } from 'gatsby';
import bgImage from './hm-heder-bg.jpg';

import './header.css';

const Header = ({ isHome }) => {
  // console.log(isHome);
  return (
    <header className="container-fluid top-nav py-2" style={{ ...(isHome && {backgroundImage: `url(${bgImage})`}) }}>
      <div className="container">
        {/* Navbar */}
        <section className="row">
          <nav className="col-12 col-md-6">
            <div className="d-flex">
              <Link className="nav-link p-3 text-white" to="/">KodeMonk</Link>
              <Link className="nav-link p-3 text-white" to="/">Home</Link>
              <Link className="nav-link p-3 text-white" to="/about">About</Link>
            </div>
          </nav>
          <section className="col-12 col-md-6">
          </section>
        </section>

        {/* Hero banner */}
        {
          isHome && (
            <section className="row">
              <div className="col-12">
                <div className="py-0 py-md-5">
                  <div className="hero-banner py-lg-4 d-flex flex-column justify-content-center text-center text-white">
                    <div className="py-5">
                      <h1>KodeMonk</h1>
                      <h2>My place on internet</h2>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
        }
      </div>
    </header>
  )
}

export default Header
