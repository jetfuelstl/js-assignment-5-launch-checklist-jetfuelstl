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

