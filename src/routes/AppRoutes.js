import { Route, Routes } from 'react-router-dom';
import Event from '../page/Event';
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
import AddEvent from '../page/AddEvent';
import Parents from '../page/Parents';
import Teachers from '../page/teacher';
import AddProgram from '../page/AddProgram';
import Classes from '../page/Classes';
import PrivateRoutes from './PrivateRoutes';
import Unauthorized from '../page/Unauthorized';

const AppRouters = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/unauthorized" element={<Unauthorized />} />

      {/* Protected routes - Both admin and teacher */}
      <Route element={<PrivateRoutes allowedRoles={['admin', 'teacher']} />}>
        <Route path="/" element={<Programs />} />
        <Route path="/event" element={<Event />} />
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
        <Route path="/addevent" element={<AddEvent />} />
        <Route path="/parents" element={<Parents />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/addprogram" element={<AddProgram />} />
        <Route path="/classes" element={<Classes />} />
      </Route>

      
    </Routes>
  );
};

export default AppRouters;