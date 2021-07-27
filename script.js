window.addEventListener("load", function(){
 
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(responseJson) {
            responseJson.sort((a,b) => {
                return (b.hoursInSpace - a.hoursInSpace);
            });

            let countSection = document.getElementById("astronautCount");
            countSection.innerHTML = `Data on ${responseJson.length} astronauts available.`

            let astronautSection = document.getElementById("container");
            
            function colorDecision(activeSetting) {
                let colorChoice = "";
                if (activeSetting === true) {
                    colorChoice = "currentlyActive";
                };
                return colorChoice;
            }    

            for (let i=0; i < responseJson.length; i++) {
                astronautSection.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${responseJson[i].firstName} ${responseJson[i].lastName}</h3>
                            <ul>
                                <li>Hours in Space: ${responseJson[i].hoursInSpace}</li>
                                <li class="${colorDecision(responseJson[i].active)}">Active: ${responseJson[i].active}</li>
                                <li>Skills: ${responseJson[i].skills}</li>
                            </ul>
                        </div>
                        <img class="avatar" src="${responseJson[i].picture}"></img>
                    </div>
                `;
            };
        });
    });


});