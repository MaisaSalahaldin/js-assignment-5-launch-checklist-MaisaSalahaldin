// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let targetMission=document.getElementById('missionTarget')
   targetMission.innerHTML=`
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name:${name} </li>
                    <li>Diameter:${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth:${distance} </li>
                    <li>Number of Moons:${moons} </li>
                </ol>
                <img src="${imageUrl}">
                `
   
}

function validateInput(testInput) {
    if(testInput===""){
        return "Empty";
       }
       else if(isNaN(Number(testInput))===false)
   return "Is a Number"
   else if(isNaN(Number(testInput)))
   return "Not a Number"
    
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   if(validateInput(pilot)==="Empty" || validateInput(copilot)==="Empty"
    || validateInput(fuelLevel)==="Empty" 
   || validateInput(cargoLevel)==="Empty"){
    alert("All Field Required!")
   }
   else if(validateInput(pilot)==="Is a Number" || validateInput(copilot)==="Is a Number" 
   || validateInput(fuelLevel)==="Not a Number" 
   || validateInput(cargoLevel)==="Not a Number"){
alert("Please enter valiad information ")

}
else{
let pilotStatus=document.getElementById('pilotStatus');
let copilotStatus=document.getElementById('copilotStatus');
let fuelStatus=document.getElementById('fuelStatus');
let cargoStatus=document.getElementById('cargoStatus');
let launchStatus=document.getElementById('launchStatus');

list.style.visibility = "visible";
pilotStatus.innerHTML= `Pilot ${pilot} is ready for launch`;
copilotStatus.innerHTML=`Co-pilot ${copilot} is ready for launch`;

if(fuelLevel<10000  && cargoLevel<=10000){
    list.style.visibility="visible";
    fuelStatus.innerHTML="There is  not enough fuel for the journey";
    cargoStatus.innerHTML="There is enough mass for the shuttle to take off";
    launchStatus.innerHTML="Shuttle not ready for launch";
    launchStatus.style.color="red";
}
else if(fuelLevel < 10000 && cargoLevel > 10000){
    list.style.visibility="visible";
    cargoStatus.innerHTML="There is too much mass for the shuttle to take off";
    fuelStatus.innerHTML="There is not enough fuel for the journey";
    launchStatus.innerHTML="Shuttle not ready for launch";
    launchStatus.style.color="red";

}
else if(fuelLevel > 10000 && cargoLevel > 10000){
    list.style.visibility="visible";
    cargoStatus.innerHTML="There is too much mass for the shuttle to take off";
    fuelStatus.innerHTML="There  enough fuel for the journey";
    launchStatus.innerHTML="Shuttle not ready for launch";
    launchStatus.style.color="red";

}
else {
    cargoStatus.innerHTML="There is enough mass for the shuttle to take off";
    fuelStatus.innerHTML="There  enough fuel for the journey";
    launchStatus.innerHTML="Shuttle is ready for launch";
    launchStatus.style.color="green";

}
    
}
}
async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        //planetsReturned=response.json();
        if (response.status >= 400) {
            throw new Error ("Bad response");
        }
        else {
            return response.json();
        }
    });
     
       


    return planetsReturned;
}

function pickPlanet(planets) {

    return planets[Math.floor(Math.random() * planets.length)];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
