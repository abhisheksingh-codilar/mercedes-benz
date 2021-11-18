import React, { Component } from 'react';
import F1 from './f1';
import F2 from './f2';
import F3 from './f3';
class Footer extends Component {
    render() {
        return (
            <div>
               <F1/>
               <F2/>
               <F3/> 
            </div>
        );
    }
}

export default Footer;