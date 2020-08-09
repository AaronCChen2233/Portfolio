import React from "react"
import { useI18n } from '../i18n';

const SocialMedias: React.FC = () => {
    const { t, setLocale } = useI18n();
    return (
        <div className="pages" id = "socialmedias">
            <h1 style={{left:'10%', right:'10%' , top: '40%', position:'absolute', color:'#FFFFFF' }}>{t('hometitle')}</h1>
        </div>
    );
  }
  
  export default SocialMedias;