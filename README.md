<h1 align="center"><b>Re-Habits</b></h1>
<div align="center">Re-Habits is a React Habit Tracker app that lets you add and track your habits effectively and efficiently.</div>


---

## **Live App**
To view the website live in action visit

[Re-Habits](https://re-habits.netlify.app/)\

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)




https://user-images.githubusercontent.com/47236093/174555138-9efdec24-c0b5-42ca-9651-81b5e663b438.mp4




---

## **Functionality** 
* Authentication
  * Sign Up
  * Login
  * Logout
* Labels
  * Add Label
  * Delete Label
* Habits
  * Add Habit -> Name, Labels, Start Date & End Date
  * Edit Habit -> Name, Labels & End Date
  * Delete Habit
  * Restore Habit
  * Mark as done for today
  * Displays a Calendar with all the days that are marked as done with an icon.
* Sorting and Filtering
  * Sort Habits by their name, ascending or descending
  * Filter Habits by their Labels.
  * Sorting and filtering can be done together, example -> Filter by label and then sort by ascending.
* Stats
  * Completed -> Habits that are active for the day and marked as completed for the day.
  * Pending -> Habits that are active for the day but not marked as completed.
* Theme
  * Dark Mode and light mode can be toggled from the icon on the navbar
* 404
* Responsiveness
  * All pages/components are made responsive for mobile screens (Width < 480px)

---


## **Backend** 
Backend for this app is a NodeJS express backend serving APIs and is deployed on Cyclic.
The backend API is accessed through a proxy mentioned in package.json.
All authentication, CRUD operations are being done through the backend API.
* Github Repo : [Server](https://github.com/dhruvin25799/server-re-habits)
* Live API : [API](https://tasty-rose-tick.cyclic.app/)

---

## **How to run this app**
To run this app locally on your machine, clone the repo to your local machine.\
In the project directory, you can run\
`npm start`\
This will start the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.\
Make sure you have access to internet to make use of the API call inside the App.
TO also run the API locally, update proxy in package.json with you local API address.
Also checkout the docs for [Server](https://github.com/dhruvin25799/server-re-habits)) for more info on how to deploy API locally.
