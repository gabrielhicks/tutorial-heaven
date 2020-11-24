import React, {useState} from 'react';
import { Route, Switch, withRouter, useLocation } from "react-router-dom"
import './App.css';
import { AnimatePresence } from "framer-motion";
import Homepage from './components/Homepage/Homepage'
import Navbar from './components/Navbar/Navbar'
import Category from './components/Category/Category'
import Login from './components/User/Login';
import Register from './components/User/Register';
import Profile from './components/User/Profile';
import NewPost from './components/Post/NewPost';
import Logout from './components/User/Logout';
import NewComment from './components/Comment/NewComment';

    // if (token) {
    //   const options = {
    //     method: "GET",
    //     headers: {
    //       Authorization: `Bearer ${token}` }
    //     }
    //   fetch("https://rplants-backend.herokuapp.com/api/v1/profile", options)
    //   .then(res=>res.json())
    //   .then(data=> this.setState({ user: data.user}))
    // } else {
    //   this.props.history.push("/")
    // }

function App() {
  const [user, setUser] = useState({})
  const reactImage = { width: 100, height: 100, }
  const railsImage = { width: 100, height: 100, }
  const jsImage = { width: 100, height: 100, }
  const angularImage = { width: 100, height: 100, }
  const vueImage = { width: 100, height: 86.5, }
  const htmlImage = { width: 100, height: 100, }
  const handleLogin = user => {setUser(user)}
  const location = useLocation()
  console.log(user)
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
        {/* <Route path="/reactjs" render={() => (<Reactjs root="reactjs" topic="React" imageSize={reactImage}/> )}/> */}
        <Route path="/reactjs" render={() => (<Category root="reactjs" topic="React" imageSize={reactImage}/> )}/>
        <Route path="/rails" render={() => (<Category root="rails" topic="Ruby on Rails" imageSize={railsImage}/> )}/>
        <Route path="/javascript" render={() => (<Category root="javascript" topic="JavaScript" imageSize={jsImage}/>)}/>
        <Route path="/angular" render={() => (<Category root="angular" topic="Angular" imageSize={angularImage}/> )}/>
        <Route path="/vue" render={() => (<Category root="vue" topic="Vue" imageSize={vueImage}/> )}/>
        <Route path="/html5" render={() => (<Category root="html5" topic="HTML" imageSize={htmlImage}/> )}/>
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
