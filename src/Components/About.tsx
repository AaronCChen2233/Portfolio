import React from "react"
import { useI18n } from '../i18n';

const About: React.FC = () => {
    const { t, setLocale } = useI18n();
    return (
        <div className="pages" id="about">
            <h1 style={{paddingLeft :'10%', paddingTop: "10%", color:'#FFFFFF' }}>{t('about')}</h1>
        
        
        </div>
    );
  }
  
export default About;