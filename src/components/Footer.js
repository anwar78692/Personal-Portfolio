// Create your Footer component here

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="footer-contact-info">
                <h1 className="footer-heading">Connect With Me</h1>
                <p className="footer-contact-access"><a href='mailto:anwar15298@gmail.com'>Email:anwar15298@gmail.com</a></p>
                <p className="footer-contact-access">Mobile: 9198782306</p>
            </div>
            <div>
                <h1>Social Links</h1>
                <div className="social-icons">
                    <a href="https://www.educative.io/"><i><FaFacebook /></i></a>
                    <a href="https://www.educative.io/"><i><FaInstagram /></i></a>
                    <a href="https://www.educative.io/"><i><FaTwitter /></i></a>
                    <a href="https://www.educative.io/"><i><FaLinkedin/></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;