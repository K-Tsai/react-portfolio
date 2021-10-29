import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardGroup, Button } from 'reactstrap';
import QuizScreenshot from '../images/QuizScreenshot.png';
import WeatherApp from '../images/WeatherApp2.png';
import poritewebsite from '../images/porite-website.png';

function Project(props) {
    return(
        <div className="container">
            <div className="row row-content">
                <div className="card-deck">
                    <CardGroup>
                        <Card className="mx-4 mt-5">
                            <CardImg className="border" variant="top" src={QuizScreenshot} />
                            <CardBody>
                                <CardTitle>Quiz App</CardTitle>
                                <CardText>Technology: HTML/CSS, JavaScript, and JQuery</CardText>
                                <Button className="align-self-end" href="https://k-tsai.github.io/Quiz-Final/" target="_blank">Link Here</Button>
                            </CardBody>
                        </Card>
                        <Card className="mx-4 mt-5">
                            <CardImg className="border" variant="top" src={WeatherApp} />
                            <CardBody>
                                <CardTitle>Weather API</CardTitle>
                                <CardText>Technology: HTML/CSS, Javascript, React, and Bootstrap</CardText>
                                <Button href="https://k-tsai.github.io/Weather-App-/" target="_blank">Link Here</Button>
                            </CardBody>
                        </Card>
                        <Card className="mx-4 mt-5">
                            <CardImg className="border" variant="top" src={poritewebsite} />
                            <CardBody>
                                <CardTitle>Porite Website</CardTitle>
                                <CardText>Technology: HTML/CSS, React, React Router, and Bootstrap</CardText>
                                <Button href="https://porite.us/" target="_blank">Link Here</Button>
                            </CardBody>
                        </Card>
                    </CardGroup>
                </div>
            </div>
            <div className="row row-content">
                <div className="card-deck">
                    <CardGroup>
                        <Card className="mx-4 my-5">
                            <CardImg className="border" variant="top" src={QuizScreenshot} />
                            <CardBody>
                                <CardTitle>Project 4</CardTitle>
                                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</CardText>
                                <Button href="#" target="_blank">Link Here</Button>
                            </CardBody>
                        </Card>
                        <Card className="mx-4 my-5">
                            <CardImg className="border" variant="top" src={WeatherApp} />
                            <CardBody>
                                <CardTitle>Project 5</CardTitle>
                                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</CardText>
                                <Button href="#" target="_blank">Link Here</Button>
                            </CardBody>
                        </Card>
                        <Card className="mx-4 my-5">
                            <CardImg className="border" variant="top" src={poritewebsite} />
                            <CardBody>
                                <CardTitle>Project 6</CardTitle>
                                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</CardText>
                                <Button href="#" target="_blank">Link Here</Button>
                            </CardBody>
                        </Card>
                    </CardGroup>
                </div>
            </div>
        </div>
    );
}

export default Project;