import styles from './footer.module.css';

const socialLinks = [
    { icon: 'bi-linkedin', url: 'https://www.linkedin.com/in/shivarajnaidu' },
    { icon: 'bi-github', url: 'https://github.com/shivarajnaidu' },
    { icon: 'bi-twitter', url: 'https://twitter.com/YuvarajVemula' },
    { icon: 'bi-youtube', url: 'https://www.youtube.com/c/KodeMonk' },
    { icon: 'bi-envelope-fill', url: 'mailto:shivarajnaidu@gmail.com' },
];


const Footer = () => {
    return (
        <footer className={`${styles.appFooter} container-fluid py-2`}>
            <div className="row justify-content-center">
                <section className="col-6 col-lg-4 d-flex align-items-center text-white">
                    <small className="ps-3 fw-bold">Yuvaraj V &copy; {(new Date()).getFullYear()}</small>
                </section>
                <section className="col-6 col-lg-4 d-flex justify-content-end align-items-center">
                    <div className="d-flex justify-content-lg-end">
                        {
                            socialLinks.map(({ icon, url }) => (
                                <a key={url} href={url} rel="noopener noreferrer" title={url} target="_blank">
                                    <i className={`${icon} mx-2 app-bs-icon`}></i>
                                </a>
                            ))
                        }
                    </div>
                </section>
            </div>
        </footer>
    )
}

export default Footer
