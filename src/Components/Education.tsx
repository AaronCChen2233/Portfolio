import React from "react"
import { useI18n } from '../i18n';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import ciccc from '../resources/image/ciccc.png'
import npu from '../resources/image/npu.png'

const Education: React.FC = () => {
    const { t, setLocale } = useI18n();
    return (
        <div className="pages" id="education">
            <h1 className='title lpten whitetext'>{t('education')}</h1>

            <Accordion className='lpten rpten tptwo' defaultActiveKey="0" >
                <Card bg ='dark' text='white'  >
                    <Card.Header>
                    <Accordion.Toggle as={Card.Text} eventKey="0" >
                    <Card.Img className="icon" src={ciccc} />
                        {t('ciccc')}
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <h3 className='lightbluetext'>{t('wmap')}</h3>
                        <h5 className='pinktext'>{t('ciccctime')}</h5>
                        <h5 className='whitetext'>{t('activitesandsocieties')}</h5>
                        <h5 className='whitetext'>{t('maintainclassroom')}</h5>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card bg ='dark' text='white' >
                    <Card.Header>
                    <Accordion.Toggle as={Card.Text} eventKey="0" >
                        <Card.Img className="icon" src={npu} />
                        {t('npu')}
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <h3 className='lightbluetext'>{t('misdegree')}</h3>
                        <h5 className='pinktext'>{t('nputime')}</h5>
                        <h5 className='whitetext'>{t('activitesandsocieties')}</h5>
                        <h5 className='whitetext'>{t('exchangestudent')}</h5>
                        <h5 className='whitetext'>{t('finalprojectteamleader')}</h5>
                        <h5 className='whitetext'>{t('ta')}</h5>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                
            </Accordion>

        </div>
    );
  }
  
export default Education;