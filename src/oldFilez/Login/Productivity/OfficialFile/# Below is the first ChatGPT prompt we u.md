# Below is the first ChatGPT prompt we used to create the app
    Using MangoDB, Express, React and Node write an application and then style it using chakra UI . The app is just a chrome homescreen containr organizer for smaller apps and widgets. Each section as wide and tall as the browser.. The grid part of the section should be 6 boxes wide and 4 boxes tall, divided into 3 columns, contained within a max width and height container. Using the chakra ui grid system, To start with, 5 chakra ui box components total should be placed into the container to begin with. To begin, I want you to create a small circular button in the top right corner of the screen with a cross in the middle. This button when clicked will add a new box to the grid system. Each box will be it's own object whcih holds it's own properties. i.e. One might have a grey  inner body with a black border, while another box might have an image of their family on it and a link to their favorite website. The most essential feature add, however, I already completd and got him with. The entire app should be reactive using chakra's grid system to help boxes adjust their size while ALWAYS maintaining their shape. Another add for BONUS POIINTS is a div which takes up the bottom third of every box item where tha name of the widget/box will be called. 

# Initial mearn file structure
    my-app
├── client
│   ├── public
│   └── src
│       ├── components
│       └── App.js
├── server
│   ├── models
│   ├── routes
│   └── server.js
├── package.json
└── README.md

# Install Dependencies

npm init
npm install express mongoose cors
npm install -g nodemon
cd client
npx create-react-app .
npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion

# Setting up the server

# Set up homescreenitem Model

# Set up hexpress route

# Added ignore 