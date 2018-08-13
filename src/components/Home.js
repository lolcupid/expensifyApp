import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const Home = ({startLogin}) => {
  return (
    <div>
      <button onClick={startLogin}>Login</button>
    </div>
  )
}

const mapStateToProps = (dispatch) => {
  return {
    startLogin: () => dispatch(startLogin())
  }
}

export default connect(undefined, mapStateToProps)(Home);