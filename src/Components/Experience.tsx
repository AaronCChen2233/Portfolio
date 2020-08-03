import React from "react"
import { useI18n } from '../i18n';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

const Experience: React.FC = () => {
    const { t, setLocale } = useI18n();
    return (
        <div className="pages" id="experience">
            <h1 className='title lpten whitetext'>{t('experience')}</h1>

            <Accordion className='lpten rpten tptwo' defaultActiveKey="0">
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Card.Text} eventKey="0">
                        {t('neweggtw')}
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
               
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

        </div>
    );
  }
  
export default Experience;