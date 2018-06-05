// HIKING Project API
// function trailInfo(location) {
//     //pull out lat and long into var
//     var latitude = location.lat;
//     var longitude = location.lng;
//     //pass into URL

//     var URL = `https://www.hikingproject.com/data/get-trails?lat=${latitude}&lon=${longitude}&maxDistance=10&key=200279512-8622afc34220d6d5684c57d9ed7c0eb5`

    // var URL1 = '';

    // $.get(URL)

        // .then(function(response) {

        //     var trails = response.trails;

            //create a `div` container
            // var container = $(`<div>`, {
            //     class: `container`
            // });

            // trails.forEach(function(trail) {
            //     //create an ul for each item on array
            //     var trailCard = $(`<ul>`);
            //     container.append(trailCard);
                //create list items for each UL
                // var nameLink = `<a href="https://www.hikingproject.com/widget?v=3&map=1&type=trail&id=${trail.id}&x=-11720595&y=4863264&z=6">Trail Name: ${trail.name}</a>`;
                // var nameItem = $(`<li>`);
                // nameItem.append(nameLink);
                // var locationItem = $(`<li>`, {
                //     text: `Location: ${trail.location}`
                // });
                // var lengthItem = $(`<li>`, {
                //     text: `Length: ${trail.length} miles`
                // });
                // var difficultyItem = $(`<li>`, {
                //     text: `Difficulty: ${trail.difficulty}`
                // });

                // write javascript to reproduce this

                var starItem = $(`<li>`, {
                    text: `${trail.stars}`,
                    class: `starItem`
                });

                starsDynamicDivs(trail.stars, starItem);

                var id = $(`<li>`, {
                    text: `id: ${trail.id}`
                });
                // URL1 =`https://www.hikingproject.com/widget?v=3&map=1&type=trail&id=${trail.id}&x=-11720595&y=4863264&z=6`;


                //appends li to ul
                trailCard.append(nameItem);
                trailCard.append(locationItem);
                trailCard.append(lengthItem);
                trailCard.append(difficultyItem);
                trailCard.append(starItem);

            });

            //append container to body of HTML
            $(document.body).append(container);

        });

}

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

// function geoLocationCode(event) {
//     event.preventDefault();
//     var location = document.getElementById('location-input').value; //gets the value from input field
//     $.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyD5XrrqpfdzbKeFRmqQ1CpQuc0VzHxXZsU`)
//         .then(function(response) {
//             console.log(response);
//             var results = response.results;
//             return results[0].geometry.location;
//         })
//         .then(trailInfo)

//         .catch(function(error) {
//             console.log(error);
//         })

}
var locationForm = document.getElementById('location-form');
locationForm.addEventListener("submit", geoLocationCode);

var parseQueryString = function(queryString) {
    if (!queryString) {
        return;
    }
    var params = {},
        queries, temp, l;
    // Split into key/value pairs
    queries = queryString.split("&");
    // Convert the array of strings into an object
    for (var i = 0, l = queries.length; i < l; i++) {
        temp = queries[i].split('=');
        params[temp[0]] = temp[1];
    }
    return params;
};

