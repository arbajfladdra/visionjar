
import FooterImg from './footer.png';
const Footer = () =>{
    return(
        <footer className = 'row bg-dark'>
        <section className="footer-wrapper smooth-scroll container">
            <div className="footer-img flex-col-1">
                <img src={FooterImg} alt="" className="f-img" />
            </div>
            <div className="footer-brand-name">
                <h2>360 Career Vision</h2>
            </div>
            <div className="footer-info flex-col-1">
                  <div className="footer-details">
                 <h2> 360 Career Vision is Group of Career Counsellors. They are expert in their fields. They have come up from the ground roots and excelled in their Career. This makes them unique to Counsell a candidate.</h2>
                  </div>
            </div>
           
            <div className="footer-contact flex-col-2">
               <div> <div className="contact-item">
                    <span>Phone : </span>
                    <a href="tel:1234567890" target = "blank"> +(91) 1234567890</a>
                </div>
                <div className="contact-item">
                    <span>Mail : </span>
                    
                    <a href="mail:qwerty@email.com" target = "blank">360designcareer@gmail.com</a>
                </div>
                <div className="contact-item">
                    <span>Address : </span>
                    <a href="google_map_address_here" target = "blank">
                        Delhi, India, Asia.
                    </a>
                    
                </div>
                </div>
                
                {/*<nav className="footer-navlinks">
                      <ul type = "none"className="footer-nav-list">
                          <li className="footer-nav-list-item"><Link exact to="/">Home</Link></li>
                          <li className="footer-nav-list-item"><Link exact to="/services">Services</Link></li>
                          <li className="footer-nav-list-item"><Link exact to="/articles">Articles</Link></li>
                          <li className="footer-nav-list-item"><Link exact to="/about">About Us</Link></li>
                          <li className="footer-nav-list-item"><Link exact to="/register">Register</Link></li>
                      </ul>
                  </nav>*/}

            </div>
        </section>
    </footer>
    )
}

export default Footer;