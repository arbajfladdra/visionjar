
import './Register.style.css'
import * as Icons from '../Icons/Icons'

import { motion } from 'framer-motion'
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
const Register = () => {

    return(
        <motion.div className="row bg-yellow "
        variants = {containerVariants}
        initial = "hidden"
        animate = "visible"
        exit = "exit">
        <section className="bg-yellow register-form-flex-wrapper smooth-scroll container">
            <h2>Register </h2>
            <div className="form-wrapper">
                <form action="" className="form">
                    <div className="form-elements-list">
                    <label htmlFor="user_name">
                      <input type="text" placeholder = "Full Name" name = "user_name" id = "user_name" required />
                    </label>
                    <label htmlFor="user_pswrd">
                        <input type="password" placeholder = "Password" name = "user_password" id = "user_pswrd" required/>
                    </label>
                    <label htmlFor="user_re_pswrd">
                        <input type="password" placeholder = "Re-type Password" name = "user_re_password" id = "user_re_pswrd" required/>
                    </label>
                    <label htmlFor="user_email">
                        <input type="password" placeholder = "Email" name = "user_email" id = "user_email" required/>
                    </label>
                    <div className="genderselct">
                    <label htmlFor="user_gender_male">
                        <input type="radio" name = "user_genders" id = "user_gender_male"/>
                      <span>  Male</span>
                        </label>
                    <label htmlFor="user_gender_female">
                        
                        <input type="radio" name = "user_genders" id = "user_gender_female"/>
                        <span>  Female</span>

                        </label>
                        </div>
                   
                </div>
                <div className="form-elements-list">
                    <label htmlFor="user_phone">
                      <input type="tel" placeholder = "Whatsapp Number" name = "user_phone" id = "user_phone" required />
                    </label>
                    <label htmlFor="user_dob">
                        <input type="text" placeholder = "Date Of Birth:21/07/1967" name = "user_dob" id = "user_dob" required title = 'Date Of Birth'/>
                    </label>
                    <label htmlFor="user_address">
                    <textarea id="user_address" name="user_address" rows="4" cols="25" placeholder = 'Address'>
                  
                    </textarea>
                    </label>
                    <div className="btn-group">
                        <button type = "submit" className="btn btn-primary">
                           <span> Register</span>
                            <div className="btn-arrow">
                               <Icons.ArrowRightP/>
                                
                            </div>
                        </button>
                        
                    </div>
                    
                </div>
                   
                </form>
                {/* <p className="lead">You’ve  account? <Link to="/register"> Click Here</Link>.</p> */}
            
            </div>
        </section>
        </motion.div>
    )
}

export default Register;