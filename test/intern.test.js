const Intern = require('../lib/Intern');

describe("Intern", () => {
        it("Should be able to display the value entered for school", () =>{
            const value = "schoolValue";
            const intern = new Intern("rima", 1, "abc@test.com", value);
            expect(intern.school).toBe(value);
        });

        describe("getSchool", () => {
            it("Should be able to get the school value", () => {
                const value = "schoolValue";
                const intern = new Intern("rima", 1, "abc@test.com", value);
                expect(intern.getSchool()).toBe(value);
            });
        });

        describe("getRole", () => {
            it("Should be able to add content as per role", () => {
                const value = "Intern";
                const intern = new Intern("rima", 1, "abc@test.com", "schoolValue");
                expect(intern.getRole()).toBe(value);
            });
        });

    });