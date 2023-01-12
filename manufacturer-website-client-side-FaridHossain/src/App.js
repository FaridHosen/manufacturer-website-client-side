import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './pages/Blogs/Blogs';
import Dashboard from './pages/Dashboard/Dashboard';
import Footer from './pages/Footer/Footer';
import BuyNow from './pages/Home/BuyNow';
import Home from './pages/Home/Home';
import Login from './pages/LoginPage/Login';
import Register from './pages/LoginPage/Register';
import Navbar from './pages/Navbar/Navbar';
import NotFound from './pages/NotFound/NotFound';
import Portfolio from './pages/Portfolio/Portfolio';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyOrder from './pages/Dashboard/MyOrder';
import AddReview from './pages/Dashboard/AddReview';
import MyProfile from './pages/Dashboard/MyProfile';
import AllOrders from './pages/Dashboard/AllOrders';
import AddProducts from './pages/Dashboard/AddProducts';
import ManageProducts from './pages/Dashboard/ManageProducts';
import AllUsers from './pages/Dashboard/AllUsers';
import PrivateAdmin from './pages/PrivateRoute/PrivateAdmin';
import MoneyPayment from './pages/Dashboard/MoneyPayment';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/dashboard' element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>}>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='payment/:id' element={<MoneyPayment></MoneyPayment>}></Route>
          <Route path='addreview' element={<AddReview></AddReview>}></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
          <Route path='allorder' element={<PrivateAdmin><AllOrders></AllOrders></PrivateAdmin>}></Route>
          <Route path='addproducts' element={<PrivateAdmin><AddProducts></AddProducts></PrivateAdmin>}></Route>
          <Route path='allproducts' element={<PrivateAdmin><ManageProducts></ManageProducts></PrivateAdmin>}></Route>
          <Route path='allusers' element={<PrivateAdmin><AllUsers></AllUsers></PrivateAdmin>}></Route>
        </Route>
        <Route path='/buynow/:id' element={<PrivateRoute><BuyNow></BuyNow></PrivateRoute>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
