const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Scissor API Documentation',
      version: '1.0.0',
      description:'This is a REST API application made with express.',
      license:{
        name:"Juliana Micheal",
        url:"https://github.com/JulianaMicheal/JulianaMicheal"
    },
    contact:{
        name: 'url-shortener',
        url: 'https://url-shortener-st5z.onrender.com',
    },
    },
    servers: [
        {
          url: 'https://url-shortener-st5z.onrender.com',
          description: 'url-shortener',
        },
      ],
  },
  apis: ['./routes/*.js'], // Replace with the path to your API route files
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;