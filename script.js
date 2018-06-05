
// HIKING Project API





//submit button
var locationForm=document.getElementById('location-form');
locationForm.addEventListener("submit", geoLocationCode);

//function to get geocode
function geoLocationCode(event){
    event.preventDefault();
    var location = document.getElementById('location-input').value;   //gets the value from input field
    $.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyD5XrrqpfdzbKeFRmqQ1CpQuc0VzHxXZsU`)
    .then(function(response){
        console.log(response);
       
            var results = response.results;
            return results[0].geometry.location;
        
     
    })
    .then(trailInfo)  
    
    .catch(function(error){
        window.alert("Please enter the zipcode or the city for your search!");
    })

}

//function to pull out lat and long into variable and pass in trailInfo API
function trailInfo(location){

    var latitude = location.lat;
    var longitude = location.lng;

//pass into URL
    var URL = `https://www.hikingproject.com/data/get-trails?lat=${latitude}&lon=${longitude}&maxDistance=10&key=200279512-8622afc34220d6d5684c57d9ed7c0eb5`

    

    $.get(URL)

   
    .then(function(response){
        // console.log(response);
        //grab trails from respinse
        var trails = response.trails;
      console.log(trails.length);
      if(trails.length === 0){
        console.log("working");
        window.alert("Location is outside the United States of America");
   
    } else{
      
       //Turns returned Object into String for localstorage
        let str = JSON.stringify(trails);
        localStorage.setItem("returnedTrails", str);
        window.location.href ="trail-offers.html";
    }
       
       });
    
        
       //change window to next page
    
       
}




 









