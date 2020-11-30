import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux'
import { Route, Switch, withRouter, useLocation, useHistory } from "react-router-dom"
import './App.css';
import { AnimatePresence } from "framer-motion";
import {setExistingUser} from './redux/User/user.action'
import Homepage from './components/Homepage/Homepage'
import Navbar from './components/Navbar/Navbar'
import Category from './components/Category/Category'
import Login from './components/User/Login';
import Register from './components/User/Register';
import Profile from './components/User/Profile';
import NewPost from './components/Post/NewPost';
import Logout from './components/User/Logout';
import NewComment from './components/Comment/NewComment';

function App({setExistingUser}) {
  const history = useHistory();

  useEffect(() => {
    const oldToken = localStorage.getItem("token");
    if (oldToken) {
      setExistingUser(oldToken);
    } else {
      history.push("/")
    }
  }, []);

  const [user, setUser] = useState({})
  const handleLogin = user => {setUser(user)}
  const location = useLocation()

  return (
    <>
      <Navbar />
      <AnimatePresence initial={true} exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/newcomment" render={() => (<NewComment /> )}/>
        <Route path="/logout" render={() => (<Logout /> )}/>
        <Route path="/newpost" render={() => (<NewPost /> )}/>
        <Route path="/profile" render={() => (<Profile /> )}/>
        <Route path="/signup" render={() => (<Register handleLogin={handleLogin}/> )}/>
        <Route path="/login" render={() => (<Login handleLogin={handleLogin}/> )}/>
        <Route path="/reactjs" render={() => (<Category icons={"ReactIcons"} root="reactjs" key="1" catId="1" /> )}/>
        <Route path="/rails" render={() => (<Category root="rails" key="5"/> )}/>
        <Route path="/javascript" render={() => (<Category root="javascript" key="5"/>)}/>
        <Route path="/angular" render={() => (<Category root="angular" key="2" /> )}/>
        <Route path="/vue" render={() => (<Category root="vue" key="3" /> )}/>
        <Route path="/html5" render={() => (<Category root="html5" key="6"/> )}/>
        <Route path="/" render={() => (<Homepage /> 
                                        )}/>
      </Switch>
      </AnimatePresence>
    </>
  );
}

const mapDispatchToProps = dispatch => {
    return {
        setExistingUser: (token) => dispatch(setExistingUser(token)),
    }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
