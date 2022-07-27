// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let inputName = document.getElementById('missionTarget');
   inputName.innerHTML = `

            <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="imageUrl"> `;
                //

//not sure how to call on an image, were the image is variable data like the other parameters?

}
function validateInput(testInput) {
    let input =  Number(testInput) //Number is in js
    if (testInput === "" ) {
         return "Empty";
    } else if (isNaN(input)) { //returns true 
         return "Not A Number";  
    } else if (!isNaN(input)) {
        return "Is A Number"
    }  
}



function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
 let launchStatus = document.getElementById('launchStatus')  

let pilotStatus = document.getElementById("pilotStatus")
    pilotStatus.innerHTML = `pilot ${pilot} ready`

let copilotStatus = document.getElementById("copilotStatus")
    copilotStatus.innerHTML = `copilot ${copilot} ready`

let fuelStatus = document.getElementById("fuelStatus")
if (fuelLevel < 10000 ) {
    fuelStatus.innerHTML = "Fuel level too low for launch." 
    faultyItems.style.visibility = "visable";
    launchStatus.style.color = red 
    launchStatus.innerHTML = "Shuttle not ready for launch"
}

// let cargoLevel = document.getElementById("cargoMass") 

if (cargoLevel > 10000) { 
    cargoLevel.innerHTML = "Too much cargo." 
    faultyItems.style.visibility = "visable";
    launchStatus.style.color = red 
    launchStatus.innerHTML = "Shuttle not ready for launch"
} else if (cargoLevel <= 10000 && fuelLevel > 10000 ) { 
    launchStatus.innerHTML = "Shuttle ready for launch"
    launchStatus.style.color = green 
    faultyItems.style.visibility = "visable" 
}


}




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

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
