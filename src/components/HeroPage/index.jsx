
import useFetch from '../../useFetch';
//Styles
import './HeroPage.style.css';
import '../Cards/Cards.style.css'
//images
import { Link } from 'react-router-dom';
import AboutImg from './about.png'
import RegImg from './illustrator2.png';
// Components
import * as Icons from '../Icons/Icons';
import Hero from './Hero';
import { motion } from 'framer-motion';
import ArticlePage from '../ArticlePage';


const containerVariants = {
    hidden: {
        y : '50vh',opacity :0
    },
    visible: {
        y : 0, opacity : 1,
        transition : {
            delay : 1,duration : 1,
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
const HeroPage = () => {
   const {data, isPending, error} = useFetch('http://localhost:8012/Sdata   ')
    
    return(
        <motion.div variants = {containerVariants}
            initial = 'hidden'
            animate = 'visible'
            exit = 'exit'
            >

          <Hero />  
          <div className="row bg-white">
          <section className="section-flex-wrapper bg-white smooth-scroll container">
                <div className="section-flex-item section-img-wrapper">
                    <img src={AboutImg} alt="" className="section-img" />
                </div>
              <div className="section-flex-item section-details">
                  <h2 className="section-headline">
                  See what's possible <br /> with 360° value
                  </h2>
                  <p className="lead">
                  we will attach your passion with carrier that
                   brings you to become Steve Jobs & guides to 
                   achieve goals with power of mistakes.
                    To start hilarious journey grab our hand!
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
                        
                    </div>
              </div>
          </section>
          </div>
          <div className="row bg-yellow">
          <section className="section-flex-wrapper bg-yellow reverse-section-flex register-wrapper smooth-scroll container">
                <div className="section-flex-item section-img-wrapper">
                    <img src={RegImg} alt="" className="section-img" />
                </div>
              <div className="section-flex-item section-details">
                  <h2 className="section-headline">
                  The way to get <br /> started is to quit <br /> talking and begin <br /> doing.
                  </h2>
                  <p className="lead">
                  we will attach your passion with carrier that brings you to become Steve Jobs & guides to achieve goals with power of mistakes. To start hilarious journey grab our hand!
                  </p>
                  <div className="btn-group">
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
          </div>
          <div className="row bg-white">
              {error && <h1> {error}...</h1>}
              {isPending && <h1> Loading...</h1>}
           {data && <ArticlePage data = {data} title = 'Recent Articles'/>}
          </div>

         
       
        </motion.div>
    )
}

export default HeroPage;