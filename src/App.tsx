import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import About from './Components/About';
import Works from './Components/Works';
import Experience from './Components/Experience';
import Footer from './Components/Footer';
import { useI18n } from './i18n';
// import enResume from './resources/resume/enResume.pdf'
import enpdf from './resources/resume/enresume.pdf'
import zhpdf from './resources/resume/zhresume.pdf'
import github from './resources/image/github.svg'
import linkedin from './resources/image/linkedin.svg'

const App: React.FC = () => {
  const { t, getLocale, setLocale } = useI18n();
  return (
    <Router>
    <Container className="p-0" fluid={true}>
      <Navbar fixed="top" bg="dark" variant="dark" expand="sm">
        <Navbar.Brand href="/Portfolio/#home">Aaron Chen</Navbar.Brand>
        <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
        <Navbar.Collapse id="navbar-toggle">
          <Nav className="ml-auto">
          <NavDropdown title={t('language')} id="nav-dropdown">
              <NavDropdown.Item onClick={() => setLocale('en')} >English</NavDropdown.Item>
              <NavDropdown.Item onClick={() => setLocale('zh')} >正體中文</NavDropdown.Item>
            </NavDropdown>
            <a className="nav-link" href="/Portfolio/#about">{t('about')}</a>
            <a className="nav-link" href="/Portfolio/#experience">{t('experience')}</a>
            <a className="nav-link" href="/Portfolio/#works">{t('works')}</a>
            <a className="nav-link" target="_blank" href={String(getLocale()) == "en" ? enpdf : zhpdf}>{t('resume')}</a>
            <a className="nav-link" href="mailto:aaronchen2233@gmail.com">{t('email')}</a>
     
            <a className="iconlink" target="_blank" href="https://github.com/AaronCChen2233">
              <img src={github} width="40" height="40" className="nav-link" alt="github" />
            </a>

            <a className="iconlink" target="_blank" href="https://www.linkedin.com/in/aaron-chen-0b31b6190/">
              <img src={linkedin} width="40" height="40" className="nav-link" alt="github" />
            </a>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Home></Home>
      <About></About>
      <Experience></Experience>
      <Works></Works>

      <Footer></Footer>
    </Container>
    
  </Router>
  );
}

export default App;


// interface AppProps{
//     // setLocale : (l:string) => void
// }

// class App extends React.Component<AppProps, {}>{
//   constructor(props : AppProps) {
//     super(props);
//     this.state = {
//     }
//   }

  // render() {
  //   return (
  //     <Router>
  //     <Container className="p-0" fluid={true}>
  //       <Navbar fixed="top" bg="#1D1D21" variant="dark" expand="sm">
  //         <Navbar.Brand href="/Portfolio/#home">Aaron Chen</Navbar.Brand>
  //         <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
  //         <Navbar.Collapse id="navbar-toggle">
  //           <Nav className="ml-auto">
  //             <a className="nav-link" href="/Portfolio/#about">{t('learn_react')}</a>
  //             <a className="nav-link" href="/Portfolio/#experience">Experience</a>
  //             <a className="nav-link" href="/Portfolio/#works">Works</a>
  //             <a className="nav-link" href="mailto:aaronchen2233@gmail.com">Email</a>
  //             <Link className="nav-link" to="/resume">Resume</Link>

  //             <NavDropdown title="Language" id="nav-dropdown">
  //             <NavDropdown.Item eventKey="4.1" onClick={() => setLocale('en')} >English</NavDropdown.Item>
  //               <NavDropdown.Item eventKey="4.2" onClick={() => setLocale('zh')} >Chinese</NavDropdown.Item>
  //               {/* <NavDropdown.Item eventKey="4.1" onClick={() => this.props.setLocale('en')}>English</NavDropdown.Item>
  //               <NavDropdown.Item eventKey="4.2" onClick={() => this.props.setLocale('zh-Hant')}>Chinese</NavDropdown.Item> */}
  //             </NavDropdown>
  //           </Nav>
  //         </Navbar.Collapse>
  //       </Navbar>
  //       <Home></Home>
  //       <About></About>
  //       <Experience></Experience>
  //       <Works></Works>

  //       <Footer></Footer>
  //     </Container>
      
  //   </Router>
  //   )
  // }

// }

// export default App;
