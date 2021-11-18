import React, { Component } from 'react';
import Navbar from './Navbar.js';
import Carousel from './carousel.js';
import MainBody from './MainBody';
import Footer from './Footer';
class App extends Component {
    render() {
        return ( 
            
            <div>
           <Navbar/>
           <Carousel/>
           <MainBody/>
           <Footer/>
            </div>
            
        );
    }
}

export default App;