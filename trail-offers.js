 
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

        //name link
        var nameLink = `<a href="https://www.hikingproject.com/widget?v=3&map=1&type=trail&id=${trail.id}&x=-11720595&y=4863264&z=6">Trail Name: ${trail.name}</a>`;
        var nameItem = $(`<li>`);
        nameItem.append(nameLink);
        //location
        var locationItem = $(`<li>`, {text: `Location: ${trail.location}`});
        //length
        var lengthItem = $(`<li>`, {text: `Length: ${trail.length} miles`});
        // diffculty
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
        
        //stars
        // var starsItem = $(`<li>`, {text: `${trail.stars} stars`});
        var starItem = $(`<li>`, {
            // text: `${trail.stars}`,
            class: `starItem`
        });

        starsDynamicDivs(trail.stars, starItem);

        var id = $(`<li>`, {
            text: `id: ${trail.id}`
        });
    
        //appends li to ul
     
        trailCard.append(nameItem);
        trailCard.append(locationItem);
        trailCard.append(lengthItem);
        trailCard.append(difficultyItem);
        trailCard.append(starItem);

       
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
    console.log('hey')
};

//function to draw stars
function starsDynamicDivs(rating, starItem) {
    var divRating = $(`<div>`, {
        class: `${rating}`
    });
    var divOuterStar;
    var divInnerStar;
    console.log(rating)
    for (var i = 1; i <= Math.floor(rating); i++) {
        divOuterStar = $(`<div>`, {
            class: `stars-outer fa fa-star`
        });
        divInnerStar = $(`<div>`, {
            class: `star star-inner`
        });
        divRating.append(divOuterStar.append(divInnerStar));
    }
    var width = rating - Math.floor(rating);
    // console.log(width);
    var starPercentageTwoDecimals = parseFloat((width.toFixed(2))*100);
    var divOuterStarLast = $(`<div>`, {
        class: `stars-outer fa fa-star`
    });
    var divInnerStarLast = $(`<div>`, {
        class: `star star-inner`,
         });
    
    divOuterStarLast.css('transform',`scale(0.${starPercentageTwoDecimals})`);
    divRating.append(divOuterStarLast.append(divInnerStarLast));
    

    starItem.append(divRating);
}

    
//function to get weather info
function weatherInfo(array){
    var latitude2 = array[0].latitude;
    var longitude2 = array[0].longitude;

    var weatherAPI = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude2}&lon=${longitude2}&units=imperial&APPID=865f583ab7e2e42228c051145a844358`;
    
    

     $.get(weatherAPI).then(function(data){
         console.log(data);
        //create a weather div
       
        var weatherContainer = $(`<div>`, {class: `weather-container`});
        //create variable tp hold weather info 
        var icon = data.weather[0].icon;
        var city = data.name;
        var temperature = data.main.temp;
        var description = data.weather[0].description;
        //sunrise = new Date(data.sunrise * 1000);

       
       //create p container
       var weatherCard = $(`<p>`, {text: `The current temperature in ${city} is ${temperature} degrees(F) with ${description}.`});

        //append <p> to <div>
     
        weatherContainer.append(weatherCard);
        
        //append div to body
        $(document.body).append(weatherContainer);
        
   
    

   
    });
}

 
