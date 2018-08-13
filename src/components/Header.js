import React from 'react';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth';
import { connect } from 'react-redux';

const Header = ({ startLogout }) => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
    <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    <button onClick={startLogout}>LogOut</button>
  </header>
);

const mapDispatchToProps = (dispatch) => {
  return {
    startLogout: () => dispatch(startLogout())
  }
}

export default connect(undefined, mapDispatchToProps)(Header);
