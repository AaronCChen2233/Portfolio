import React from "react"
import { useI18n } from '../i18n';

const Footer: React.FC = () => {
    const { t, setLocale } = useI18n();
    return (
        <footer style={{backgroundColor:"#1D1D21" }} >
            <a href="https://github.com/AaronCChen2233/Portfolio/tree/master">
                <div style={{textAlign:"center" , color:'#FFFFFF', width:"100hv", paddingBottom: "60px"}}>Designed &amp; Built by Aaron Chen</div>
            </a>
        </footer>
    );
  }
  
  export default Footer;