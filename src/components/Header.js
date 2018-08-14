import React from 'react';
import { Link } from 'react-router-dom';
import { startLogout } from '../actions/auth';
import { connect } from 'react-redux';

export const Header = ({ startLogout }) => (
  <header className="header_layout">
    <div className="container">
      <div className="header_layout__box">
        <Link className="header_layout__title" to="/dashboard">
          <h1>Expensify</h1>
        </Link>
        <button className='btn-link' onClick={startLogout}>LogOut</button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => {
  return {
    startLogout: () => dispatch(startLogout())
  }
}

export default connect(undefined, mapDispatchToProps)(Header);
