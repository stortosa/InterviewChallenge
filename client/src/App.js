import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Phones from './components/Phones';
import PhonesDetail from './components/PhonesDetail';
import Home from './components/Home';

function App() {
  return (
    <React.Fragment>
      <Home/>
      <Switch>
        <Route exact path='/home' render={()=>{
          return <Home />
        }}/>
        <Route exact path='/phones' render={()=>{
          return <Phones />
        }}/>
        <Route exact path="/singlePhone/:id"
        render={(props) => <PhonesDetail {...props} />} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
