# 500pxPopularPhotos
An application to display popular photos from 500px.com beautifully.

The tech stack includes the:

- The 500px Javascript SDK
- React.js
- React router (Although there's no additional routes).

#src
##index.js
Contains the initialization code for the application. Initiates with the 500px sdk_key and renders the app.

##styles.scss
Contains the styles for the web app.

##containers/app.js
This container acts as the application controller. It handles the overall state of the application and has many of the application controller functions, such as loading photos from the 500px API, updating the current gallery focus, the toggle for viewing photo information.

##containers/home.js
This container acts as the structural portion of the application. It houses the application components and has a function for triggering infinite scroll.

##components/ImageWithLoad.js
This component acts as a loading screen for the images. It's purpose is to replace the image with a loading indicator until the image has fully loaded.

To run this app:
- Fork this repository or download it.
- Replace the sdk_key from 500px.com in src/index.js with your own.
- run:

```javascript
npm install
npm start
```
To view the application in action visit: http://500px-pop.surge.sh
