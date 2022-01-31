const controller = require("./staff-controller")

module.exports = function(staff){

    //mount express static
    staff.use("/design", express.static(__dirname + "/views"))

    //list of routes for staff
    staff.route("/").get(controller.home)

}