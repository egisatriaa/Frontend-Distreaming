import React from 'react';
import './footer.css';
import FooterNavItem from '../components/FooterNavItem';

function Footer() {
    const usefulLinks = [
        'Home',
        'Movies',
        'My List',
        'Term of Service',
        'Privacy Policy',
    ];
    const locations = [
        'dolorum optio',
        'Non rem Rerum',
        'Lorem, ipsum dolor.',
        'Justo Egey',
        'Fermentum iaculis',
    ];
    return (
        <footer id="footer" className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12 footer-info">
                            <a
                                href="/"
                                className="logo d-flex align-items-center"
                            >
                                <span>DiStreaming</span>
                            </a>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Reiciendis eveniet accusantium
                                voluptatem, quidem iure, nostrum voluptas a
                                laudantium ipsa sint, eum esse omnis. Excepturi
                                natus alias explicabo recusandae error quod.
                            </p>
                            <div className="social-links mt-3">
                                <a href="#">
                                    <ion-icon name="logo-facebook"></ion-icon>
                                </a>
                                <a href="#">
                                    <ion-icon name="logo-twitter"></ion-icon>
                                </a>
                                <a href="#">
                                    <ion-icon name="logo-instagram"></ion-icon>
                                </a>
                                <a href="#">
                                    <ion-icon name="logo-youtube"></ion-icon>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-2 col-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                {usefulLinks.map((link) => (
                                    <FooterNavItem key={link} name={link} />
                                ))}
                            </ul>
                        </div>

                        <div className="col-lg-2 col-6 footer-links">
                            <h4>Our Cinemas</h4>
                            <ul>
                                {locations.map((link) => (
                                    <FooterNavItem key={link} name={link} />
                                ))}
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start mt-5 mt-md-0">
                            <h4>Contact Us</h4>
                            <p>
                                Street Name <br />
                                City Name, State 123456
                                <br />
                                Australia <br />
                                <br />
                                <strong>Phone:</strong> +1 2345 6789 00 <br />
                                <strong>Email:</strong> info@example.com <br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="copyright">
                    &copy; Copyright{' '}
                    <strong>
                        <span>Student Dibimbing</span>
                    </strong>{' '}
                    2026 All rights reserved
                </div>
                <div className="credits">
                    Design by <a href="#">Student Dibimbing</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
