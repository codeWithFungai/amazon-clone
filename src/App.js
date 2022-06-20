import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import './App.css';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function App() {
  const [{}, dispatch] = useStateValue();

  React.useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);



  return (
    <Router>
            <div className="app">
              <Routes>
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Home />} />  
              </Routes>
            </div>
    </Router>

  );
}

export default App;
