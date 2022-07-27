// Write your JavaScript code here!

// const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   
   let listedPlanetsResponse = myFetch() ;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);

       let selectPlanet = pickPlanet(listedPlanets);
       console.log(selectPlanet);
       addDestinationInfo(document, selectPlanet.name, selectPlanet.diameter, selectPlanet.star, 
        selectPlanet.distance, selectPlanet.moons, selectPlanet.image );

//is this selectPlanet.imageURL? ATT TA how do have a variable image?

   })
   
});

