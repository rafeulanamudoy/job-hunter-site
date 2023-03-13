import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';



import { RouterProvider } from 'react-router';
import { getUser, toggoleLoading } from './features/auth/authSlice';
import auth from './firebase/firebase.config';
import routes from './routes/routes';



function App() {
  const dispatch = useDispatch()


  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        dispatch(getUser(user.email))


        // ...
      } else {
        // User is signed out
        // ...
        dispatch(toggoleLoading())
      }
    });

  }, [dispatch])
  return (
    <>
      <Toaster></Toaster>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
