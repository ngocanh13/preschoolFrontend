import { Route, Routes } from 'react-router-dom';
import Schedule from '../page/schedule';
import Login from '../page/Login';
import Programs from '../page/Program';
import Menu from '../page/menu';
import QRScanner from '../page/QRScanner';
import AddMenu from '../page/AddMenu';
import ClassFund from '../page/ClassFund';
import Register from '../page/Register';
import AddProgram from '../page/AddProgram';
import Classes from '../page/Classes';
import PrivateRoutes from '../page/PrivateRoutes';
import Unauthorized from '../page/Unauthorized';
import AddStudent from '../page/AddStudent'
import AddSchedule from '../page/AddSchedule';
import AddTuition from "../page/AddTuition";

const AppRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/addmenu" element={<AddMenu />} />
        <Route path="/qrscanner" element={<QRScanner />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addmenu" element={<AddMenu />} />
        <Route path="/classfund" element={<ClassFund />} />
        <Route path="/addprogram" element={<AddProgram />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/addstudent" element={<AddStudent />} />
        <Route path="/addschedule" element={<AddSchedule />} />
        <Route path="/addstudent/:id" element={<AddStudent />} />
        <Route path="/addtuition" element={<AddTuition />} />
        <Route path="/addtuition/:id" element={<AddTuition />} />
    </Routes>
  );
};

export default AppRouters;