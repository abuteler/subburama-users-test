const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000

class User {
  constructor(name, age, happy, healthy, busy) {
    this.name = name
    this.age = age
    this.happy = happy
    this.healthy = healthy
    this.busy = busy
  }
}

const users = []
users.push(new User('joe', 20, true, true, true))
users.push(new User('jane', 30, true, true, true))
users.push(new User('harry', 40, true, true, true))
users.push(new User('moe', 50, true, true, true))

const attrs = ['name', 'age', 'happy', 'healthy', 'busy']

app.use(cors({
  origin: 'http://localhost:3000'
}))

app.get('/user-attributes', (req, res) => {
  res.send(JSON.stringify(attrs))
})

app.get('/users', (req, res) => {
  console.log(req)
  const list = users.filter((name, index) => {
    console.log(name, index)
    return true
  })
  res.send(JSON.stringify(list))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
