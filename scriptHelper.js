// Write your helper functions here!
//require('isomorphic-fetch');

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

    //let list = document.getElementById('faultyItems')
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
        event.preventDefault()
    
        if (testpilot === "Empty" || testpilot === "Is a number") {
            window.alert('whoopsies, please enter a valid pilot name');
            pilotStatus.innerHTML = `Pilot not ready!`
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = `Shuttle not ready for launch.`;
            launchStatus.style.color = "red";
        } else if (testcopilot === "Empty" || testcopilot === "Is a number") {
            window.alert('whoopsies, please enter a valid co-pilot name');
            copilotStatus.innerHTML = `Co-Pilot not ready!`
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = `Shuttle not ready for launch.`;
            launchStatus.style.color = "red";
        } else if (testfuel === "Empty" || testfuel === "Not a number") {
            window.alert('oopsies that is either not a number or blank');
            fuelStatus.innerHTML = `Invalid input.`
            faultyItems.style.visibility = "visible"
            launchStatus.style.color = "rgb(199, 37, 78)"
            launchStatus.innerHTML = `Shuttle not ready for launch.`
        } else if (testfuel === "Is a number" && Number(fuelLevelInput.value) < 10000) {
            fuelStatus.innerHTML = 'Fuel level too low for launch!'
            faultyItems.style.visibility = "visible"
            launchStatus.style.color = "red"
            launchStatus.innerHTML = `Shuttle not ready for launch.`
        } else if (testfuel === "Is a number" && Number(fuelLevelInput.value) >= 10000) {
            fuelStatus.innerHTML = `Fuel level high enough for launch`
        } else if (testcargo === "Empty" || testcargo === "Not a number") {
            window.alert("Please enter a valid cargo level.");
            cargoStatus.innerHTML = `Invalid input.`
            faultyItems.style.visibility = "visible";
            launchStatus.style.color = "red)";
            launchStatus.innerHTML = `Shuttle not ready for launch.`;
        } else if (testcargo === "Is a number" && Number(cargoLevelInput.value) > 10000) {
            faultyItems.style.visibility = "visible";
            cargoStatus.innerHTML = `Cargo mass too heavy for launch!`;
            launchStatus.innerHTML = `Shuttle not ready for launch.`;
            launchStatus.style.color = "red";
        } else if (testcargo === "Is a number" && Number(cargoLevelInput.value) < 10000 && Number(fuelLevelInput.value) >= 10000) {
            cargoStatus.innerHTML = `Cargo mass low enough for launch`
        } if (launchStatus.innerHTML !== "Shuttle not ready for launch.") {
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = `Shuttle ready for launch.`;
            launchStatus.style.color = "green";
            pilotStatus.innerHTML = `Pilot ${pilotInput.value} ready for launch!`
            copilotStatus.innerHTML = `Co-Pilot ${copilotInput.value} ready for launch!`


        }
    });
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