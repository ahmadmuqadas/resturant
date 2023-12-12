import React, { useEffect, useState } from "react";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, redirect } from "react-router-dom";
import { Home, MainNav } from './Assets/User components/UserImports';
import './Assets/User components/StyledComponents/style.css';
import LogIn, {LoginAction,} from "./Assets/User components/LogIn";
import Dashboard from "./Assets/Admin components/Dashboard";
import AdminLayout from "./Assets/Admin components/AdminLayout";
import EditDeals from "./Assets/Admin components/EditDeals";
import { loader } from "./Assets/User components/Deals";
import AdminLogin, {action} from "./Assets/Admin components/AdminLogin";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./FirebaseConfig";
import { render } from "@testing-library/react";

function App() {
  
const [userlog, setUserLog]= useState(null);

  useEffect(() => {

    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserLog(user)
      }
      else {
        setUserLog(null)
      }
    })
  },[])


  const takeRouter = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path="*" element={<code>404 Not Found</code>}/>
    <Route path="/"   element={<MainNav userLogStatus={userlog ? true : false} />} >
    <Route path="adminlogin" action={action} element={<AdminLogin/>}/>
      <Route index element={<Home />} loader={loader} errorElement={<h1>Oh! there was an error!</h1>} />
      <Route path="login" element={<LogIn userLogStatus={userlog ? true : false} />} action={LoginAction}  />
    </Route>
    <Route path="admin" element={<AdminLayout />} loader={async () => {
    
    return null
    }}>
      <Route index element={<Dashboard />} />
      <Route path="editdeals" element={<EditDeals />} />
    
    </Route>
    </>
  ))
  
  return (
    <>
      <div className="app">
        
        <RouterProvider router={takeRouter}/>
      </div>
    </>
  );
}

export default App;
