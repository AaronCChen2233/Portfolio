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
            <h3 className='lpten rpten tptwo whitetext lightbluetext'>{t('personaltraits')}</h3>
            <h5 className='lpten rpten tptwo whitetext'>{t('personaltraitslist')}</h5>
            <br></br>
            <br></br>
            <Container fluid={true}>
                <Row className='lpten rpten'>
                    <Col xs={18} md={15} className='btten' >
                        <Container className="p-0" fluid={true}>
                            <h3 className='lightbluetext'>{t('skills')}</h3>
                            <h4 className='pinktext'>{t('devops')}</h4>
                            <h5 className='whitetext'>{t('azuredevops')}, {t('jenkins')}, {t('harbor')}, {t('docker')}, {t('kubernetes')}</h5>
                            <h4 className='pinktext'>{t('webdevelop')}</h4>
                            <h5 className='whitetext'>{t('aspnetcore')}, {t('aspnetmvc')}, {t('spring')}, {t('react')}, {t('vue')}, {t('typescript')}, {t('javascript')}</h5>
                            <h4 className='pinktext'>{t('dasktopdevelop')}</h4>
                            <h5 className='whitetext'>{t('wpf')}, {t('swing')}, {t('tkinter')}, {t('csharp')}, {t('python')}</h5>
                            <h4 className='pinktext'>{t('mobiledevelop')}</h4>
                            <h5 className='whitetext'>{t('ios')}, {t('android')}, {t('objectivec')}, {t('swift')}, {t('java')}, {t('kotlin')}</h5>
                            <h4 className='pinktext'>{t('database')}</h4>
                            <h5 className='whitetext'>{t('mss')}, {t('mongodb')}, {t('firebase')}</h5>
                            <h4 className='pinktext'>{t('developmenttools')}</h4>
                            <h5 className='whitetext'>{t('visualstudio')}, {t('vscode')}, {t('xcode')}, {t('androidstudio')}, {t('pycharm')}, {t('intellij')}</h5>
                            <h4 className='pinktext'>{t('versioncontroltools')}</h4>
                            <h5 className='whitetext'>{t('git')}, {t('tfs')}</h5>
                        </Container>
                    </Col>
                    <Col xs={12} md={5} >
                        <div>
                            <Image className='picutre' src={mypicture} roundedCircle />
                        </div>
                    </Col>
                </Row>
            </Container>
            <h3 className='lpten rpten tptwo whitetext lightbluetext'>{t('learntube')}</h3>
            <h5 className='lpten rpten tptwo whitetext'>{t('learntubedescription')}</h5>
        </div>
    );
  }
  
export default About;