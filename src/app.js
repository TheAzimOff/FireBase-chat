import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { context } from '.';
import Loader from './components/loader';

const App = () => {
  const [auth] = useContext(context);
  const [user, loading] = useAuthState(auth);
  if (loading) return <Loader value={user} />;
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
};
export default App;
