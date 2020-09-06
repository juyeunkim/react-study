import React from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import Home from "./components/Home"
// import Login from "./components/Login"
import LoginContainer from "./containers/LoginContainer"


function App() {
  return(
    <BrowserRouter> 
      <Route path="/" exact component={Home} />
      {/* <Route path="/login" exact component={Login} /> */}
      <Route path="/login" exact component={LoginContainer} />
    </BrowserRouter>
  )
}

export default App;
