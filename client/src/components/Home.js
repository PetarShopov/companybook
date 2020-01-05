import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('CompanyStore')
@observer
class Home extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.addCompany = this.addCompany.bind(this);
        this.deleteCompany = this.deleteCompany.bind(this);
    }

    handleChange(event) {
        this.props.CompanyStore.setCompanyName(event.target.value);
    }

    addCompany(e) {
        e.preventDefault();
        const { companiesCount = 0, newCompanyName } = this.props.CompanyStore;
        this.props.CompanyStore.addCompany({
            id: Math.random(),
            name: newCompanyName,
        });
        this.props.CompanyStore.setCompanyName('');
    }

    deleteCompany(id) {
        this.props.CompanyStore.deleteCompany(id);
    }

    renderCompanies(companies) {
        return companies.map((company, index) => {
            return (
                <li key={company.id}>
                    {company.name}
                    <button onClick={() => { this.deleteCompany(index) }}>Delete</button>
                </li>
            )
        })
    }

    render() {
        const { companies, newCompanyName } = this.props.CompanyStore;
        return (
            <div id='home'>
                <div>Companies:</div>
                <ul>
                    {this.renderCompanies(companies)}
                </ul>
                <form id='addCompanyForm'>
                    <label>
                        Company Name:
                    <input type="text" value={newCompanyName} onChange={this.handleChange} />
                    </label>
                    <input id='addCompany' type="submit" value="Add Company" onClick={this.addCompany}/>
                </form>
            </div>
        )
    }
}

export default Home;