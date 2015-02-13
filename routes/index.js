// RECEIVING USERNAME & PASSWORD DATA
var data = require('../public/js/data.json');

// MAIN FUNCTION - RENDERS/SHOWS HTML
exports.view = function(req, res){
	res.render('index', {
		'meal':[ 
		{
			'name':'hi',
		'image': 'junk1.png',
		'id': 'meal'
		},
		{
			'name':'ho',
			'image': 'junk2.png',
			'id': 'meal'
		},
		{
			'name':'he',
			'image': 'junk2.png',
			'id': 'meal'

		}

	]});
};

