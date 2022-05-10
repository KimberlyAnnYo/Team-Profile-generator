
const manager= require(`../lib/manager`);
class manager {
    constructor(enigneerName, engineerId, email, gitHub, role) {
        this.employeeName = employeeName;
        this.employeeId = employeeId;
        this.email = email;
        this.gitHub = gitHub;
        this.role = role;
    }
    getManagerName() {
        return this.employeeName;
    }
    getManagerId() {
        return this.employeeId;
    }
    getEmail() {
        return`${this.email}`;
    }
    getGitHub() {
        return this.gitHub;
    }
    getRole(){
        return this.role;
    }
    
}

module.exports = manager;