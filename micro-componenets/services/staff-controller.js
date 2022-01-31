var controller = {
    home : function(req, res){
        if(req.session.login)
        {
            //res.send("Login available at staff home")
            res.render("staff-home", {title : "Staff Home Page"})
        }
        else{
            //res.send("No login available")
            res.render("staff-login", {title : "Staff Login Page"})
        }
    }

}

module.exports= controller