import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GlobalStyle from "./GlobalStyles";
import { GlobalBody } from "./GlobalStyles";
import { Browse, Home, SignIn, SignUp } from "./pages";

import * as ROUTES from './constants/routes'
// import { useAuthListener}  from './hooks';
import { UserAuthContextProvider} from './contexts/firebaseContext' ;
import { RedirectUser, ProtectedRoute} from './constants/ProtectedRoute' ;


function App() {
  // const { user } = useAuthListener();

  return (
    <>
      <UserAuthContextProvider>
      <Router>
        <GlobalStyle />
        <GlobalBody />
        <Routes>

          {/* <RedirectUser
            user={user}
            loggedInPath={ROUTES.BROWSE}
            element={ROUTES.SIGN_IN}
          >
            <SignIn />
          </RedirectUser>

          <RedirectUser
            user={user}
            loggedInPath={ROUTES.BROWSE}
            element={ROUTES.SIGN_UP}
          >
            <SignUp />
          </RedirectUser>

          <ProtectedRoute  path={ROUTES.BROWSE}>
            <Browse />
          </ProtectedRoute>

          <RedirectUser
            user={user}
            loggedInPath={ROUTES.BROWSE}
            element={ROUTES.HOME}
            exact
          >
            <Home />
          </RedirectUser> */}
      
          <Route path={ROUTES.SIGN_IN} element={<RedirectUser> <SignIn /> </RedirectUser>} />
          <Route path={ROUTES.SIGN_UP} element={<RedirectUser> <SignUp /> </RedirectUser>} />
          <Route exact path={ROUTES.HOME} element={<RedirectUser > <Home /> </RedirectUser>} />
          <Route path={ROUTES.BROWSE} element={<ProtectedRoute> <Browse /> </ProtectedRoute>} />

        </Routes>
      </Router>
      </UserAuthContextProvider>
    </>
  );
}

export default App;
