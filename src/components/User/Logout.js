import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logoutUserRequest } from '../../redux/User/user.action';
import { motion } from 'framer-motion';

function Logout(props) {
  const transition = { duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] };
  const history = useHistory();

  const localHandleSubmit = () => {
    props.handleSubmit();
    localStorage.clear();
    return history.push('/');
  };
  return (
    <motion.div
      initial={{ transition: transition, opacity: 0.1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.1, transition: transition, scale: 1 }}>
      {localHandleSubmit()}
    </motion.div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return { handleSubmit: () => dispatch(logoutUserRequest()) };
};

export default connect(null, mapDispatchToProps)(Logout);
