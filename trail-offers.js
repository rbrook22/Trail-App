 
//  Trail Offers Page

$(document).ready(function (){
   var trailArr = JSON.parse(localStorage.getItem(`returnedTrails`));
   console.log (trailArr);

   weatherInfo(trailArr);
   display(trailArr);

//    localStorage.removeItem(`returnedTrails`);

});


    



 
function display(trails){
    //create a `div` container
        var container = $(`<div>`, {class: `container`});

        trails.forEach(function(trail){
        var trailCardDiv = $(`<div>`, {id: `trail-card-div`});
        

        //create an UL for each item on array
        var trailCard = $(`<ul>`, {class: `trail-list`});
        container.append(trailCardDiv);
        
        trailCardDiv.append(trailCard);
    
        //create list items for each UL

        var nameItem = $(`<li>`,{text:`Trail Name: ${trail.name} ` });
        var locationItem = $(`<li>`, {text: `Location: ${trail.location}`});
        var lengthItem = $(`<li>`, {text: `Length: ${trail.length} miles`});

        var difficulty = trail.difficulty
            if(difficulty === "green"){
            difficulty= "Easy";
            }
            else if( difficulty === "greenBlue"){
                difficulty = "Easy/Moderate";
            }
            else if( difficulty === "blue"){
                 difficulty = "Moderate";
            }
            else if(difficulty === "blueBlack"){
                difficulty = "Moderate/Hard"
            }
             else if( difficulty=== "black"){
                difficulty= "Hard";
            }
          

        var difficultyItem = $(`<li>`, {text: `Difficulty: ${difficulty}`});
        
        var starsItem = $(`<li>`, {text: `${trail.stars} stars`});
        
    
        //appends li to ul
     
        trailCard.append(nameItem);
        trailCard.append(locationItem);
        trailCard.append(lengthItem);
        trailCard.append(difficultyItem);
        trailCard.append(starsItem);

       
        //pull out image
        
        var imgBackground = trail.imgMedium;
        if (trail.imgMedium === ""){
            imgBackground = 'imgs/hiking.png'
        }

        //assigns pulled out image as background image
        trailCardDiv.css(`background-image`, `url(${imgBackground})`);   
        //add class that rick makes for each div 

    });
        


    //append container to body of HTML
    $(document.body).append(container);

};

 

    function weatherInfo(array){
        var latitude2 = array[0].latitude;
        var longitude2 = array[0].longitude;

        var weatherAPI = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude2}&lon=${longitude2}&units=imperial&APPID=865f583ab7e2e42228c051145a844358`;
        
        $.get(weatherAPI)  
        
        .then(function(data){
            //create a weather div
            var weatherContainer = $(`<div>`, {class: `weather-container`});
            //create variable tp hold weather info 
            var icon = data.weather[0].icon;
            var city = data.name;
            var temperature = data.main.temp;
            var description = data.weather[0].description;

           //create p container
           var weatherCard = $(`<p>`, {text: `The current temperature in ${city} is ${temperature} degrees(F) with ${description}.`});

            
            weatherContainer.append(weatherCard);
       
            $(document.body).append(weatherContainer);
           
        })
        //append div to body
        
        }
    
