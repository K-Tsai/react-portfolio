import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return(
        <footer class="site-footer">
        <div class="container">
            <div class="row">
                <div class= "col-md-3 col-sm-12 mt-4 links">
                    <h5>Links</h5>
                    <ul class="list-unstyled">
                        <li><Link to='/aboutme'>About Me</Link></li>
                        <li><Link to='/projects'>Projects</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
                <div class="col-md-4 col-sm-12 text-center mt-4">
                    <h5>Social</h5>
                    <a class="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/kevin-tsai92/"><i class="fa fa-linkedin"></i></a>
                    <a class="btn btn-social-icon btn-github" href="http://facebook.com/"><i class="fa fa-github"></i></a>
                </div>
                <div class="col-md-4 col-sm-12 text-center mt-4">
                    <h5>Contact</h5>
                    <a role="button" class="btn btn-link" href="mailto:k.tsai92@gmail.com"><i class="fa fa-envelope-o fa-lg"></i>k.tsai92@gmail.com</a>
                </div>
            </div>
        </div>
    </footer>
    );
}

export default Footer;
