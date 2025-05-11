import { Route, Routes } from 'react-router-dom';
import Schedule from '../page/schedule';
import Login from '../page/Login';
import Programs from '../page/Program';
import Menu from '../page/menu';
import QRScanner from '../page/QRScanner';
import AddMenu from '../page/AddMenu';
import Notification from '../page/Notification';
import AddNotification from '../page/AddNotification';
import ClassFund from '../page/ClassFund';
import AddFund from '../page/AddFund';
import Register from '../page/Register';
import AddProgram from '../page/AddProgram';
import Classes from '../page/Classes';
import PrivateRoutes from '../page/PrivateRoutes';
import Unauthorized from '../page/Unauthorized';
import AddStudent from '../page/AddStudent'
import AddSchedule from '../page/AddSchedule';
import AddTuition from '../page/AddTuition';

const AppRouters = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/unauthorized" element={<Unauthorized />} />

      {/* Protected routes - Both admin and teacher */}
      <Route element={<PrivateRoutes allowedRoles={['admin', 'teacher']} />}>
        <Route path="/" element={<Programs />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/addmenu" element={<AddMenu />} />
        <Route path="/qrscanner" element={<QRScanner />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/addnotification" element={<AddNotification />} />
      </Route>

      {/* Admin only routes */}
      <Route element={<PrivateRoutes allowedRoles={['admin']} />}>
        <Route path="/register" element={<Register />} />
        <Route path="/addmenu" element={<AddMenu />} />
        <Route path="/addnotification" element={<AddNotification />} />
        <Route path="/classfund" element={<ClassFund />} />
        <Route path="/addfund" element={<AddFund />} />
        <Route path="/addprogram" element={<AddProgram />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/addstudent" element={<AddStudent />} />
        <Route path="/addschedule" element={<AddSchedule />} />
        <Route path="/addstudent/:id" element={<AddStudent />} />
        <Route path="/addtuition" element={<AddTuition />} />
        <Route path="/addtuition/:id" element={<AddTuition />} />
      </Route>

      
    </Routes>
  );
};

export default AppRouters;