import React, {Component} from 'react'; 
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import AboutMe from './AboutMeComponent';
import Project from './ProjectComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

class Main extends Component {
    
    render() {
        return(
            <div>
                <Header />
                <Switch>
                    <Route path='/aboutme' component={AboutMe}/>
                    <Route path='/projects' component={Project} />
                    <Route path='/contact' component={Contact} />
                    <Redirect to='/aboutme' />
                </Switch>
                <Footer />
            </div>
        ); 
    }
}

export default Main;