const express = require("express")
const session = require("express-session")
const bodyParser = require("body-parser")
var port = 3001
//creating a server
var app = express()

var student = express()
var staff = express()

//mount the body parser
app.use(bodyParser.urlencoded({
    extended: true
}))


//mount ejs
student.set("view engine", "ejs")
staff.set("view engine", "ejs")

//mounting the session
student.use(session({
    secret : "student",
    resave: true,
    saveUninitialized: true
}))

staff.use(session({
    secret : "staff",
    resave: true,
    saveUninitialized: true
}))

//mount the sub servers ontop of the main server
app.use("/student", student)
app.use("/staff", staff)

//rounting component
var staffRoutes = require("./services/staff-route")
staffRoutes(staff)

//start the main server
app.listen(port, function(err){
    if(err)
    {
        console.log("Err in app server start")
        return
    }
    console.log("App server started : ", port)
})