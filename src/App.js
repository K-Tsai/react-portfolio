import React, {Component} from 'react'; 
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Footer/>
      </div>  
    );
  }
}

export default App;
