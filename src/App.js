import React, { useState, useEffect } from 'react';
import './App.css';
import Header from "./myComponent/header"
import {Footer} from "./myComponent/Footer"
import Posts from "./myComponent/Posts"
import {UserRegistration} from "./myComponent/UserRegistration"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
          <Header/>
          <Switch>
              <Route exact path="/userRegistration" render={()=>{
                return(
                <>
                   <UserRegistration/> 
                </>)
              }}> 
              </Route>
              <Route exact path="/posts">
                <Posts/>
              </Route> 
            </Switch> 
        <Footer/>
        </Router>
    </>
  );
}

export default App;
