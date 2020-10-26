import React from 'react';
// Components
import Avatar from 'components/avatar/avatar';
import Dropdown from 'components/dropdown/dropdown';
import Typography from 'components/typography/typography';
import UserDropdownMenu from 'components/user-dropdown-menu/user-dropdown-menu';
import { ReactComponent as ChevronDown } from 'assets/images/icons/chevron-down.svg';
// Style
import './user-dropdown.sass';

const UserDropdown = () => {
  return (
    <Dropdown className="user-dropdown">
      <Dropdown.Toggle className="user-dropdown-toggle">
        <Avatar className="user-dropdown-avatar" />
        <Typography component="h6" className="user-dropdown-name">Justas</Typography>
        <ChevronDown className="user-dropdown-chevron" />
      </Dropdown.Toggle>
      <Dropdown.Box className="user-dropdown-box">
        <UserDropdownMenu />
      </Dropdown.Box>
    </Dropdown>
  );
};

export default UserDropdown;
