import React from 'react';
import { NavLink } from 'react-router-dom';
import Typography from 'components/typography/typography';
// Assets
import { ReactComponent as Cog } from 'assets/images/icons/cog.svg';
import { ReactComponent as LogOut } from 'assets/images/icons/sign-out.svg';
// Styles
import './user-dropdown-menu.sass';

const UserDropdownMenu = () => {
  return (
    <div className="user-dropdown-menu">
      <div className="user-dropdown-menu-items">
        <NavLink className="user-dropdown-menu-item" to="/settings" exact={'/settings' === '/' && true}>
          <Cog className="user-dropdown-menu-icon" />
          <Typography component="span" variant="p" className="mb-0">Account</Typography>
        </NavLink>
        <div className="user-dropdown-menu-item">
          <LogOut className="user-dropdown-menu-icon" />
          <Typography component="span" variant="p" className="mb-0">Sign Out</Typography>
        </div>
      </div>
    </div>
  );
};

export default UserDropdownMenu;