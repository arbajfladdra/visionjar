
import './Services.style.css';
import * as Icons from '../Icons/Icons'
import '../HeroPage/HeroPage.style.css'
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion';
const containerVariants = {
    hidden: {
        y : '50vh',opacity :0
    },
    visible: {
        y : 0, opacity : 1,
        transition : {
            delay : 1.0,duration : 1,
            type : 'tween',stiffness :50,
        }
    },
    exit : {
        y : '-50vh',opacity :0,
        transition : {
            type : 'tween'
        }
    }
}
const Services = () => {


    return(
        <>
        <motion.div 
        variants = {containerVariants}
        initial = "hidden"
        animate = "visible"
        exit = "exit"
        className="services-wrapper row bg-white ">
        <section className="section-flex-wrapper  smooth-scroll container">
              <div className="section-flex-item section-details">
                 
            <h2>A Few Areas Where We Guide</h2>
            <p className="lead" style = {{'width' : '100%', 'fontSize' : '1.3rem'}}>
            We will guide in a pwerfull manner
            </p>
              </div>
          </section>
         <section className="section-flex-wrapper  smooth-scroll container">
                <div className="section-flex-item section-img-wrapper">
                    <img src='https://source.unsplash.com/random/?application letter' alt="" className="section-img" />
                </div>
              <div className="section-flex-item section-details">
                  <h2 className="section-headline">
                  Applications
                  </h2>
                  <p className="lead">
                  We take pride in our holistic approach to the application process. We not only help you choose a country to apply to based on your choice of career, budget, expected return on investment, job opportunities and your profile; we also help you with the full application process.
                  </p>
              </div>
          </section>
          <section className="section-flex-wrapper  smooth-scroll container reverse-section-flex">
                <div className="section-flex-item section-img-wrapper">
                    <img src='https://source.unsplash.com/random/?profile building' alt="" className="section-img" />
                </div>
              <div className="section-flex-item section-details">
                  <h2 className="section-headline">
                  Profile Building                   </h2>
                  <p className="lead">
                  We have established a unique and comprehensive method of developing student profiles which are in line with academic and professional interests and past activities. Our team helps students with personality development training and conceptualize social projects that enable them to create a tangible positive social impact on society.
                  </p>
              </div>
          </section>
          <section className="section-flex-wrapper  smooth-scroll container">
                <div className="section-flex-item section-img-wrapper">
                    <img src='https://source.unsplash.com/random/?aptitude test' alt="" className="section-img" />
                </div>
              <div className="section-flex-item section-details">
                  <h2 className="section-headline">
                  Aptitude Testing
                  </h2>
                  <p className="lead">
                  We are recognised globally for our scientifically developed and socially tested aptitude testing methods. We begin the career planning process by conducting a comprehensive psychometric test to identify each student’s unique interests, aptitudes and personality traits. Driven by psychology and extensive research.
                  </p>
              </div>
          </section>
          <section className="section-flex-wrapper  smooth-scroll container reverse-section-flex">
                <div className="section-flex-item section-img-wrapper">
                    <img src='https://source.unsplash.com/random/?motivation' alt="" className="section-img" />
                </div>
              <div className="section-flex-item section-details">
                  <h2 className="section-headline">
                  Student engagement                </h2>
                  <p className="lead">
                  ‘Confluence’ or ‘ Fly-High’ is our annual career fair which is a platform to bring students from various schools and colleges together to discuss the career planning process, attend career workshops and learn from senior industry stalwarts, who are invited to speak about emerging options and on ground experiences. 


                  </p>
              </div>
          </section>
          
        <section className="section-flex-wrapper  smooth-scroll container bg-paper">
              <div className="section-flex-item section-details">
                 
            <h2>Start your journey with us</h2>
            <p className="lead" style = {{'width' : '100%', 'fontSize' : '1.3rem'}}>
            Take a first step to bring your career at next level!
            </p>
            <div className="btn-group">
                        <Link to="/about">
                        <div className="btn btn-primary">
                           <span> About Us</span>
                            <div className="btn-arrow">
                               <Icons.ArrowRightP/>
                                
                            </div>
                        </div>
                        </Link>
                        <Link to="/register">
                        <div className="btn btn-secondary">
                           <span> Register</span>
                            <div className="btn-arrow">
                               <Icons.ArrowRightS/>
                            </div>
                        </div>
                        </Link>
                    </div>
              </div>
          </section>
          </motion.div>
        </>
    )
}

export default Services;