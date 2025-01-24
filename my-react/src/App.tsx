import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import RegisterPage from './pages/RegisterPage';
// import LoginPage from './pages/LoginPage';
// import UserProfile from './pages/UserProfile';
import './App.css'
import Layout from './pages/layout';
import Home from './pages/home';
import LoginPage from './pages/looginPage';
import UserProfile from './pages/usserProfile';
import CreateUser from './pages/CreateUser';
import RegisterPage from './pages/rregisterPage';

const App: React.FC = () => {
  return (
    <>
   <Routes>
   <Route path="" element={<Layout />}>
  <Route path="/Home"  element={<Home />} />
  <Route path="LoginPage"  element={<LoginPage />} />
  <Route path="RegisterPage"  element={<RegisterPage />} />
  <Route path="UserProfile"  element={<UserProfile />} />
  <Route path="create"  element={<CreateUser/>} />



</Route>
   </Routes>
    </>
  );
};

export default App;
