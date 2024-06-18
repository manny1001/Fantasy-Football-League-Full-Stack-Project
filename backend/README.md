<div align="center" style="margin-top: 20px">
  <p>
    <img src="assets/logo.svg" width="250" />
  </p>
</div>

<div align="center">

# Technical Test

</div>

## Overview

This is a takehome test for candidates applying for a full-stack developer
position at FantasyGo. It contains three sections: "Frontend", "Backend" and "Follow-up" which
together include a series of tests involving Javascript, Vue.js, Node.js, GraphQL, HTML and CSS.

**The goal is to test your skills in Vue.js, NodeJS and TypeScript.**

Feel free to solve these questions however you see fit, using whatever coding
style or third-party libraries you think are appropriate.

_NOTE: the frontend and backend sections of this test are **unrelated**, i.e. your frontend solution **should not** consume your backend API solution._

To start the test, simply clone this repo and make your edits locally.

## Frontend

For the frontend portion of the test, use the `/frontend` folder.

#### Requirements

- You must utilize the following technologies:
  - Vue.js or React.js
  - TailwindCSS
- Ensure the app is served on port `3000`

#### There are a few features we'd like you to add:

1. Fetch and display the fantasy Premier League football players from the following URL:

   ```sh
   https://fantasy.premierleague.com/api/bootstrap-static/
   ```

   - Use the `elements` field from the output
   - Display the `first_name`, `second_name`, `web_name`, `total_points`, `team` (the team name) and 2 statistics of your choosing

   _NOTE: You will run into a CORS issue when trying to access this URL from your app. We would like to see how you hanlde this. If you are unable to figure it out, thats okay - You may also use a browser plugin to bypass the restriction._

2. Add responsive functionality for the layout, which will display one column on mobile
   devices, two columns on tablet devices, and four columns on desktops.
3. Add a button to sort the players by total points from highest to lowest
4. Add a dropdown to filter the players by team
   1. We expect that filters from points 3. and 4. can be combined together.
5. Add a button to apply a random shuffle to the list of players when it is clicked. It should re-shuffle every click.

Feel free to structure the code however you prefer and use third-party libraries at your discretion.

We will test your design skills here too, so think about layout and styling.

## Backend

For the backend portion of the test, use the `/backend` folder.

#### Requirements

- You must utilize the following technologies:
  - Typescript
  - GraphQL
  - Node.js
- Ensure the server is listening on port `4000`

#### We'd like you to write some code that achieves the following:

1. Create an API with a single resolver that will return South African University data.
2. The data returned should be able to be filtered on `name` and/or `state_province`
   1. Both of these filters should be optional
3. Only the following fields should be included in the response: `name`, `state_province` and `web_pages`
4. Include unit tests for the functionality in your resolver using a testing framework of your choice. Make sure to specify how to run the test in a README.

The data can be retrieved from the following URL:

```
http://universities.hipolabs.com/search?country=South+Africa
```

Feel free to structure the code however you prefer and use third-party libraries at your discretion.

### API Information & Documentation

- **[University Domains and Names Data List & API](https://github.com/Hipo/university-domains-list)**

_Note that the API above is public and doesn't require any authentication._

## Follow-up

Answer the questions in the [FOLLOW_UP.md](./FOLLOW_UP.md) file.

## Submitting Your Code

Once you've completed the test, please compress your files (via zip) and
return them as a link or email attachment in reply to your test invite. We'd like the
code in your submission to remain private, so please avoid committing or pushing
the code publicly.

**Do not include node_modules or .git in your submission**

Once we receive it, a member of our team will review and we'll get back to you
as soon as possible.

Thanks!
