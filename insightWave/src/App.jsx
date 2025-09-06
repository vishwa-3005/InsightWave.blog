import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./component";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          // ✅ pass userData directly (not { userData })
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .catch(() => {
        // ✅ in case of error, log out the user
        dispatch(logout());
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          <Outlet /> {/* ✅ renders child routes */}
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
