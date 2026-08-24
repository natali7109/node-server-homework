const fs = require('fs')
const path = require('path')

const usersPath = path.join(__dirname, '../data/users.json')

function getUsers() {
  const data = fs.readFileSync(usersPath, 'utf8')
  return JSON.parse(data)
}

module.exports = { getUsers }