import React from 'react';
import { observer, inject } from 'mobx-react';
import Info from './Info';

const Header = inject('UsersStore')(observer(
    ({ UsersStore }) => {
        const { usersCount } = UsersStore;
        return (
            <div id='header'>
                <div>Company Book</div>
                <div>Current Users Count: {usersCount}</div>
                <Info />
            </div>
        )
    }
))

export default Header;