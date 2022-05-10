const engineer= require(`../lib/engineer`);
class engineer {
    constructor(enigneerName, engineerId, email, gitHub, role) {
        this.employeeName = employeeName;
        this.employeeId = employeeId;
        this.email = email;
        this.gitHub = gitHub;
        this.role = role;
    }
    getEngineerName() {
        return this.employeeName;
    }
    getEngineerId() {
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

module.exports = engineer;