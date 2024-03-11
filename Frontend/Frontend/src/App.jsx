import './assets/css/App.css';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
//import Head from './components/header/head';
// import Header from './components/header/header';
// import Main from './components/Home/main';
import Login from './components/stuLogin';

import Home from './components/Home/Home';
import Display from './components/colleges/c';
import Courses from './components/colleges/courses';
import RegistrationForm from './components/Admission Form/Form';
import FAQPage from './components/Faq';
// import ProfilePage from './components/Profile';
import AdminProfilePage from './components/Admin/AdminProfile';
import Userdetails from './components/Profile';
import AdminCourse from './components/Admin/AdminCourse';
import Userd from './components/Admin/AdminHome';
import Appman from './components/Admission Form/AM';
import FeedForm from './components/Home/FeedBack';
import Register from './components/Signup';

function App() {

  return (
   <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/College" element={<Display/>} />
            <Route path="/Courses" element={<Courses/>} />
            <Route path='/Form' element={<RegistrationForm/>}/>
            <Route path='/FaqPage' element={<FAQPage/>}/>
            <Route path='/Profile' element={<Userdetails/>}/>
            <Route path='/FaqPage' element={<FAQPage/>}/>
            <Route path='/Admin' element={<AdminProfilePage/>}/>
            <Route path='/course' element={<AdminCourse/>}/>
            <Route path='/a' element={<Userd/>}/>
            <Route path='/fb' element={<FeedForm/>}/>
            <Route path='/Signup' element={<Register/>}/>
            <Route path='/for' element={<Appman/>}/>

          </Route>
        </Routes>
   </BrowserRouter>
  )
}

export default App
