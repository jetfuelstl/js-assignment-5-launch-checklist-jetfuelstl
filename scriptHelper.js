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

};


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    //let form = document.queryselector('form')
 
    // if (validateInput(pilot) == 'Empty' || (validateInput(pilot)) === "Is a number" || validateInput(copilot) === 'Empty' || (validateInput(copilot)) === "Is a number" || validateInput(fuelLevel) === 'Empty' 
    //         || validateInput(cargoMass) === 'Empty' || validateInput(cargoMass) === "Not a Number" || validateInput(fuelLevel === "Not A Number")){
    //         alert('All fields are require proper entries.');

            if (validateInput(pilot) == 'Empty'|| validateInput(copilot) === 'Empty' || validateInput(fuelLevel) === 'Empty' || validateInput(cargoMass) === 'Empty' || validateInput(fuelLevel === "Not A Number")){
            alert('All fields are require proper entries.');
                 
            }
             else if (validateInput(pilot) === 'Is a Number' || validateInput(copilot) === 'Is a Number' || validateInput(fuelLevel) === 'Not a Number' || validateInput(cargoMass) === 'Not a Number') {
              alert('Please enter valid information for each field');
             }
             else {
                 document.getElementById('pilotStatus').innerHTML = `Pilot ${pilot} is ready.`;
                 document.getElementById('copilotStatus').innerHTML = `CoPilot ${copilot} is Ready`
 
                 if (fuelLevel <= 10000) {
 
                     list.style.visibility = 'visible';
                     launchStatus.style.color = 'red';
                     document.getElementById('fuelStatus').innerHTML = 'Fuel Level is too low for Launch.';
                     document.getElementById('cargoStatus').innerHTML = 'Cargo mass low enough for launch.';
                     document.getElementById('launchStatus').innerHTML = 'Shuttle is not ready for launch.';
                     
                 }
                 if (cargoMass > 10000) {
                     list.style.visibility = 'visible';
                     launchStatus.style.color = 'red';
                     document.getElementById('fuelStatus').innerHTML = 'Fuel Level is high enough for Launch.';
                     document.getElementById('cargoStatus').innerHTML = 'Cargo mass is too heavy for launch.';
                     document.getElementById('launchStatus').innerHTML = 'Shuttle is not ready for launch.';
                 }
                 if (cargoMass > 10000 && fuelLevel < 10000) {
                     list.style.visibility = 'visible';
                     launchStatus.style.color = 'red';
                     document.getElementById('fuelStatus').innerHTML = 'Fuel Level is too low for Launch.';
                     document.getElementById('cargoStatus').innerHTML = 'Too much cargo for launch.';
                     document.getElementById('launchStatus').innerHTML = 'Shuttle is not ready for launch.'
                 }
                 if (cargoMass < 10000 && fuelLevel > 10000) {
                     list.style.visibility = 'visible';
                     launchStatus.style.color = 'green';
                     document.getElementById('cargoStatus').innerHTML = 'Cargo acceptable mass for launch.';
                     document.getElementById('launchStatus').innerHTML = 'Shuttle is ready for launch!'
                 }
 
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
            
            //module.exports.addDestinationInfo = addDestinationInfo;
            //module.exports.validateInput = validateInput;
            //module.exports.formSubmission = formSubmission;
            //module.exports.pickPlanet = pickPlanet; 
            //module.exports.myFetch = myFetch;
            