const express = require('express');
const app = new express();

let loginDetails = [];

const monthNames=[
    {month:1,monthName:'Jan'},
    {month:2,monthName:'Feb'},
    {month:3,monthName:'Mar'},
    {month:4,monthName:'Apr'},
    {month:5,monthName:'May'},
    {month:6,monthName:'Jun'},
    {month:7,monthName:'Jul'},
    {month:8,monthName:'Aug'},
    {month:9,monthName:'Sep'},
    {month:10,monthName:'Oct'},
    {month:11,monthName:'Nov'},
    {month:12,monthName:'Dec'}
]
app.get("/",(req,res)=>{
    res.send("Welcome to the express server")
})

app.get("/loginDetails",(req,res)=>{
    res.send(JSON.stringify(loginDetails));
})

app.post("/login/:name",(req,res)=>{
    loginDetails.push({"name":req.params.name,"login_time":new Date()});
    res.send(req.params.name + ", You are logged in!")
})

app.get("/:name",(req,res)=>{
    res.send("Hello "+req.params.name)
})

app.get("/fetchMonth/:num",(req,res)=>{
    const monthNum=parseInt(req.params.num);
    if(monthNum <1 || monthNum >12) {
        res.send("Not a valid month number")
    } else {
        let filter_month=monthNames.filter((month)=> month.monthNum==monthNum);
        res.send(filter_month);
    }
})


//const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
/*app.get("/fetchMonth/:num",(req,res)=>{
    let num = parseInt(req.params.num);
    if(num <1 || num >12) {
        res.send("Not a valid month number")
    } else {
        res.send(months[num-1])
    }
})
*/
app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`)
})

