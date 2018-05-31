// HIKING Project API

function trailInfo(location){
//pull out lat and long into var
var latitude = location.lat;
var longitude = location.lng;
//pass into URL


var URL = `https://www.hikingproject.com/data/get-trails?lat=${latitude}&lon=${longitude}&maxDistance=10&key=200279512-8622afc34220d6d5684c57d9ed7c0eb5`


$.get(URL)

.then(function(response){
    // console.log(response);
    //grab trails from respinse
    var trails = response.trails;
  
    //create a `div` container
    var container = $(`<div>`, {class: `container`});

    trails.forEach(function(trail){
        //create an UL for each item on array
       var trailCard = $(`<ul>`);
       container.append(trailCard);


        //create list items for each UL
        var nameItem = $(`<li>`,{text:`Trail Name: ${trail.name} ` });
        var locationItem = $(`<li>`, {text: `Location: ${trail.location}`});
        var lengthItem = $(`<li>`, {text: `Length: ${trail.length} miles`});
        var difficultyItem = $(`<li>`, {text: `Difficulty: ${trail.difficulty}`});
        var starsItem = $(`<li>`, {text: `${trail.stars} stars`});



        //appends li to ul
        trailCard.append(nameItem);
        trailCard.append(locationItem);
        trailCard.append(lengthItem);
        trailCard.append(difficultyItem);
        trailCard.append(starsItem);

});

    //append container to body of HTML
    $(document.body).append(container);
});



}
//call the function
trailInfo();



//do i need to change <p> tag to list item?


