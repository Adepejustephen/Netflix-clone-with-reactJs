import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GlobalStyle from "./GlobalStyles";
import { GlobalBody } from "./GlobalStyles";
import { Browse, Home, SignIn, SignUp } from "./pages";

import * as ROUTES from './constants/routes'
import { UserAuthContextProvider } from './contexts/firebaseContext';
import ProtectedRoute from './constants/ProtectedRoute';
// import {ProtectedRoute} from './constants/ProtectedRoute' ;


function App() {
  return (
    <UserAuthContextProvider>
      <Router>
        <GlobalStyle />
        <GlobalBody />
        <Routes>
          <Route exact path={ROUTES.BROWSE} element={<ProtectedRoute> <Browse /> </ProtectedRoute>} />
          <Route  path={ROUTES.HOME} element={<Home />} />
          <Route exact path={ROUTES.SIGN_IN} element={<SignIn />} />
          <Route exact path={ROUTES.SIGN_UP} element={<SignUp />} />
          
        </Routes>
        {/* <Browse/> */}
        {/* <Home /> */}
      </Router>
    </UserAuthContextProvider>
  );
}

export default App;
