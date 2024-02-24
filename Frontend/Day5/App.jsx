import './assets/css/App.css';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
//import Head from './components/header/head';
import Header from './components/header/header';
// import Main from './components/Home/main';
import Login from './components/stuLogin';
import Footer from './components/Footer/footer';
import Home from './components/Home/Home';
import Display from './components/colleges/c';
import Courses from './components/colleges/courses';
import RegistrationForm from './components/Admission Form/Form';
import FAQPage from './components/Faq';
import ProfilePage from './components/Profile';

function App() {

  return (
   <BrowserRouter>
      <Header/>
        <Routes>
          <Route>
            <Route path="/" element={<Home/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/College" element={<Display/>} />
            <Route path="/Courses" element={<Courses/>} />
            <Route path='/Form' element={<RegistrationForm/>}/>
            <Route path='/FaqPage' element={<FAQPage/>}/>
            <Route path='/Profile' element={<ProfilePage/>}/>
            <Route path='/FaqPage' element={<FAQPage/>}/>
          </Route>
        </Routes>
      <Footer/>
   </BrowserRouter>
  )
}

export default App
