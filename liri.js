require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var fs = require("fs");
var Spotify = require("node-spotify-api");


var input = process.argv;
var inputLength = process.argv.length - 2; 
var userInput = process.argv.slice(3).join(" ");; 



var topLine = "*****************************************\n"
var bottomLine = "\n*****************************************"

console.log("DEBUG: ***** WELCOME TO LIRI *****");
console.log("DEBUG: you have entered: " + input[2] + " and " + userInput);
console.log("DEBUG: You have this many inputs: " + inputLength);
appLogic(userInput)

//  ***** FUNCTIONS *****

function appLogic(args) {
    if (input[2] === "concert-this") {
       
        concertSearch(args);
    }
    if (input[2] === "spotify-this-song") {
        
        spotifySearch(args);
    }
    if (input[2] === "movie-this") {
       
        movieSearch(args);
    }
    if (input[2] === "do-what-it-says") {
       
        randomFile();
    }
};



function concertSearch(artist) {
    var venueName;
    var venueLocation;
    var concertDate;


   

    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
        .then(function (response) {
            venueName = response.data[0].venue.name;
            venueLocation = response.data[0].venue.city;
            concertDate = response.data[0].datetime;

        
            console.log(topLine);
            console.log("CONCERT INFORMATION FOR " + artist);
            console.log("NEXT EVENT: " + venueName);
            console.log("EVENT LOCATION: " + venueLocation);
            console.log("EVENT DATE: " + concertDate);
            console.log(bottomLine);


        }).catch(function (error) {
            console.log(error);
        });

}


function spotifySearch(song) {
    var userSong = song;
    var spotify = new Spotify(keys.spotify);


    if (!userSong) {
        userSong = "Lizzo"
    }



    spotify
        .search({ type: 'track', query: userSong })
        .then(function (response) {
         

           
            console.log(topLine);
            console.log("SONG NAME: " + response.tracks.items[0].name);
            console.log("ARTIST NAME: " + response.tracks.items[0].artists[0].name);
            console.log("ALBUM NAME: " + response.tracks.items[0].album.name);
            console.log("PREVIEW LINK: " + response.tracks.items[0].external_urls.spotify);

            console.log(bottomLine);
        })
        .catch(function (err) {
            console.log(err);
        });
};





function movieSearch(movie) {
    
    var movieInput = movie;

    if (!movieInput) {
        movieInput = "Mr. Nobody";
    }

    var queryUrl = "http://www.omdbapi.com/?t=" + movieInput + "&y=&plot=short&apikey=trilogy";

   

    axios.get(queryUrl).then(
        function (response) {
           
            console.log(topLine);
            console.log("MOVIE TITLE: " + response.data.Title);
            console.log("MOVIE YEAR: " + response.data.Year);
            console.log("IMDB RATING: " + response.data.Ratings[0].Value);
            console.log("ROTTEN TOMATOES RATING: " + response.data.Ratings[1].Value);
            console.log("PRODUCTION COUNTRY: " + response.data.Country);
            console.log("MOVIE LANGUAGE: " + response.data.Language);
            console.log("MOVIE CAST: " + response.data.Actors);
            console.log("MOVIE PLOT: " + response.data.Plot);
            console.log(bottomLine);
        });

}


function randomFile(butler) {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            console.log(error);
        }
        console.log(data);

        var fileInput = data.split(",");
        console.log(fileInput);

        
        var newCommand = "node liri.js " + fileInput[0] + " " + fileInput[1];

        console.log(topLine);
        console.log("DEBUG: BETA FEATURE NOT YET FULLY WORKING!")
        console.log("DEBUG: Command Generated: " + newCommand);
        console.log(bottomLine);
       
    });
}