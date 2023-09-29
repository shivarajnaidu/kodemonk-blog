import styles from './about.module.css';

const socialLinks = [
    { icon: 'bi-linkedin', url: 'https://www.linkedin.com/in/shivarajnaidu' },
    { icon: 'bi-github', url: 'https://github.com/shivarajnaidu' },
    { icon: 'bi-twitter', url: 'https://twitter.com/YuvarajVemula' },
    { icon: 'bi-whatsapp', url: 'https://wa.me/919498002109?text=From KodeMonk' },
    { icon: 'bi-envelope-fill', url: 'mailto:shivarajnaidu@gmail.com' },
];


const About = () => {
    return (
        <main className={`py-4 ${styles.aboutMePage}`}>
            <div className="container">
                <div className="row">
                    {/* Content */}
                    <section className="col-12 col-md-8 col-lg-9">
                        <img className="img-fluid bg-light" style={{ minHeight: '350px' }} alt="About me" loading="lazy" decoding="async" src="https://avatars.githubusercontent.com/u/12374494"></img>
                        <h1 className='fst-italic'>
                            About Me (Yuvaraj V)
                        </h1>
                        <p className="fst-italic text-muted about-me-content">
                            I have been working as Tech lead in Bangalore, also a Freelance developer / Blogger and a Linux fan boy who is intrested
                            in building scalable web/mobile applications and exploring new linux technologies.
                        </p>
                        <p className="fst-italic text-muted about-me-content">
                            I`ve completed my B.E (<abbr title="Electronics And Communication Engineering">ECE</abbr>)
                            at Anna University (Jeppiaar Maamallan Institute of Technology, Sriperumbudur)
                            and MBA (Project Management) at Bharathiar University, Coimbatore
                        </p>

                        <p className="fst-italic text-muted about-me-content">
                            If you want to follow/contact you can find me on the below social platforms or you can send me the mail directly,
                        </p>

                        <div className="d-none d-md-block">
                            <div className="d-flex">
                                {
                                    socialLinks.map(({ icon, url }) => (
                                        <a key={url} href={url} rel="noopener noreferrer" title={url} target="_blank">
                                            <i className={`${icon} mx-2 app-bs-icon`}></i>
                                        </a>
                                    ))
                                }
                            </div>
                        </div>
                    </section>

                    {/* Subscription */}
                    <section className="col-12 col-md-4 col-lg-3">
                        {/* <EmailSubscription></EmailSubscription> */}
                        <h3 className="d-none d-md-block">You can find me here</h3>
                        <div className="d-flex">
                            {
                                socialLinks.map(({ icon, url }) => (
                                    <a key={url} href={url} rel="noopener noreferrer" title={url} target="_blank">
                                        <i className={`${icon} mx-2 app-bs-icon h1`}></i>
                                    </a>
                                ))
                            }
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}

export default About;