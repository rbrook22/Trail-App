 
//  Trail Offers Page

$(document).ready(function (){
   var trailArr = JSON.parse(localStorage.getItem(`returnedTrails`));
   console.log (trailArr);


   display(trailArr);

//    localStorage.removeItem(`returnedTrails`);

});


    



 
function display(trails){
    //create a `div` container
        var container = $(`<div>`, {class: `container`});

        trails.forEach(function(trail){
        var trailCardDiv = $(`<div>`);
        

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
        
        //pull out image
         var img = $(`<img>`);  
         img.attr('src', trail.imgMedium);
         //add default img
         if (trail.imgMedium === ""){
             img.attr('src', 'imgs/hiking.png');
         }
         trailCardDiv.append(img);       
        //appends li to ul
     
        trailCard.append(nameItem);
        trailCard.append(locationItem);
        trailCard.append(lengthItem);
        trailCard.append(difficultyItem);
        trailCard.append(starsItem);

    });
        


    //append container to body of HTML
    $(document.body).append(container);

};

 
 
 
function difficultyRating(x){
    if(x === "green"){
        x = "Easy";
    }
    else if(x === "blue"){
        x = "Intermediate";
    }
    else if(x === "black"){
        x = "Difficult";
    }
}