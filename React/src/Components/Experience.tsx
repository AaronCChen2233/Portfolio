import React from "react"
import { useI18n } from '../i18n';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import newegg from '../resources/image/newegg.png'
import realsun from '../resources/image/realsun.png'
import yfy from '../resources/image/yfy.png'

const Experience: React.FC = () => {
    const { t, setLocale } = useI18n();
    
    return (
        <div className="pages" id="experience">
            <h1 className='title lpten whitetext'>{t('experience')}</h1>

            <Accordion className='lpten rpten tptwo' defaultActiveKey="0" >
                              <Card bg ='secondary' text='white' >
                    <Card.Header>
                    <Accordion.Toggle as={Card.Text} eventKey="0" >
                        <Card.Img className="icon" src={yfy} />
                        {t('yfy')}
                    </Accordion.Toggle>
                    </Card.Header>
                    <Card.Body>
                        <h3 className='lightbluetext'>{t('yfyposition')}</h3>
                        <h5 className='pinktext'>{t('yfytime')}</h5>
                        <h5 className='whitetext'>{t('webdescription')}</h5>
                        <h5 className='whitetext'>{t('devopsdescription')}</h5>
                    </Card.Body>
                </Card>

                <Card bg ='secondary' text='white'  >
                    <Card.Header>
                    <Accordion.Toggle as={Card.Text} eventKey="0" >
                    <Card.Img className="icon" src={realsun} />
                        {t('realsun')}
                    </Accordion.Toggle>
                    </Card.Header>
                    <Card.Body>
                        <h3 className='lightbluetext'>{t('realsunposition')}</h3>
                        <h5 className='pinktext'>{t('realsuntime')} · 11 {t('mos')}</h5>
                        <h5 className='whitetext'>{t('realsundescription')}</h5>
                    </Card.Body>
                </Card>

                <Card bg ='secondary' text='white' >
                    <Card.Header>
                    <Accordion.Toggle as={Card.Text} eventKey="0" >
                        <Card.Img className="icon" src={newegg} />
                        {t('neweggtw')}
                    </Accordion.Toggle>
                    </Card.Header>
                    <Card.Body>
                        <h3 className='lightbluetext'>{t('neweggposition')}</h3>
                        <h5 className='pinktext'>{t('neweggtwtime')} · 4 {t('yrs')} 1 {t('mos')}</h5>
                        <h5 className='whitetext'>{t('neweggtwdescription')}</h5>
                        <h5 className='whitetext'>{t('eipdescription')}</h5>
                        <h5 className='whitetext'>{t('boxdescription')}</h5>
                    </Card.Body>
                </Card>

  
            </Accordion>

        </div>
    );
  }
  
export default Experience;