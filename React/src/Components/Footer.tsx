import React from "react"
import { useI18n } from '../i18n';

const Footer: React.FC = () => {
    const { t, setLocale } = useI18n();
    return (
        <footer style={{backgroundColor:"#e2e1f0" }} >
            <a href="https://github.com/AaronCChen2233/Portfolio/tree/master">
                <div className='greentext' style={{textAlign:"center" , width:"100hv"}}>{t('designedandbuilt')}</div>
            </a>
            <div className='greentext' style={{textAlign:"center" , width:"100hv", paddingBottom: "60px"}}>{t('portfoliousign')}</div>
        </footer>
    );
  }
  
  export default Footer;