const http = require('http')
const url = require('url')
const { getUsers } = require('./modules/users')

const hostname = '127.0.0.1'
const port = process.env.PORT || 3003

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true)
  const query = parsedUrl.query
  const keys = Object.keys(query)

  // 1. Без параметров → Hello, World!
  if (keys.length === 0) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello, World!')
    return
  }

  // 2. Параметр hello
  if ('hello' in query) {
    const name = query.hello
    if (name && name.trim() !== '') {
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/plain')
      res.end(`Hello, ${name}.`)
    } else {
      res.statusCode = 400
      res.setHeader('Content-Type', 'text/plain')
      res.end('Enter a name')
    }
    return
  }

  // 3. Параметр users
  if ('users' in query && keys.length === 1) {
    try {
      const users = getUsers()
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(users))
    } catch (err) {
      res.statusCode = 500
      res.setHeader('Content-Type', 'text/plain')
      res.end('Server error')
    }
    return
  }

  // 4. Другие параметры → 500
  res.statusCode = 500
  res.setHeader('Content-Type', 'text/plain')
  res.end()
})

server.listen(port, hostname, () => {
  console.log(`Сервер запущен по адресу http://${hostname}:${port}/`)
})
