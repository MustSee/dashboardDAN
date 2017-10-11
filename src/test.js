//import CleverAPI from 'clever-client';
var CleverAPI = require('clever-client');


var client = CleverAPI({
	"API_CONSUMER_KEY": "FAKE",
	"API_CONSUMER_SECRET": "FAKE",
	"API_HOST": "https://api.clever-cloud.com/v2",
	"API_OAUTH_TOKEN": "FAKE",
	"API_OAUTH_TOKEN_SECRET": "FAKE"
});

var orgaId = "orga_18c5168b-a5c6-4585-8284-71771abe434b";

console.log(client);

var req = client.organisations._.get().withParams([orgaId]).send();

req.onValue(function (orga) {
	console.log(orga);
});