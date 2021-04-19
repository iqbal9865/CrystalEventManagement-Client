
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
import Book from './components/Home/Book/Book';
import Review from './components/Home/Review/Review';
import ManageService from './components/DashBoard/ManageService/ManageService';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import BookingList from './components/Home/BookingList/BookingList';
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
          <PrivateRoute path="/dashboard">
            <DashBoard/>
          </PrivateRoute>
          <PrivateRoute path="/orderList">
            <OrderList/>
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService/>
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin/>
          </PrivateRoute>
          <PrivateRoute path="/book/:_id">
            <Book/>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/review">
            <Review/>
          </PrivateRoute>
          <PrivateRoute path="/bookingList">
            <BookingList/>
          </PrivateRoute>
          <PrivateRoute path="/manageService">
            <ManageService/>
          </PrivateRoute>
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
