//express, cookie-parser
const express = require("express")
const cookierParser = require("cookie-parser")
var port = 3001

//simple cookie
var user1 = {
    name : "Yash",
    age : 25
}

var user2 = {
    name : "Ashwath",
    age : 24
}

//multiple information
var players = { "players" : [
    {"name" : "Kohli", "age" : 30},
    {"name" : "R Sharma", "age" : 31},
    {"name" : "Dhonie", "age" : 40},
    {"name" : "Raina", "age" : 30},
    {"name" : "Pandey", "age" : 30},
]}

var searchTitle = "book movie ticket for multiverse"

//creting server
var app = express()

//mounting
app.use(cookierParser())

//route
app.get("/", function(req, res){
    res.send("Welcome to cookie management")
})

app.get("/add", function(req, res){
    //we are going to cookie to the browser
    res.cookie("userData1", user1) //cookieName, cookieValue
    res.cookie("userData2", user2) //cookieName, cookieValue
    res.cookie("searchTitle", searchTitle) //cookieName, cookieValue
    res.cookie("odiTeam", players, {expire : 5000 + Date.now()}) //cookieName, cookieValue
    res.send("Cookie created")
})

app.get("/get", function(req, res){
    //reading the cookies information from the browser
    res.send(req.cookies["odiTeam"])

})

app.get("/delete", function(req, res){
    //delete the cookies from browser
    res.clearCookie("userData")
    res.send("cookie cleared")
})

app.listen(port, function(err){
    if(err)
    {
        console.log("Err in starting the server")
        return
    }
    console.log("server started at port : ", port)
})