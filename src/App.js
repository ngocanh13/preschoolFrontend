import { Route, Routes } from 'react-router-dom';
import About from '../src/page/About';
import Blog from '../src/page/Blog';
import Contact from '../src/page/Contact';
import Event from '../src/page/Event';
import Home from '../src/page/Home';
import Login from '../src/page/Login';
import Programs from '../src/page/Program';
import Services from '../src/page/Services';
import Team from '../src/page/Team';
import Testimonial from '../src/page/Testimonial';
import './App.css';
import './assets/css/bootstrap.min.css';
import './assets/css/login.css';
import './assets/css/style.css';
import Layout from './layouts';
import Menu from './page/menu';
import QRScanner from './page/QRScanner';
import Schedule from './page/Schedule';
import NotificationForm from './page/NotificationForm';




function App() {
  return (
    <div className="App">

      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/programs' element={<Programs />} />
          <Route path='/event' element={<Event />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/team' element={<Team />} />
          <Route path='/testimonial' element={<Testimonial />} />
          <Route path='/login' element={<Login />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/qrscanner' element={<QRScanner />} />
          <Route path='/schedule' element={<Schedule />} />
          <Route path='/notificationform' element={<NotificationForm />} />

       
       
        </Routes>
      </Layout>

    </div>
  );
}

export default App;
