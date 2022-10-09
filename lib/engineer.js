const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email)
        this.gitHub = gitHub;
       
    }
    getgitHub() {
        return gitHub;
    }

    getRole() {
        return "rr";
    }
}
module.exports = Engineer;