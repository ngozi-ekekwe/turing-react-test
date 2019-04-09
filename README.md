## SHOPMATE
front-end of an e-commerce system which allows users to search, add items to their shopping cart, create orders, and checkout successfully.

## Create evv
- `ROOT_ENDPOINT=https://backendapi.turing.com=`
- `IMAGE_DIRECTORY=`

## Setup Locally
- `clone repo`
- `npm install` or `yarn install` - Install all the dependencies
- `yarn build` - Run Next.js Build
- `yarn dev` or `npm dev` 
- `yarn test` to run test
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.




## Folder Structure
All the components  are located in `src/Components`. Each component is placed in its own folder (e.g `Home` folder for `Home` component). All Routes are located in `src/pages`. helper utility methods in `src/helpers`.
<br>

All API endpoints are located in `src/services` <br>

Each file exports ONLY ONE component. <br>
CamelCase is the primary naming convention for methods while underscores are used for data (variables) retrieved from the server.  

## Learn More (Packages)

### NEXT.JS
Web Framework

### Bootstrap & SCSS
Used for presentation of the frontend

### REDUX $ REDUX SAGA
Used for state management

### HELMET
Helmet helps you secure your Express.js apps by setting various HTTP headers. It's not a silver bullet, but it can help!

### SUPERAGENT
Handeling Requests

### React Stripe Checkout
[See here](https://www.npmjs.com/package/react-stripe-checkout) for more information. <br>
This package provides a "Checkout" implementation of stripe. Another options for stripe implementation was stripe elements. The package requires just a public key (PK), and a callback function that accepts the token generated by the card.
### Card Details for Payment
Card No: 4242424242424242<br>
CVV: 123<br>
Date: 12/23 <br>

### Moment
[See here](https://momentjs.com/) for more information. <br>
This package is used to convert UNIX timestamps returned by the server to relative time (** mins ago).It is also used to format UNIX times to specific formats (DD/MM/YYYY etc)

### React Router Dom
[See here](https://www.npmjs.com/package/react-router-dom) for more information.<br>
Used primarily for app navigation. <br>


## Learn More (APIs)

### Turing APIs
[See here](https://backendapi.turing.com/docs/#/) for all API endpoints.

### Local Storage (Offline first approach)
Local storage was used to store persistent data throughout the life cycle of the application. Design choices were made in favor of local storage over accessing the endpoints when possible. <br><br>
