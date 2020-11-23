# Team-01: Sunday Friends Foundation

## Non-Profit Organisation
- [About Sunday Friends Foundation](https://www.sundayfriends.org)
- [NPO Slack Channel](https://opportunity-hack.slack.com/archives/C01CUAMHHKM)
- NPO Contact Person: [James McCaskill](james@sundayfriends.org)

## Problem Statement
To develop a new system for Sunday Friends Foundation Learn & Earn ticket

## Inspiration
Sunday Friends Foundation empowers very low income families to break the generational cycle of poverty by fostering positive development in children and equipping parents to invest in their children's life success. With our unique Learn & Earn program, participants earn credits by participating in education programs, and then redeem those credits for basic necessities and other household items.

The challenges that Sunday Friends Foundation face includes the manual process of entering client information, difficult of searching a client in the admin interface, Clients not having social sign-on or access to view their transaction history and basic profile information, Clients shopping using google spreadsheets and forms.

## What it does
Our solution for Sunday Friends Foundation Portal will enable the following.

- Social Sign-On for the Clients
- Have a Role Based Interface: Admin and Client Users
- Allows the Clients to update their profile information
- Allows the Clients to see their transaction history, current token balance
- Enable the Shopping experience in the web application

## How we built it

- Backend: Java, SpringBoot, OAuth, MySQL, PostgreSQL
- Frontend: React, JavaScript, HTML5, CSS3
- Deployment: TODO

## Challenges we ran into

- One of the major challenges we ran into, was the lack of time, as most of the team members were available only on the weekends to work on the project,since all of us were working professionals.
- Currently we were not able to integrate the UI to the backend for the Client Side as we were facing some issues in the social sign-on redirection after authenticating from the backend and back to the UI. So this is currently a work in progress.

## Accomplishments that we're proud of
- We had discussed with the NPO Contact Person: James, the problems they were facing with the current application, and realised a lot of improvements can be done on the admin dashboard portal, include the shopping interface in the application instead of google forms
- We successfully integrated the Admin Dashboard Portal from the UI to the Backend, as all the users doing the social sign-on were displayed successfully on the screen. Some of the issues like CORS, CSRF was handled.
- We tried to make the app secure by using JWT Based Authentication tokens, which validates the user logging into the portal, making it safe and secure.

## What we learned
- We learned lot in the security from the backend part, also the backend developers learnt to develop the front-end part.
- We understood what improvements the application will be needing in future.

## What's next for Sunday Friends Foundation Portal
- Integrate the UI for the Clients
- Add features in the UI for the Clients to shop from the application
- Integrate Admin Features like controlling the stock availability of items in the shopping platform, enable token transfers in a secure way to the clients

## Contributers
- [Beni Kayal](https://devpost.com/code-bmk)
- [Sakshi Anand](https://devpost.com/sakshianand)
- [Sidharth Jamuar](https://devpost.com/rahuljamuar21)
- [Prashant Piyush](https://devpost.com/piyush-prashant09)
- [Sourav Sarkar](https://devpost.com/amsourav)

## Contact
- [Team Slack Channel](https://opportunity-hack.slack.com/archives/C01ES7CUU6P)
