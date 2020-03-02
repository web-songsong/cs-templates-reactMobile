const fs = require('fs')
const api = require('./api')
function fromJSONFile(filename) {
  return (req, res) => {
    const data = fs.readFileSync(`mock/data/${filename}.json`).toString()
    const json = JSON.parse(data)
    return res.json(json)
  }
}
module.exports = Object.keys(api).reduce((o, val) => {
  o[val] = fromJSONFile(api[val])
  return o
}, {})
