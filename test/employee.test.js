const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("Initialization", () => {
        it("Should create an new employee instance", () =>{
            const emp = new Employee();
            expect(typeof(emp)).toBe("object");
        });

        it("Should be able to add name", () => {
            const name = "Rima";
            const emp = new Employee(name);
            expect(emp.name).toBe(name);
        });

        it("Should be able to add id", () => {
            const id = 123;
            const emp = new Employee("rima", id);
            expect(emp.id).toBe(id);
        });

        it("Should be able to add email", () => {
            const email = "abc@test.com";
            const emp = new Employee("rima", 1, email);
            expect(emp.email).toBe(email);
        });

        describe("getName", () => {
            it("Should be able to get name from the getName method", () => {

                const value = "Rima";
                const emp = new Employee(value);
                expect(emp.getName()).toBe(value);
            });
        });

        describe("getId", () => {
            it("Should be able to get id from the getId method", () => {
                const value = 123;
                const emp = new Employee("rima", value);
                expect(emp.getId()).toBe(value);
            });
        });

        describe("getEmail", () => {
            it("Should be able to get email from the getEmail method", () => {
                const value = "abc@test.com";
                const emp = new Employee("rima", 1, value);
                expect(emp.getEmail()).toBe(value);
            });
        });

        describe("getRole", () => {
            it("Should be able to add a new employee", () => {
                const value = "Employee";
                const emp = new Employee("rima", 1, "abc@test.com");
                expect(emp.getRole()).toBe(value);
            });
        });
    });
});