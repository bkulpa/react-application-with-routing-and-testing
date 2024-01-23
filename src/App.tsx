import './App.css';
import { FC } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home title="React Application with Routing and Testing by Bartosz Kulpa">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br />
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
                <br />
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </Home>
          }
        />
        <Route
          path="/about"
          element={
            <About title="About Us">
              <h3>What you can do with Us?</h3>
              <img className='img__about' src={require('./img/techs.jpg')} alt={"Web technologies"} />
              <div className='div__about'>
                <div className='div__about-props'>
                  <h4>ADVERTISE TO PROFESSIONALS</h4>
                  <p>Reach a highly engaged audience with native ads in a professional news feed across desktop and mobile.</p>
                </div>
                <div className='div__about-props'>
                  <h4>EXCEED YOUR OBJECTIVES</h4>
                  <p>Drive leads, build brand awareness, and nurture key relationships at every stage of your sales cycle.</p>
                </div>
                <div className='div__about-props'>
                  <h4>TARGET WHAT YOU WANT</h4>
                  <p>Build your ideal audience with profile data and your own audiences.</p>
                </div>
              </div>
            </About>
          }
        />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/*"
          element={
            <h2 className='page-not-found'>404 - Page doesn't exist!</h2>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
