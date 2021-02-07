import React from 'react'
import Header from '../components/header';
import './css/about.css';

// markup
const AboutPage = () => {
  return (
    <>
      <Header></Header>
      <main className="py-4 about-me-page">
        <div className="container">
          <div className="row">
            {/* Content */}
            <section className="col-12 col-md-8">
              <img alt="About me" loading="lazy" decoding="async" src="https://avatars.githubusercontent.com/u/12374494"></img>
              <h1>
                About Me
              </h1>
            </section>

            {/* Subscription */}
            <section className="col-12 col-md-4">
              Subscribe
            </section>
          </div>
        </div>
      </main>
    </>
  )
}

export default AboutPage
