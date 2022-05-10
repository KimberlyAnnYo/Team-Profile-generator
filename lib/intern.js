const intern= require(`../lib/intern`);
class intern {
    constructor(enigneerName, engineerId, email, gitHub, role) {
        this.employeeName = employeeName;
        this.employeeId = employeeId;
        this.email = email;
        this.gitHub = gitHub;
        this.role = role;
    }
    getInternName() {
        return this.employeeName;
    }
    getInternId() {
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

module.exports = intern;