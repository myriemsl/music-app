import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authentication from "./Pages/Authentication";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import PrivateRoute from "./PrivateRoute";




function App() {

  return (
    <Router>
     <Routes>
       <Route path="/" exact element={<Authentication/>}/>
       <Route path="/login" exact element={<Login/>}/>
       <Route path="/register" exact element={<Register/>}/>
       <Route exact element={<PrivateRoute/>}>
        <Route path="/dashboard" exact element={<Dashboard/>}/>
       </Route>
     </Routes>
    </Router>
  );
}

export default App;
