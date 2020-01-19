import { observable, action, computed, autorun, reaction, when, configure, runInAction, spy } from 'mobx';
import dataService from '../services/dataService';
import UsersStore from './UsersStore';

//protects store from updating values out of action
configure({ enforceActions: 'observed' });

class CompanyStore {
    //observable values
    @observable companies = [];
    @observable newCompanyName = '';

    // components communication
    constructor() {
        autorun(
            (reaction) => {
                console.log(`autorun - Companies count: ${this.companiesCount}, Users Count: ${UsersStore.usersCount}`);
            }
        )
        when(
            () => this.companiesCount === 5,
            () => {
                console.log('when - 5 companies have been added!')
            }
        )
        reaction(
            () => this.companies.length,
            (companiesCount, reaction) => {
                if (this.companies[companiesCount - 1]) {
                    console.log(`reaction - Companies count is ${companiesCount}. The last added company is ${this.companies[companiesCount - 1].name}`)
                }
                if (companiesCount > 2) {
                    reaction.dispose(); // reaction is dispose after companies become more then 2
                }
            }
        )
        // debugging
        // spy(event => {
        //     if (event.type === "action") {
        //         console.log(`${event.name} with args: ${event.arguments}`)
        //     }
        // })
    }

    //computed values
    @computed get companiesCount() {
        return this.companies.length;
    }

    //computed values
    @computed get publicCompaniesCount() {
        return this.companies.filter(company => {
            return company.type === 'public';
        }).length;
    }

    //action
    @action setCompanyName(name) {
        this.newCompanyName = name;
    }

    //async actions
    @action getCompanies() {
        dataService.get('data')
            .then((response) => {
                // We use action, because action functions are the only place you are supposed to change the state.
                this.setCompanies(response);
            })
    }

    //additional action
    @action setCompanies(companies) {
        this.companies = companies;
    }

    //runInAction
    @action addCompany(company) {
        dataService.post('company/add', company)
            .then((response) => {
                // We use action, because action functions are the only place you are supposed to change the state.
                runInAction('setCompaniesRunInAction', () => {
                    this.companies = response.companies;
                })
            })
    }

    //inline action
    @action deleteCompany(id) {
        dataService.post('company/delete', { position: id })
            .then(
                // We use action, because action functions are the only place you are supposed to change the state.
                action('setCompaniesInlineAction', (response) => {
                    this.companies = response.companies;
                })
            )
    }
}

export default new CompanyStore();