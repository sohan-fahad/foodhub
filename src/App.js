import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PhoneLogin from "./components/AuthComponents/PhoneLogin/PhoneLogin";
import Login from "./components/AuthComponents/Login/Login";
import LoginPassword from "./components/AuthComponents/LoginPassword/LoginPassword";
import Registration from "./components/AuthComponents/Registration/Registration";
import VerifyAccount from "./components/AuthComponents/VerifyAccount/VerifyAccount";
import VerifyCode from "./components/AuthComponents/VerifyCode/VerifyCode";
import Home from "./components/Home/Home/Home";
import UserProfile from "./components/Profile/UserProfile";
import Footer from "./components/Share/Footer/Footer/Footer";
import Header from "./components/Share/Header/Header";
import UserOrderList from "./components/UserOrderList/UserOrderList";
import VoucherList from "./components/VoucherList/VoucherList";
import RefundBalance from "./components/RefundBalance/RefundBalance";
import HelpCenter from "./components/HelpComponents/HelpCenter/HelpCenter";
import AuthProvider from "./context/AuthProvider";
import FindeRestaurant from "./components/RestaurantComponents/FindeRestaurant/FindeRestaurant";
import RestaurantRegistration from "./components/RestaurantRegistration/RestaurantRegistration/RestaurantRegistration";
import RestaurantDetails from "./components/RestaurantDetails/RestaurantDetails/RestaurantDetails";
import CheckOut from "./components/CheckOut/CheckOut/CheckOut";
import PrivateUser from "./PrivateRoutes/PrivateUser";
import PrivateAuth from "./PrivateRoutes/PrivateAuth";
import ScrollToTop from "./ScrollToTop";
import Corporate from "../src/components/Corporate/Corporate/Corporate"
import CorporateContact from "./components/CorporateContact/CorporateContact/CorporateContact";
import Rewards from "./components/Rewards/Rewards/Rewards";
import ChallengeDetails from "./components/Rewards/ChallengeDetails/ChallengeDetails";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>

          {/* it will scroll top when navigate the path */}
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>

            {/*if user is logged in, he will unable to access this routes */}
            <Route path="/auth/*" element={<PrivateAuth />}>
              <Route path="new" element={<Login />}></Route>
              <Route path="phone" element={<PhoneLogin />}></Route>
              <Route path="phone/password" element={<LoginPassword />}></Route>
              <Route path="phone/registration" element={<Registration />} />
            </Route>

            <Route path="/registration/verify" element={<VerifyAccount />} />
            <Route path="/registration/verify/code" element={<VerifyCode />} />

            {/*if user is not logged in, he will unable to access this routes */}
            <Route path="/user/*" element={<PrivateUser />}>
              <Route path="profile" element={<UserProfile />} />
              <Route path="vouchers" element={<VoucherList />} />
              <Route path="orders" element={<UserOrderList />} />
              <Route path="refund" element={<RefundBalance />} />
              <Route path="help" element={<HelpCenter />} />
              <Route path="checkout" element={<CheckOut />} />
            </Route>

            <Route path="restaurant/:id" element={<RestaurantDetails />} />



            <Route path="/restaurant/new" element={<FindeRestaurant />} />
            <Route path="/restaurant/registration" element={<RestaurantRegistration />} />
            <Route path="/corporate" element={<Corporate />} />
            <Route path="/corporate/contact" element={<CorporateContact />} />

            <Route path="/rewards/challenges" element={<Rewards />} />
            <Route path="/rewards/challenges/:id" element={<ChallengeDetails />} />

            <Route path="/checkout" element={<CheckOut />} />

          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div >
  );
}

export default App;
