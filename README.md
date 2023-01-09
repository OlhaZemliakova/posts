# test-task-from-ukrghmi

Create a SPA in Vue 3. The application shows a list of posts from API. Added the ability to filter posts by title.

The application uses a library Chart.js. I created a graph that shows the number of characters in the post commenters' mail.

Added a map page using the Leaflet.js library. When the user clicks on the map, a marker is created and a modal window opens, which has 3 fields: title of the marker, latitude and longitude. Latitude and longitude are filled automatically from the place where the user clicked. The user enters the title of the marker himself.
Added the ability to create a new marker on the map with the entered data. The name of the marker is displayed when you move the mouse over the marker. Markers are stored in localstorage.

Added navigation between the main page and the map page.

Using the Pinia store.

Deployed at [vercel]()