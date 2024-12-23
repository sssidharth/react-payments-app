# React Payments App

 - Created using ReactJS (v_19) and Tailwind CSS (v_3.4)
 - Routing enabled for all pages
 - Features include Dashboard design, Settings Page, SideBar Nav, Topbar search
 - Responsive desgin to accomodate large, medium and small screens
 - Redux saga used for fetching data
 - json-server mocks the HTTP API calls with data being stored in db.json in root directory
 - All inputs, buttons created without external libraries
 - External libraries used
    - Fontawesome icons
    - axios
    - react charts, chart.js
    - redux saga
    - json-server to mock API calls

## Setup
 
 - install the dependencies using 'npm install --legacy-peer-deps' (Did this as we have react version 19 which is not yet supported by Chart.Js and Fontawesome. Will fix the version mismatch)
 - Open 2 terminals (1 if already using VS code) and navigate to the project directory
 - run "npm run mock-server" on one terminal. This will start up the mock server for HTTP endpoints
 - run "npm start" to start the react application

 ## Deployment

 - The app has been deployed on Vercel. It directly accesses the db.json file for fetching/updating the data as it is serverless. (Creating a json-server itself is a complicated task which works seamlessly in local)
 - Vercel Link https://react-payments-app.vercel.app/
