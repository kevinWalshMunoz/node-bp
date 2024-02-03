import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  swaggerDefinition: {
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'Documentación de la API para tu aplicación Node.js',
    },
  },
  apis: ['*/*.ts']
};

export const specs = swaggerJsdoc(options);