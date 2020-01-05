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
}

export default new UsersStore();