import './assets/css/App.css';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
// import Head from './components/header/head';
import Header from './components/header/header';
import Login from './components/stuLogin';



function App() {

  return (
   <BrowserRouter>
      <Header/>
        <Routes>
          <Route>
            <Route path="/Login" element={<Login/>} />
          </Route>
        </Routes>
   </BrowserRouter>
  )
}

export default App
