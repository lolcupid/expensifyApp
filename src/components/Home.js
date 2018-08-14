import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const Home = ({startLogin}) => {
  return (
    <div className='base_layout'>
      <div className='base_layout__box'>
        <h1>Expensify App</h1>
        <p>It's good to control under Expensify App</p>
        <button className='btn' onClick={startLogin}>Login With Google</button>
      </div>
    </div>
  )
}

const mapStateToProps = (dispatch) => {
  return {
    startLogin: () => dispatch(startLogin())
  }
}

export default connect(undefined, mapStateToProps)(Home);