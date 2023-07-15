<div align="center">
  <img src="https://raw.githubusercontent.com/aNdr3W03/My-Hungry/main/src/public/icons/icon-512x512.png" alt="My Hungry" title="My Hungry" height="150">
  
  <h1>My Hungry</h1>

  <img src="https://img.shields.io/github/stars/aNdr3W03/My-Hungry?style=social">&nbsp;&nbsp;&nbsp;
  <img src="https://img.shields.io/github/watchers/aNdr3W03/My-Hungry?style=social">&nbsp;&nbsp;&nbsp;
  <img src="https://img.shields.io/github/forks/aNdr3W03/My-Hungry?style=social">&nbsp;&nbsp;&nbsp;
  <a href="https://myhungry.netlify.app" title="My Hungry" target="_blank" rel="noopener">
    <img src="https://api.netlify.com/api/v1/badges/56f4a77b-ebec-4750-b27b-567afc40250c/deploy-status">
  </a>
</div>

## About My Hungry

My Hungry is a Web-based application with Progressive Web App technology that provides information about restaurants. This application can help you find restaurant locations, types of restaurants, food and beverages offered, user ratings, and also can even provide restaurant reviews.

## Preview

https://github.com/aNdr3W03/My-Hungry/assets/64983961/2865a26e-4aee-4565-a32f-28d760c26f26

## Features

- Responsive web view on desktop or mobile device
- Add or install to your desktop or home screen
- Single-page application
- Can be accessed offline (cached)
- Add restaurant to Favorites
- Delete restaurant from Favorites
- Give a review of the restaurant

## Build With

<a href="https://www.w3schools.com/html" title="Hypertext Markup Language" target="_blank" rel="noopener"><img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/CSS" title="Cascading Style Sheet" target="_blank" rel="noopener"><img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"></a>
<a href="https://www.javascript.com" title="JavaScript ES6" target="_blank" rel="noopener"><img src="https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black"></a>
<a href="https://eslint.org" title="ESLint" target="_blank" rel="noopener"><img src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white"></a>

<a href="https://webpack.js.org" title="Webpack" target="_blank" rel="noopener"><img src="https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black"></a>
<a href="https://developers.google.com/web/progressive-web-apps" title="Progressive Web App" target="_blank" rel="noopener"><img src="https://img.shields.io/badge/pwa-5A06C9.svg?style=for-the-badge"></a>
<a href="https://web.dev/indexeddb" title="IndexedDB" target="_blank" rel="noopener"><img src="https://img.shields.io/badge/indexeddb-%23E34F26.svg?style=for-the-badge"></a>

<a href="https://karma-runner.github.io/latest/index.html" title="KarmaJS" target="_blank" rel="noopener"><img src="https://img.shields.io/badge/karmajs-43C1B1.svg?style=for-the-badge"></a>
<a href="https://codecept.io" title="CodeceptJS" target="_blank" rel="noopener"><img src="https://img.shields.io/badge/codeceptjs-FFE680.svg?style=for-the-badge"></a>

## Data Resource

Restaurant data is taken from the API source provided by [Dicoding](https://www.dicoding.com "Dicoding Indonesia"). The API link and its documentation can be seen at the following link, [restaurant-api.dicoding.dev](https://restaurant-api.dicoding.dev "Restaurant API Documentation").

## Installation

The steps to install this project on your local machine are as follows:

1. Clone this Repository
   ```bash
   git clone https://github.com/aNdr3W03/My-Hungry.git
   ```

2. Install all the Packages needed for this Project
   ```bash
   npm install
   ```

3. Run the App
   > If you just want to run on the localhost, use this one
   ```bash
   npm run start-dev
   ```

   or

   > If you want to build it, use this one
   ```bash
   npm run build-img-serve
   ```

5. Stop the application program by `ctrl + c`.

## Testing and Checking

1. [ESLint](https://eslint.org "ESLint") Script Linting
   ```bash
   npm run lint
   ```

2. Integration Testing using [KarmaJS](https://karma-runner.github.io/latest/index.html "KarmaJS")
   ```bash
   npm run test
   ```

3. End-to-End Testing using [CodeceptJS](https://codecept.io "CodeceptJS")
   ```bash
   npm run e2e
   ```

## Test Case for Restaurant Like and Unlike Scenario

You can check the Test Cases that were run for automation testing on this project via the following link,

[`README.md`](https://github.com/aNdr3W03/My-Hungry/blob/main/specs/README.md "README.md")

Also available in Indonesian!  
*Juga tersedia dalam bahasa indonesia loh!*

[`README.id.md`](https://github.com/aNdr3W03/My-Hungry/blob/main/specs/README.id.md "README.id.md")
