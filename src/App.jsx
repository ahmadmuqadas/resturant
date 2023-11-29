import { Route, Routes } from "react-router-dom";
import { Home, MainNav } from './Assets/User components/UserImports';
import './Assets/User components/StyledComponents/style.css';
import LogIn from "./Assets/User components/LogIn";
import Dashboard from "./Assets/Admin components/Dashboard";
import AdminLayout from "./Assets/Admin components/AdminLayout";
import EditDeals from "./Assets/Admin components/EditDeals";

function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="*" element={<h1>404 not found</h1>}/>
          <Route path="/" element={<MainNav />}>
            <Route index element={<Home />} />
            <Route path="login" element={<LogIn />} />
          </Route>
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="editdeals" element={<EditDeals />} />
          
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
