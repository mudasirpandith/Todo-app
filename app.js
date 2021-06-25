const express =require ('express');
const bodyParser=require('body-parser');
const app=express ();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))
var items=[];
app.get('/',(req,res)=>{
var today=new Date()
 
 // console.log(today)

 var options={
   weekday: "long",
   day: "numeric",
   month: "long"
 }
 var day=today.toLocaleDateString("en-US",options)
  
  res.render('lists',{kind:day,items:items})
  
 
});

app.post('/',(req,res)=>{
   var item=req.body.todo;
   items.push(item);
   res.redirect('/');
})

app.listen(7300,function(){
  console.log("http://localhost:7300");
});