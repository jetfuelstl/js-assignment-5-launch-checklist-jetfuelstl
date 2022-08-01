// Write your JavaScript code here!
//const { validateInput, formSubmission } = require("./scriptHelper");
//const { formSubmission, validateInput } = require("./scriptHelper");
//const { formSubmission } = require("./scriptHelper");
//const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {

    formSubmission(document);

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   
   let listedPlanetsResponse = myFetch();

  // console.log(listedPlanetsResponse) test
  form.addEventListener("submit", function(event){
    event.preventDefault() 


    let form = document.querySelector("form")

  let list = document.getElementById('faultyItems')
   let pilot = document.querySelector('input[name="pilotName"]').value; 
   let copilot = document.querySelector('input[name="copilotName"]').value;
   let fuelLevel = document.querySelector('[name="fuelLevel"]').value;
   let cargoLevel = document.querySelector('[name="cargoMass"]').value;

  formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)

  } )

   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       console.log(listedPlanetsResponse);

       //pick planet 
       let selectPlanet = pickPlanet(listedPlanets);
       // test console.log(selectPlanet);
       addDestinationInfo(document, selectPlanet.name, selectPlanet.diameter, selectPlanet.star, 
        selectPlanet.distance, selectPlanet.moons, selectPlanet.image );

   })

});


   //gonna move this to script helper to trouble shoot faulty items 
   //let button = document.getElementById("formSubmit");
  // let form = document.querySelector("form")
    
   
  
  


