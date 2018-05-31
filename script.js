// HIKING Project API

function trailInfo(event){



var URL = 'https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200279512-8622afc34220d6d5684c57d9ed7c0eb5'


$.get(URL)

.then(function(response){
    console.log(response);
    var trails = response.trails;

    //name of trail
    var name = trails[0].name;
    var element = $('<p>', {text: `Trail Name: ${name}`});

    //location
    var location = trails[0].location;
    var element2 = $('<p>', {text: `Location: ${location}`});

   
    //length of trail
    var length = trails[0].length;
    var element3 = $('<p>', {text: `Length: ${length} miles`});

    //difficulty
    var difficulty =  trails[0].difficulty;
    var element4 = $('<p>', {text: `Difficulty: ${difficulty}`})
    
    //stars


    //output to app
    $(document.body).append(element);
    $(document.body).append(element2);
    $(document.body).append(element3); 
    $(document.body).append(element4);


});



}

trailInfo();







//stars