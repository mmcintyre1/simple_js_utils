import { readFile } from 'fs'

readFile('.\\data\\test_data.txt', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})