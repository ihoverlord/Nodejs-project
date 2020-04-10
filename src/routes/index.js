const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../../docs/swagger.json');

module.exports = (app) => {
    //status api for live tracking app
    app.get('/status', (req, res) => { res.sendStatus(200) })
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    app.get('/', (req, res) => { res.send({error: false, message: 'Welcome to the project'})})
}