import React, { useEffect, useState } from 'react';
import './App.css';
import Header from '../src/Components/Header/Header';
import Sidebar from '../src/Components/Sidebar/Sidebar';
import BackBlur from '../src/Components/Sidebar/BackBlur';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Checkout from './Components/Checkout/Checkout';
import Login from './Components/Login/Login';
import { auth } from './firebase';
import { useStateValue } from './Context/context';



function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log(authUser);
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

  }, [])

  const [click, setClick] = useState(false);

  const toggleClick = () => {
    setClick(true);
  }

  const backBlurClick = () => {
    setClick(false);
  }

  let sidebar = null;
  let backBlur = null;

  if (click) {
    sidebar = <Sidebar />;
    backBlur = <BackBlur toggle={backBlurClick} />
  }

  return (
    //BEM convection
    <Router>
      <div className="app" style={{ height: '100%' }}>
        <Switch>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header toggle={toggleClick} />
            <Checkout />
          </Route>

          <Route path="/">
            <Header toggle={toggleClick} />
            <Home />
          </Route>

        </Switch>

      </div >

    </Router >
  );
}

export default App;
