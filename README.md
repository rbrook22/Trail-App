## R.A.D. Hiking

## <a href="http://resonant-planes.surge.sh/index.html"> Live Demo <a>

## Team Members
* <a href="#"> Aylin DeBruyne </a>
* <a href="#"> Delia Sanders </a>
* <a href="#"> Rick Brooks </a>

## Technologies Used
* HTML 5
* CSS 3
* JavaScript
* jQuery
* Google Maps Geocoding API
* The Hiking Project API
* Open Weather Map API

## Team Strategy
<p>
Before project week officially kicked off, we already had an idea in mind and a team formed. We wanted to build a web app that seemed feasible within the scope of time we had to complete it. We got together the day before official kick off and took the time to storyboard a few options for how we wanted the user interface to go. We then took these stories to build the structure of the site and its pages. The initial plan was to mob code the JavaScript, and then we would separate out the work from there. However, for time’s sake we divvied up the tasks between api’s and styling. This helped shorten our timeframe for completion and allowed time for validation error handling and other goals we had.

After reviewing the requirements of our projects and coming up with an idea,  our next steps were to come up with a plan. We spent our first day laying out our ideas across a whiteboard. We sketched out wireframes and discussed the problems we were looking to solve. Some of these included getting input( a location) from the user, talking to 2 API’s to get data and presenting the user with hiking trail options nearby. We decided to limit these trail options to include a trail name, a location, a length, a difficulty rating, and an overall rating represented by stars. We also wanted this app to be web responsive, so we styled based on the ‘mobile first’ design.

Once we got the basic layout and functionality down, we decided to add a few more features. We included an image carousel on the “About” page, as well as some design features that linked up our Github and LinkedIn profiles.  We also included a trail map widget for each trail, which would load if a trail name was clicked on. We were able to add an additional API that returned information about weather conditions, as well as sunrise and sunset times for users.

We worked together diligently, asking each other questions, collaborating on ideas and constantly teaching each other new techniques we had implemented. We helped each other navigate Git and merge files on Github.

Once we had merged and solved any conflicts in our code, we had just about run out of time to add any new features. We discussed what we would like to add in the future, some of the lessons we had learned from our first group project, and put together a powerpoint presentation.
</p>

## Site Walkthrough
### Home Page

<img src="readme/home-page.png>

### Trail Offers List

<img src="readme/trail-offers.png>

### About Page

<img src="readme/about-page.png>

<img src="readme/about-page2.png>

## Challenges
<p>
The rating, displayed as stars, involved the use of Font Awesome, and it was created dynamically in JavaScript.

<p data-height="265" data-theme-id="0" data-slug-hash="mKEgbJ" data-default-tab="js" data-user="rbrook22" data-embed-version="2" data-pen-title="mKEgbJ" class="codepen">See the Pen <a href="https://codepen.io/rbrook22/pen/mKEgbJ/">mKEgbJ</a> by Rick Brooks (<a href="https://codepen.io/rbrook22">@rbrook22</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

The challenge with the dynamic creation of the rating occurred when the rendering of the decimal part wasn't filling the inside of the star properly because the image from Font Awesome was an SVG icon. In order to remedy this shortcoming, but still display the correct value, we decided to use the transform property. This resulted in the fifth star image to be depicted smaller than the other stars as its size was affected proportionally by the decimal value transformed into a percentage.

Another challenge was the rendering of the map so it displays the trail being selected. Our initial plan was to create the map using the Google Maps API, and drop a pin to the start point and further build the trail using polylines.
But, as a limitation of the hiking API, we weren't able both to retrieve information about the longitude and latitude of the end point of the trail and any intermediary coordinates in order to create a trail. We settled on using a widget and customize the URL for each trail. The dynamic custom URL takes the trail id, and  when the link with the name of the chosen trail is clicked, it will redirect the user to the corresponding map of the trail.
</p>

## Phase 2 Features

Phase 2 feature:
* Users could filter by feature(length, difficulty, etc.)
* Provide more than 10 trail options
* Add features like “good-for-families”, “pet-friendly”, “good for bird-watching”.
* Display a map that shows where all the trailheads listed are located in the area
* Users could save their favorite trails
