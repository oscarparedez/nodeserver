const { spawn } = require('child_process')
const express = require('express')
const app = express()
const port = process.env.PORT || 8000
app.use(express.static(__dirname + '/projects'))

app.get('/calculator', (req, res) => {
  res.sendFile(__dirname + '/projects/calculator/index.html')
})

app.get('/githubpagesreplica', (req, res) => {
  res.sendFile(__dirname + '/projects/githubpagesreplica/index.html')
})

app.get('/maze', (req, res) => {
  res.sendFile(__dirname + '/projects/maze/index.html')
})

app.get('/mazeG', (req, res) => {
  const maze = spawn('python', [
    __dirname + '/projects/maze/maze.py',
    req.query.type,
    req.query.w,
    req.query.h,
  ])

  maze.stdout.on('data', (data) => {
    res.send(JSON.parse(data))
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

