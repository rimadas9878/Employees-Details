const Employee = require('./Employee');

//extending the Employee class to get name, id, email elements
class Manager extends Employee{
    //calling the name, id, email elements from Employee class
    constructor(name, id, email, officeNumber){
        
        //The super keyword keyword is used to call the constructor of its parent class to access the parent's properties and methods.
        super(name, id, email)
        this.officeNumber = officeNumber;    
    }
    //Overriding the getRole method
    getRole(){
        return "Manager";
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
}

//giving permision to extend the Manager class
module.exports = Manager;