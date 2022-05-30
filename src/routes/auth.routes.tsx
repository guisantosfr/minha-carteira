import React from 'react';
import { Route, Routes } from 'react-router-dom';

import SignIn from '../pages/SignIn';

const AuthRoutes: React.FC = () => (
  <Routes>
    <Route path="/signin" element={<SignIn />} />
  </Routes>
);

export default AuthRoutes;