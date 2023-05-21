const express = require('express')

const app = express()

app.get('/', (req, res) =>
  res.send(`Express App running on ${process.env.PORT}`)
)

app.listen(process.env.PORT, () =>
  console.log(`Server running on ${process.env.PORT}`)
)
