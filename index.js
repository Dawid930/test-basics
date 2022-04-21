data = ["Hendricks", "Bombay Sapphire", "Beefeater", "Finsbury", "Opera", "Gin Mare", "Monkey"]

const search = (arr, word) => {
     const result = arr.filter(element => element.includes(word))
     
     return result.length > 5 ? result.slice(0, 5) : result
}

//console.log(search(data, "Hend"));

module.exports = search