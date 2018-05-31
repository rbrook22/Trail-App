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
        console.log(error);
    })

}
var locationForm=document.getElementById('location-form');
locationForm.addEventListener("submit", geoLocationCode);


