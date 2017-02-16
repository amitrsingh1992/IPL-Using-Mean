var express = require('express');
var path = require('path');
var morgan = require('morgan');
var app = express();
var user = require('./models/iplSchema'); 
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(cors());

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan('dev'));

app.post('/playerDataEntry',function(req,res){
try{
var data =user.findOneAndUpdate({teamName:req.body.teamName},{$push:{teamPlayer:{
	'playerName':req.body.playerName,
	'playerImage':req.body.playerImage,
	'playerRole':req.body.playerRole,
	'playerBattingStyle':req.body.playerBattingStyle,
	'playerBowlingStyle':req.body.playerBowlingStyle,
	'playerNationality':req.body.playerNationality,
	'playerDateOfBirth':req.body.playerDateOfBirth
}}},function(err,user){
	if(err)throw err;

	res.send(user);
});
}catch(e){
res.status(304).send("Player Data Entry failed");
}
})

app.post('/teamDataEntry',function(req,res){
try{
console.log(req.body)
var data =new user(req.body);
data.save(function(err,result){
if(err) throw err;
res.send(result);
})
}catch(e){
res.status(304).send("Team Data Entry failed");
}
})

/*
app.post('/signup',function(req,res){
try{
var data =new user(req.body);
data.save(function(err,result){
if(err) throw err;
res.send(result);
})
}catch(e){
res.status(304).send("Data failed");
}
});*/

app.get('/teamInfo',function(req,res){
try{
user.find({},'teamName teamImage teamCoach teamHomeVenue teamOwner teamCaptain', function(err, users) {
  if (err) throw err;
	if(users.length>0)
	res.send(users);
	else
	res.status(404).send("User Not found");
  // object of all the users
});

}catch(e){
console.log(e)
res.status(304).send("Data failed");
}
});

app.get('/playerInfo/:teamName',function(req,res){
try{
user.find({"teamName":req.params.teamName}, function(err, users) {
  if (err) throw err;
	if(users.length>0)
	res.send(users);
	else
	res.status(404).send("Player Data Not found");
  // object of all the users
});

}catch(e){
console.log(e)
res.status(304).send("Data failed");
}
});

/*
app.put('/update',function(req,res){
try{
user.findOneAndUpdate({ 'username': req.body.username }, { 'password': req.body.password }, function(err, users) {
  if (err) throw err;
if(users===null)
res.status(404).send("user not found");  	
else
res.send(users);  	
  // we have the updated user returned to us
  console.log('successfully saved::',users,"::");
});
}catch(e){
console.log(e)
res.status(304).send("Data failed");
}
});*/

var server = app.listen(8081, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
