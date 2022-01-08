import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Redirect from "./Pages/SpecialSignUp/Redirect";
import TagManager from "react-gtm-module";
import tawkTo from "tawkto-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//GTM
const tagManagerArgs = {
  gtmId: "GTM-NXPK262",
};

TagManager.initialize(tagManagerArgs);
//END GTM

//TAWK
const tawkToPropertyId = "6073390df7ce1827093946a1";

const tawkToKey = "1f311dno9";

//routing
const PrivateRoute = lazy(() => import("./Pages/authComponents/PrivateRoute"));
///////////////////////////////////////////////////////////////
const ContactUs = lazy(() => import("./Pages/ContactUs/ContactUs"));
const RankBoost = lazy(() => import("./Pages/RankBoost/RankBoost"));
const AcheivementBadges = lazy(() =>
  import("./Pages/AcheivementBadges/AcheivementBadges.jsx")
);
const Home = lazy(() => import("./Pages/Home/Home"));
const Login = lazy(() => import("./Pages/authComponents/Login"));
const Register = lazy(() => import("./Pages/authComponents/Register"));
const ForgotPassword = lazy(() =>
  import("./Pages/authComponents/ForgotPassword")
);
const ResetPassword = lazy(() =>
  import("./Pages/authComponents/ResetPassword")
);
const Cart = lazy(() => import("./Pages/Cart/Cart.jsx"));
const Blog = lazy(() => import("./Pages/Blog/Blog"));
const ComingSoon = lazy(() => import("./Pages/ComingSoon/ComingSoon"));
const Sucess = lazy(() => import("./Pages/Sucess/Sucess"));
const Profile = lazy(() => import("./Pages/Profile/Profile"));
const KillBoost = lazy(() => import("./Pages/KillsBoost/KillBoost"));
const ArenasBoost = lazy(() => import("./Pages/ArenasBoost/Arenas"));
const SpecialSignUp = lazy(() => import("./Pages/SpecialSignUp/SignUp"));
const Typ = lazy(() => import("./Pages/SpecialSignUp/typ"));
const Specialpacks = lazy(() => import("./SpecialPacks/Specialpacks"));
const notify = () => toast("Wow so easy!");
function App() {
  useEffect(() => {
    tawkTo(tawkToPropertyId, tawkToKey);
  }, []);
  toast.info('🦄 Wow so easy!', {
    position: "top-right",
    autoClose: 1e+44,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
  return (
    <>
      <Suspense fallback={Redirect}>
        <Router>
          <div className="app">
            <Switch>
              <Route path="/cart" component={Cart}></Route>
              <Route path="/" exact component={Home}></Route>
              <Route path="/rank-boosting" exact component={RankBoost}></Route>
              <Route path="/contact-us" exact component={ContactUs}></Route>
              <Route path="/kills-boosting" exact component={KillBoost}></Route>
              <Route
                path="/acheivement-badges"
                exact
                component={AcheivementBadges}
              ></Route>
              <Route path="/wins-boosting" exact component={ComingSoon}></Route>
              <Route path="/login" exact component={Login}></Route>
              <Route path="/register" exact component={Register}></Route>
              <Route
                exact
                path="/forgotpassword"
                component={ForgotPassword}
              ></Route>
              <Route
                path="/passwordreset/:resetToken"
                exact
                component={ResetPassword}
              ></Route>
              <Route path="/blog" exact component={Blog}></Route>
              <Route path="/success" exact component={Sucess}></Route>
              <Route path="/redirect" exact component={Redirect}></Route>
              <Route
                path="/SpecialSignUp"
                exact
                component={SpecialSignUp}
              ></Route>
              <Route path="/thank_you" exact component={Typ}></Route>
              <Route
                path="/SpecialPacks"
                exact
                component={Specialpacks}
              ></Route>
              <Route path="/Arenas-Boost" exact component={ArenasBoost}></Route>

              <PrivateRoute>
                <Route path="/profile" exact component={Profile}></Route>
              </PrivateRoute>
            </Switch>
          </div>{" "}
        </Router>
      </Suspense>
      <ToastContainer
        position="top-right"
        autoClose={1e44}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
