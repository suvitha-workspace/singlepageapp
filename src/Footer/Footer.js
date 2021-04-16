import './Footer.css'
import Typed from 'react-typed';
import { Facebook, Instagram, Twitter } from 'react-feather';



function Footer() {
    return ( <div className = 'footer' >
        
            
            <div className="social footersocial">
            Follow Us On: 
            <Facebook color="black" size={50} />            
            <Instagram color="black" size={50} />
            <Twitter color="black" size={50} />
            </div>
            
            <Typed backDelay = { 200 }
        strings = {
            ['React Champianship Program'] }
        typeSpeed = { 200 }
        loop / >
        </div>
    );
}

export default Footer;
