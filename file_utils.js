const fs = require("fs");

const data = fs.readFileSync("./data/test_data.txt", { encoding: 'utf8', flag: 'r' })
  .toString()
  .split('\r\n')

data.map(item => item.trim())
console.log(data)
