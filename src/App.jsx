import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { Home, MainNav } from './Assets/User components/UserImports';
import './Assets/User components/StyledComponents/style.css';
import LogIn from "./Assets/User components/LogIn";
import Dashboard from "./Assets/Admin components/Dashboard";
import AdminLayout from "./Assets/Admin components/AdminLayout";
import EditDeals from "./Assets/Admin components/EditDeals";
import { loader } from "./Assets/User components/Deals";

function App() {


  const takeRouter = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path="*" element={<code>404 Not Found</code>}/>
    <Route path="/" element={<MainNav />}>
      <Route index element={<Home />} loader={loader} errorElement={<h1>Oh! there was an error!</h1>} />
      <Route path="login" element={<LogIn />} />
    </Route>
    <Route path="admin" element={<AdminLayout />}>
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
