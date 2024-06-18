<div align="center" style="margin-top: 20px">
  <p>
    <img src="assets/logo.svg" width="250" />
  </p>
</div>

<div align="center">

# Technical Test

</div>

## Overview

This is a take-home test for candidates applying for a full-stack developer
position at FantasyGo. It contains three sections: "Frontend", "Backend" and "Follow-up" which
together include a series of tests involving TypeScript, ReactJS, NodeJS, GraphQL, HTML and CSS.

**The goal is to test your skills in ReactJS, NodeJS and TypeScript.**

Feel free to solve these questions however you see fit, using whatever coding
style or third-party libraries you think are appropriate. The requirements are intentionally quite open-ended to allow you to showcase your skills.

## Backend

For the backend portion of the test, use the `/backend` folder.

#### Requirements

- You must utilize the following technologies:
  - Typescript
  - GraphQL
  - Node.js
- Ensure the server is listening on port `4000`

#### We'd like you to create an API with the following features:

- Create a public resolver that will return a JWT token for a given mobile number and password:
  - There should be some validation on the mobile number, e.g. should be 10 numeric characters and should start with a zero
  - The password should be at least 6 characters long and have at least one uppercase letter
  - The token expiry date should be 1 hour
  - Note: _you do not need to utilize any form of database_. If the valdiation rules pass, a token can be generated and returned
- Create an authenticated resolver that returns a list of football players for a given league:

  - Authentication should be handled via an `Authorization` header using the token returned from the previous resolver
  - The supported leagues are the English Premier League and the Champions League
  - Fantasy Premier League data can be fetched from the following URL:
    ```sh
    https://fantasy.premierleague.com/api/bootstrap-static/
    ```
  - Champions League data can be fetched from the following URL:
    ```sh
    https://gaming.uefa.com/en/uclfantasy/services/feeds/players/players_60_en_7.json
    ```
  - The response should only include the following fields; `firstName`, `secondName`, `displayName`, `totalPoints`, `team` (the full team name) and 2 statistics of your choosing

- Write some unit tests for both resolvers. Make sure to specify how to run the tests in a README.

Feel free to structure the code however you prefer and use third-party libraries at your discretion.

## Frontend

For the frontend portion of the test, use the `/frontend` folder.

#### Requirements

- You must utilize the following technologies:
  - React.js
  - TailwindCSS
- Ensure the app is served on port `3000`

#### There are a 2 screens we'd like you to add:

#### Login screen

1. Create a screen that will allow users to login using the API you created, served on port `4000`.
2. The token response should be stored for the duration of the session.
3. An invalid or expired token should not allow you to access the player display screen.

#### Player display screen

1. Fetch and display the football players from the resolver you created, served on port `4000`.
2. Add responsive functionality for the layout, which will display one column on mobile
   devices, two columns on tablet devices, and four columns on desktops.
3. Add a dropdown to select the league, either English Premier League or Champions League
4. Add a button to sort the players by total points from highest to lowest.
5. Add a dropdown to filter the players by team.
   - We expect that filters from points 3. and 4. can be combined together.
6. Add a button to apply a random shuffle to the list of players when it is clicked. It should re-shuffle every click.

Feel free to structure the code however you prefer and use third-party libraries at your discretion.

We will test your design skills here, so think about layout and styling. Think about optimizing rendering too.

## Follow-up

Answer the questions in the [FOLLOW_UP.md](./FOLLOW_UP.md) file.

## Submitting Your Code

Once you've completed the test, please compress your files (via zip) and
return them as a link or email attachment in reply to your test invite.

**Do not include node_modules or .git in your submission**

Once we receive it, a member of our team will review and we'll get back to you
as soon as possible.

Good luck!
