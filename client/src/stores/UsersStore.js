import { observable, action, computed } from 'mobx';

class UsersStore {
    @observable users = [
        {
            firstName: 'Petar',
            lastName: 'Shopov',
            type: 'admin',
        },
        {
            firstName: 'Vasil',
            lastName: 'Georgiev',
            type: 'user',
        },
    ];

    @computed get usersCount() {
        return this.users.length;
    }
}

export default new UsersStore();