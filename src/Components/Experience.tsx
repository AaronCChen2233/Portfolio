import React from "react"
import { useI18n } from '../i18n';

const Experience: React.FC = () => {
    const { t, setLocale } = useI18n();
    return (
        <div className="pages" id="experience">
            <h1 style={{paddingLeft :'10%', paddingTop: "10%", color:'#FFFFFF' }}>{t('experience')}</h1>
        </div>
    );
  }
  
export default Experience;