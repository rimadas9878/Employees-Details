class Employee{
    //adding a constructor is useful when you want to create multiple similar objects with the same properties and methods.
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        }

        //will return name of the current element
        getName(){
            return this.name;
        }
        //will return id of the current element
        getId(){
            return this.id;
        }
        //will return email of the current element
        getEmail(){
            return this.email
        }
        //will return the roll of the current element
        getRole(){
            return "Employee";
        }
    }

    //this will give permision to extend the Employee class
    module.exports = Employee;