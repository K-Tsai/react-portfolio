import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return(
        <footer className="site-footer">
        <div className="container">
            <div className="row">
                <div className= "col-md-3 col-sm-12 mt-4 links">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><Link to='/aboutme'>About Me</Link></li>
                        <li><Link to='/projects'>Projects</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
                <div className="col-md-4 col-sm-12 text-center mt-4">
                    <h5>Social</h5>
                    <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/kevin-tsai92/"><i class="fa fa-linkedin"></i></a>
                    <a className="btn btn-social-icon btn-github" href="http://facebook.com/"><i class="fa fa-github"></i></a>
                </div>
                <div class="col-md-4 col-sm-12 text-center mt-4">
                    <h5>Contact</h5>
                    <a role="button" className="btn btn-link" href="mailto:k.tsai92@gmail.com"><i class="fa fa-envelope-o fa-lg"></i>k.tsai92@gmail.com</a>
                </div>
            </div>
        </div>
    </footer>
    );
}

export default Footer;
