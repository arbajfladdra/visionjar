
import './About.style.css'
import { motion } from 'framer-motion';
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
const About = () => {


    return(
        <motion.div className="bg-white"
        variants = {containerVariants}
        initial = "hidden"
        animate = "visible"
        exit = "exit">
         <section className="section-flex-wrapper bg-white smooth-scroll container">
                <div className="section-flex-item section-img-wrapper">
                    <img src='https://source.unsplash.com/random/?men' alt="" className="section-img" />
                </div>
              <div className="section-flex-item section-details">
                  <h2 className="section-headline">
                  John Doe
                  </h2>
                 
                  <p class = "" style = {{'fontFamily' : 'Poppins', 'color' : 'var(--s-clr)'}}>co-founder of 360design</p>
                  <hr />
                  <p className="lead" style = {{'marginTop' : '2rem'}}>
                  Hey, I’m John Doe who is anonymous. From my Occupation, I’m a Software Engineer at Unsplashio. Together I’m intrested to Guide students to their passionable career
                  </p>
                  <div className="btn-group">
                       <ul className = "s-links"type = "none">
                           <li>Twitter</li>
                           <li>Instagram</li>
                           <li>Linkedin</li>
                       </ul>
                  </div>
              </div>
          </section>
          <div className="section-col-2">
          <section className="section-flex-wrapper bg-white smooth-scroll container">
                <div className="section-flex-item section-img-wrapper">
                    <img src='https://source.unsplash.com/random/?men,blue' alt="" className="section-img" />
                </div>
              <div className="section-flex-item section-details">
                  <h2 className="section-headline">
                  John Doe 2
                  </h2>
                 
                  <p class = "" style = {{'fontFamily' : 'Poppins', 'color' : 'var(--s-clr)'}}>co-founder of 360design</p>
                  <hr />
                  <p className="lead" style = {{'marginTop' : '2rem'}}>
                  Hey, I’m John Doe who is anonymous. From my Occupation, I’m a Software Engineer at Unsplashio. Together I’m intrested to Guide students to their passionable career
                  </p>
                  <div className="btn-group">
                       <ul className = "s-links"type = "none">
                           <li>Twitter</li>
                           <li>Instagram</li>
                           <li>Linkedin</li>
                       </ul>
                  </div>
              </div>
          </section>
          <section className="section-flex-wrapper bg-white smooth-scroll container">
                <div className="section-flex-item section-img-wrapper">
                    <img src='https://source.unsplash.com/random/?man' alt="" className="section-img" />
                </div>
              <div className="section-flex-item section-details">
                  <h2 className="section-headline">
                  John Doe 3
                  </h2>
                 
                  <p class = "" style = {{'fontFamily' : 'Poppins', 'color' : 'var(--s-clr)'}}>co-founder of 360design</p>
                  <hr />
                  <p className="lead" style = {{'marginTop' : '2rem'}}>
                  Hey, I’m John Doe who is anonymous. From my Occupation, I’m a Software Engineer at Unsplashio. Together I’m intrested to Guide students to their passionable career
                  </p>
                  <div className="btn-group">
                       <ul className = "s-links"type = "none">
                           <li>Twitter</li>
                           <li>Instagram</li>
                           <li>Linkedin</li>
                       </ul>
                  </div>
              </div>
          </section>
          
          </div>
          <div className="section-col-2">
          <section className="section-flex-wrapper bg-white smooth-scroll container">
                <div className="section-flex-item section-img-wrapper">
                    <img src='https://source.unsplash.com/random/?men,yellow' alt="" className="section-img" />
                </div>
              <div className="section-flex-item section-details">
                  <h2 className="section-headline">
                  John Doe 4
                  </h2>
                 
                  <p class = "" style = {{'fontFamily' : 'Poppins', 'color' : 'var(--s-clr)'}}>co-founder of 360design</p>
                  <hr />
                  <p className="lead" style = {{'marginTop' : '2rem'}}>
                  Hey, I’m John Doe who is anonymous. From my Occupation, I’m a Software Engineer at Unsplashio. Together I’m intrested to Guide students to their passionable career
                  </p>
                  <div className="btn-group">
                       <ul className = "s-links"type = "none">
                           <li>Twitter</li>
                           <li>Instagram</li>
                           <li>Linkedin</li>
                       </ul>
                  </div>
              </div>
          </section>
          <section className="section-flex-wrapper bg-white smooth-scroll container">
                <div className="section-flex-item section-img-wrapper">
                    <img src='https://source.unsplash.com/random/?man,intellegent' alt="" className="section-img" />
                </div>
              <div className="section-flex-item section-details">
                  <h2 className="section-headline">
                  John Doe 5
                  </h2>
                 
                  <p class = "" style = {{'fontFamily' : 'Poppins', 'color' : 'var(--s-clr)'}}>co-founder of 360design</p>
                  <hr />
                  <p className="lead" style = {{'marginTop' : '2rem'}}>
                  Hey, I’m John Doe who is anonymous. From my Occupation, I’m a Software Engineer at Unsplashio. Together I’m intrested to Guide students to their passionable career
                  </p>
                  <div className="btn-group">
                       <ul className = "s-links"type = "none">
                           <li>Twitter</li>
                           <li>Instagram</li>
                           <li>Linkedin</li>
                       </ul>
                  </div>
              </div>
          </section>
          
          </div>

          <section className="section-flex-wrapper section-flex-column bg-white smooth-scroll container">
                <div className="section-flex-item section-img-wrapper">
                    <img src='https://source.unsplash.com/random/?school,collage,teacher,counsller' alt="" className="section-img" />
                </div>
              <div className="section-flex-item section-details">
                  <h2 className="section-headline">
                  Domestic Career Counseling
                  </h2>
                 
                  <p className="lead">
                  We begin our domestic counseling process with the aim to help students find their ‘why’, the reason they wake up and the career that will excite them now, and for years to come. We start with a structured interview where we record the students basic information - what subjects they like studying, hobbies, interests, motivations, strengths and weaknesses. Once we are able to understand the child, we help them understand different career streams that exist and make them choose broad areas of interest, for instance, science based careers, people based careers, creative lines, business, unconventional areas and so on. 


                  </p>
                  <p className="lead">
                  Finally, after the aptitude test aforementioned and this initial ‘getting started’ session, the child meets our counseling team to streamline their career options and choices and understand the different options available and open. The entire process is one of exploration and empowerment, where we encourage children to find their way, of course with slight pushes from us! 
                  </p>
              </div>
          </section>
          <section className="section-flex-wrapper section-flex-column bg-white smooth-scroll container p-0">
                <div className="section-flex-item section-img-wrapper">
                    <img src='https://source.unsplash.com/random/?school,kids' alt="" className="section-img" />
                </div>
              
          </section>
        </motion.div>
        
    )
}

export default About;