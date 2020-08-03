import React from "react"
import { useI18n } from '../i18n';

const Works: React.FC = () => {
    const { t, setLocale } = useI18n();
    return (
        <div className="pages" id="works">
            <h1 className='title lpten whitetext'>{t('works')}</h1>
        </div>
    );
  }
  
export default Works;