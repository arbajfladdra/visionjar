
import { Link } from "react-router-dom";
const Error = () => {

const Li = {
        'listStylePosition': 'inside',
    
}
    return(
        <section className="section-flex-wrapper bg-white smooth-scroll container">
            <div className = "section-flex-item">
            <h1>Oops! Page Not Found</h1>
            <p className="lead">
                <ul style = {Li}>
                    <li>Something went wrong. Check you URL that type</li>
                    <li>This maybe happened for server issue, Try after some time</li>
                   <br /> <hr />
                    <li> Go back to <Link exact to = "/"><span style = {{'color' : 'blue','textDecoration' : 'underline'}}> homepage</span> </Link> </li>
                </ul>
            </p>
        </div>
        </section>
    )
}

export default Error;