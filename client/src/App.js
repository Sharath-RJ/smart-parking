import { Route, Routes } from "react-router-dom";
import Home from "./pages/User/Home";
import Login from "./pages/Landloards/Login"
import Register from "./pages/Landloards/Register";
import { ToastContainer } from "react-toastify";
import AdminPrivate from "./components/Routes/AdminPrivate";
import Dashboard from "./pages/Landloards/Dashboard";
import Devices from "./pages/Landloards/Devices"
import Properties from "./pages/Landloards/Properties";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<AdminPrivate />}>
          <Route index element={<Dashboard />} />
          <Route path="properties" element={<Properties />} />
          <Route path="devices" element={<Devices />} />
        </Route>
        <Route path="*" element={<>Not found</>} />
      </Routes>
      <ToastContainer position="bottom-center" />
    </div>
  );
}

export default App;
