const search = require("./index")

const mockDb = ["Hendricks2", "Bombay Sapphire2", "Beefeater2", "Finsbury2", "Opera2", "Gin Mare2", "Monkey2"]

it("this is my first test", () => {
    expect("hello").toEqual("hello")
    search(mockDb, "Bomb")
})


it("Search with empty result", () => {
    expect(search(mockDb, "zzz")).toEqual([])
   
})

it("Search with Bombay keyword, expected non empty array as a result", () => {
    expect(search(mockDb, "Bombay")).toEqual(["Bombay Sapphire2"])
   
})

it("Search with Opera keyword, expected non empty array as a result", () => {
    expect(search(mockDb, "Op")).toEqual(["Opera2"])
})


