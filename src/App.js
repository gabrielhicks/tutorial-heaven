import React, {useState} from 'react';
import { Route, Switch, withRouter } from "react-router-dom"
import './App.css';
import { AnimatePresence } from "framer-motion";
import Homepage from './components/Homepage/Homepage'
import Navbar from './components/Navbar/Navbar'
import Reactjs from './components/Category/Reactjs'
import Rails from './components/Category/Rails';
import Javascript from './components/Category/Javascript';
import Angular from './components/Category/Angular';
import Vue from './components/Category/Vue';
import Html from './components/Category/Html';
import Login from './components/User/Login';
import Register from './components/User/Register';
import Profile from './components/User/Profile';


function App() {
  const [user, setUser] = useState({})
  const reactImage = { width: 100, height: 90, }
  const railsImage = { width: 100, height: 100, }
  const jsImage = { width: 100, height: 100, }
  const angularImage = { width: 100, height: 100, }
  const vueImage = { width: 100, height: 86.5, }
  const htmlImage = { width: 100, height: 100, }
  const handleLogin = user => {setUser(user)}
  console.log(user)
  return (
    <>
      <Navbar />
      <AnimatePresence initial={false} exitBeforeEnter>
      <Switch>
        <Route path="/profile" render={() => (<Profile user={user}/> )}/>
        <Route path="/signup" render={() => (<Register handleLogin={handleLogin}/> )}/>
        <Route path="/login" render={() => (<Login handleLogin={handleLogin}/> )}/>
        <Route path="/reactjs" render={() => (<Reactjs imageSize={reactImage}/> )}/>
        <Route path="/rails" render={() => (<Rails imageSize={railsImage}/> )}/>
        <Route path="/javascript" render={() => (<Javascript imageSize={jsImage}/>)}/>
        <Route path="/angular" render={() => (<Angular imageSize={angularImage}/> )}/>
        <Route path="/vue" render={() => (<Vue imageSize={vueImage}/> )}/>
        <Route path="/html5" render={() => (<Html imageSize={htmlImage}/> )}/>
        <Route path="/" render={() => (<Homepage 
                                        reactImage={reactImage} 
                                        railsImage={railsImage} 
                                        jsImage={jsImage} 
                                        angularImage={angularImage}
                                        vueImage={vueImage}
                                        htmlImage={htmlImage}
                                        /> 
                                        )}/>
      </Switch>
      </AnimatePresence>
    </>
  );
}

export default withRouter(App);
