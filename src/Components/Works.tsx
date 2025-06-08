import React from "react"
import { useI18n } from '../i18n';
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import Button from 'react-bootstrap/Button'
import WorksCards from './WorksCards'
import simplemusicnotesreaderimage from '../resources/image/simplemusicnotesreader.png'
import multiplefilerenameimage from '../resources/image/multiplefilerename.png'
import sudokuimage from '../resources/image/sudoku.png'
import clipboardtranslatorimage from '../resources/image/clipboardtranslator.png'




const Works: React.FC = () => {
    const { t, setLocale } = useI18n();
    
    return (

        <div className="pages" id="works">
            <h1 className='title lpten whitetext'>{t('works')}</h1>
            <CardColumns className='lpten rpten tptwo'>
            <WorksCards buttonText={t('viewgithub')} cardTitle={t('simplemusicnotesreader')} gitUri="https://github.com/AaronCChen2233/--Portfolio--simple_music_notes_reader" image={simplemusicnotesreaderimage}>
                <p>
                    {t('simplemusicnotesreaderdescription1')}
                    <a href='https://www.musicxml.com/' target="_blank">.MusicXML</a>
                    {t('simplemusicnotesreaderdescription2')}
                </p>
                <h6 className='lightbluetext'>{t('android')} {t('kotlin')} {t('javascript')} {t('mvvm')}</h6>
            </WorksCards>

            <WorksCards buttonText={t('viewgithub')} cardTitle={t('multiplefilerename')} gitUri="https://github.com/AaronCChen2233/--Portfolio--Multiple_File_Rename" image={multiplefilerenameimage}>
                <p>
                    {t('multiplefilerenamedescription')}
                </p>
                <h6 className='lightbluetext'>{t('wpf')} {t('.net')} {t('csharp')} {t('mvvm')}</h6>
            </WorksCards>

            <WorksCards buttonText={t('viewgithub')} cardTitle={t('sudoku')} gitUri="https://github.com/AaronCChen2233/--Portfolio--SUDOKU" image={sudokuimage}>
                <p>
                    {t('sudokudescription')}
                </p>
                <h6 className='lightbluetext'>{t('swing')} {t('java')}</h6>
            </WorksCards>

            <WorksCards buttonText={t('viewgithub')} cardTitle={t('clipboardtranslator')} gitUri="https://github.com/AaronCChen2233/--Portfolio--ClipboardTranslator" image={clipboardtranslatorimage}>
                <p>
                    {t('clipboardtranslatordescription')}
                </p>
                <h6 className='lightbluetext'>{t('swing')} {t('java')}</h6>
            </WorksCards>

            </CardColumns>
        </div>
    );
  }
  
export default Works;