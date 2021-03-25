# React Star Wars Assignment

A React application that lists characters from the Star Wars series, using their publicly-available API.

## To Run

In the project directory, must run

### `npm install`
### `npm start`

The app runs in development mdode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Features

### List Page
* Display a list of characters
* Each item in the list should display the character's name, birth year, height, and mass
* The list should use pagination with next/prev buttons
* Each item in the list should be clickable (use React router) and bring you to the Character Page

### Character Page
* Design and show all the properties of the character
* Add a back button that brings you back to the List Page

### Bonus Features
* Commits with accurate messages attached
* Loading state indicator when the data is loading on both Characters and Character pages

## My Approach
I have used React Hooks for the features as required. I started with the Characters page and running a fetch command to retrieve a list of all characters. I noticed that the API would only return the first 10 characters, and that the information itself was paginated. I set up the MainRouter to route the pages I needed (mainly Home, Characters and Character).

I continued to design with some simple CSS and BootStrap to make the app look a little nicer.

I continued to the Character Page by creating a function that retrieves the information based on the link, and used Link for each character based on the key (since it was through a map), but + 1 since key started at 0 and there is no /character/0 in the API. I styled this page accordingly and showed all the properties of the character.

I then continued to attempt the Pagination component with several approaches, such as setting the state, changing page variables, but I did not succeed. I know that the page number is currently increasing and decreasing as needed, but this does not make the useEffect() that I used reload the page, thus it does not load the requested page from the Next and Previous buttons.

###  In a perfect world...
If I spent more time on this assignment, I know that I would have been able to get the Pagination component complete. I would also spend some more time refactoring some code just so it would be more comprehensive and less redundant. I would also use some sort of local storage, as making multiple API calls every time may be redundant as well.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

To view the Star Wars API, you can [go here](https://swapi.dev/).
