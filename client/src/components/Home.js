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

    componentDidMount() {
        this.props.CompanyStore.getCompanies();
    }

    handleChange(event) {
        this.props.CompanyStore.setCompanyName(event.target.value);
    }

    addCompany(e) {
        e.preventDefault();
        const { newCompanyName } = this.props.CompanyStore;
        this.props.CompanyStore.addCompany({
            id: Math.random(),
            name: newCompanyName,
            type: Math.random() > 0.5 ? 'public' : 'private',
        });
        this.props.CompanyStore.setCompanyName('');
    }

    deleteCompany(id) {
        this.props.CompanyStore.deleteCompany(id);
    }

    renderCompanies(companies, companiesCount) {
        if (!companiesCount) {
            return null;
        }
        return (
            <ul>
                {
                    companies.map((company, index) => {
                        return (
                            <li key={company.id}>
                                {company.name}
                                <button onClick={() => { this.deleteCompany(index) }}>Delete</button>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    render() {
        const { companies, newCompanyName, companiesCount } = this.props.CompanyStore;
        return (
            <div id='home'>
                <div>Companies:</div>
                {this.renderCompanies(companies, companiesCount)}
                <form id='addCompanyForm'>
                    <label>
                        Company Name:
                    <input type="text" value={newCompanyName} onChange={this.handleChange} />
                    </label>
                    <input id='addCompany' type="submit" value="Add Company" onClick={this.addCompany} />
                </form>
            </div>
        )
    }
}

export default Home;