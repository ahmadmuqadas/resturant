import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Home, MainNav } from "./Assets/User components/UserImports";
import "./Assets/User components/StyledComponents/style.css";
import Dashboard from "./Assets/Admin components/Dashboard";
import AdminLayout from "./Assets/Admin components/AdminLayout";
import EditDeals, {editDealsLoader} from "./Assets/Admin components/EditDeals";
import { loader } from "./Assets/User components/Deals";
import CheckOut from "./Assets/User components/utils/CheckOut";
import Reservation from "./Assets/User components/Reservation";
import About from "./Assets/User components/About";
import Contact from "./Assets/User components/Contact";
import LogIn from "./Assets/User components/LogIn";
import SignUp from "./Assets/User components/SignUp";
import { modalAction } from "./Assets/Admin components/AddDealModal";

function App() {
  const takeRouter = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="*" element={<code>404 Not Found</code>} />
        <Route path="/" element={<MainNav />}>
          <Route path="reservation" element={<Reservation />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<LogIn/>}/>
          <Route path="Signup" element={<SignUp/>}/>
          <Route path="checkout" element={<CheckOut />} />

          <Route
            index
            element={<Home />}
            loader={loader}
            errorElement={<h1>Oh! there was an error!</h1>}
          />
        </Route>
        <Route
          path="admin"
          element={<AdminLayout />}
          loader={async () => {
            return null;
          }}
        >
          <Route index element={<Dashboard />} />
          <Route path="editdeals" element={<EditDeals />} action={modalAction} loader={editDealsLoader} />
        </Route>
      </>
    )
  );

  return (
    <>
      <div className="app">
        <RouterProvider router={takeRouter} />
      </div>
    </>
  );
}

export default App;
