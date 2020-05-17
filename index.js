
// To work with the api we will create a function that has the following parameters
// We need client, platform, and epicnickname(which is the shown user name)


// var allPlayers = [{name: “Ethan”, lastname: “Terrero”, age: 15, sister: “Laura”}, {name: “Kenneth”, lastname: “Terrero”, age: 12, sister: “Shannel”}];
// var names = [“ethan”, “laura”, “Ivonne”];
// function allCus(list){
//   console.log(“HIIIII”);
//   console.log(list[1]);
//   list.forEach(listItem => `My name is ` + listItem);;
// };
// allCus(names);

window.addEventListener(“load”, () => {
 // const onWindow = window.DOMContentLoaded;
const apiKey = {
  TRNApiKey: “2b60ad78-e4e3-43aa-aa3f-11fd4a502a1c”
};
 const key = “2b60ad78-e4e3-43aa-aa3f-11fd4a502a1c”;
 const platform = ‘xbl’;
 const platformUserIdentifier = “Lifeline”;
 // const platformUserIdentifier = “etzzzzz”;
 // const epicnickname = ‘Mixer Ship’;

// create a list of potential user identifyiers and like that we can show differnt cantds with different player information.

const playerIDList = [“TernK47", “Naghzz”, “nesposito”, “lifeline”, “Pathfinder”, “Wraith”, “Bloodhound”];

const proxy = “https://cors-anywhere.herokuapp.com/”;
// const api = `${proxy}https://api.fortnitetracker.com/v1/profile/${platform}/${epicnickname}`;
const newApiRequest = `${proxy}https://public-api.tracker.gg/v2/apex/standard/profile/${platform}/${platformUserIdentifier}`
const activeChallenges = `${proxy}https://api.fortnitetracker.com/v1/challenges`;


// function theResponse(response){
//   console.log(“getting stats of ”  + platformUserIdentifier);
//   let jsonObject = JSON.parse(response);
//   //example of getting data from api
//   console.log(“Name: ” + jsonObject);
//   // console.log(“Wins: ” + jsonObject.totals.wins);
//   // console.log(“Kills: ” + jsonObject.totals.kills);
//   // console.log(“K/D: ” + jsonObject.totals.kd);
//   // console.log(“Matches: ” + jsonObject.totals.matchesplayed);
//   // console.log(“Winrate: ” + jsonObject.totals.winrate + “%”);
// };
//
// /*  sending XMLHHttpRequest api  */
// function httpRequestAsync(newApiRequest, callback){
//   var httpRequest = new XMLHttpRequest();
//   httpRequest.onreadystatechange = () => {
//     if (httpRequest.readyState == 4 && httpRequest.status == 200)
//     callback(httpRequest.responseText);
//   }
//   httpRequest.open(“GET”, newApiRequest, true);
//   httpRequest.send();
// };
//
// theResponse()




 //TESTING ...
 const xhttp = new XMLHttpRequest();
 xhttp.open(‘GET’, newApiRequest, true);
 xhttp.setRequestHeader(‘Access-Control-Allow-Origin’, ‘*’);
 xhttp.setRequestHeader(‘Access-Control-Allow-Headers’, ‘*’);
 xhttp.setRequestHeader(‘Access-Control-Allow-Methods’, ‘*’);

 xhttp.setRequestHeader(‘TRN-Api-Key’, key);
 // console.log({key})
 // xhttp.responseType = “application/json”;
 // let response = xhttp.send();

xhttp.send();
 // console.log({response});


fetch(newApiRequest)
.then(response => {
  return response.json();
})
.then(data => {
    console.log(data);
    const {platformInfo, segments } = data.data;
    console.log(platformInfo);
    console.log(segments)
  });

  // function two(data){
  //   console.log(data.segment);
  // }
  // two(data);

 console.log(“loading...“);
});


// ************INSTRUCTIONS******
// Create a loop that allows us to go through the list of users [the array] and set the user for each of the requests we will send.
// Create a delay function that allows us to send a request every minute for different users.
