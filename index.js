//const convert=require('string-to-binary');
// example: import convert from "string-to-binary" //the same as previous line

// import for the server
//const express = require('express')
import express from "express"
const app = express()
const port = 3000


app.get('/', (req, res) => {
    console.log(Date.now())
    console.log(res)
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
