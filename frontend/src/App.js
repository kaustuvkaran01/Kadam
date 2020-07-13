import React, { useContext } from "react";
import logo from "./logo.svg";
import { Switch, Route } from "react-router-dom";
import "./App.css";

//Importing the pages

import Home from "./pages/Home";
import About from "./pages/About";
import Impact from "./pages/Impact";
import Blog from "./pages/Blog";
import Media from "./pages/Media";
import Mad from "./pages/Mad";
// Impact Pages
import BloodyPure from "./pages/BloodyPure";
import SexEd from "./pages/SexEd";
import RakshaKaksha from "./pages/RakshaKaksha";
import Sunflower from "./pages/Sunflower";
//-------------
import Test from "./pages/test";
// import NavbarNew from "./components/test2nav";
import AdminPanel from "./pages/AdminPanel";
import UserPanel from "./pages/UserPanel";
import PrivateRoute from "./hocs/PrivateRoute";
import UnPrivateRoute from "./hocs/UnPrivateRoute";
import AdminRoute from "./hocs/AdminRoute";
import Login from "./components/Login";
import Register from "./components/Register";
import AdminLogin from "./components/Admin/AdminLogin";
import AddBlog from "./components/Admin/AddBlog";
import AddFundraiser from "./components/Admin/AddFundraiser";
import MaintainBlog from "./components/Admin/MaintainBlog";
import EditBlog from "./components/Admin/EditBlog";
import BlogPage from "./components/Blog/BlogPage";
import FundPage from "./components/FundRaiser/FundPage";

function App() {
  return (
    <Switch>
      <Route exact path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/impact" component={Impact} />
      <Route path="/mad" component={Mad} />
      <Route path="/media" component={Media} />
      <Route path="/blog" component={Blog} />
      <Route path="/test" component={Test} />

      {/* Dynamic Routes */}
      <Route path="/blogs/:id" component={BlogPage} />
      <Route path="/funds/:id" component={FundPage} />

      {/* Campaign routes */}
      <Route path="/bloodypure" component={BloodyPure} />
      <Route path="/sexed" component={SexEd} />
      <Route path="/rakshakaksha" component={RakshaKaksha} />
      <Route path="/sunflower" component={Sunflower} />
      {/* <Route path="/test2" component={NavbarNew} /> */}

      {/* //Admin Routes */}
      <Route path="/admin/login" component={AdminLogin} />
      <AdminRoute path="/admin/addblog" component={AddBlog} />
      <AdminRoute path="/admin/addfundraiser" component={AddFundraiser} />
      <AdminRoute path="/admin/maintainblog" component={MaintainBlog} />
      {/* <AdminRoute path="/admin/editblog" component={EditBlog} /> */}
      <AdminRoute path="/admin/editblog/:id" component={EditBlog} />
      {/* //User routes */}
      <PrivateRoute path="/profile" component={UserPanel} />
      <AdminRoute path="/admin" component={AdminPanel} />

      {/* //Before Login */}
      {/* <UnPrivateRoute path="/login" component={Login} /> */}
      <UnPrivateRoute path="/register" component={Register} />
    </Switch>
  );
}

export default App;
