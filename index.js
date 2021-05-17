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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

