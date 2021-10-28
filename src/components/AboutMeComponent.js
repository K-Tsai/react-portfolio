import React, {Component} from 'react'; 
import { Redirect } from 'react-router';
import MyPic from '../images/MyPic.png';

const myStyle = {
    display: 'flex',
    alignItems: 'center',
}

class AboutMe extends Component {
    render() {
        return(
            <div className="container">
            <div className="about">
                <h1 className="about-me-header text-center ">About Me</h1>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12" style={myStyle}>
                        <img src={MyPic} alt="My Pic" className="img-fluid" />
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12 desc">

                        <h3>Kevin Tsai</h3>
                        <p>
                            I am a web developer who is currently searching for new opportunities to build my skills. 
                            My interests include video games, anime, technology, travel, and experiencing new things. 
                            I previously learned about HTML/CSS and JavaScript while I was in college. This sparked 
                            my interest on the subject which motivated me to learn more about web development. 
                            I plan on finding a career as a front end web developer.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default AboutMe;
