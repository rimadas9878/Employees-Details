const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    describe("Initialization", () => {
        it("Should be able to display GitHub value", () =>{
            const value = "abc@git.com";
            const eng = new Engineer("rima", 1, "abc@test.com",value);
            expect(eng.gitHub).toBe("value");
        });

        describe("getgitHub", () => {
            it("Should be able to get gitHub Url", () => {

                const value = "abc@git.com";
                const emp = new Employee(value);
                expect(emp.getgitHub()).toBe(value);
            });
        });

        describe("getRole", () => {
            it("Should be able to add content as per role", () => {
                const value = "Engineer";
                const emp = new Engineer("rima", 1, "abc@test.com", "abc@git.com");
                expect(emp.getRole()).toBe(value);
            });
        });

    });
});