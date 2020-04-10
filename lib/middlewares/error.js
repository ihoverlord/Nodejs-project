module.exports = (app) => {
    app.use((err, req, res) => {
        res.status(err.status || 500);
        res.json({'errors': {
          message: err.message,
          error: err
        }});
      });
}