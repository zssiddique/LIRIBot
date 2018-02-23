require("dotenv").config();
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
const OmdbApi = require('omdb-api-pt');
//var omdbApi = require('omdb-client');
var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
const omdb = new OmdbApi(keys.omdb);

client.get('search/tweets', { q: 'node.js', count: '2' }, function (error, tweets, response) {
    console.log(error ||
        JSON.stringify(tweets, null, 2));
});


 spotify.search({ type: 'track', query: 'dancing in the moonlight', limit: '2' }, function (err, data) {
    console.log(err ||
        JSON.stringify(data, null, 2));
});


omdb.bySearch({
    search: 'House',
    type: 'series',
    year: '2004',
    page: 1
}).then(res => console.log(JSON.stringify(res, null, 2)))
    .catch(err => console.error(err));



/* var params = {
    apiKey: 'trilogy',
    query: 'Terminator',
    year: 2012
}
omdbApi.search(params, function (err, data) {
    console.log(err ||
        JSON.stringify(data, null, 2));
});
 */