import React, { createContext, useState, useEffect, useContext } from 'react';
import { auth, subscribe, loginWithProvider } from '../firebase/firebase';
import { useHistory } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const successfulAuth = user => {
    setIsAuthenticated(true);
    setUser(user);
    setLoading(false);
  };

  const unsuccessfulAuth = () => {
    setIsAuthenticated(false);
    setUser(null);
    setLoading(false);
  };

  useEffect(() => {
    // check firebase to see if user is logged in
    return subscribe(successfulAuth, unsuccessfulAuth);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const withSession = Component => {
  return function WithSession(props) {
    const loading = useAuthLoading();
    const isAuthenticated = useIsAuthenticated();

    if(!loading && !isAuthenticated) {
      loginWithProvider();
      return null;
    }

    if(loading) {
      // display a nice loading spinner
      return <h1>Loading</h1>;
    }

    // return our private component
    return <Component {...props} />;
  };
};

export const useUser = () => {
  const { user } = useContext(AuthContext);
  return user;
};

export const useIsAuthenticated = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated;
};

export const useAuthLoading = () => {
  const { loading } = useContext(AuthContext);
  return loading;
};
