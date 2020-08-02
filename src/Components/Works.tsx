import React from "react"
import { useI18n } from '../i18n';

const Works: React.FC = () => {
    const { t, setLocale } = useI18n();
    return (
        <div className="pages" id="works">
            <h1 style={{paddingLeft :'10%', paddingTop: "10%", color:'#FFFFFF' }}>{t('works')}</h1>
        </div>
    );
  }
  
export default Works;