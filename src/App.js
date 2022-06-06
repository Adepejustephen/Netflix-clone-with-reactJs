import React from 'react'
import {  Routes, Route } from "react-router-dom";

import GlobalStyle from "./GlobalStyles";
import { GlobalBody } from "./GlobalStyles";
import { Browse, Home, SignIn, SignUp } from "./pages";

import * as ROUTES from './constants/routes'
// import { useAuthListener}  from './hooks';
import { UserAuthContextProvider} from './contexts/firebaseContext' ;
import ProtectedRoute from './constants/ProtectedRoute' ;



function App() {
  // const { user } = useAuthListener();

  return (
    <>
      <UserAuthContextProvider>
      
        <GlobalStyle />
        <GlobalBody />
        <Routes>
          <Route path={ROUTES.SIGN_IN} element={ <SignIn /> } />
          <Route path={ROUTES.SIGN_UP} element={ <SignUp /> } />
          <Route exact path={ROUTES.HOME} element={ <Home /> }/>
          <Route path={ROUTES.BROWSE} element={<ProtectedRoute> <Browse /> </ProtectedRoute>} />

        </Routes>
      </UserAuthContextProvider>
    </>
  );
}

export default App;
