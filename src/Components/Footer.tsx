import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface FooterProps{

}

interface FooterStates{
    title : string
}

class Footer extends React.Component<FooterProps, FooterStates>{

    constructor(props: FooterProps) {
        super(props);
        this.state = { title: "Designed & Built by Aaron Chen" };
    }

    render() {
        return (
        <footer style={{backgroundColor:"#1D1D21" }} >
            <a href="https://github.com/AaronCChen2233/Portfolio/tree/master">
                <div style={{textAlign:"center" , color:'#FFFFFF', width:"100hv", paddingBottom: "60px"}}>{this.state.title}</div>
            </a>
        </footer>
        );
      }
}

export default Footer;