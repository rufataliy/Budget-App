import React from "react";
import {BrowserRouter, Route, Switch, Link, NavLink} from "react-router-dom";
const Header= ()=>(
  <header>
    <h3>This is header</h3>
    <p><NavLink exact={true} activeClassName="isActive" to="/">Dashboard</NavLink></p>
    <p>
      <NavLink activeClassName="isActive" to="/CreateExpense">Create Expenses</NavLink>
    </p>
    <p>
      <NavLink activeClassName="isActive" to="/help">Help</NavLink>
    </p>
  </header>
)
export default Header
