// RECEIVING USERNAME & PASSWORD DATA
var data = require('../public/js/data.json');

// MAIN FUNCTION - RENDERS/SHOWS HTML
exports.view = function(req, res){
	res.render('index', {
		'meal':[ 
		{
			'name':'Burger and Fries',
			'time': '8:00 AM',
			'day' : 'Monday',
			'year': '2015',
			'month': 'February',
			'image': 'junk1.png',
			'mood' : 'happy',
			'type' : 'good',
			'desc' : 'It was awesome! Though it smelled like rat',
			'location' : 'In N Out',
			'id': 'meal'
		},
		{
			'name':'Meatballs',
			'time': '10:00 PM',
			'day' : 'Tuesday',
			'year': '2015',
			'month': 'February',
			'image': 'junk3.png',
			'mood' : 'sad',
			'type' : 'good',
			'desc' : 'It was not that great. The only reason why I got is because I was in a rush',
			'location' : 'Olive Garden',
			'id': 'meal'
		},
		{
			'name': 'Potatoes and Fish',
			'time': '17:00 PM',
			'day' : 'Friday',
			'year': '2015',
			'month': 'February',
			'image': 'junk2.png',
			'mood' : 'happy',
			'type' : 'good',
			'desc' : 'I felt like eating better. That led me to eating healthy today. It was not too bad to be honest',
			'location' : 'In N Out',
			'id': 'meal'

		}

	]});
};

