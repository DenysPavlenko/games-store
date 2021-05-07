import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
// Redux
import { userSignOut } from 'redux/user/user.actions';
// Components
import Typography from 'components/typography/typography';
// Assets
import { ReactComponent as Cog } from 'assets/images/icons/cog.svg';
import { ReactComponent as LogOut } from 'assets/images/icons/sign-out.svg';
// Styles
import './user-dropdown-menu.sass';

export const UserDropdownMenu = ({ userSignOut }) => {
  return (
    <div className="user-dropdown-menu">
      <div className="user-dropdown-menu-items">
        <NavLink className="user-dropdown-menu-item" to="/history" exact={true}>
          <Cog className="user-dropdown-menu-icon" />
          <Typography component="span" variant="p" className="mb-0">History</Typography>
        </NavLink>
        <div className="user-dropdown-menu-item" onClick={userSignOut}>
          <LogOut className="user-dropdown-menu-icon" />
          <Typography component="span" variant="p" className="mb-0">Sign Out</Typography>
        </div>
      </div>
    </div>
  );
};

UserDropdownMenu.propTypes = {
  userSignOut: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  userSignOut
};

export default connect(null, mapDispatchToProps)(UserDropdownMenu);
