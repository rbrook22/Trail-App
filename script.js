// HIKING Project API

function trailInfo(event){



var URL = 'https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200279512-8622afc34220d6d5684c57d9ed7c0eb5'


$.get(URL)

.then(function(response){
    console.log(response);
    var trails = response.trails;

    //name of trail
    var name = trails[0].name;
    var element = $('<p>', {text : `trail name: ${name}`});


    //output to app
    $(document.body).append(element);


});



}

trailInfo();

//length of trail

//difficulty

//stars