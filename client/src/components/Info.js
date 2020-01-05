import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'

@inject('CompanyStore')
@observer
class Info extends Component {
    render() {
        return (
            <div id='Info'>
                <div>Current Companies Count: {this.props.CompanyStore.companiesCount}</div>
            </div>
        )
    }
}

export default Info;