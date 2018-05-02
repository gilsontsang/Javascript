// Objects nested inside Arrays

var movieDB = [
	{name: "In Bruges",
	rating: 5,
	hasWatched: true
	},
	{name: "Frozen",
	rating: 4.5,
	hasWatched: false
	},
	{name: "Mad Max Fury Road",
	rating: 5,
	hasWatched: true
	},
	{name: "Les Miserables",
	rating: 3.5,
	hasWatched: false
	}
]


// Using 'for' loop to console.log


for (var i=0; i<movieDB.length; i++) {
	if (movieDB[i].hasWatched === true) {
		console.log("You have watched \"" + movieDB[i].name + "\" - " + movieDB[i].rating + " stars"); 
	}
	else {
		console.log("You have not seen \"" + movieDB[i].name + "\" - " + movieDB[i].rating + " stars"); 
	}
}

// Using 'forEach' loop to console.log


movieDB.forEach(function(names) {
	var result = "You have ";
	if (names.hasWatched){
		result += "watched ";
	}
	else {
		result += "not seen ";
	}
	result += "\"" + names.name + "\" - ";
	result += names.rating + " stars";
	console.log(result)
	}
)
