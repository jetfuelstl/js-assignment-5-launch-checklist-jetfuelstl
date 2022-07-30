// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  // Here is the HTML formatting for our mission target div.

   let missionTarget = document.getElementById('missionTarget');

   missionTarget.innerHTML = `

            <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src=${imageUrl}> `;

}
function validateInput(testInput) {
    let input;

    if (testInput === "") {
        input = "Empty";
    } else if (isNaN(testInput)) {
        input = "Not a number";
    } else if (isNaN(testInput) === false) {
        input = "Is a number";
    };

    return input;
};



function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let list = document.getElementById('faultyItems')
    let launchStatus = document.getElementById("launchStatus")
    let faultyItems = document.getElementById("faultyItems")

    let pilotInput = document.querySelector('input[name="pilotName"]');
    let testPilot =  validateInput(pilotInput.value);
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotInput = document.querySelector("input[name=copilotName]");
    let testcopilot = validateInput(copilotInput.value);
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let testfuel = validateInput(fuelLevelInput.value);
    let fuelStatus = document.getElementById("fuelStatus");

    let cargoLevelInput = document.querySelector("input[name=cargoMass]");
    let testcargo = validateInput(cargoLevelInput.value);
    let cargoStatus = document.getElementById("cargoStatus");

    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault()}
    
let launchStatus = document.getElementById('launchStatus')  

let pilotStatus = document.getElementById("pilotStatus")
    pilotStatus.innerHTML = `pilot ${pilot} ready`

let copilotStatus = document.getElementById("copilotStatus")
    copilotStatus.innerHTML = `copilot ${copilot} ready`

let fuelStatus = document.getElementById("fuelStatus")
if (fuelLevel < 10000 ) {
    fuelStatus.innerHTML = "Fuel level too low for launch." 
    faultyItems.style.visibility = "visable";
    launchStatus.style.color = 'red' 
    launchStatus.innerHTML = "Shuttle not ready for launch"
}
// let cargoLevel = document.getElementById("cargoMass") 

if (cargoLevel > 10000) { 
    cargoLevel.innerHTML = "Too much cargo." 
    faultyItems.style.visibility = "visable";
    launchStatus.style.color = 'red' 
    launchStatus.innerHTML = "Shuttle not ready for launch"
} else if (cargoLevel <= 10000 && fuelLevel > 10000 ) { 
    launchStatus.innerHTML = "Shuttle ready for launch"
    launchStatus.style.color = 'green' 
    faultyItems.style.visibility = "visable" 
}


}
//}




async function myFetch() {

    let planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        return response.json()
    });

    return planetsReturned;
};

function pickPlanet(planets) {
    //random num
    let index = 0;
    index += Math.floor(Math.random() * 6 );
    return planets[index];
//return planet at random num
}

//module.exports.addDestinationInfo = addDestinationInfo;
//module.exports.validateInput = validateInput;
//module.exports.formSubmission = formSubmission;
//module.exports.pickPlanet = pickPlanet; 
//module.exports.myFetch = myFetch;


//if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || 
  //validateInput(cargoLevel) === "Empty" ) {
  //  alert("User left field empty"); 
 // } else if (validateInput(pilot) === "Is A Number" || validateInput(copilot) === "Is A Number" || validateInput(fuelLevel) === "Not A Number" || 
//  validateInput(cargoLevel) === "Not A Number") {
 //   alert("Incorrect field type");