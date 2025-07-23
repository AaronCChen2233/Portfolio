import React from "react"
import { useI18n } from '../i18n';

const Home: React.FC = () => {
    const { t, setLocale } = useI18n();
    return (
        <div className="pages textapperanimation" id = "home">
            <h1 style={{left:'10%', right:'10%' , top: '40%', position:'absolute', color:'#383F51' }}>{t('hometitle')}</h1>
        </div>
    );
  }
  
  export default Home;