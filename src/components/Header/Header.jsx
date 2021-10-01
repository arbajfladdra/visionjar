//Images
import BrandLogo from '../../logo.png';
import * as Icons from '../Icons/Icons';
import { FaBars,FaTimes} from 'react-icons/fa';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
    const [Mobile, setMobile] = useState(false)
    const toggleButton = () => setMobile(!Mobile);
//    console.log(Mobile);
    const Mob = () => setMobile(!Mobile)
   
    return(
        <header className="header row bg-yellow" id = "header">
            <div className="header-wrapper container">
                <div className="header-item brand">
                    <img src={ BrandLogo } alt="" className="brand-logo" />
                    <p className="brand-name">360 Design Career</p>
                </div>
                
                
            
            <div className="header-item nav-toggle">
            <span className="nav-list-item"><NavLink activeClassName = 'active-NavLink' to="/register"><Icons.Login/></NavLink></span> 
                <span className = 'navQ' onClick = {toggleButton}>
                     {
                         Mobile ? <FaTimes /> : <FaBars />
                     }
                     
                     </span>
                </div>
                <div className={Mobile ? "header-item nav-wrapper nav-show" : "header-item nav-wrapper"}>
                    <nav className="nav-list-wrapper">
                        
                        <>
                        <ul className="nav-list-item-wrapper" type = "none">
                            <li className="nav-list-item" onClick = {Mob}><NavLink exact activeClassName = 'active-NavLink' to="/">Home</NavLink></li>
                            <li className="nav-list-item" onClick = {Mob}><NavLink activeClassName = 'active-NavLink' to="/services">Services</NavLink></li>
                            <li className="nav-list-item" onClick = {Mob}><NavLink activeClassName = 'active-NavLink' to="/articles">Articles</NavLink></li>
                            <li className="nav-list-item" onClick = {Mob}><NavLink activeClassName = 'active-NavLink' to="/about">About Us</NavLink></li>
                            <li className = "jkl" onClick = {Mob}><FaTimes /></li>
                            <span className="nav-list-item dis60"><NavLink activeClassName = 'active-NavLink' to="/register"><Icons.Login/></NavLink></span>     
                        </ul>
                        </>
                    </nav>
                </div>

            </div>
        </header>
    )
}
export default Header;
