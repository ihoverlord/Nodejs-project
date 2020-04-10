module.exports = (app) => {
    app.use((req, res, next) => {
        var err = new Error('Not Found');
        err.status = 404;
        if(process.env.MODE !== 'prod') next(err);
        else next(new Error('Something went wrong. We are working on it. Try again.'))
      });
}
