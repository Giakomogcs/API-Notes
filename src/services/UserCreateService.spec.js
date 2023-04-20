const UserCreateService = require("./UserCreateService")
const UserRepositoryInMemory = require("../repositories/UserRepositoryInMemory");

describe("UserCreateService", () => {

  it("User should be create", async() => {
    const user = {
      name: "Giovani",
      email: "gigi@gmail.com",
      password: "123"
    };
  
    const userRepositoryInMemory = new UserRepositoryInMemory()
    const userCreateService = new UserCreateService(userRepositoryInMemory)
    const userCreated = await userCreateService.execute(user)
  
    expect(userCreated).toHaveProperty("id")
  
  });

  it("Another test", () => {
    expect(1).toBe(1)
  });
})

describe("NotesCreateService", () => {
  it("some test for Notes", ()=>{
    expect(1).toBe(1)
  })
})
