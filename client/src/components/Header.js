import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Info from './Info';

@inject('UsersStore')
@observer
class Header extends Component {
    render() {
        return (
            <div id='header'>
                <div>Company Book</div>
                <Info/>
            </div>
        )
    }
}

export default Header;