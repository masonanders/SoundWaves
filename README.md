SoundWaves
---

[Live view!](https://soundwaves-soundcloud-clone.herokuapp.com/#/)

SoundWaves is a website for made for independent musicians as a place to share their work. It is a clone of SoundCloud that I completed in the timeframe of two week while attending the full-time 13 week bootcamp at App Academy.

It is built upon several technologies that I learned over the past 9 weeks, including React.js and Redux for the frontend and Rails/PostgreSQL for the backend.

This is a finished product though I plan on adding features and improvements over time.

---

Features
---
* Secure front and back end user authentication using BCrypt.
* With the help of Amazon Web Services and Active Storage, users have the ability to upload `.mp3s` from their own machines.
* Using Howler.js, tracks can play uninterrupted as you navigate the site.
* Login page features a sliding modal and the option to sign in as a ghost-typing demo_user.
* Users can easily comment on their favorite tracks.

#### Sliding Modal
Upon clicking on the log-in/create-account button, the page fades slightly as a small window smoothly slides down from the top of the screen with fields to type in a user's credentials.

<img src="http://media.giphy.com/media/idM8YHkDB2buwZz2kx/giphy.gif" height="500" />

This was accomplished by use of a `ui.sesion_modal` slice in the global Redux state. When the `openModal()` function was dispatched it would set the slice of state to `true` and cause the session component to re-render.

Using conditional logic within the modal component the boolean value of it's state would change it's CSS class name and as a result cause it to toggle on or off it's `visibility` and use `transition` the linearly change the `opacity` of the component as well as the horizontal `position` of the form.


#### Demo User ghost typing
If the user opts to log in with the demo account, at the push of a single button the modal opens and a username and password are typed into the input fields automatically.

<img src="http://media.giphy.com/media/g0mkkySaz5kXEmxFGW/giphy.gif" height="500" />

This was all done in vanilla JavaScript. Upon the click of the Demo Account button, a function is invoked that starts a series of `setTimeout()` functions.

<img src="https://i.imgur.com/x6XiQGh.png" height="500" />

The initial function houses a string which contains the username that will be going into the input value of the `username` slice of local state. The function splits the string into an array and then after a short delay (to account for the the sliding modal) passes it to a contained function which, after another short delay to simulate human typing speeds, `.shift()`s an element off it's given array and adds it to the value of it's given field. The function will continue the process by calling itself and passing on the `.shift()`ed array until the array is empty. It will then proceed on to the next series of events by invoking the function behind the 'Continue' button and providing a password by calling itself to repeat the process if no password has already been entered.

#### Uploading and playing tracks
Users can navigate the website freely without the concern of interrupting their listening experience.

<img src="http://media.giphy.com/media/9P597Z3uVd44KfbeYe/giphy.gif" height="500" />

A React component is rendered on the outer scope of the app as log as a user is currently logged in. This component locally holds an Howler.js object that contains the audio data needed for music to play.

There is a `player` slice of global Redux state that contains the `id` of the current song playing as well as a boolean value which represents whether or not the song should be playing or paused. Each play button on the site only changes this slice of state.

Each time the Player component renders it reads the global slice of state and it then calls the appropriate functions for playback based whether the `playing` boolean has changed.

It also stores current track on it's own local state. If it no longer matches the id of the current track in the Redux state it then fetches that track and makes a new Howler.js object from it while setting the new track to it's local state.

---

Thoughts on my experience
---
As my first large-scale project, this has been an incredible learning experience. Each day I could recognize improvements in my own skills and felt excited to push forward and tackle tasks I once thought daunting.

After the two weeks of intense work I feel satisfied with my product but plan to continue working to make improvements to it during my free time.

#### Future features may include:
* Search for tracks by keyword.
* The ability to upload user icons and track artwork.
* The ability to 'favorite' tracks and view tracks by favorite
* Track and display the amount of plays each track has

---

#### Accreditations 

User_1 by Bogomil Mihaylov
User_2 by Kelly Sikkema
User_3 by ian dooley
User_4 by chuttersnap
User_5 by Kwinten De Pauw
User_6 by John Fornander
User_7 by Clark Young
User_8 by Alphacolor 13
User_9 by Flavio Gasperini
User_10 by Jamille Queiroz

Track_1 by Edward Cisneros
Track_2 by Valentino Funghi
Track_3 by Gabriel Barletta
Track_4 by Mark Solarski
Track_5 by Michael Weibel
Track_6 by Alphacolor 13
Track_7 by Benjamin Patin
Track_8 by Mitch Lensink
Track_9 by Nahir Giorgio
Track_10 by Austin Neill
Track_11 by Michael Aleo
Track_12 by Adi Goldstein
Track_13 by Joseph Pearson
Track_14 by William Fleury
Track_15 by Matthew Kalapuch
Track_16 by Akshay Chauhan
Track_17 by Robson Hatsukami Morgan
Track_18 by Lorenzo Spoleti
Track_19 by Darius Soodmand
Track_20 by Ricardo Abreu
Track_21 by Adi Goldstein
Track_22 by Wesley Tingey
Track_23 by The Nigmatic
Track_24 by Kyle Arcilla
Track_25 by rawpixel