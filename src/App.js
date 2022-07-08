 import React from 'react';
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
// import ProgramList from './components/ProgramList/ProgramList';
// import ChannelList from './components/ChannelList/ChannelList';
// import TrendingShows from './components/TrendingShows/TrendingShows';
// import MyProfile from './components/MyProfile/MyProfile';
import Home from './components/Home/Home';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import ContactDetails from './components/Contacts/ContactDetails';

function App() {
  return (
    
    <BrowserRouter>
      <div>
      <Header />
       <div className='container'>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/about' element = {<About />}></Route>
          <Route exact path='/contacts' element = {<Contacts />}></Route>
          <Route path='/contacts/1' element = {<ContactDetails />}></Route>

        </Routes>
      </div>
      <Footer year='2021' />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
