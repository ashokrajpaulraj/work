const {Client} = require("pg") //module - postgres

const client = new Client({
    host: "localhost",
    database : "Test1",
    port : 5432,
    user : "postgres",
    password : "admin"
})

//connect
client.connect()

//create a new table
/*
var sql = "create table subject( name varchar(200), maxmark int, color varchar(100) ) ";
client.query( sql, function(err, result){
    if(err)
    {
        console.log("err in table creation")
        return
    }
    console.log("Table created successfully")
} )


//inserting data into the table subject
var query = "insert into subject (name, maxmark, color) values ('Social', '200', 'Yellow') "
client.query(query, function(err, result){
    if(err)
    {
        console.log("err in inserting")
        return
    }
    console.log("Row inserted successfully")
})
*/

//selecting the data from the table subject
var selectQuery = "select * from subject"
client.query(selectQuery, function(err, result){
    if(err)
    {
        console.log("Err in select query")
        return
    }
    if( result.rowCount > 0 )
    {
        //console.log("Result : ", result.rows)
        for( var tempRow of result.rows )
        {
            console.log(tempRow)
            console.log("*****************")
        }
    }
    else{
        console.log("No information is retrieved")
    }
})