import React from "react"
import { useI18n } from '../i18n';
import Container from 'react-bootstrap/Container';

const About: React.FC = () => {
    const { t, setLocale } = useI18n();
    return (
        <div className="pages" id="about">
            <h1 className='title lpten whitetext'>{t('about')}</h1>
            <Container className="p-0" fluid={true}>
                <h6 className='lpten rpten tptwo whitetext'>{t('abouttitle')}</h6>
                <h3 className='lpten lightbluetext'>{t('skills')}</h3>
                <h4 className='lpten pinktext'>{t('mobiledevelop')}</h4>
                <h5 className='lpten whitetext'>{t('mobileskills')}</h5>
                <h4 className='lpten pinktext'>{t('webdevelop')}</h4>
                <h5 className='lpten whitetext'>{t('webskills')}</h5>
                <h4 className='lpten pinktext'>{t('dasktopdevelop')}</h4>
                <h5 className='lpten whitetext'>{t('desktopskills')}</h5>
                <h4 className='lpten pinktext'>{t('database')}</h4>
                <h5 className='lpten whitetext'>{t('databaseskills')}</h5>
                <h4 className='lpten pinktext'>{t('developmenttools')}</h4>
                <h5 className='lpten whitetext'>{t('developtoolskills')}</h5>
            </Container>
        </div>
    );
  }
  
export default About;