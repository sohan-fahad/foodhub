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
import PrivateAuth from "./components/PrivateRoutes/PrivateAuth";
import AuthProvider from "./context/AuthProvider";
import FindeRestaurant from "./components/RestaurantComponents/FindeRestaurant/FindeRestaurant";
import RestaurantRegistration from "./components/RestaurantRegistration/RestaurantRegistration/RestaurantRegistration";
import RestaurantDetails from "./components/RestaurantDetails/RestaurantDetails/RestaurantDetails";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <TopMenu></TopMenu>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route
              path="/login/email"
              element={<EmailLogin></EmailLogin>}
            ></Route>
            <Route
              path="/login/user"
              element={
                <PrivateAuth>
                  <LoginPassword />
                </PrivateAuth>
              }
            ></Route>
            <Route
              path="/registration"
              element={
                <PrivateAuth>
                  <Registration />
                </PrivateAuth>
              }
            ></Route>
            <Route
              path="/registration/verify"
              element={<VerifyAccount></VerifyAccount>}
            ></Route>
            <Route
              path="/registration/verify/code"
              element={<VerifyCode></VerifyCode>}
            ></Route>
            <Route
              path="/user/name"
              element={<UserProfile></UserProfile>}
            ></Route>
            <Route
              path="/user/name/order"
              element={<UserOrderList></UserOrderList>}
            ></Route>
            <Route
              path="/user/name/vouchers"
              element={<VoucherList></VoucherList>}
            ></Route>
            <Route
              path="/user/refund"
              element={<RefundBalance></RefundBalance>}
            ></Route>
            <Route path="/help" element={<HelpCenter></HelpCenter>}></Route>
            <Route
              path="/restaurant/new"
              element={<FindeRestaurant></FindeRestaurant>}
            ></Route>
            <Route
              path="/restaurant/registration"
              element={<RestaurantRegistration></RestaurantRegistration>}
            ></Route>
            <Route
              path="/restaurantdetails"
              element={<RestaurantDetails></RestaurantDetails>}
            ></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
