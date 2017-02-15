var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/iplDbs');
var Schema = mongoose.Schema;

var iplSchema = new Schema({
	teamName : {type:String,index:true},
	teamImage : String,
	teamCoach: String,
	teamHomeVenue: String,
	teamOwner: String,
	teamCaptain : String,
	teamPlayer:[{
		playerName : String,
		playerImage : String,
		playerRole : String,
		playerBattingStyle : String,
		playerBowlingStyle : String,
		playerNationality  : String,
		playerDateOfBirth  : String		  
		}]
});
  	
var User = mongoose.model('IplSchema', iplSchema);

module.exports = User;
