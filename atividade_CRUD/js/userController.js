class UserController {
    constructor() {
        this.users = [];
    }

    addUser(user) {
        this.users.push(user);
    }

    updateUser(index, user) {
        if (index >= 0 && index < this.users.length) {
            this.users[index] = user;
        }
    }

    deleteUser(index) {
        if (index >= 0 && index < this.users.length) {
            this.users.splice(index, 1);
        }
    }

    getUsers() {
        return this.users;
    }
}
