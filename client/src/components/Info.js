import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import { trace } from "mobx";

@inject('CompanyStore')
@observer
class Info extends Component {
    render() {
        // trace(true); //-> demo
        return (
            <div id='Info'>
                <div>Current Companies Count: {this.props.CompanyStore.companiesCount}</div>
                <div>Current Public Companies Count: {this.props.CompanyStore.publicCompaniesCount}</div>
            </div>
        )
    }
}

export default Info;