import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import EmailSubscription from '../components/email-subscription';
import SEO from '../components/seo';
import './css/about.css';

// markup
const AboutPage = () => {
  const seo = {
    title: 'About | KodeMonk | Yuvaraj V',
    description: 'Freelancer | Lead Software Engineer | Blogger | Linux Fan Boy',
    date: new Date(),
    path: '/about',
    image: '',
  };

  return (
    <>
      <SEO post={seo}></SEO>
      <Header></Header>
      <main className="py-4 about-me-page">
        <div className="container">
          <div className="row">
            {/* Content */}
            <section className="col-12 col-md-8 col-lg-9">
              <img className="img-fluid bg-light" style={{ minHeight: '350px' }} alt="About me" loading="lazy" decoding="async" src="https://avatars.githubusercontent.com/u/12374494"></img>
              <h1 className='fst-italic'>
                About Me
              </h1>
              <p className="fst-italic text-muted about-me-content">
                I have been working as Tech lead in Bangalore, also a Freelance developer / Blogger and a Linux fan boy who is intrested
                in building scalable web/mobile applications and exploring new linux technologies.
              </p>
              <p className="fst-italic text-muted about-me-content">
                I've completed my B.E (<abbr title="Electronics And Communication Engineering">ECE</abbr>)
                at Anna University (Jeppiaar Maamallan Institute of Technology, Sriperumbudur)
                and MBA (Project Management) at Bharathiar University, Coimbatore
              </p>
            </section>

            {/* Subscription */}
            <section className="col-12 col-md-4 col-lg-3">
              <EmailSubscription></EmailSubscription>
           </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default AboutPage
