// HIKING Project API

function trailInfo(event){



var URL = 'https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200279512-8622afc34220d6d5684c57d9ed7c0eb5'


$.get(URL)

.then(function(response){
    console.log(response);
    //grab trails from respinse
    var trails = response.trails;
    console.log(trails);
    //create a `div` container
    var container = $(`<div>`, {class: `container`});

    trails.forEach(function(trail){
        //create an UL for each item on array
       var trailCard = $(`<ul>`);
       container.append(trailCard);


        //create list items for each UL
        var nameItem = $(`<li>`,{text:`Trail Name: ${trail.name} ` });
        




        //appends li to ul
        trailCard.append(nameItem);



      

        // var location = trailitem.location;

        // var length = trailitem.length;

        // var difficulty = trailitem.difficulty;

        // var stars = trailitem.stars;





    

    // //name of trail
    // var name = trails[0].name;
    // var element = $('<p>', {text: `Trail Name: ${name}`});

    // //location
    // var location = trails[0].location;
    // var element2 = $('<p>', {text: `Location: ${location}`});

   
    // //length of trail
    // var length = trails[0].length;
    // var element3 = $('<p>', {text: `Length: ${length} miles`});

    // //difficulty
    // var difficulty =  trails[0].difficulty;
    // var element4 = $('<p>', {text: `Difficulty: ${difficulty}`})
    
    // //stars
    // var stars = trails[0].stars;
    // var element5 = $('<p>', {text: `Rating: ${stars} stars`})

    //output to app
    // $(document.body).append(element);
    // $(document.body).append(element2);
    // $(document.body).append(element3); 
    // $(document.body).append(element4);
    // $(document.body).append(element5);

});

$(document.body).append(container);
});



}

trailInfo();

//iterate through array to print each array to page 

//group each array item together 

//do i need to change <p> tag to list item?

//forEach trail, pull out ul and then for each ul add items into sections(trail cards)2
