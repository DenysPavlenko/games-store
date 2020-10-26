import React from 'react';
import { NavLink } from 'react-router-dom';
import Typography from 'components/typography/typography';
// Assets
import { ReactComponent as Cog } from 'assets/images/icons/cog.svg';
import { ReactComponent as LogOut } from 'assets/images/icons/log-out.svg';
// Styles
import './user-dropdown-menu.sass';

const UserDropdownMenu = () => {
  return (
    <div className="user-dropdown-menu">
      <div className="user-dropdown-menu__items">
        <NavLink className="user-dropdown-menu__item" to="/settings" exact={'/settings' === '/' && true}>
          <Cog className="user-dropdown-menu__icon" />
          <Typography component="span" variant="p">Settings</Typography>
        </NavLink>
        <div className="user-dropdown-menu__item">
          <LogOut className="user-dropdown-menu__icon" />
          <Typography component="span" variant="p">Log Out</Typography>
        </div>
      </div>
    </div>
  );
};

export default UserDropdownMenu;