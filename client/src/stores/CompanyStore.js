import { observable, action, computed, autorun, reaction, when } from 'mobx';

class CompanyStore {
    @observable companies = [];
    @observable newCompanyName = '';

    constructor() {
        autorun(
            (reaction) => {
                console.log(`autorun - ${this.companiesCount}`);
            }
        )
        when(
            () => this.companiesCount === 5,
            () => {
                console.log('when')
            }
        )
        reaction(
            () => this.companies.length,
            (companiesCount, reaction) => {
                if(this.companies[companiesCount - 1]){
                    console.log(`Companies count is ${companiesCount}. The last added company is ${this.companies[companiesCount - 1].name}`)
                }
                if (companiesCount > 2) {
                    reaction.dispose(); // reaction is dispose after companies become more then 2
                }
            }
        )
    }

    @computed get companiesCount() {
        return this.companies.length;
    }

    @action addCompany(company) {
        this.companies.push(company);
    }

    @action deleteCompany(id) {
        this.companies.splice(id, 1);
    }

    @action setCompanyName(name) {
        this.newCompanyName = name;
    }
}

export default new CompanyStore();