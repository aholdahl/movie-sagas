# Getting Started

Fork and clone the repository
npm install
Create a database "saga_movies_weekend"
Create tables "movies", "genres", and "movies_genres" using the queries provided in database.sql
    Sample data has also been provided


# Using the App
npm run server
npm run client
The app will load on the Home screen `('/')`, which will display all movies in the database.
Click on a movie poster to open the Details page.
On the Details page, the categories, if any, will also be displayed.
Click Edit to update the title or description.
On the Edit page, the title and description will now be in an editable field.
Once all desired changes have been made, click Save Changes to send the updated information to the database.
    Save Changes and Cancel will both navigate back to the Details page.
From the Details page, the user can also return to the Home page if desired.


## Video Wireframe

[video ![Home Wireframe](/wireframes/home-wireframe.png)](https://vimeo.com/343530927)


### General Tasks

As one of your last projects, it's possible you will be sharing this with employers, so be sure to follow best practices and make it look good!

- [ ] Research grids for you movie posters on the Move List page
- [ ] Add route change animations
- [ ] Commit your code frequently! You should have at 15+ commits on a project of this size. Use branches to help break down your features.

## Stretch Goals

- [ ] Display all genres on movie list page. Research [array_agg](https://stackoverflow.com/questions/43458174/how-to-save-and-return-javascript-object-with-subarray-in-normalized-sql) to make this possible.
- [ ] Move sagas and reducers out of your `index.js` and into separate files (ideally in `src/redux/reducers` and `src/redux/sagas` folders).
- [ ] Allow the user to refresh the details or edit page. The url for the details page would be something like `/details/1` for movie with id of `1`. Research [react router params](https://reacttraining.com/react-router/web/example/url-params).
- [ ] Allow the user to add a genre to a movie.
- [ ] Allow the user to remove a genre from a movie.
- [ ] Only display the top 10 movies, and allow the user to search for movie titles with a search bar on the home page (you can do this on the client side or the server side, server side is a bigger stretch, but good practice).
- [ ] Create an `Admin` page. Add a link from the `Home` page to the `Admin` page. The page should initially display a login form (an input for username and an input for password). When the user enters the correct username (`camera`) and password (`action`), the page should display a form to add genres to the database, and a list of all of the genres with an `x` to remove them from the database. Note: This isn't actually secure, but it's pretty fun, and really good practice.
