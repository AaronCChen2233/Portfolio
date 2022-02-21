import React from "react"
import { useI18n } from '../i18n';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import mypicture from '../resources/image/mypicture.jpeg'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const About: React.FC = () => {
    const { t, setLocale } = useI18n();
    return (
        <div className="pages" id="about">
            <h1 className='title lpten whitetext'>{t('about')}</h1>
            <h6 className='lpten rpten tptwo whitetext'>{t('abouttitle')}</h6>
            <br></br>
            <br></br>
            <Container fluid={true}>
                <Row className='lpten rpten'>
                    <Col xs={18} md={15} className='btten' >
                        <Container className="p-0" fluid={true}>
                            <h3 className='lightbluetext'>{t('skills')}</h3>
                            <h4 className='pinktext'>{t('dasktopdevelop')}</h4>
                            <h5 className='whitetext'>{t('desktopskills')}</h5>
                            <h4 className='pinktext'>{t('mobiledevelop')}</h4>
                            <h5 className='whitetext'>{t('mobileskills')}</h5>
                            <h4 className='pinktext'>{t('webdevelop')}</h4>
                            <h5 className='whitetext'>{t('webskills')}</h5>
                            <h4 className='pinktext'>{t('database')}</h4>
                            <h5 className='whitetext'>{t('databaseskills')}</h5>
                            <h4 className='pinktext'>{t('developmenttools')}</h4>
                            <h5 className='whitetext'>{t('developtoolskills')}</h5>
                            <h4 className='pinktext'>{t('versioncontroltools')}</h4>
                            <h5 className='whitetext'>{t('versioncontroltoolskills')}</h5>
                        </Container>
                    </Col>
                    <Col xs={12} md={5} >
                        <div>
                            <Image className='picutre' src={mypicture} roundedCircle />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
  }
  
export default About;