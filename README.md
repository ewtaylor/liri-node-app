# liri-node-app

liri-node-app
LIRI is a _Language_ Interpretation and Recognition Interface.

What is it?
LIRI will be a command line node app that takes in parameters and gives you back data. 

It can:
1) Search concerts
2) Get song information
3) Pull information on a movie


Requirements:
1) Node.js
2) Run 'npm install' 
3) Working clone of the master branch of this repository
4) Valid Developer API keys
5) Usage

The available commands are below:
1) node liri.js concert-this <artist/band name here>
2) node liri.js spotify-this-song <artist/band name here>
3) node liri.js movie-this <movie title here>
4) node liri.js do-what-it-says

API's Used:
1) Spotify Web API: https://developer.spotify.com/documentation/web-api/
2) BandsInTown API: https://manager.bandsintown.com/support/bandsintown-api
3) OMDB API:http://www.omdbapi.com/

Screenshot:
ewtay@LAPTOP-RB063SQJ MINGW64 ~/Desktop/liri-node-app (master)
$ node liri.js concert-this tennis
DEBUG: keys loaded
DEBUG: ***** WELCOME TO LIRI *****
DEBUG: you have entered: concert-this and tennis
DEBUG: You have this many inputs: 2
*****************************************

CONCERT INFORMATION FOR tennis
NEXT EVENT: Madrid Theatre
EVENT LOCATION: Kansas City
EVENT DATE: 2020-02-25T19:00:00

*****************************************
