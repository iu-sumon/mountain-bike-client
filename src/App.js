
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllParts from './Pages/Home/AllParts';
import Blogs from './Pages/Blogs/Blogs';
import Dashboard from './Pages/Dashboard/Dashboard';
import Portfolio from './Pages/Portfolio/Portfolio';
import NotFound from './Pages/NotFound/NotFound';
import PurchasePage from './Pages/PurchasePage/PurchasePage';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import AddParts from './Pages/Dashboard/AddParts';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import ManageParts from './Pages/Dashboard/ManageParts';
import RequireAuth from './Pages/Login/RequireAuth';
import RequireAdmin from './Pages/Login/RequireAdmin';
import Payment from './Pages/Dashboard/Payment';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-parts" element={<AllParts />} />

        <Route path="/dashboard" element={

          <RequireAuth>
            <Dashboard />
          </RequireAuth>

        }>
          <Route index element={<MyProfile />} />
          <Route path="review" element={<AddReview />} />
          <Route path="myOrders" element={<MyOrders />} />
          <Route path="payment/:id" element={<Payment/>} />
          <Route path="add" element={

            <RequireAdmin>
              <AddParts />
            </RequireAdmin>

          } />
          <Route path="make" element={

            <RequireAdmin>
              <MakeAdmin />
            </RequireAdmin>

          } />
          <Route path="orders" element={

            <RequireAdmin>
              <ManageOrders />
            </RequireAdmin>

          } />
          <Route path="parts" element={

            <RequireAdmin>
              <ManageParts />
            </RequireAdmin>
          } />

        </Route>

        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/purchasePage/:id" element={

          <RequireAuth>
            <PurchasePage />
          </RequireAuth>

        } />


        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
