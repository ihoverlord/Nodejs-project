const config = require('../config')
const logger = require('../lib/winston')
module.exports = {
  start: (app) => {    
    app.listen(config.PORT, '0.0.0.0',err => {
      if (err) {
        logger.error(err);
        return;
      }
      logger.info(`  [server] Your server is ready. Listening on port : ${config.PORT}`)
      logger.info(`  [status] For server status visit 'http://localhost:${config.PORT}/status'`)
    });
  }
}