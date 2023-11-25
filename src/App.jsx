import { Route, Routes } from "react-router-dom";
import {Home, MainNav} from './Assets/User components/UserImports';
import './Assets/User components/StyledComponents/style.css'
import LogIn from "./Assets/User components/LogIn";


function App() {
  return (
    <>
    {/* i added the app div to be able to add background image without using absolute positions*/}
      <div className="app">
    <Routes>
      <Route path="/" element={<MainNav/>}>
      <Route index element={<Home/>}/>
      <Route path="login" element={<LogIn/>}/>
      </Route>
    </Routes>
    </div>
    </>
  );
}

export default App;
