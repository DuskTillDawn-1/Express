
const express = require('express')
const app = express()
const port = 3000
const path = require('path');

const checkTime = function (req, res, next) {
    const d = new Date("March 10, 2023 10:13:00");
    let hour = d.getUTCHours();
    let day = d.getUTCDay();

console.log(day)

if(hour <9  || hour > 17 || day > 5){
    res.send("closed")
}
    next()
  }
  
app.use(checkTime)

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '/home.html'));
})

app.get('/service', (req, res) => {
    res.sendFile(path.join(__dirname, '/services.html'));
})

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '/contact.html'));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})