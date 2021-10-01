

//Components
import * as Icons from '../Icons/Icons';
import {Link } from 'react-router-dom';
const Hero = () =>{

    return(
        <div 
        // variants={containerVariants}
        // initial = "hidden"
        // animate = "visible"
        // exit = "exit"
        className="row bg-yellow">
        <section className="hero-section container smooth-scroll">
                <div className="hero-item hero-info">
                    <h1 className="hero-head">
                    Explore your <br /> power of <br /> passion here!
                    </h1>
                    <p className="lead">
                    we will attach your passion with carrier that brings you to become Steve Jobs & guides to achieve goals with power of mistakes. To start hilarious journey grab our hand!
                    </p>
                    <div className="btn-group">
                        <Link to="/services">
                        <div className="btn btn-primary">
                           <span> Services</span>
                            <div className="btn-arrow">
                               <Icons.ArrowRightP/>
                                
                            </div>
                        </div>
                        </Link>
                        <Link to="/about">
                        <div className="btn btn-secondary">
                           <span> Contact Us</span>
                            <div className="btn-arrow">
                               <Icons.ArrowRightS/>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
                <div className="hero-item">
                    <div className="hero-img-wrapper">
                        {/* <img src={HeroImg} alt="" className="hero-img" /> */}
          <Icons.Ill className = 'hero-img'/>

                    </div>
                </div>
            </section>
            </div>
    )
}

export default Hero;