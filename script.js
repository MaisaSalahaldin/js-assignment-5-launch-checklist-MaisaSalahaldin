// Write your JavaScript code here!



window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse= myFetch() ;
   console.log("hi")
   listedPlanetsResponse.then(function (result) {
    
       listedPlanets = result;//json
       console.log("hello"+listedPlanets)
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
     let planet= pickPlanet(listedPlanets)
       addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
    })
   

   let form = document.querySelector("form");
 
   form.addEventListener("submit", function(event) {
       event.preventDefault();
       let pilotInput = document.querySelector("input[name=pilotName]");
       let pilot = pilotInput.value;

       let copilotInput = document.querySelector("input[name=copilotName]");
       let copilot = copilotInput.value;

       let fuelInput = document.querySelector("input[name=fuelLevel]");
       let fuelLevel = fuelInput.value;

       let cargoInput = document.querySelector("input[name=cargoMass]");
       let cargoLevel = cargoInput.value;
       let list = document.getElementById("faultyItems");
       formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
       preventDefault();
   });

});