
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
        console.log(error);
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
        console.log(response);
       
        let str = JSON.stringify(trails);
        localStorage.setItem("returnedTrails", str);

       
       
       
       
       
       
        //  //create a `div` container
        // var container = $(`<div>`, {class: `container`});

        // trails.forEach(function(trail){
        // //create an UL for each item on array
        // var trailCard = $(`<ul>`);
        // container.append(trailCard);


        // //create list items for each UL
        // var nameItem = $(`<li>`,{text:`Trail Name: ${trail.name} ` });
        // var locationItem = $(`<li>`, {text: `Location: ${trail.location}`});
        // var lengthItem = $(`<li>`, {text: `Length: ${trail.length} miles`});
        // var difficultyItem = $(`<li>`, {text: `Difficulty: ${trail.difficulty}`});
        // var starsItem = $(`<li>`, {text: `${trail.stars} stars`});



        // //appends li to ul
        // trailCard.append(nameItem);
        // trailCard.append(locationItem);
        // trailCard.append(lengthItem);
        // trailCard.append(difficultyItem);
        // trailCard.append(starsItem);

    // });

    // //append container to body of HTML
    // $(document.body).append(container);
});



}





