// src/App.jsx
import React , { useContext }from "react";
import { Routes, Route ,Navigate} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Users from "./pages/Users";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./utils/PrivateRoute.js";
import { AuthProvider , default as AuthContext} from "./auth/AuthContext.js";

const App = () => {
  const {token} = useContext(AuthContext);
  return (
    <AuthProvider>
      
        <Navbar />
        <Routes>
          {/*si l'utilisateur connecté aller à accueil si non vers login */}
          <Route path="/"
          element={token ? <Navigate to="/home"/> : <Navigate to= "/login"/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/articles"
            element={
              <PrivateRoute>
                <Articles />
              </PrivateRoute>
            }
          />
          <Route
            path="/users"
            element={
              <PrivateRoute>
                <Users />
              </PrivateRoute>
            }
          />
        </Routes>
      
    </AuthProvider>
  );
};

export default App;

