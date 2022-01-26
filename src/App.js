import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmailLogin from "./components/AuthComponents/EmailLogin/EmailLogin";
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
import TopMenu from "./components/Share/TopMenu/TopMenu";
import RefundBalance from "./components/RefundBalance/RefundBalance";
import HelpCenter from "./components/HelpComponents/HelpCenter/HelpCenter";
import AuthProvider from "./context/AuthProvider";
import FindeRestaurant from "./components/RestaurantComponents/FindeRestaurant/FindeRestaurant";
import RestaurantRegistration from "./components/RestaurantRegistration/RestaurantRegistration/RestaurantRegistration";
import RestaurantDetails from "./components/RestaurantDetails/RestaurantDetails/RestaurantDetails";
import CheckOut from "./components/CheckOut/CheckOut/CheckOut";
import PrivateUser from "./components/PrivateRoutes/PrivateUser";
import PrivateAuth from "./components/PrivateRoutes/PrivateAuth";
import ScrollToTop from "./ScrollToTop";
import Corporate from "../src/components/Corporate/Corporate/Corporate"

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/auth/*" element={<PrivateAuth />}>
              <Route path="new" element={<Login />}></Route>
              <Route path="email" element={<EmailLogin />}></Route>
              <Route path="email/password" element={<LoginPassword />}></Route>
              <Route
                path="email/registration"
                element={<Registration />}
              ></Route>
            </Route>

            <Route
              path="/registration/verify"
              element={<VerifyAccount></VerifyAccount>}
            ></Route>
            <Route
              path="/registration/verify/code"
              element={<VerifyCode></VerifyCode>}
            ></Route>

            <Route path="/user/*" element={<PrivateUser />}>
              <Route path="profile" element={<UserProfile />} />
              <Route path="vouchers" element={<VoucherList />} />
              <Route path="orders" element={<UserOrderList />} />
              <Route path="refund" element={<RefundBalance />} />
              <Route path="help" element={<HelpCenter />} />
              <Route path="restaurant/id" element={<RestaurantDetails />} />
              <Route path="checkout" element={<CheckOut />} />
            </Route>

            <Route path="/restaurant/new" element={<FindeRestaurant />}></Route>
            <Route
              path="/restaurant/registration"
              element={<RestaurantRegistration></RestaurantRegistration>}
            />
            <Route path="/corporate" element={<Corporate />} />

            <Route
              path="/checkout"
              element={
                <PrivateUser>
                  <CheckOut />
                </PrivateUser>
              }
            />
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
