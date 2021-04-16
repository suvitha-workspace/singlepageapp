import React, { Component } from "react";
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Section from './Component/Content/Section';
class Main extends Component {
  render() {
    return (
        <div>          
            <Header></Header>
            <Section></Section>
            <Footer></Footer>
        </div>
    );
  }
}
 
export default Main;
