import "./App.css";
import Header from "./components/header.jsx";
import Loging from "./page/loging.jsx";
import HomePage from "./page/home.jsx";
import Singinup from "./page/singinup.jsx";
import Register from "./page/register.jsx";
import Admin from "./page/admin.jsx";
import Testpage from "./page/testpage.jsx";
import {
  BrowserRouter as BrouserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <BrouserRouter>
        <div className="">
          <Toaster position="top-right" />
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Loging />} />
            <Route path="/signup" element={<Singinup />} />
            <Route path="/admin/*" element={<Admin />} />
            <Route path="/register" element={<Register />} />
            <Route path="/testing" element={<Testpage />} />
            <Route path="/*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </div>
      </BrouserRouter>
    </div>
  );
}

export default App;


