import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import { Route, Switch, withRouter } from "react-router-dom"
import { motion } from "framer-motion";
import {fetchUsers} from '../../redux/User/user.action'

function Profile({user, users, fetchUsers}) {
    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <Switch>
        <Route path={`/profile/:id`} render={(routerProps) => {
            let id = parseInt(routerProps.match.params.id)
            let user;
            if(users.length > 0) {
                {console.log(users)}
                user = users.find(user => user.id === id)
            }
            return (
                <>
                {
                    users.length > 0
                    ? 
                    <motion.div
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        >
                        <h2>{user.username}</h2>
                        <p>{user.bio}</p>
                        <p>{user.first_name}</p>
                        <p>{user.last_name}</p>
                    {/* <Post key={post.id} post={post} root={`${root}`}/> */}
                    </motion.div>
                    :
                    <motion.div
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        >
                    <h2>Loading...</h2>
                    </motion.div>
                }
                </>
            )
        }}/>
        <Route path="/profile" render={() => {
            return (
            <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            >
                <h2>Hi {user.username}!</h2>
            </motion.div>
            )}} />
        </Switch>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user,
        users: state.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers()),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));