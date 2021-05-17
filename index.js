const express = require('express')
const app = express()
const port = process.env.PORT || 8000
app.use(express.static(__dirname + '/dist'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

