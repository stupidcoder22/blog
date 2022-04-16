import Topbar from "./Components/Topbar/Topbar";
import Home from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { Setting } from "./pages/settings/Setting";
import { Write } from "./pages/write/Write";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Singlepost } from "./Components/singlePost/Singlepost";

function App() {
  const user = false;
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/" element={user ? <Home /> : <Register />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/setting" element={user ? <Setting /> : <Register />} />
        <Route
          path="/post/:postid"
          element={user ? <Singlepost /> : <Register />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
