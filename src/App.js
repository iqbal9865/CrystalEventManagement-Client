
import './App.css';
import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import DashBoard from './components/DashBoard/DashBoard/DashBoard';
import OrderList from './components/DashBoard/OrderList/OrderList';
import AddService from './components/DashBoard/AddService/AddService';
import Login from './components/Login/Login';
import MakeAdmin from './components/DashBoard/MakeAdmin/MakeAdmin';
export const UserContext = createContext();
function App() {
  const [logInUser, setLogInUser] = useState({});
  return (
    <div className="App">
      <UserContext.Provider value={[logInUser, setLogInUser]}>
      <Router>
      <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/dashboard">
            <DashBoard/>
          </Route>
          <Route path="/orderList">
            <OrderList/>
          </Route>
          <Route path="/addService">
            <AddService/>
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin/>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
