const Manager = require('../lib/Manager');

describe("Manager", () => {
   
        it("Should be able to display manager office number", () =>{
            const value = 12345;
            const manager = new Manager("rima", 1, "abc@test.com",value);
            expect(manager.officeNumber).toBe(value);
        });

        describe("getOfficeNumber", () => {
            it("Should be able to get phone number", () => {
                const value = 12345;
                const manager = new Manager("rima", 1, "abc@test.com", value);
                expect(manager.getOfficeNumber()).toBe(value);
            });
        });

        describe("getRole", () => {
            it("Should be able to add content as per role", () => {
                const value = "Manager";
                const manager = new Manager("rima", 1, "abc@test.com", 12345);
                expect(manager.getRole()).toBe(value);
            });
        });

    });