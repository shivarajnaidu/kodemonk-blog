import Link from 'next/link';
import bgImage from './hm-heder-bg.jpg';

import styles from './header.module.css';

const Header: React.FC<{isHome: boolean}> = ({ isHome }) => {
  // console.log(isHome);
  return (
    <header className={`container-fluid ${styles.topNav} py-2`} style={{ ...(isHome && {backgroundImage: `url(${bgImage})`}) }}>
      <div className="container">
        {/* Navbar */}
        <section className="row">
          <nav className="col-12 col-md-6">
            <div className="d-flex">
              <Link className="nav-link p-3 text-white" href="/">KodeMonk</Link>
              <Link className="nav-link p-3 text-white" href="/">Home</Link>
              <Link className="nav-link p-3 text-white" href="/about">About</Link>
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
                  <div className={`${styles.heroBanner} py-lg-4 d-flex flex-column justify-content-center text-center text-white`}>
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
